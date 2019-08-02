import {Command} from '../constant';
import _ from 'lodash';
import {IMainReducer} from '../types';
import {Action} from 'typings';
import produce from 'immer';
import * as immerUtil from '@/redux/immer-util';

const INITIAL_STATE: IMainReducer = {
  isReady: false,

  step:1,

  photo: {
    src:"http://tmp/wxf0aa432bdc9b7248.o6zAJs9X9uyzWAxMmgNiK7oJg8ZA.LQGr5lKT3KlIa6602fdd4201d3b818bcb880ce6f9f1c.png"
  },

  info: {},

  desc: {},
};

export default function main(
  state = INITIAL_STATE,
  action: Action
): IMainReducer {
  const {type, payload} = action;

  return produce<IMainReducer>(state, draftState => {
    switch (type) {
      //通用改变数据
      case Command.commonChange:
        return immerUtil.commonChange(draftState, {...payload, key: 'main'});

      //初始化
      case Command.init:
        draftState.isReady = true;
        for (let propKey in payload.main) {
          //@ts-ignore 这里处理的不够好.
          draftState[propKey] = payload.main[propKey];
        }
        return draftState;

      //重置
      case Command.clean:
        for (let propKey in INITIAL_STATE) {
          //@ts-ignore 这里处理的不够好.
          draftState[propKey] = INITIAL_STATE[propKey];
        }
        return draftState;
    }
  });
}
