// 데이터 객체 생성
const dataToSend = {
  message: '안녕하세요, 웹 페이지 2!'
};

// 버튼 클릭 이벤트 리스너
const sendButton = document.getElementById('container');

const btnEvent = sendButton.addEventListener('click', () => {
  console.log('btnEvent running');
  // 데이터를 JSON 문자열로 변환
  const jsonData = JSON.stringify(dataToSend);

  // AJAX 또는 Fetch API를 사용하여 데이터를 백엔드 서버로 전송
  fetch('/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  });
});

export { dataToSend, sendButton, btnEvent }