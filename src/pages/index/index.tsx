import {
  View,
  Button,
  Text,
  Switch,
  Textarea,
  Input,Canvas
} from "@tarojs/components";
import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import api from "api";

// import { add, minus, asyncAdd } from "../../actions/counter";

import "./index.less";


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
    ctx.moveTo(0,0);
    ctx.quadraticCurveTo(187.5,125,375,0);
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
        <Canvas style='width: 750px; height: 250px;' canvasId='topBack' />
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
