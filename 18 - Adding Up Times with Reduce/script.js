const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins,secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        // console.log((mins * 60) + secs)
    })
    .reduce((total,time) =>{
        return total + time;
    },0)

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
let minutesLeft = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;


console.log(seconds/60)















