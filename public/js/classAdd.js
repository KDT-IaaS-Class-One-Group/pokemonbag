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
          // 서버에서 savedData 변수를 지정해주고 
          // 장바구니 페이지에서 'get-data' 엔드포이트에
          // savedData변수를 응답해주게하여 장바구니페이지에서
          // 변수를 가져올 수 있게한다.

          // let savedData = null;

          // app.post('/send-data', (req, res) => {
          //   savedData = req.body.data;
          //   res.json({ message: '데이터가 서버로 전송되었습니다.' });
          // });

          // app.get('/get-data', (req, res) => {
          //   res.json({ data: savedData });
          // });
        }

      });
    });
  });
}