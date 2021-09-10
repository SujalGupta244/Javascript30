const imgs = document.querySelectorAll('.slide-in');
// console.log(imgs)


function checkSlide(e){
    // console.log(window.scrollY);
    imgs.forEach(img =>{
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        const imgBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;
        // console.log(slideInAt,imgBottom)
        if(isHalfShown && isNotScrolledPast){
            img.classList.add('active')
        }else{
            img.classList.remove('active')
        }
    })
    // console.log(e)
}

window.addEventListener('scroll',debounce(checkSlide))

// console.dir(imgs)

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}












// window.addEventListener('scroll',()=>{
//     // const windowHeight = window.pageYOffset;
//     // console.log(window.scrollY);
//     imgs.forEach(img =>{
//         const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
//         const imgBottom = img.offsetTop + img.height;
//         const isHalfPast = slideInAt > img.offsetTop;
//         const isNotScrollPast = window.screenY < imgBottom; 
//         if(isHalfPast && isNotScrollPast){
//             img.classList.add('active');
//             // console.log(slideInAt,img.offsetTop , imgBottom)
//         }else{
//             img.classList.remove('active');
//         }
//     })
// })






