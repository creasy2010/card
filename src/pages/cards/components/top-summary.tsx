import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './top-summary.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type ITopSummaryProps = T.IProps & T.ITopSummaryProps;

@connect<Partial<ITopSummaryProps>, T.ITopSummaryState>(
  store2Props,
  actions
)
export default class TopSummary extends Component<
  Partial<ITopSummaryProps>,
  T.ITopSummaryState
> {
  constructor(props: ITopSummaryProps) {
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
      <View className="topSummary">
        <View />
      </View>
    );
  }
}
