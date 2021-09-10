const slider = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(e.pageX,slider.offsetLeft,slider.scrollLeft);
})
slider.addEventListener('mouseleave',()=>{
    isDown = false;
    slider.classList.remove('active')
})
slider.addEventListener('mouseup',()=>{
    isDown = false;
    slider.classList.remove('active')
})
slider.addEventListener('mousemove',(e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = (scrollLeft - walk);
    console.log(x,slider.scrollLeft,walk);

})


// const allItems = items.querySelectorAll('.item');
// function selectItem(e){
//     // items.style.transform = `scale(1)`;
//     // items.style.opacity = `0.8`;
//     items.classList.add('active')
// }
// function deselectItem(){
//     items.classList.remove('active')
//     // items.style.transform = `scale(0.98)`;
// }
// allItems.forEach(item => {
//     item.addEventListener('mousedown',selectItem)
//     item.addEventListener('mouseup',deselectItem);
// });





























