/**
 * 
 * 通用的服务 用于新服务 继承 提供 基础查询 or 验证方法
 * @see squel  https://github.com/hiddentao/squel
 * @see mysql2 https://github.com/sidorares/node-mysql2 
 * @export
 * @class BaseService
 */
import db from '../utils/db';
import squel from 'squel';
import { validator, Assert } from './validate';
export default class BaseService {
    constructor() {
        this.db = db;
        this.squel = squel;
        this.is = Assert;
    }


    /**
     * 
     * 验证单个值是否符合 定义的规定
     * @param {any} value  验证的值
     * @param {any} [violation=[]] 定义的验证规则 
     * @see https://github.com/guillaumepotier/validator.js
     * @returns 验证成功返回true 验证失败 返回false
     * 
     * @memberOf BaseService
     */
    valid(value, violation = []) {
        let isValid = validator(value, violation);
        if (isValid != true) {
            return false;
        }
        return true;
    }



};