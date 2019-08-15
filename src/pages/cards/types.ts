import Actions from './actions';

export interface IMainReducer {
  isReady: boolean;
  isLoading?: boolean;

  request: IMainRequest;

  total: IMainTotal;

  list: IMainListSet;

  summary: IMainSummary;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;

  [name: string]: any;
};

//默认是全部的属性,可以自定义
export type IProps = IAllReducerProps & ActionType;

export type ITopProps = {};
export type ITopState = {};

export type ITopSummaryProps = {};
export type ITopSummaryState = {};

export type IListProps = {};
export type IListState = {};

export type IListItemProps = {};
export type IListItemState = {};

export type IMainRequest = string;
export type IMainTotal = number;
export type IMainListSet = IMainList[];

export interface IMainList {
  [k: string]: any;
}
export type IMainSummary = string;
