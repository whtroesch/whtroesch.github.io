
let pause = document.getElementById("pause");
let mute = document.getElementById("mute");
let video = document.getElementById("ad_video");
let muted = true;
let paused = false;
let currentTimeInSeconds = 0;
let maxTimeInSeconds = 29;
let mute_img = document.getElementById("mute_img");
let pause_img = document.getElementById("pause_img");


pause.addEventListener("click", function() {

    if (paused == false) {

        video.pause();
        paused = true;
        pause_img.src = "media/play.png";


    } else {

        video.play();
        paused = false;
        pause_img.src = "media/pause.png";
    }

}, false);


video.ontimeupdate = function() {

    measureTime();
};

function measureTime() {

    currentTimeInSeconds = video.currentTime;

    if(currentTimeInSeconds >= maxTimeInSeconds) {

        video.currentTime = 19;
        video.pause();
    }
};