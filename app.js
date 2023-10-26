const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 데이터를 저장할 JSON 파일 경로
const dataFilePath = path.join(__dirname, 'data.json');

// 클라이언트에서 데이터를 받아서 JSON 파일에 저장
app.post('/sendData', (req, res) => {
  const { textContent, index } = req.body;

  // 데이터를 JSON 파일에 저장
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  data[index] = textContent;
  fs.writeFileSync(dataFilePath, JSON.stringify(data));

  res.status(200).send('데이터가 저장되었습니다.');
});

// 서버에서 클라이언트로 데이터 전송
app.get('/getData', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  res.json(data);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});