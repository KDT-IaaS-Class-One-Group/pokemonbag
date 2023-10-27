const express = require('express');
const app = express();
const port = 5001;
const fs = require('fs');

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

// 서버에서 savedData 변수를 지정해주고 
// 장바구니 페이지에서 'get-data' 엔드포이트에
// savedData변수를 응답해주게하여 장바구니페이지에서
// 변수를 가져올 수 있게한다.

let savedData = null;

app.post('/send-data', (req, res) => {
  savedData = req.body.data;
  //  json데이터 파일로 saveddata를 push로 해서 넣기
  fs.writeFile('data/data.json', JSON.stringify(savedData), 'utf-8', (err) => {
    if (err) {
      console.error('데이터 저장 중 오류 발생:', err);
      res.status(500).json({ message: '데이터 저장 중 오류 발생' });
    } else {
      console.log('데이터가 성공적으로 저장되었습니다.');
      res.json({ message: '데이터가 서버로 전송되었습니다.' });
    }
  });
  res.json({ message: '데이터가 서버로 전송되었습니다.' });
});

app.get('/get-data', (req, res) => {
  // data.json 파일에서 데이터를 읽어옵니다.
  fs.readFile('data/data.json', 'utf-8', (err, data) => {
    if (err) {
      console.error('데이터 읽기 중 오류 발생:', err);
      res.status(500).json({ message: '데이터 읽기 중 오류 발생' });
    } else {
      const parsedData = JSON.parse(data);
      res.json({ data: parsedData });
    }
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
