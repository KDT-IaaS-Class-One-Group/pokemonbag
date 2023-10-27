
export const loadData = ()=>{

  //* 서브페이지가 로드될 때, pokeBox안에 넣어줍니다.
  // fetch 경로 
  // loadData.js
  window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/data');
        const data = await response.json();
        
        const pokeBoxes = document.querySelectorAll('.pokeBox');
  
        data.forEach((item, index) => {
            if(pokeBoxes[index]) {
                pokeBoxes[index].textContent = item;
            }
        });
    } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  });
}