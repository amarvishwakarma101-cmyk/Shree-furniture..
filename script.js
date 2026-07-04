// Back To Top Button
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .cats div").forEach(el=>{
    el.classList.add("fade");
    observer.observe(el);
});

// Image Popup
document.querySelectorAll(".gallery-grid img").forEach(img=>{
    img.addEventListener("click",()=>{
        const popup = document.createElement("div");

        popup.style.position="fixed";
        popup.style.top="0";
        popup.style.left="0";
        popup.style.width="100%";
        popup.style.height="100%";
        popup.style.background="rgba(0,0,0,0.9)";
        popup.style.display="flex";
        popup.style.justifyContent="center";
        popup.style.alignItems="center";
        popup.style.zIndex="9999";

        const image = document.createElement("img");
        image.src = img.src;
        image.style.maxWidth="90%";
        image.style.maxHeight="90%";

        popup.appendChild(image);

        popup.addEventListener("click",()=>{
            popup.remove();
        });

        document.body.appendChild(popup);
    });
});

// Console Message
console.log("Shree Furnichar Website Loaded Successfully");
