const textArea = document.querySelector(".text-area");
const sideDiv = document.querySelector(".side-div");

function divSlide() {
  sideDiv.classList.add("active");
}

textArea.addEventListener("focus", divSlide);

function divSlideBack() {
  sideDiv.classList.remove("active");
}

textArea.addEventListener("blur", divSlideBack);
