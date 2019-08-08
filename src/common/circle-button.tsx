/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/12
 **/

import {View, Text, Image} from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';
import PropTypes from 'prop-types';

import './circle-button.less';

interface ICircleButtonP {
   style?:object;
   isGray?:boolean;
  [name: string]: any;
}

interface ICircleButtonS {
  [name: string]: any;
}

export default class CircleButton extends Component<ICircleButtonP, ICircleButtonS> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    // let style = {...this.props.style || {}}
    // if(this.props.isGray) {
    //   style["backgroundColor"]="#E8E8E8";
    // }

    return (<View className={"circleButton "+(this.props.isGray?"gray":"")}>
        {this.props.children}
      </View>
    );
  }
}
