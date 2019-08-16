import {View, Button, Text,Image} from '@tarojs/components';
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
        <Image src={""}/>
        <View>
          <View><Text>陈俊林</Text></View>
          <View><Text>销售总监</Text></View>
          <View><Text>深圳市远景达物联网技术有限公司</Text></View>
        </View>
      </View>
    );
  }
}
