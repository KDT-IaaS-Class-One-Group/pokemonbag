// 데이터를 표시할 요소
const displayElement = document.getElementById('data-display');

// 백엔드 서버로부터 데이터를 요청
fetch('/data')
  .then((response) => response.json())
  .then((data) => {
    // 받은 JSON 데이터를 화면에 표시
    displayElement.textContent = data.message;
  });