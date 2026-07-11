// -------------------------------
// Loading Screen
// -------------------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
});

// -------------------------------
// Passcode
// -------------------------------
function checkPassword(){

    const pass = document.getElementById("password").value;

    if(pass === "100226"){

        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("website").style.display = "block";

        createBurst();

    }else{

        document.getElementById("error").innerHTML =
        "Wrong passcode ❤️";

    }

}

// -------------------------------
// Music
// -------------------------------
const button = document.getElementById("musicButton");
const song = document.getElementById("song");

button.addEventListener("click",()=>{

    if(song.paused){

        song.play();
        button.innerHTML="Pause Music ❤️";

    }else{

        song.pause();
        button.innerHTML="Play Music ❤️";

    }

});

// -------------------------------
// Floating Hearts
// -------------------------------

document.addEventListener("click",(e)=>{

    if(document.getElementById("website").style.display==="block"){

        createHeart(e.clientX,e.clientY);

    }

});

function createHeart(x,y){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=x+"px";
    heart.style.top=y+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

// -------------------------------
// Heart Burst After Unlock
// -------------------------------

function createBurst(){

    for(let i=0;i<30;i++){

        setTimeout(()=>{

            createHeart(

                Math.random()*window.innerWidth,

                Math.random()*window.innerHeight

            );

        },i*80);

    }

}

// -------------------------------
// Fade In Sections
// -------------------------------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="1s";

observer.observe(section);

});