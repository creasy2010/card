import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './list.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IListProps = T.IProps & T.IListProps;

@connect<Partial<IListProps>, T.IListState>(
  store2Props,
  actions
)
export default class List extends Component<Partial<IListProps>, T.IListState> {
  constructor(props: IListProps) {
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
      <View className="list">
        <View />
      </View>
    );
  }
}
