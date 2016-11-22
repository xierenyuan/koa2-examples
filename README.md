# koa-demo   
提供呢 mysql 获取 和  直接请求 请求获取的数据的方式,-。-。。由于是简单的demo 我并未提供数据库 所以 想运行的 请跑起来后 修改db.js

## 启动
```
npm install 
npm start 
// 单元测试
npm test
```

## 参考 or 使用
> [koa-generator](https://github.com/17koa/koa-generator)

## 技术栈
> koa [koa](http://koajs.com/)          
> 验证（transfer）[validator.js](https://github.com/guillaumepotier/validator.js)    [extend asserts](https://github.com/seegno/validator.js-asserts)  
> sql [mysql2](https://github.com/sidorares/node-mysql2)   
> sql 拼接 [squel](https://github.com/hiddentao/squel)    
> es6     
> mocha    
> urllib   
> log4js   

## vscode 代码提示
```javascript
npm install -s @types/lodash
npm install -s @types/koa
```

## 返回值 协定
> 成功 状态吗 0  
```
{
    code:0,
    //data 数据
    data:[]
}
```


> 验证失败 状态吗 409
```
{
    code:409,
    //多个错误消息使用逗号分隔
    msg:'我是错误消息'
}
```

## 目录结构
<pre>
.
├── bin                            //后端启动脚本
├── config                         //后端配置文件    
├── controllers                    //控制器    
├── logs                           //日志
├── middleware                     //中间件
├── models                         //实体相关  主要是数据验证 类赋值  参考呢 C# 开发方式
├── routes                         //路由相关
├── services                       //服务 数据库crud 请求服务 等
├── test                           //单元测试
├── utils                          //工具库
├── views                          //视图。。 由于做这个的时候 用了vue 做前端 所以这只做了 尝试是否可以渲染
├── app.js                         //启动入口  第三方引入
├── ...                            //巴拉巴拉还有别的...
│
└──
.
</pre>
