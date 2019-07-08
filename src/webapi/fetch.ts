import { AsyncResult } from "@/typings/index";
import Taro from "@tarojs/taro";
// import { message as AntdMsg } from "antd";
// import config from "@/config";
//
import config from "@/service/config";

/**
 * 拼装完整host
 * @param host
 * @param input
 */
// function prefixHost(host: string, input: string): string {
//   if (isString(input)) {
//     const hasPrefix = /^https?:\/\//.test(input as string);
//     return hasPrefix ? input : config[host as IApi] + input;
//   } else {
//     console.error("host,url错误");
//   }
// }

interface IFetch {
  host: string;
  url: string;
  method?: string;
  data?: Object;
  contentType?: string;
}

async function Common<T = object>(params: IFetch): Promise<AsyncResult<T>> {
  let { host, url, data, method } = params;
  let methodUrl = host + url; // prefixHost(host, url);
  let contentType = "application/json; charset=utf-8";
  let token = { data: "" };
  try {
    token.data = Taro.getStorageSync("pet:authInfo:token");
    console.log("fetchtoken", token);
  } catch (err) {}

  let Charset = "utf8";
  const header = {
    platform: "wechat",
    Charset,
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + token.data || "" //SSO登录信息校验，必传
  };
  url = methodUrl;

  return new Promise((resolve, reject) => {
    //@ts-ignore
    wx.request({
      url,
      data,
      header,
      method,
      success: async res => {
        if (
          (res.statusCode >= 200 && res.statusCode < 300) ||
          res.statusCode === 400
        ) {
          const json = (await res.data) as AsyncResult<T>;
          let { message, context, code } = json;

          //@ts-ignore
          if (__DEV__ && code !== "K-000000") {
            Taro.showToast({
              title: `调用接口报错:${url},请联系相关人员处理! code[${code}] ,msg:${message}`,
              icon: "none",
              duration: 10000
            });
            // AntdMsg.error(`调用接口报错:${url},请联系相关人员处理! code[${code}] ,msg:${message}`,20);
          }
          if (code === "K-000015") {
            // location.href='#/account/login';
          } else if (code !== "K-000000") {
            let content = `${message}`;
            throw new Error(content);
          }
          resolve(json);
        } else if (res.status == 404) {
          // AntdMsg.error(`接口调用失败,请查询接口情况!!`,20);
          throw new Error(`接口调用失败[${url}],请查询接口情况!!`);
        } else {
          // AntdMsg.error(`发生未知异常错误!!`,20);
          throw new Error("发生未知异常错误!!");
        }
      },
      fail: err => {
        console.error(err);
        reject(err);
      }
    });
  });
}

export function fetch<T = object>(params: IFetch): Promise<AsyncResult<T>> {
  return Common<T>(params);
}

let host = config.host;

export function get<T = any>(url, data, option = { host }) {
  //TODO 把当前的权限 记录下来.
  console.log(data);
  return fetch<T>({
    host: option.host,
    url,
    method: "get"
  });
}

export function put<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: "put",
    data
  });
}

export function post<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: "post",
    data
  });
}

export function deleteF<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: "delete",
    data
  });
}

// export default { fetch };
