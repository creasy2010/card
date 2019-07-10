import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './photo.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IPhotoProps = T.IProps & T.IPhotoProps;

@connect<Partial<IPhotoProps>, T.IPhotoState>(
  store2Props,
  actions
)
export default class Photo extends Component<
  Partial<IPhotoProps>,
  T.IPhotoState
> {
  constructor(props: IPhotoProps) {
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
      <View className="photo">
        <View />
      </View>
    );
  }
}
