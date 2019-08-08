import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import {connect} from '@tarojs/redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';
import {registerReducer} from '@/redux/store';

import Photo from './components/photo';
import Top from './components/top';
import Info from './components/info';
import Desc from './components/desc';


//==动态注入reducer===
import myCardMain from './reducers/main';
registerReducer({myCardMain});

@connect<Partial<T.IProps>, any>(
  store2Props,
  actions
)
export default class MyCard extends Component<Partial<T.IProps>, any> {
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
      <View className="myCard">
        <View />
      </View>
    );
  }
}

