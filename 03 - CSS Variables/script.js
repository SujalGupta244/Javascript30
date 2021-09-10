const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))

























// const img = document.querySelector('img');
// const heading = document.querySelector('.hl');
// const spacing = document.querySelector('#spacing');
// const blur = document.querySelector('#blur');
// const base = document.querySelector('#base');


// window.addEventListener('DOMContentLoaded',()=>{
//     img.style.padding = `${spacing.value}px`;
//     img.style.filter = `blur(${blur.value}px)`;
//     img.style.backgroundColor = `${base.value}`;
//     heading.style.color = `${base.value}`;
//     effects()
// })

// function effects(){
//     spacing.addEventListener('input',()=>{
//         img.style.padding = `${spacing.value}px`;
//         // console.log(spacing.value)
//     })
    
//     blur.addEventListener('input',()=>{
//         img.style.filter = `blur(${blur.value}px)`;
//         // console.log(blur.value)
//     })
    
//     base.addEventListener('input',()=>{
//         img.style.backgroundColor = `${base.value}`;
//         heading.style.color = `${base.value}`;
//         // console.log(base.value)
//     })
// }


















