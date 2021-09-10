const panels = document.querySelectorAll('.panel')

function toggleActive(e){
    if(e.propertyName.includes('flex-grow')){
        this.classList.toggle('open-active')
    }
    // console.log(e)
}

function toggleOpen(){
    this.classList.toggle('open');
}

panels.forEach(panel =>{
    panel.addEventListener('click', toggleOpen);
})

panels.forEach(panel =>{
    panel.addEventListener('transitionend',toggleActive);
})





























