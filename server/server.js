// 引入 http 模块
const http = require("http")
// 创建服务
const server = http.createServer((request, response) =>
{
    response.setHeader("Content-Type", "text/html;charset=UTF-8")
    response.end("<h1>注册成功</h1>")
})
// 启动服务，断开监听
server.listen(3000, () =>
{
    console.log("服务 3000 启动...");
    console.log("访问地址：http://127.0.0.1:3000/");
})
