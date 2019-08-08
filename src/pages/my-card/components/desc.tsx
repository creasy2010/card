import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './desc.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IDescProps = T.IProps & T.IDescProps;

@connect<Partial<IDescProps>, T.IDescState>(
  store2Props,
  actions
)
export default class Desc extends Component<Partial<IDescProps>, T.IDescState> {
  constructor(props: IDescProps) {
    super(props);
  }

  /**
    
*/
  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    return (
      <View className="desc">
        <View />
      </View>
    );
  }
}
