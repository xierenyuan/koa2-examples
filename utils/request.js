import urllib from 'urllib';
import GlobalConfig from '../config/global.config';
import {extend} from 'lodash';
import logger from '../config/log.config';
import {errMsg,successMsg} from '../config/msg.config';
const log = logger('request');
//默认配置
const DEFAULT_CONFIG = {
    timeout: [
        3000, 5000
    ],
    dataType: 'json'
};

/**
 *
 * 获取http 状态吗 消息
 * @param {any} status
 * @returns
 */
function msg(status) {
    switch (status) {
        case 404:
            return '服务器找不到请求的网页';
        case 500:
            return '服务器遇到错误,无法完成请求.';
        default:
            return `服务器发生错误,错误码:${status}`;
    }
}

/**
 *
 * 通用的请求
 * @param {any} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} [config={}] 请求的配置 =>https://github.com/node-modules/urllib
 * @returns 返回Promise
 */
function commonRequest(url, params, config = {}) {
    return new Promise((resolve, reject) => {
        try {
            let _config = extend(DEFAULT_CONFIG, {
                data: params
            }, config);
            urllib.request(`${GlobalConfig.API_HOST}/${url}`, _config, (err, data, res) => {
                let {status} = res;
                status != 200 && log.error(res);
                resolve(status === 200
                    ? successMsg(data)
                    : errMsg(msg(status)));
            });
        } catch (error) {
            resolve(errMsg(`发生错误${JSON.stringify(error)}`));
        }
    });
}

export default {
    /**
     *
     * get 请求
     * @param {any} url 请求的url
     * @param {any} [params={}] 请求的参数
     * @param {any} [config={}] 请求配置
     * @returns Promise
     */
    get(url, params = {}, config = {}) {
        return commonRequest(url, params, extend(config, {method: 'GET'}));
    },

    /**
     *
     * post 请求
     * @param {any} url 请求的url
     * @param {any} [params={}] 请求的参数
     * @param {any} [config={}] 请求配置
     * @returns Promise
     */
    post(url, params = {}, config = {}) {
        return commonRequest(url, params, extend(config, {method: 'POST'}));
    },

    ajax : commonRequest

}
