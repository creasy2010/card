import { View, Button, Text } from '@tarojs/components';
            import Taro, { Component, Config } from '@tarojs/taro'
            

import * as T from '../types';
import './step-info.less';
import actions from '../actions/index';
import { connect } from 'react-redux';
import {store2Props} from "../selectors";


type IStepInfoProps = T.IProps & T.IStepInfoProps;

@connect<Partial<IStepInfoProps>, T.IStepInfoState>(store2Props,actions)
export default class StepInfo extends Component<Partial<IStepInfoProps>, T.IStepInfoState> {
  constructor(props:IStepInfoProps) {
    super(props);
  }

/**
    
*/
  render() {
    let {actions:{
        
            action ,
        
    }, 
                    main ,
      
    } =  this.props;

    
       return (
                  <View className="stepInfo">
                     <View/>
                  </View>
              );
    
  }

   
          /**
           * 
           */
          async () {
              
           },
        
}

