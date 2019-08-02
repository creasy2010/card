import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';
import { AtInput,AtForm }  from 'taro-ui';
import * as T from '../types';
import './info.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

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


        <View className={"title"}>
          <View>个人信息</View>
          <View>拍名片</View>
        </View>

        <View className={"form"}>
            <AtInput
              name='name'
              title='姓名'
              type='text'
              placeholder='请输入姓名'
              value={""}
              onChange={()=>{}}
            /> <AtInput
              name='mobile'
              title='手机'
              type='text'
              placeholder='请输入手机号'
              value={""}
              onChange={()=>{}}
            /><AtInput
              name='mobile'
              title='微信'
              type='text'
              placeholder='请输入微信号'
              value={""}
              onChange={()=>{}}
            /> <AtInput
              name='value1'
              title='QQ'
              type='text'
              placeholder='请输入QQ号'
              value={""}
              onChange={()=>{}}
            /> <AtInput
              name='value1'
              title='邮箱'
              type='text'
              border={false}
              placeholder='请输入邮箱'
              value={""}
              onChange={()=>{}}
            />
        </View>
        <View className="title">
          <View>企业信息</View>
        </View>
        <View className={"form"}>
            <AtInput
              name='name'
              title='公司'
              type='text'
              placeholder='请输入公司名称'
              value={""}
              onChange={()=>{}}
            /> <AtInput
            name='mobile'
            title='职位'
            type='text'
            placeholder='请输入您的职位'
            value={""}
            onChange={()=>{}}
          /> <AtInput
            name='value1'
            title='地址'
            type='text'
            placeholder='请输入公司地址'
            value={""}
            onChange={()=>{}}
          /> <AtInput
            name='value1'
            title='关联网站'
            type='text'
            border={false}
            placeholder='请输入业务网站'
            value={""}
            onChange={()=>{}}
          />
        </View>
      </View>
    );
  }
}
