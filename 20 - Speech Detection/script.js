window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';


let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);


recognition.addEventListener('result', e =>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p)
    }
    console.log(transcript,e.results[0].isFinal);
})

recognition.addEventListener('end', recognition.start)


recognition.start();
















// function getAudio(){
//     navigator.mediaDevices.getUserMedia({audio: true,video: false})
//     .then(localMediaStream =>{
//         console.log(localMediaStream);
//     })
// }

// getAudio()





















