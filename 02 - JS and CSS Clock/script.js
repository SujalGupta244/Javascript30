const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secondDegree = ((seconds / 60) * 360) + 90 ;
    if(secondDegree == 90){
    secondHand.style.transition = `none`;
    }else{
    secondHand.style.transition = `all 0.05s cubic-bezier(0.1,2.7,0.58,1)`;
    }
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = now.getMinutes()
    const minDegree = ((minutes / 60) * 360) + 90 ;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    
    const hours = now.getHours()
    const hourDegree = ((hours /12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(secondDegree, minDegree, hourDegree)    
}


setInterval(setDate, 1000);
setDate()
