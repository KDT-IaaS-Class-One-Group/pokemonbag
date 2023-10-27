export const addEvent = ()=>{

  // * 로딩됐을 때, pokeBox에 이벤트 리스너를 추가하는 로직 , class가 바뀌면서 x가표시가 나고 안난다.
  document.addEventListener("DOMContentLoaded", function() {
    const pokeBoxes = document.querySelectorAll('.pokeBox');
    const clickedData = [];

      pokeBoxes.forEach(pokeBox => {
        pokeBox.addEventListener('click', function() {
          const dataValue = pokeBox.textContent;
          clickedData.push(dataValue);
          // 클릭한 데이터를 배열에 추가

          fetch('/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: clickedData })
        }).then(() => {
            console.log('데이터를 서버에 전송했습니다.');
        }).catch(error => {
            console.error('데이터 전송 중 에러가 발생했습니다:', error);
        });




          if (this.classList.contains('clicked')) {
              this.classList.remove('clicked');
          } else {
              this.classList.add('clicked');
          }
        });
      });
  });
}