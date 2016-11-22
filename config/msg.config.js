/**
 *
 * 通用消息返回
 * @export
 * @class className
 */

/**
 * 
 * 错误消息返回
 * @export
 * @param {any} msg
 * @returns
 */
export function errMsg(msg) {
    return {
        code: 409,
        msg: msg
    }
};

/**
 * 
 * 成功消息返回
 * @export
 * @param {any} data
 * @returns
 */
export function successMsg(data) {
    return {
        code: 0,
        data: data
    }
};

// 验证默认消息
export let ValidMsg = {
    NotBlank: '不能为空.',
    HaveProperty: '必输字段',
    Uri: '必须输入正确格式的网址',
    NotNumber: '请输入合法的数字',
    NotInt: '请输入正整数',
    Email: '请输入正确格式的电子邮件',
    IsString: '必须输入字符串'
};