/* =========================================
   Shree Furniture V3 - script.js
=========================================*/

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});


// Fade-in Animation on Scroll

const fadeElements = document.querySelectorAll(
'.feature-box, .product-card, .review-card, .contact-box'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .7s ease";

    observer.observe(el);

});


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="90px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#4e342e";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// Image Popup (Lightbox)

const images=document.querySelectorAll(".product-card img");

const popup=document.createElement("div");

popup.id="popup";

popup.innerHTML='<img id="popup-img">';

document.body.appendChild(popup);

popup.style.cssText=`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

const popupImg=document.getElementById("popup-img");

popupImg.style.maxWidth="90%";
popupImg.style.maxHeight="90%";
popupImg.style.borderRadius="10px";

images.forEach(img=>{

    img.style.cursor="zoom-in";

    img.onclick=()=>{

        popup.style.display="flex";
        popupImg.src=img.src;

    }

});

popup.onclick=()=>{

    popup.style.display="none";

};


// Simple Mobile Menu

const nav=document.querySelector("nav");

const menuBtn=document.createElement("button");

menuBtn.innerHTML="☰";

menuBtn.id="menuBtn";

document.querySelector(".header .container").prepend(menuBtn);

menuBtn.style.display="none";
menuBtn.style.fontSize="28px";
menuBtn.style.background="transparent";
menuBtn.style.border="none";
menuBtn.style.color="#FFD700";
menuBtn.style.cursor="pointer";

function mobileMenu(){

    if(window.innerWidth<768){

        menuBtn.style.display="block";

        nav.style.display="none";

        menuBtn.onclick=function(){

            if(nav.style.display==="none"){

                nav.style.display="block";

            }else{

                nav.style.display="none";

            }

        }

    }else{

        menuBtn.style.display="none";
        nav.style.display="block";

    }

}

mobileMenu();

window.addEventListener("resize",mobileMenu);
