import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './top.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type ITopProps = T.IProps & T.ITopProps;

@connect<Partial<ITopProps>, T.ITopState>(
  store2Props,
  actions
)
export default class Top extends Component<Partial<ITopProps>, T.ITopState> {
  constructor(props: ITopProps) {
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
      <View className="top">
        <View />
      </View>
    );
  }
}
