import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import {connect} from '@tarojs/redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';
import {registerReducer} from '@/redux/store';

import StepInfo from './components/step-info';

import Photo from './components/photo';

import Info from './components/info';

import Bus from './components/bus';

@connect<Partial<T.IProps>, any>(
  store2Props,
  actions
)
export default class Create extends Component<Partial<T.IProps>, any> {
  componentDidMount() {
    this.props.actions.init();
  }

  componentWillUnmount() {
    this.props.actions.clean();
  }

  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    return (
      <View className="create">
        <View />
        create Test
      </View>
    );
  }
}

//==动态注入reducer===

import createMain from './reducers/main';

registerReducer({createMain});
