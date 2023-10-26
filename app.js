const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// JSON 파일 경로 설정
const dataFilePath = path.join(__dirname, 'data.json');

// 정적 파일 제공 (public 폴더에 index.html과 sub.html이 있어야 함)
app.use(express.static('public'));

// JSON 파싱을 위한 미들웨어 설정
app.use(bodyParser.json());

// 클라이언트에서 클릭으로 생성된 데이터를 JSON 파일에 저장
app.post('/saveData', (req, res) => {
  const newData = req.body;

  // JSON 파일 읽기
  const existingData = fs.readFileSync(dataFilePath, 'utf-8');
  let jsonData = JSON.parse(existingData);

  // 클라이언트에서 받은 데이터를 JSON에 추가
  jsonData.push(newData);

  // JSON 파일에 업데이트된 데이터 저장
  fs.writeFileSync(dataFilePath, JSON.stringify(jsonData));

  res.status(200).send('데이터가 저장되었습니다.');
});

// 서브 페이지로 데이터 전송
app.get('/sub.html', (req, res) => {
  // JSON 파일에서 데이터 읽기
  const existingData = fs.readFileSync(dataFilePath, 'utf-8');
  const jsonData = JSON.parse(existingData);

  // sub.html 페이지로 데이터를 전송
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
