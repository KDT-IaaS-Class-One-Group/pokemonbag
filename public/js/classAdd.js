export const addEvent = () => {

  // * 로딩됐을 때, pokeBox에 이벤트 리스너를 추가하는 로직 , class가 바뀌면서 x가표시가 나고 안난다.
  document.addEventListener("DOMContentLoaded", function () {
    const pokeBoxes = document.querySelectorAll('.pokeBox');
    pokeBoxes.forEach(pokeBox => {
      pokeBox.addEventListener('click', function () {
        // 데이터변수 설정
        const data = this.textContent

        // 클릭 되었을 시,
        if (this.classList.contains('clicked')) {
          this.classList.remove('clicked');


          // 클릭이 안되어 있을 때,
        } else {
          // class 'clicked' 추가
          this.classList.add('clicked');
          // fetch를 사용해 엔드포인트 'send-data'로 json데이터를 보내기.
          fetch('send-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            // data = this.textContent
            body: JSON.stringify({ data })
          })
            .then(response => response.json())
            .catch(error => {
              console.error('에러 발생:', error);
            });
        }

      });
    });
  });
}