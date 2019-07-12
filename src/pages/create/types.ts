import Actions from './actions';

export interface IMainReducer {
  isReady: boolean;
  step:0|1|2;
  isLoading?: boolean;

  photo: IMainPhoto;

  info: IMainInfo;

  desc: IMainDesc;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;

  [name: string]: any;
};

//默认是全部的属性,可以自定义
export type IProps = IAllReducerProps & ActionType;

export type IStepInfoProps = {};
export type IStepInfoState = {
};

export type IPhotoProps = {};
export type IPhotoState = {};

export type IInfoProps = {};
export type IInfoState = {};

export type IBusProps = {};
export type IBusState = {};

export interface IMainPhoto {
  [k: string]: any;
}
export interface IMainInfo {
  [k: string]: any;
}
export interface IMainDesc {
  [k: string]: any;
}
