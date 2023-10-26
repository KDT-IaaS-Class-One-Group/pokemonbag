// 데이터 객체 생성
const pokemon = document.getElementsByClassName("pokeBox")

function dataToSend(){
  pokemon.forEach(element => {
   return element.textContent 
  });
}
dataToSend()

// 버튼 클릭 이벤트 리스너
const sendButton = document.getElementById('container');
sendButton.addEventListener('click', () => {
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