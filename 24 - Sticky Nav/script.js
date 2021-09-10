const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
        // nav.style.position = 'sticky';
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
    console.log(topOfNav,window.scrollY)
}













window.addEventListener('scroll',fixNav);













// const logo = document.querySelector('.logo');
// function stickNav(){
//     if(Math.floor(nav.offsetTop - window.scrollY) == 0){
//         // console.log(Math.floor(nav.offsetTop - window.scrollY),window.scrollY);
//         nav.style.position = 'sticky';
//         logo.style.maxWidth = `225px`;
//     }else{
//         // nav.style.position = 'relative';
//         logo.style.maxWidth = 0;
//     }
// }

// window.addEventListener('scroll',stickNav);

























