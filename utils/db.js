import mysql from 'mysql2/promise';
import { errMsg, successMsg } from '../config/msg.config';
import logger from '../config/log.config';
const log = logger('sql');
const SQL_OPTIONS = {
    host: '127.0.0.1',
    user: '你的账户',
    password: '你的密码..',
    database: '你的数据库'
};

export default {
    createConnection: async function(opts) {
        return await mysql.createConnection(opts || SQL_OPTIONS);
    },
    /**
     * [query sql 查询]
     * @see https://github.com/sidorares/node-mysql2/blob/master/examples/promise-co-await/await.js
     * @param  {[type]}  sql   [sql 语句]
     * @param  {[type]}  value [sql语句中有value 值的]
     * @return {Promise}       [description]
     */
    query: async function(sql, value) {
        let connection = await mysql.createConnection(SQL_OPTIONS);
        try {
            let [rows, fields] = await connection.query(sql, value);
            return successMsg(rows);
        } catch (e) {
            console.log('SQL ERROR :\nsql语句:%s \nvalue: %s \nerr:', sql, JSON.stringify(value), e);
            log.error(`sql 查询发生错误 sql语句是:${sql},vaule是:${value}错误是：`, e);
            return errMsg(e || '操作sql 发生呢系统错误,详情见日志');
        } finally {
            await connection.end();
        }
    }

}