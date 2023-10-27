const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 5001;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static('public'));

app.get('/', (req, res) => {
  const data = {};
  fs.writeFileSync('public/data.json', JSON.stringify(data));
  res.sendFile(__dirname + '/public/index.html');
});

// GET 요청으로 "sub.html" 제공
app.get('/sub', (req, res) => {
  res.sendFile(__dirname + '/public/sub.html');
});



// * loadData전용 라우팅 /data 엔드폰이트로 작성된다.
// * data.json을 읽도록 요청받은 것을 해결하여 데이터를 보낸다.

app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, './public/data/data.json');
  const data = fs.readFileSync(dataPath, 'utf8');
  res.send(data);
});



// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
