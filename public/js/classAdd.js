export const addEvent = () => {

  document.addEventListener("DOMContentLoaded", function() {
    const pokeBoxes = document.querySelectorAll('.pokeBox');

    pokeBoxes.forEach(pokeBox => {
      pokeBox.addEventListener('click', async function() {
        if (this.classList.contains('clicked')) {
          this.classList.remove('clicked');
        } else {
          this.classList.add('clicked');
        }

        // 클릭 시 textContent 값을 서버에 전송해 JSON 파일에 저장
        await saveTextToJSON(this.textContent);
      });
    });
  });
}

// 클릭된 pokeBox의 textContent를 서버에 전송하는 함수
async function saveTextToJSON(text) {
  try {
    const response = await fetch('/save-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });

    // (선택적) 응답 확인 및 처리
    if (response.ok) {
      console.log("Text saved successfully!");
    } else {
      console.error("Failed to save text.");
    }

  } catch (error) {
    console.error("Error:", error);
  }
}
