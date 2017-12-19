const http = require('http');	//	app이 구동되기 위해서는 http라는 모듈이 요구된다 리턴 값을 http에 담음, const로 상수(한번 로드해오면 바뀌지 않는다)
 
const hostname = '127.0.0.1';	//	
const port = 1338;
 
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});