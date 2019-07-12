import {View, Button, Text, Image} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './photo.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

import {AtImagePicker, AtIcon} from 'taro-ui';

type IPhotoProps = T.IProps & T.IPhotoProps;

@connect<Partial<IPhotoProps>, T.IPhotoState>(store2Props, actions)
export default class Photo extends Component<
  Partial<IPhotoProps>,
  T.IPhotoState
> {
  constructor(props: IPhotoProps) {
    super(props);
    this.state = {
      files: [],
    };
  }

  /**

*/
  render() {
    let {actions: {action}, main} = this.props;

    return (
      <View className="photo">
        {main.photo.src
          ? <View>
              <Image src={main.photo.src} />
            </View>
          :<View className='addArea'>
            <View className="add">
              <Button
                className="submit"
                onClick={async () => {
                  let image = await Taro.chooseImage({
                    count: 1,
                  });
                  action.commonChange('main.photo.src', image.tempFilePaths[0]);
                }}
              >
                <AtIcon value="add" size="30" color="#0272FC" />
              </Button>
            </View>

            <View className="label1">点击上传照片</View>
            <View className="label2">建议尺寸640*640</View>
          </View>}
      </View>
    );
  }

  onChange = files => {
    console.log(files);
    this.setState({
      files,
    });
  };
}
