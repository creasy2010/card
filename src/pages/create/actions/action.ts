import {Command} from '../constant';
import {Dispatch} from 'typings';
import {IAllReducerProps} from '../types';
import {getReducerData} from '@/redux/store';
import api from 'api';
import {extraPathsValue} from '@/redux/util';

export default (dispatch: Dispatch) => {
  let action = {
    commonChange(...param: any) {
      dispatch({
        type: Command.commonChange,
        payload: extraPathsValue(...arguments),
      });
    },

    /**
     *
     */
    async uploadPic() {
      上传图片;
    },
  };
  return action;
};

function getData(): IAllReducerProps {
  return {
    main: getReducerData('createMain'),
  };
}
