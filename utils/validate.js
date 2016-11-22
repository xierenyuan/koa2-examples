/**
 * 验证js  transfer 
 * @依赖  https://validatejs.org/
 */
import { Validator } from 'validator.js';
import { extend } from 'lodash';
import NotNumber from './assert/notNumber-assert';
import Message from './assert/message-assert';
import NotInt from './assert/notInt.assert';
const asserts = extend(require('validator.js-asserts'), { NotNumber, Message, NotInt });
const Assert = require('validator.js').Assert.extend(asserts);

/**
 * 
 * 验证
 * @export
 * @param {any} value 验证的值
 * @param {any} constraint 验证规则
 * @returns 返回验证结果
 */
function validator(value, constraint) {
    try {
        let validator = new Validator();
        return validator.validate(value, constraint);
    } catch (e) {
        throw e;
    }
}

export default {
    validator: validator,
    Assert: Assert
};