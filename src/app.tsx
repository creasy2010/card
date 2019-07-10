import "@tarojs/async-await";
import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import store from "./redux/store";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/index/index",
      'pages/create/index'
    ],
    window: {
      // backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#0272FC",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "white",
      backgroundTextStyle: "dark"
    },
    // tabBar: {
    //   backgroundColor: "#FFFFFF",
    //   selectedColor: "#FF6600",
    //   borderStyle: "white",
    //   list: [
    //     {
    //       pagePath: "pages/coupon/list/index",
    //       selectedIconPath: "assets/image/storeCoupon.png",
    //       iconPath: "assets/image/storeCoupon2.png",
    //       text: "首页"
    //     },
    //     {
    //       pagePath: "pages/customer/personalCenter/index",
    //       selectedIconPath: "assets/image/myself2.png",
    //       iconPath: "assets/image/myself.png",
    //       text: "我的"
    //     }
    //   ]
    // }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
