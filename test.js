let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + ((i - slideIndex) * 150) + "%)";
  }
}
// function showMore() {
//   const content = document.getElementById("content");
//   const button = document.querySelector("button");
//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//     button.innerHTML = "Show More";
//   } else {
//     content.style.maxHeight = content.scrollHeight + "px";
//     button.innerHTML = "Show Less";
//   }
// }
