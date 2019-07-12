import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './step-info.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';
import { AtSteps } from 'taro-ui'

type IStepInfoProps = T.IProps & T.IStepInfoProps;

@connect<Partial<IStepInfoProps>, T.IStepInfoState>(store2Props, actions)
export default class StepInfo extends Component<
  Partial<IStepInfoProps>,
  T.IStepInfoState
> {
  constructor(props: IStepInfoProps) {
    super(props);
  }

  /**

*/
  render() {
    let {actions: {action}, main} = this.props;

    const items = [
      { 'title': '步骤一', 'desc': '' },
      { 'title': '步骤二', 'desc': '' },
      { 'title': '步骤三', 'desc': '' }
    ]

    return (
      <View className="stepInfo hbox box-center">
        <AtSteps
            items={items}
            current={this.props.main.step}
            onChange={(current)=>{
              console.log(current);
            }}
          />
      </View>
    );
  }
}
