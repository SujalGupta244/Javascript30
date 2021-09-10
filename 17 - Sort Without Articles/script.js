const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector('#bands');


function strip(bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}

const sortBands = bands.sort((a,b) =>{
    return (strip(a) > strip(b)) ? 1 : -1;
})

console.log(sortBands);

function showItems(){
    list.innerHTML = sortBands.map(item =>{
        return `<li>${item}</li>`;
    }).join('');
}

showItems()






















// const change = bands.sort((a,b) =>{
//     let reg = /^\b(a |an |the )\b/g;
//     // a = a.replace(reg, "").trim;
//     // b = b.replace(reg, "").trim;
//     return a.replace(reg,'').trim - b.replace(reg,'').trim ;
// });







