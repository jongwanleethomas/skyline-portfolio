// DOM 요소 가져오기
const modal = document.getElementById("image-modal"); // 모달 창 전체
const modalImg = document.getElementById("modal-image"); // 모달 안의 이미지 요소
const captionText = document.getElementById("modal-caption"); // 모달 안의 캡션 요소 (선택사항)
const closeModalBtn = document.querySelector(".modal-close-btn"); // 닫기 버튼
const portfolioImages = document.querySelectorAll(".portfolio-image"); // 클릭할 모든 포트폴리오 이미지

// 각 포트폴리오 이미지에 클릭 이벤트 리스너 추가
portfolioImages.forEach(img => {
    img.onclick = function(){
        modal.classList.add("modal-active"); // 모달을 보이게 함 ('modal-active' 클래스 추가)
        modalImg.src = this.src; // 클릭된 이미지의 src를 모달 이미지의 src로 설정
        // captionText.innerHTML = this.alt; // 이미지의 alt 텍스트를 캡션으로 사용 (선택사항)
    }
});

// 닫기 버튼 클릭 시 모달 닫기
closeModalBtn.onclick = function() { 
    modal.classList.remove("modal-active"); // 모달 숨김 ('modal-active' 클래스 제거)
}

// 모달 배경 클릭 시 모달 닫기
modal.onclick = function(event) {
    // 클릭된 요소가 모달 배경 자체일 때만 닫음 (이미지 클릭 시 닫히지 않도록)
    if (event.target === modal) {
        modal.classList.remove("modal-active"); // 모달 숨김
    }
}
