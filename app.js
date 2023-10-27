const express = require('express');
const app = express();
const port = 5001;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static('public'));

// GET 요청으로 "index.html" 제공
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// GET 요청으로 "sub.html" 제공
app.get('/sub', (req, res) => {
  res.sendFile(__dirname + '/public/sub.html');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
