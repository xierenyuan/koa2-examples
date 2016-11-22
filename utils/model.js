import { validator } from '../utils/validate';
import { map, isUndefined, isObject, isArray } from 'lodash';
import { Violation } from 'validator.js';
import { ValidMsg } from '../config/msg.config';

/**
 * 
 * 需要验证 用的列
 * @class Field
 */
class Field {
    /**
     * Creates an instance of Field.
     *  创建一个验证列
     * @param {any} value 列的值
     * @param {Array} is  验证规则 
     * 
     * @memberOf Field
     */
    constructor(value, is) {
        this.value = value;
        this.is = is;
        return this;
    }
}

/**
 * 
 * 通用实体
 * @export
 * @class Model
 */
export default class Model {
    constructor() {
        this.model = {};
        //验证规则
        this.constraint = {};
        //带值的实体
        this.fields = {};

        this.Field = Field;
    }

    /**
     * 
     * 获取 实体验证规则的错误消息 
     * @returns 返回 错误消息数组 没有则为空
     * 
     * @memberOf Model
     */
    message() {
        let _arrMsg = [];
        Object.keys(this.model).forEach(key => {
            // 判断 数据列 是否是 带验证列的
            let field = this.model[key];
            // 返回 Field  是为了 区分 是列还是数据
            if (field instanceof Field) {
                let { value, is } = field;
                // 验证规则和消息处理
                if (!isUndefined(is) && isObject(is)) {
                    this.constraint[key] = is;
                }
                this.fields[key] = value;
            } else {
                this.fields[key] = field;
            }
        });
        // 验证 输入是否符合定义的数据验证规则
        let result = validator(this.fields, this.constraint);
        if (isObject(result)) {
            Object.keys(result).forEach(key => {
                let violation = result[key];
                if (isArray(violation)) {
                    violation.map(v => {
                        _arrMsg.push(this._getMsg(v, key));
                    });
                } else {
                    _arrMsg.push(this._getMsg(violation, key));
                }
            });
        }
        return _arrMsg;
    }


    /**
     * 
     * 获取验证消息 
     * @example 
     * ```validate.js 通用 Message  自定义消息  默认消息在 ValidMsg 存储
     * new Assert().NotNumber().Message('哈哈233') 
     * ```
     * 
     * @param {any} violation
     * @param {string} key  列
     * @returns 返回获取到的 错误消息
     * 
     * @memberOf Model
     */
    _getMsg(violation, key) {
        let defaultMsg = `${key}数据验证未通过,请重新输入`;
        if (violation instanceof Violation) {
            let { __class__, __message__ } = violation.assert;
            //console.log(key, __class__);
            return __message__ || `${key}:${ValidMsg[__class__]}` || defaultMsg;
        }
        return defaultMsg;
    }

    /**
     * 
     * 获取 model 实体
     * @returns 返回验证通过的赋值的实体
     * 
     * @memberOf Model
     */
    getModel() {
        let model = {};
        Object.keys(this.fields).forEach(key => {
            let field = this.fields[key];
            if (!isUndefined(field)) {
                model[key] = field;
            }
        });
        return model;
    }
};