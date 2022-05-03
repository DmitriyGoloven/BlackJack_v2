const path = require('path');
const server = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const  router = require('./router/router')
const bodyParser = require('koa-bodyparser');


 app.use(server(path.join(__dirname, 'public/static')))
 app.use(router.routes());
 app.use(bodyParser());

app.listen(8080);