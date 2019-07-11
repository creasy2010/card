/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/11
 **/


import {View, Text, Image,Canvas} from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';

import PropTypes from 'prop-types';
import './top-back.less';


interface ITopBackP {
  [name: string]: any;
}

interface ITopBackS {
  [name: string]: any;
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

export default class TopBack extends Component<ITopBackP, ITopBackS> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount(){
    //@ts-ignore
    var ctx = wx.createCanvasContext('topBack');
    debugger;

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

  render() {
    // let {} = this.props;
    return (
      <View className="topBack">
          <Canvas
            className={'topBackCanvas'}
            canvasId='topBack' />
      </View>
    );
  }
}
