import {View, Text, Image} from '@tarojs/components';
import Taro, {Component} from '@tarojs/taro';

import PropTypes from 'prop-types';
import './card-label.less';


interface ILabelPropsP {
  lv?: 1 | 2 | 3;
  className?: string;
  [name: string]: any;
}

interface ILabelPropsS {
  [name: string]: any;
}

export default class CardLabel extends Component<ILabelPropsP, ILabelPropsS> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let {className} = this.props;
    return (
      <View className={'labelLv' + (this.props.lv||1) + ' ' + className}>
       <Text> {this.props.children}</Text>
      </View>
    );
  }
}
