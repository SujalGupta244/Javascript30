const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const  walk = 500;

function shadow(e){
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const {offsetWidth : width , offsetHeight : height} = hero;
    let {offsetX : x, offsetY : y} = e;
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    console.log(x,y,e.target.offsetLeft,e.target.offsetTop)
    const xwalk = Math.round((x / width * walk) - (walk / 2));
    const ywalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xwalk}px ${ywalk}px 0 rgba(255,0,255,0.7),
        ${xwalk * -1}px ${ywalk}px 0 rgba(0,255,255,0.7),
        ${ywalk}px ${xwalk * -1}px 0 rgba(0,255,0,0.7),
        ${ywalk * -1}px ${xwalk}px 0 rgba(0,0,255,0.7)`; 

    // console.log(xwalk,ywalk);
}

hero.addEventListener('mousemove',shadow);


















// let count = 0
// function shadow(){
//     count++;
//     this.style.setProperty('text-shadow', `${count}px ${count}px 10px rgba(235,246,67,1)`)
//     // this.style.textshadow = `${count}px ${count}px 10px rgba(235,246,67,0.3)`;
//     console.log(this.style.textshadow)
//     if(count > 300){
//         count = -300;
//     }
// }









