import kRouter from 'koa-router';
import test from '../services/test';
import {extend} from 'lodash';
const router = kRouter({prefix: 'test'});

router.get('/getAll', async function(ctx, next) {
    ctx.body = await test.get();
});

router.get('/sem/campagin/list', async function(ctx, next) {
    let params = {};
    extend(params, ctx.query);
    params.page = params.page || 1;
    params.size = params.size || 10;
    ctx.body = await test.getSemCampaignList(params);
});

export default router;
