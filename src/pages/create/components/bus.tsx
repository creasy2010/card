import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './bus.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IBusProps = T.IProps & T.IBusProps;

@connect<Partial<IBusProps>, T.IBusState>(
  store2Props,
  actions
)
export default class Bus extends Component<Partial<IBusProps>, T.IBusState> {
  constructor(props: IBusProps) {
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
      <View className="bus">
        <View />
      </View>
    );
  }
}
