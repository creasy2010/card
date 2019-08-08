import {View, Button, Text,Image} from '@tarojs/components';
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
        <View className="topItem">
          <Image src={""}></Image>
          <Text>专属名片码</Text>
        </View>
        <View className="topItem">
          <Image src={""}></Image>
          <Text>访问我名片</Text>
        </View>
        <View className="topItem">
          <Image src={""}></Image>
          <Text>发给我名片</Text>
        </View>
      </View>
    );
  }
}
