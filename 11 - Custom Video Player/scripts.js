const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen');


let mousedown = false;
let bigScreen = false;

function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    // console.log(icon)
}

function skipVideo(){
    video.currentTime += parseFloat(this.dataset.skip);
    // console.log(video.currentTime)
    // if(this.dataset.skip == -10){
    //     video.currentTime = video.currentTime - 10;
    //     // console.log(video.currentTime)
    // }
    // if(this.dataset.skip == 25){
    //     video.currentTime = video.currentTime + 25;
    //     // console.log(video.currentTime)
    // }
}


function handleRangeUpdate(){
    video[this.name] = this.value;
    // console.log(this.value,this.name);
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

function changeSize(){
    bigScreen = !bigScreen;
    if(bigScreen){
        fullScreen.textContent = 'S'
        player.style.maxWidth = `${window.innerWidth}px`;
        player.style.width = `${window.innerWidth}px`;
        player.style.height = `${window.innerHeight}px`
    }
    if(!bigScreen){
        fullScreen.textContent = 'F';
        player.style.maxWidth = `750px`;
        player.style.width = `650px`;
        player.style.height = `368px`;
    }
}


video.addEventListener('click',togglePlay);

video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate',handleProgress)

toggle.addEventListener('click',togglePlay);


skipButtons.forEach(btn =>{
    btn.addEventListener('click',skipVideo)
})

ranges.forEach(range =>{
    range.addEventListener('change',handleRangeUpdate)
})
ranges.forEach(range =>{
    range.addEventListener('mousemove',handleRangeUpdate)
})

progress.addEventListener('click',scrub)
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e))
// progress.addEventListener('mousemove',()=>{
//     if(mousedown){
//         scrub();
//     }
// })
progress.addEventListener('mousedown',()=>{
    mousedown = true;
})
progress.addEventListener('mouseup',()=>{
    mousedown = false;
})

fullScreen.addEventListener('click',changeSize);

















