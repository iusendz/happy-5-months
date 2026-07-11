// ==========================================
// ELEMENTS
// ==========================================

const loadingScreen = document.getElementById("loadingScreen");
const lockScreen = document.getElementById("lockScreen");
const website = document.getElementById("website");

const password = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");

const music = document.getElementById("song");
const musicButton = document.getElementById("musicButton");
const floatingPlay = document.getElementById("floatingPlay");

const petalContainer = document.getElementById("petalContainer");
const heartContainer = document.getElementById("heartContainer");
const sparkleContainer = document.getElementById("sparkleContainer");

// ==========================================
// LOADING SCREEN
// ==========================================

window.addEventListener("load", () => {

setTimeout(() => {

loadingScreen.style.opacity = "0";

setTimeout(() => {

loadingScreen.style.display = "none";

},1000);

},2000);

});

// ==========================================
// PASSWORD
// ==========================================

unlockButton.addEventListener("click", unlockWebsite);

password.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

unlockWebsite();

}

});

function unlockWebsite(){

if(password.value==="100226"){

lockScreen.style.opacity="0";

setTimeout(()=>{

lockScreen.style.display="none";

website.style.display="block";

music.play().catch(()=>{});

startPetals();

createHeartBurst();

observeSections();

},900);

}else{

errorMessage.textContent="Wrong Passcode ❤️";

password.value="";

password.focus();

lockScreen.classList.add("shake");

setTimeout(()=>{

lockScreen.classList.remove("shake");

},500);

}

}

// ==========================================
// MUSIC
// ==========================================

musicButton.addEventListener("click",toggleMusic);

floatingPlay.addEventListener("click",toggleMusic);

function toggleMusic(){

if(music.paused){

music.play();

musicButton.innerHTML="❚❚";

floatingPlay.innerHTML="❚❚";

}else{

music.pause();

musicButton.innerHTML="▶";

floatingPlay.innerHTML="♡";

}

}

// ==========================================
// FALLING PETALS
// ==========================================

function startPetals(){

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.opacity=(0.4+Math.random()*0.6);

petalContainer.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},350);

}

// ==========================================
// HEARTS
// ==========================================

document.addEventListener("click",(e)=>{

if(website.style.display==="block"){

createHeart(e.clientX,e.clientY);

}

});

function createHeart(x,y){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

function createHeartBurst(){

for(let i=0;i<35;i++){

setTimeout(()=>{

createHeart(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight

);

},i*60);

}

}

// ==========================================
// MOUSE SPARKLES
// ==========================================

document.addEventListener("mousemove",(e)=>{

if(website.style.display!=="block") return;

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},800);

});

// ==========================================
// SCROLL REVEAL
// ==========================================

function observeSections(){

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(
".photoSection,.letterSection,.anniversarySection,.musicSection,.endingSection"
).forEach(section=>{

section.classList.add("fadeUp");

observer.observe(section);

});

}

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

const paragraphs = document.querySelectorAll("#typedLetter p");

paragraphs.forEach((paragraph)=>{

const text = paragraph.textContent;

paragraph.textContent = "";

paragraph.dataset.text = text;

});

function typeParagraph(element,speed=20){

const text = element.dataset.text;

let i = 0;

const timer = setInterval(()=>{

element.textContent += text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},speed);

}

const letterObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const ps = entry.target.querySelectorAll("p");

ps.forEach((p,index)=>{

setTimeout(()=>{

if(p.textContent===""){

typeParagraph(p);

}

},index*700);

});

letterObserver.unobserve(entry.target);

}

});

},{
threshold:.35
});

const letter = document.querySelector(".letterPaper");

if(letter){

letterObserver.observe(letter);

}

// ==========================================
// MUSIC ENDED
// ==========================================

music.addEventListener("play",()=>{

musicButton.innerHTML="❚❚";

floatingPlay.innerHTML="❚❚";

});

music.addEventListener("pause",()=>{

musicButton.innerHTML="▶";

floatingPlay.innerHTML="♡";

});

// ==========================================
// AUTO FOCUS
// ==========================================

window.addEventListener("load",()=>{

setTimeout(()=>{

password.focus();

},1200);

});

// ==========================================
// PREVENT DRAGGING IMAGE
// ==========================================

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("dragstart",(e)=>{

e.preventDefault();

});

});

// ==========================================
// END
// ==========================================

console.log(
"%cHappy 5 Months ❤️",
"color:#ff4d95;font-size:28px;font-weight:bold;"
);

console.log(
"%cMade with love by Ndzhaka ❤️",
"color:#ff8ab8;font-size:16px;"
);
