export const BASE = 'Cards_';

export enum Command {
  //通用修改数据方法
  commonChange = 'Cards_commonChange',
  init = 'Cards_INIT',
  clean = 'Cards_CLEAN',

  /*
        修改查询条件数据
    */
  modifyRequest = 'Cards_modifyRequest',

  /*
        清空查询结果
    */
  cleanList = 'Cards_cleanList',

  /*
        
    */
  queryResult = 'Cards_queryResult',
}
