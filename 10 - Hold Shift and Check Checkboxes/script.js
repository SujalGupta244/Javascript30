const inputs = document.querySelectorAll('.item input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        inputs.forEach(input =>{
            if(input == this || input == lastChecked){
                inBetween = !inBetween;
                // console.log(input)
            }
            if(inBetween){
                input.checked = true;
            }
        })   
        // console.log(this,this.checked);
    }
    lastChecked = this;
}

inputs.forEach(input =>{
    input.addEventListener('click',handleCheck)
})


// inputs.forEach(input =>{
//     input.addEventListener('click',(e)=>{
//         let inBetween = false;
//         if(e.shiftKey && e.currentTarget.checked){
//             inputs.forEach(input =>{
//                 if(input == e.currentTarget || input == lastChecked){
//                     inBetween = !inBetween;
//                     // console.log(input)
//                 }
//                 if(inBetween){
//                     input.checked = true;
//                 }
//             })   
//             // console.log(this,this.checked);
//         }
//         lastChecked = e.currentTarget;
//     })
// })

























