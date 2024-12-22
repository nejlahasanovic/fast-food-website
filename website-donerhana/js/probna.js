const gallery = document.querySelectorAll(".gallery .image img");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = document.querySelector(".close-btn");
const shadow = document.querySelector(".shadow");
const currentImg = document.querySelector(".current-img");
const totalImg = document.querySelector(".total-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

gallery.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showPreview();
  });
});

const showPreview = () => {
  const totalImages = gallery.length;
  previewImg.src = gallery[currentIndex].src;
  currentImg.textContent = currentIndex + 1;
  totalImg.textContent = totalImages;

  previewBox.classList.add("show");
  shadow.classList.add("active");
  document.body.style.overflow = "hidden";

  checkButtons();
};

const checkButtons = () => {
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === gallery.length - 1 ? "none" : "block";
};

closeIcon.addEventListener("click", () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("active");
  document.body.style.overflow = "auto";
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPreview();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < gallery.length - 1) {
    currentIndex++;
    showPreview();
  }
});


previewImg.addEventListener("error", () => {
  previewImg.src = "img/default.jpg"; 
});
