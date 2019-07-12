import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './photo.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';


import { AtImagePicker } from 'taro-ui'

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
    this.state = {
      files: []
    }
  }

  /**

*/
  render() {
    let {
      actions: {action},
      main,
    } = this.props;


    return (
      <View className="photo" >
        <View className ="add">
          <Button className="submit" onClick={()=>{
            console.log('click me!!!');
          }}>

          </Button>
        </View>
      </View>
    );
  }

  onChange  =(files)=> {
    console.log(files);
    this.setState({
      files
    })
  }
}
