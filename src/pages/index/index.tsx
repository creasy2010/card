import {
  View,
  Button,
  Image,
    Text,
  Switch,
  Textarea,
  Input,Canvas,Swiper, SwiperItem
} from "@tarojs/components";

import { ComponentClass } from "react";
import Taro, { Component, Config, } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import api from "api";

import "./index.less";


import example from '@/assets/image/goods.png';
import CardLabel from "@/common/card-label";

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {
  [key: string]: any;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}


var rpx=2;
//获取屏幕宽度，获取自适应单位
//@ts-ignore
wx.getSystemInfo({
  success: function(res) {
    console.log(res);
    rpx = res.windowWidth/375;
  },
})

class Index extends Component<PageOwnProps, PageState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "1111"
  };

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidMount(){
    //@ts-ignore
    var ctx = wx.createCanvasContext('topBack');

    // 二次贝塞尔曲线
    ctx.lineWidth=4.5;
    ctx.strokeStyle='#0272FC';
    ctx.fillStyle ="#0272FC";
    ctx.beginPath();
    ctx.rect(0, 0, 375*rpx, 24*rpx);
    ctx.moveTo(0,24*rpx);
    ctx.quadraticCurveTo(187.5*rpx,(125+24)*rpx,375*rpx,24*rpx);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
    ctx.draw();
  }

  componentDidShow() {
  }

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className={"header"}>
          <Canvas
            className={'topBack'}
            canvasId='topBack' />
        </View>
        <View className="vbox-hcenter box-center">
          <View className={"swiperG"}>
            <Swiper
              className='swiper'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay>
              <SwiperItem>
                <View className='item vbox-hcenter'>
                  <Image src={example}></Image>
                  <CardLabel >个人形象微名片</CardLabel>
                  <Text>一张好的微名片，做超级IP</Text>
                </View>
              </SwiperItem>
              <SwiperItem>
                <View className='item'>2</View>
              </SwiperItem>
              <SwiperItem>
                <View className='item'>3</View>
              </SwiperItem>
            </Swiper>
          </View>

          <View className="createBtn hbox-vcenter">创建名片</View>
        </View>
      </View>
    );
  }

  // _getCode = (): Promise<string> => {
  //   var _this = this;
  //   return new Promise((resolve, reject) => {
  //     //@ts-ignore
  //     wx.login({
  //       async success(res) {
  //         if (res.code) {
  //           _this.setState({
  //             code: res.code
  //           });
  //           resolve(res.code);
  //         } else {
  //           reject(res.errMsg);
  //           console.log("登录失败！" + res.errMsg);
  //         }
  //       }
  //     });
  //   });
  // };
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>;

export interface UserInfo {
  nickName: string;
  gender: number;
  language?: string;
  city: string;
  province: string;
  country: string;
  avatarUrl: string;
}

interface IDetail {
  errMsg?: string;
  rawData: string;
  signature: string;
  encryptedData: string;
  iv: string;
  userInfo: UserInfo;
}
