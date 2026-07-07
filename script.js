// ===============================
// SHREE FURNITURE V4
// ===============================

// Sticky Header Shadow
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }
});

// Back To Top
const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});

// Fade Animation
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";

    }

  });

});

document.querySelectorAll(
".feature,.product-card,.gallery img,.about-content,.contact-grid"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".7s";

observer.observe(el);

});

// Gallery Popup
document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});

console.log("SHREE FURNITURE V4 Loaded Successfully");
