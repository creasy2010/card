import { View, Button } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";

import * as T from "../pages/coupon/list/types";
import "./coupon-popup.less";

type ICouponPopupProps = T.IProps & T.ICouponPopupProps;

export default class couponPopup extends Component<
  Partial<ICouponPopupProps>,
  T.ICouponPopupState
> {
  constructor(props: ICouponPopupProps) {
    super(props);
    this.state = {
      showPopup: true
    };
  }
  handleClick() {
    const { hidePopup } = this.props;
    hidePopup(false);
  }

  render() {
    let { couponDesc } = this.props;
    return (
      <View className="couponPopup">
        <View className="main-container">
          <View className="scroll-view">
            <View className="title">使用说明</View>
            <View className="content">{couponDesc}</View>
          </View>
          <View className="bottom-bar">
            <Button className="close-btn" onClick={this.handleClick}>
              关闭
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
