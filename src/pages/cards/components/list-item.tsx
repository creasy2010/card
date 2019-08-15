import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './list-item.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IListItemProps = T.IProps & T.IListItemProps;

@connect<Partial<IListItemProps>, T.IListItemState>(
  store2Props,
  actions
)
export default class ListItem extends Component<
  Partial<IListItemProps>,
  T.IListItemState
> {
  constructor(props: IListItemProps) {
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
      <View className="listItem">
        <View />
      </View>
    );
  }
}
