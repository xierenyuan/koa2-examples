import { isUndefined } from 'lodash';
import { errMsg } from '../config/msg.config';
import LabelModel from '../models/label.model';
import BaseService from '../utils/base.service';
class Label extends BaseService {
    constructor() {
        super();
    }

    /**
     * 获取所有label
     * 
     * @returns
     * 
     * @memberOf Label
     */
    getAll() {
        return this.db.query('select * from label order by id desc');
    }


    /**
     * 
     * 新增标签
     * @param {any} [body={}]
     * @returns
     * 
     * @memberOf Label
     */
    add(body = {}) {
        let labelModel = new LabelModel(body);
        let arrMessage = labelModel.message();
        if (arrMessage.length > 0) {
            return errMsg(arrMessage.join(','));
        }
        return this.db.query('INSERT INTO label set ?', labelModel.getModel());
    }

    /**
     * 
     * 根据id 获取
     * @param {any} id
     * @returns
     * 
     * @memberOf Label
     */
    get(id) {
        let isValid = this.valid(id, [this.is.required(), this.is.notInt()]);
        if (!isValid) {
            return errMsg('没有查询id');
        }
        let sql = this.squel.select().from('label').where(this.squel.str('id = ?', id)).toString();
        return this.db.query(sql);
    }

};
export default new Label();