/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/12
 **/

import {View, Text, Image} from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';

import PropTypes from 'prop-types';


interface ICardItemP {
  [name: string]: any;
}

interface ICardItemS {
  [name: string]: any;
}

export default class CardItem extends Component<ICardItemP, ICardItemS> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let {} = this.props;
    return (<View>

    </View> );
  }
}
