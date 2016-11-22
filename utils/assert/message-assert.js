import { Violation } from 'validator.js';
import { isUndefined } from 'module';
/**
 * 
 * 填充自定义消息
 * @export
 * @returns
 */
export default function MessageAssert(value) {
    /**
     * 错误消息
     */
    this.__message__ = value;
    return this;
}