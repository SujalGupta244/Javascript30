const triggers = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');
const background = document.querySelector('.dropdownBackground');


function handleEnter(e){
    this.classList.add('trigger-enter');
    setTimeout(() => {
        this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')
        // if(this.classList.contains('trigger-enter')){
        //     this.classList.add('trigger-enter-active');
        // }
    },150)
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const divCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords ={
        width : divCoords.width,
        height : divCoords.height,
        top : divCoords.top - navCoords.top,
        left : divCoords.left - navCoords.left,
    }
    // background.style.top = linkCoords.top;
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}px,${coords.top}px)`;
    // dropdown.classList.add('')
    console.log('enter');
}

function handleLeave(e){
    // const dropdown = this.querySelector('.dropdown');
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
    console.log('leave');
}



triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave))























// const nav = document.querySelector('.top');
// const list = document.querySelector('.cool');
// const links = document.querySelectorAll('.cool li');
// const dropdowns = document.querySelectorAll('.dropdown');
// const dropBack = document.querySelector('.dropdownBackground');

// function showDropdown(e){
//     let div = e.currentTarget.querySelector('.dropdown');
//     let divCoords = div.getBoundingClientRect();
//     // console.log(e.currentTarget.nextElementSibling);
//     // dropdowns.forEach(dropdown =>{
//     //     dropdown.classList.add('trigger-enter')
//     // })
//     const coords ={
//         width : divCoords.width,
//         height : divCoords.height,
//         top : divCoords.top,
//         left : divCoords.left,
//     }
//     // highlight.style.top = linkCoords.top;
//     dropBack.style.width = `${coords.width}px`;
//     dropBack.style.height = `${coords.height}px`;
//     dropBack.style.transform = `translate(${coords.left}px,${coords.top}px)`;
//     dropBack.classList.add('open');
//     list.classList.add('trigger-enter','trigger-enter-active');
// }

// links.forEach(link =>{
//     link.addEventListener('mousemove',showDropdown)
// })




























