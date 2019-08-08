import Actions from './actions';

export interface IMainReducer {
  isReady: boolean;
  isLoading?: boolean;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;

  [name: string]: any;
};

//默认是全部的属性,可以自定义
export type IProps = IAllReducerProps & ActionType;

export type IPhotoProps = {};
export type IPhotoState = {};

export type ITopProps = {};
export type ITopState = {};

export type IInfoProps = {};
export type IInfoState = {};

export type IDescProps = {};
export type IDescState = {};
