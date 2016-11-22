import Koa from 'koa';
import views from 'koa-views';
import convert from 'koa-convert';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import kLogger from 'koa-logger';
import log4js from 'koa-log4';
import cors from 'kcors';
import router from './routes/index';
import httpMiddleware from './middleware/http.interceptor';
import kStatic from 'koa-static';
import logger from './config/log.config';

const app = new Koa();
const logHttp = logger('http');
const log = logger('app');

// middlewares
app.use(convert(cors({ credentials: true })));
app.use(convert(bodyparser()));
app.use(convert(json()));
app.use(convert(kLogger()));

//response
app.use(httpMiddleware.response());

//static
app.use(convert(kStatic(__dirname + '/client/dist')));
//log
app.use(log4js.koaLogger(logHttp, { level: 'auto' }));

app.use(views(__dirname + '/views', {
    extension: 'hbs',
    map: {
        hbs: 'handlebars'
    }
}));

//router
app.use(router.routes(), router.allowedMethods());

//error
app.on('error', (err, ctx) => {
    console.log('APP ERROR:', err)
    log.error('server error', err);
});

// 未捕获异常
process.on('uncaughtException', function(err) {
    console.log('uncaughtException ERROR:', err)
    log.error('uncaughtException server error', err);
});

export default app;