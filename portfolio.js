console.log("hi iam amgad");
///////////////////////////////////////////////////////////////
let all_li = document.querySelectorAll("li");
all_li.forEach(li => {
li.onclick = function () {
all_li.forEach(item => {
    item.removeAttribute("active");
    item.removeAttribute("active_a"); // ← أهو ده المهم
});
li.setAttribute("active", "");
updateIcons();
};
});
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    let h = window.innerHeight;
    
all_li.forEach(item => item.removeAttribute("active"));
if (y < h - 400) {
all_li[0].setAttribute("active", "");
} else if (y >= h - 400 && y < h * 2 - 100) {
all_li[1].setAttribute("active", "");
} else if (y >= h * 2 - 100  && y < h * 3 ) {
all_li[2].setAttribute("active", "");
} else if (y >= h * 3 ) {
all_li[3].setAttribute("active", "");
}
updateIcons();
});
/////////////////////////////////////////////////////////////// 
window.addEventListener("load", () => { 
    setTimeout(() => { 
        window.scrollTo({ 
            top: 1, 
            behavior: "smooth" 
        }); 
    },0); 
});
///////////////////////////////////////////////////////////////
const items = document.querySelectorAll("li");
items.forEach(li => {
const icon = li.querySelector("lord-icon");
const text = li.querySelector("samp");

if (icon && text) {
text.addEventListener("mouseenter", () => {
    icon.dispatchEvent(new Event("mouseenter"));
});
text.addEventListener("mouseleave", () => {
    icon.dispatchEvent(new Event("mouseleave"));
});
}
});
///////////////////////////////////////////////////////////////
const mediaQuery = window.matchMedia('(max-width: 992px)');
let list = document.querySelector(".list");
let header = document.querySelector("header");
list.onclick = function() {
    if (mediaQuery.matches) {
        header.classList.toggle("open");
        
        if (header.classList.contains("open")) {
        list.classList.remove("fa-list");
        list.classList.add("fa-xmark");
        } else {
        list.classList.remove("fa-xmark");
        list.classList.add("fa-list");
        }
    }
};
////////////////////////////////////////////////////////////////
window.addEventListener("scroll", () => {
    let go_top = document.getElementsByClassName("go_top");
    if (window.scrollY <= window.innerHeight ) {
    go_top[0].classList.remove("visible");
    go_top[0].classList.add("hidden");
    }
    else{
    go_top[0].classList.remove("hidden");
    go_top[0].classList.add("visible");
    }
});
///////////////////////////////////////////////////////////////
window.addEventListener("scroll", () => {
let boxes = document.querySelectorAll(".animation");
let boxes1 = document.querySelectorAll(".animationx");
boxes.forEach(box => {
    let rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
    box.classList.add("visible");
    }
});

boxes1.forEach(box => {
    let rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
    box.classList.add("visible");
    }
});

});


/////////////////////////////////////////////////////////////////

const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const socials = document.querySelectorAll("#social");
const socials1 = document.querySelector("#social1");
const img = document.querySelector(".right_home img");

const icons = {
home: document.querySelector(".home"),
about: document.querySelector(".about"),
portfolio: document.querySelector(".portfolio"),
contact: document.querySelector(".contact")
};

const iconsMap = {
dark: {
home: { active: "https://lottie.host/39b77374-12c4-4578-9c3d-bccdb6bcd46a/IJBm1Aamxh.lottie", normal: "https://lottie.host/86b57c54-2d8e-47c1-b62c-abc2d2488048/u5sIRzxEOl.lottie" },
about: { active: "https://lottie.host/6a6ebd07-0fbd-43a3-8556-dc43dd19afaf/vcj3eEPxgE.lottie", normal: "https://lottie.host/2e135ea5-4c4d-4939-90f4-ccc62a0cf4fe/8ARRC8nZ64.lottie" },
portfolio: { active: "https://lottie.host/f3ceb1be-94ef-4ce2-ae67-9fd5f3cde878/FoHa1OdOPi.lottie", normal: "https://lottie.host/dd0e1bed-2e67-4a74-b3d2-d8225751b745/Sin3C2Dew2.lottie" },
contact: { active: "https://lottie.host/ec9b36c5-87aa-40ee-860d-7b2851c2a529/QZs9JH14rJ.lottie", normal: "https://lottie.host/c372ba3a-040b-450e-8159-2e4d33f58181/xRN9zwUtTU.lottie" }
},
light: {
home: { active: "https://lottie.host/39b77374-12c4-4578-9c3d-bccdb6bcd46a/IJBm1Aamxh.lottie", normal: "https://lottie.host/dc082a8d-1af3-409c-8a76-ac59bea93ba1/5rOQABybqy.lottie" },
about: { active: "https://lottie.host/6a6ebd07-0fbd-43a3-8556-dc43dd19afaf/vcj3eEPxgE.lottie", normal: "https://lottie.host/0ddccdaa-8dc3-4e31-a6e0-4ac5f87929ac/ZjyLGmlE1G.lottie" },
portfolio: { active: "https://lottie.host/f3ceb1be-94ef-4ce2-ae67-9fd5f3cde878/FoHa1OdOPi.lottie", normal: "https://lottie.host/c7d40ed7-37c2-4eca-9040-b421e1ff4422/uPWxNAm6PQ.lottie" },
contact: { active: "https://lottie.host/04149693-2ec6-4573-8ac5-eb06e1f8b055/O1s2kGhMnm.lottie", normal: "https://lottie.host/a5a98db1-31b3-41ef-b621-22c51ad70b3b/IzaizLDbQP.lottie" }
}
};

let currentTheme = "dark";


let li = document.querySelectorAll("li");
li.forEach(i => {
    i.addEventListener("mouseenter", () => {
        if(!i.hasAttribute("active")) i.setAttribute("active_a", "");
    });
    i.addEventListener("mouseleave", () => {
        if(!i.hasAttribute("active")) i.removeAttribute("active_a");
    });
});

function updateIcons() {
const map = iconsMap[currentTheme];
function update(icon, type) {
let parent = icon.parentElement;
let src;
if (parent.hasAttribute("active")) {
    src = map[type].active;
} else if (parent.hasAttribute("active_a")) {
    src = map[type].active;
} else {
    src = map[type].normal;
}

if (icon.getAttribute("src") !== src) {
    icon.setAttribute("src", src);
}

}
update(icons.home, "home");
update(icons.about, "about");
update(icons.portfolio, "portfolio");
update(icons.contact, "contact");
}

function enableDarkMode() {
    document.documentElement.style.setProperty('--main-color', '#25303f'); 
    document.documentElement.style.setProperty('--header-color', '#1c2737');  
    document.documentElement.style.setProperty('--four-color', '#293341');  
    document.documentElement.style.setProperty('--white', 'white'); 
    document.documentElement.style.setProperty('--black', 'black');

    socials.forEach(icon => icon.setAttribute("colors", "primary:#ffffff,secondary:#22e7a1"));
    socials1.setAttribute("colors", "primary:#22e7a1,secondary:#ffffff");

    img.onmouseenter = () => img.style.filter = "drop-shadow(0 5px 10px #f9fafb5d)";
    img.onmouseleave = () => img.style.filter = "drop-shadow(0 5px 10px transparent)";

    moonIcon.style.display = "block"; 
    sunIcon.style.display = "none";

    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
    updateIcons();
}

function enableLightMode() {
    document.documentElement.style.setProperty('--main-color', '#e8f0f9'); 
    document.documentElement.style.setProperty('--header-color', '#f4f7fb');  
    document.documentElement.style.setProperty('--four-color', '#dddddd'); 
    document.documentElement.style.setProperty('--white', 'black'); 
    document.documentElement.style.setProperty('--black', 'white'); 

    socials.forEach(icon => icon.setAttribute("colors", "primary:#000000,secondary:#138b61"));
    socials1.setAttribute("colors", "primary:#138b61,secondary:#000000");

    img.onmouseenter = () => img.style.filter = "drop-shadow(0 5px 10px rgb(27, 27, 27))";
    img.onmouseleave = () => img.style.filter = "drop-shadow(0 5px 10px transparent)";

    moonIcon.style.display = "none"; 
    sunIcon.style.display = "block";

    currentTheme = "light";
    localStorage.setItem("theme", "light");
    updateIcons();
}

sunIcon.addEventListener("click", enableDarkMode);
moonIcon.addEventListener("click", enableLightMode);

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "light") enableLightMode();
    else enableDarkMode();
    updateIcons(); 
});

setInterval(updateIcons, 100);

////////////////////////////////////////////////////////////////
const infos = document.querySelectorAll('.info');
infos.forEach(info => {
const icon = info.querySelector('lord-icon');
info.addEventListener('mouseenter', () => {
    icon.setAttribute('trigger', 'loop');
});
info.addEventListener('mouseleave', () => {
    icon.setAttribute('trigger', 'none'); 
});
});