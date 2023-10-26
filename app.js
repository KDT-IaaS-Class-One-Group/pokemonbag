const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 데이터를 저장할 JSON 파일 경로
const dataFilePath = path.join(__dirname, 'data.json');

// 초기 데이터 설정 (9개의 빈 문자열로 초기화)
const initialData = new Array(9).fill('');

// JSON 파일에 초기 데이터를 저장
fs.writeFileSync(dataFilePath, JSON.stringify(initialData));

// 클라이언트에서 데이터를 받아서 JSON 파일에 저장
app.post('/sendData', (req, res) => {
  const { textContent, index } = req.body;

  // JSON 파일에서 데이터 읽기
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  // 클라이언트에서 받은 데이터를 해당 인덱스에 저장
  data[index] = textContent;

  // JSON 파일에 업데이트된 데이터 저장
  fs.writeFileSync(dataFilePath, JSON.stringify(data));

  res.status(200).send('데이터가 저장되었습니다.');
});

// 서버에서 클라이언트로 데이터 전송
app.get('/getData', (req, res) => {
  // JSON 파일에서 데이터 읽기
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  res.json(data);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
