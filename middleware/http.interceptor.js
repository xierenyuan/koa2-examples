import * as _ from 'lodash';
export default {
    response(ctx) {
        return async function response(ctx, next) {
            await next();
            const body = ctx.response.body;
            //对所有的错误状态 统一返回状态吗 409 方便前端进行验证
            if (!_.isUndefined(body) && body.code === 409) {
                ctx.status = body.code;
            }
        }
    }
};