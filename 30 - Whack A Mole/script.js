const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const hightScore = document.querySelector('.high')
let lastHole;
let timeUp = false;
let score = 0;
let highest = 0;


function randTime(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        console.log('this is the same one');
        return randomHole(holes);
    };

    lastHole = hole;
    return hole;
}

function peek(){
    const time =  randTime(1000,2000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) peek();
    },time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peek();
    setTimeout(()=>{
        timeUp = true;
        hightScore.textContent = JSON.parse(localStorage.getItem('highest'));
    },15000)
}

function bonk(e){
    if(!e.isTrusted) return; // if click is fake
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
    if(score > highest){
        highest = score;
    }
    localStorage.setItem('highest',JSON.stringify(highest));
}

moles.forEach(mole =>{
    mole.addEventListener('click',bonk);
})

window.addEventListener('load',()=>{
    hightScore.textContent = JSON.parse(localStorage.getItem('highest'))
})

























// const holes = document.querySelectorAll('.hole');
// const scoreBoard = document.querySelector('.score');
// const moles = document.querySelectorAll('.mole');

// function randomNum(elm){
//     const arr = Array.from(elm);
//     const rand =  Math.floor(Math.random() * arr.length); 
//     return rand;
// }

// let countDown;
// let count = 0;

// function startGame(){
//     count = 0;
//     scoreBoard.textContent = count;
//     const arr = Array.from(holes);
//     countDown = setInterval(()=>{
//         arr.forEach(item =>{
//             if(item.classList.contains('up')){
//                 item.classList.remove('up');
//             }
//             if(item.parentElement.classList.contains('clicked')){
//                 console.log(true);
//             }
//         })
//         arr[randomNum(arr)].classList.add('up');
//         // console.log(randomNum(holes))
//         // console.log(arr[randomNum(arr)]);
//     },500)

//     setTimeout(()=>{
//         clearInterval(countDown)
//         arr.forEach(item =>{
//             // if(item.classList.contains('up')){
//             item.classList.remove('up');
//             // }
//         })
//     },20000)
//     moles.forEach(mole =>{
//         mole.addEventListener('click',incScore);
//     })
// }

// function incScore(){
//     count++;
//     scoreBoard.textContent = count;
//     console.log(this);
//     this.parentElement.classList.add('clicked');
// }


















