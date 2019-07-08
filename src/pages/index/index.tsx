import {
  View,
  Button,
  Text,
  Switch,
  Textarea,
  Input
} from "@tarojs/components";
import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import api from "api";

import { add, minus, asyncAdd } from "../../actions/counter";

import "./index.less";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

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

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component<PageOwnProps, PageState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    var _this = this;
    //@ts-ignore
    wx.login({
      async success(res) {
        // debugger;
        if (res.code) {
          _this.setState({
            code: res.code
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  }

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button
          className="add_btn"
          openType="getUserInfo"
          onGetUserInfo={async (e: {
            detail: IDetail;
            [name: string]: any;
          }) => {
            let result = await api.authorizeController.authorize({
              code: this.state.code,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv
            });
            //用户如果已经注册了, 直接拿到登录信息, 否则要用手机号注册登录
            if (!result.loginFlag) {
              console.warn("请授权手机号注册并登录");
            } else {
              Taro.setStorageSync("pet:authInfo:token", result.token);
            }
            console.log(e);
          }}
        >
          授权登录
        </Button>

        <View>
          <Button
            className="add_btn"
            openType="getPhoneNumber"
            onGetPhoneNumber={async (e: {
              detail: {
                encryptedData: string;
                errMsg?: string;
                iv: string;
              };
            }) => {
              let { iv, encryptedData } = e.detail;
              let code = await this._getCode();
              await api.authorizeController.authorizePhoneLogin({
                iv,
                encryptedData,
                code
              });
            }}
          >
            手机号
          </Button>

          <Button
            onClick={async () => {
              let result = await api.storeCustomerController.entry(
                "S123457615"
              );
              let {
                store,
                storeCustomerRela
              } = await api.couponInfoController.getCouponStarted({
                pageNum: 0,
                pageSize: 10
              });

              Taro.setStorageSync("pet:storeInfo", store);
              //  debugger;
            }}
          >
            进入店铺,获取数据
          </Button>
        </View>
      </View>
    );
  }

  _getCode = (): Promise<string> => {
    var _this = this;
    return new Promise((resolve, reject) => {
      //@ts-ignore
      wx.login({
        async success(res) {
          if (res.code) {
            _this.setState({
              code: res.code
            });
            resolve(res.code);
          } else {
            reject(res.errMsg);
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    });
  };
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
