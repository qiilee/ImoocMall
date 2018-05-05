let user = require('./User');

console.log(`userName:${user.userName}`);

console.log(`I'm ${user.userName},I say ${user.sayHello()}`);

let http = require('http');
let url = require('url');
let util = require('util');

let server = http.createServer((req,res)=>{
  res.statusCode = 200;

  res.setHeader("Content-Type","text/plain; charset=utf-8");

  // res.end("齐磊的测试");

  console.log("url是不包含协议和哈希的:"+ req.url);

  console.log("对象parse:"+ url.parse(req.url));

  console.log("调试:"+ util.inspect(url.parse(req.url)));

  res.end(util.inspect(url.parse(req.url)));
});

server.listen(3000,'127.0.0.1', ()=>{
  console.log("服务器已经运行，请打开浏览,输入:http://127.0.0.1:3000/ 来进行访问.")
});
