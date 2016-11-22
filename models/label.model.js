import Model from '../utils/model';
import { validator, Assert } from '../utils/validate';
/**
 * 
 * label 实体
 * @export
 * @class LabelModel
 * @extends {Model}
 */
export default class LabelModel extends Model {
    constructor(params = {}) {
        super();
        this.model.type = new this.Field(params.type, [new Assert().Required(), new Assert().NotInt()]);

        this.model.title = new this.Field(params.title, [new Assert().Required(), new Assert().IsString()]);

        this.model.url = new this.Field(params.url, [new Assert().Required(), new Assert().NotBlank(), new Assert().Uri()]);

        this.model.desc = params.desc;
        //创建人
        this.model.create_user = 1;
        //创建时间
        this.model.create_date = new Date();
    }
};