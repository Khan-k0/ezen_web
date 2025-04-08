// 요소 선택
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// 모달 열기
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// 모달 닫기
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
