function playSound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
    // console.log(audio)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>{
    key.addEventListener('transitionend', removeTransition)
})

function removeTransition(e){
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing')
    // console.log(e.propertyName)
}

window.addEventListener('keydown',playSound);





// const keys = document.querySelectorAll('.key');
// const aud = document.querySelectorAll('audio');


// window.addEventListener('keydown',(e)=>{
//     let current = e.keyCode;
//     // console.log(current)
//     drumBeats(current);
// })

// function drumBeats(code){
//     keys.forEach(key =>{
//             let data = key.dataset.key;
//             aud.forEach(sound =>{
//                 let audioData = sound.dataset.key;
//                 if(audioData == code && code == data){
//                     sound.play()
//                     // console.log(audioData,sound)
//                 }
//             })
//             if(data == code){
//                 key.classList.add('playing')
//                 setTimeout(()=>{
//                     key.classList.remove('playing')
//                 },400);
//             //     console.log(data)
//             }
//     })
// }
