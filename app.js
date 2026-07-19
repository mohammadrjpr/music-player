const audio = document.getElementById("audio");

audio.preload="auto";

const playBtn = document.getElementById("play");
const seek = document.getElementById("seek");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

const player = document.querySelector(".player");



playBtn.onclick = ()=>{

    if(audio.paused){

        audio.play();

        playBtn.innerHTML="⏸";

        player.classList.add("playing");

    }

    else{

        audio.pause();

        playBtn.innerHTML="▶";

        player.classList.remove("playing");

    }

};



audio.addEventListener("loadedmetadata",()=>{

    seek.max=Math.floor(audio.duration);

    duration.innerHTML=formatTime(audio.duration);

});



audio.addEventListener("timeupdate",()=>{

    seek.value=audio.currentTime;

    current.innerHTML=formatTime(audio.currentTime);

});



seek.oninput=()=>{

audio.currentTime=seek.value;

};



function formatTime(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10)
sec="0"+sec;

return `${min}:${sec}`;

}



// ثبت PWA

window.addEventListener("load",()=>{

if("serviceWorker" in navigator){

navigator.serviceWorker.register("./service-worker.js");

}

audio.onended=()=>{

playBtn.innerHTML="▶";

player.classList.remove("playing");

}
});