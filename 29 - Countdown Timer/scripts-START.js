let countdown;

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + (seconds*1000);
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/ 1000);
        if(secondsLeft < 0){
            clearInterval(countdown);
            // return;
        }
        // console.log(secondsLeft);
        displayTimeLeft(secondsLeft)
    },1000);
    // console.log({now,then});
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
    // document.title = display;
    timerDisplay.textContent = display;
    // console.log({minutes, remainderSeconds});
}

function displayEndTime(timeStamp){
    const end = new Date(timeStamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back at ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes}`; 
}

function startTimer(){
    let seconds = parseInt(this.dataset.time);
    timer(seconds);
    // console.log(this);
}


buttons.forEach(btn =>{
    btn.addEventListener('click',startTimer);
})

// const form = document.querySelector('[name="minutes"]')
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const minutes = this.minutes.value;
    const seconds = minutes * 60;
    timer(seconds);
    this.reset();
    // console.log(minutes)
})




















// const timeBtns = document.querySelectorAll('.timer__button');
// const form = document.querySelector('#custom');
// const display = document.querySelector('.display');
// const timeLeft = display.querySelector('h1');
// const timeEnd = display.querySelector('p');
// let count;

// function displayTime(e){
//     // const now = new Date();
//     // const oneMinute = 60;
//     clearInterval(count)
//     const oneSecond = 1;
//     const time = this.dataset.time;
//     let futureTime = time;
//     let minute = Math.floor(time/60); 
//     let seconds = time % 60;
//     if(seconds < 10){
//         seconds = `0${seconds}`;
//     }
//     timeLeft.textContent = `${minute}:${seconds}`;
//     count = setInterval((time) =>{
//         futureTime --;
//         // futureTime--;
//         minute = Math.floor(futureTime/60); 
//         seconds = futureTime % 60;
//         timeLeft.innerText = `${minute}:${seconds}`;
//         console.log(futureTime,time,minute,seconds);
//         // console.log(time);
//     },1000, time);
//     // setInterval(changeTime,1000,time)
//     console.log(time,e.currentTarget)
        
//     timeBtns.forEach(btn =>{
//         btn.removeEventListener('click',displayTime,true);
//     })  
// }

// function changeTime(time){
//     time--;
//     minute = Math.floor(time/60); 
//     seconds = time % 60;
//     timeLeft.innerText = `${minute} : ${seconds}`;
//     console.log(time,minute,seconds);
// }


// timeBtns.forEach(btn =>{
//     btn.addEventListener('click', displayTime);
// })



























