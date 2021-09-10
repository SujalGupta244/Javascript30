const canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if(hue > 360){
        hue = 0;
    }

    // ctx.lineWidth++;
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }

    // console.log(e)
}

canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;

})

canvas.addEventListener('mouseup',()=>{
    isDrawing = false;
})

canvas.addEventListener('mouseout',()=>{
    isDrawing = false;
})

canvas.addEventListener('mousemove',draw)































// const num = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

// function ran(){
//     return Math.floor(Math.random() * num.length);
// }

// function color(){
//     let col = '';
//     for(let i = 0 ; i < 3; i++){
//         col += num[ran()];
//     }
//     if(col <= 255){
//         return col;
//     }
// }

// // console.log(color())


// canvas.addEventListener('mousedown',(e)=>{
//     // console.log(e.currentTarget,'mousedown')
// })
// canvas.addEventListener('mouseover',(e)=>{
//     // console.log(e.currentTarget,'mouseover')
// })
// canvas.addEventListener('mousemove',(e)=>{
//     const X = e.pageX;
//     const Y = e.pageY;

//     ctx.fillStyle=`rgb(${color()},${color()},${color()})`;
//     for(var i = 0; i < 20; i++) {
    
//         fillCircle(X,Y,i*2);
//     }
    
//     console.log(X,Y,color())
// })


// function fillCircle(x, y, radius) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.fill();
//     }















