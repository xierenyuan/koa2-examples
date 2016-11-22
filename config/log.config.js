import log4js from 'koa-log4';
import log4Config from '../config/log4js.json';
log4js.configure(log4Config);

export default function logger(name) {
    return log4js.getLogger(name);
}