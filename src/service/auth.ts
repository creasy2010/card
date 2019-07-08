/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/25
 **/
import Taro from "@tarojs/taro";
import { StoreBaseResponse } from "@/webapi/StoreCustomerController";

var token = null;
loadToken();
getStoreInfo();

export function isLogin() {
  console.log("token>>>>>>>>>>>>>>>>>>>>>>>>>>>>", token);
  return token !== null; //true是已经登录
}

export function saveToken(_token) {
  token = _token;
  Taro.setStorage({ key: "pet:authInfo:token", data: token });
}

let storeInfo: StoreBaseResponse = null;

export async function getStoreInfo(): Promise<StoreBaseResponse> {
  if (storeInfo) {
    return storeInfo;
  }

  try {
    let { data } = Taro.getStorageSync("pet:storeInfo");
    storeInfo = data as any;
  } catch (err) {
    console.warn(err);
  }
  return storeInfo;
}

export function getStoreInfoSync(): StoreBaseResponse {
  if (storeInfo) {
    return storeInfo;
  }
  return {};
}

export async function saveStoreInfo(store: StoreBaseResponse): Promise<void> {
  try {
    storeInfo = store;
    await Taro.setStorage({
      key: "pet:storeInfo",
      data: store
    });
  } catch (err) {
    console.warn(err);
  }
}

export function getToken() {
  if (!token) {
    loadToken();
  }
  return token;
}

function loadToken() {
  try {
    Taro.getStorage({
      key: "pet:authInfo:token",
      success: res => {
        token = res.data;
      }
    });
  } catch (err) {
    console.warn(err);
  }
}
