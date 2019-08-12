import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';
import * as T from '../types';
import './info.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';
import { AtIcon } from 'taro-ui';
type IInfoProps = T.IProps & T.IInfoProps;

@connect<Partial<IInfoProps>, T.IInfoState>(
  store2Props,
  actions
)
export default class Info extends Component<Partial<IInfoProps>, T.IInfoState> {
  constructor(props: IInfoProps) {
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
      <View className="info">
        <View className="header">
          <Text>个人信息</Text>
          <AtIcon value='clock' size='23' ></AtIcon>
        </View>
        <View className="items">
          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>

          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>

          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>

          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>

          <View className={"splitLine"}>
          </View>

          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>

          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>

          <View >
            <AtIcon value='clock' size='23' ></AtIcon>
            <Text>手机</Text>
            <Text>13072567606</Text>
          </View>
        </View>
        <View />
      </View>
    );
  }
}
