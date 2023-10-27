export const addEvent = ()=>{

  // * 로딩됐을 때, pokeBox에 이벤트 리스너를 추가하는 로직 , class가 바뀌면서 x가표시가 나고 안난다.
  document.addEventListener("DOMContentLoaded", function() {
    const pokeBoxes = document.querySelectorAll('.pokeBox');
      pokeBoxes.forEach(pokeBox => {
        pokeBox.addEventListener('click', function() {
          if (this.classList.contains('clicked')) {
              this.classList.remove('clicked');
          } else {
              this.classList.add('clicked');
          }
        });
      });
  });
}