import label from '../services/label';
/**
 * [getAll 获取所有的列表]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {Promise}       [description]
 */
const getAll = async function(ctx, next) {
    ctx.body = await label.getAll();
};

/**
 * [add 新增一个收藏]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {Promise}       [description]
 */
const add = async function(ctx, next) {
    ctx.body = await label.add(ctx.request.body);
}

const get = async function(ctx, next) {
    ctx.body = await label.get(ctx.params.id);
};

export default {
    getAll,
    add,
    get
};