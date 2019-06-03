const http      = require('http');
const Koa       = require('koa');
const serve     = require('koa-static');
const Router    = require('koa-router');
const jsonData  = require('./public/mock.json')
const port = process.env.PORT || 8085;
const app = new Koa();
const router = new Router();



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * 根据关键词获取图书信息
 */
router.post('/data', async (ctx, next) => {
    await sleep(3000);
    console.log('=====服务端返回======')
    ctx.response.body = jsonData;
});
/* ===================== */

app.use(router.routes());
app.use(serve(__dirname + '/public'));
app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});