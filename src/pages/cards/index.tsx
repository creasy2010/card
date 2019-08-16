import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import {connect} from '@tarojs/redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';
import {registerReducer} from '@/redux/store';
import Top from './components/top';
import List from './components/list';


@connect<Partial<T.IProps>, any>(
  store2Props,
  actions
)
export default class Cards extends Component<Partial<T.IProps>, any> {
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
      <View className="cards">
        <Top></Top>
        <List></List>
      </View>
    );
  }
}

//==动态注入reducer===

import cardsMain from './reducers/main';

registerReducer({cardsMain});
