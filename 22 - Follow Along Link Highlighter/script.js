// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);
highlight.style.opacity = 0;



function highlightLinks(){
    // this.appendChild(highlight)
    const linkCoords = this.getBoundingClientRect();
    const coords ={
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,
        left : linkCoords.left + window.scrollX,
    }
    // highlight.style.top = linkCoords.top;
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
    highlight.style.opacity = 1;
    // console.log(highlight.style.transform,highlight.style.width,coords.top,coords.left)
}

triggers.forEach(a =>{
    a.addEventListener('mouseenter',highlightLinks)
})


















// const aTag = document.querySelectorAll('a');

// console.log(aTag)

// function mouseHover(e){
//     console.log(e,e.offsetX,e.offsetY,e.target.offsetLeft,e.target.offsetTop)
//     let {offsetX : x, offsetY : y} = e
//     x = x + e.target.offsetLeft;
//     y = y + e.target.offsetTop;
//     if(e.x == x && e.y == y) {
//         // this.classList.add('highlight')
//         // aTag.forEach(a =>{
//         //     a.classList.add('highlight');
//         // })
//         this.classList.add('highlight');
//     }
//     console.log(x,e.x,y,e.y)
//     // this.classList.remove('highlight');
// }
// aTag.forEach(a =>{
//     a.addEventListener('mousemove',mouseHover)
// })
// window.addEventListener('mousemove',mouseHover);
















