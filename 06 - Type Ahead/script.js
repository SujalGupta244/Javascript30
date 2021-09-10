const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(blob => {
        return blob.json();
    },
    networkError =>{
        console.log(networkError.message)
    })
    .then(data => {
        cities.push(...data);
        // console.log(cities)
    })

function findMatches(wordToMatch,cities){
    return cities.filter(place =>{
        const regex =  new RegExp(wordToMatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
    
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place =>{
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class='hl'>${this.value}</span>`);
        return `
        <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('')
    suggestions.innerHTML = html;
    if(this.value == ''){
        suggestions.innerHTML = '';
    };
    // const name = document.querySelector('.name');
    // if(name.textContent.match(highL)){
    //     const span = document.createElement('span');
    //     span.classList.add('hl')
    //     span.textContent = name.innerText;
    //     name.appendChild(span);
    // }
    console.log(matchArray);
}

searchInput.addEventListener('change',displayMatches)
searchInput.addEventListener('keyup',displayMatches)





// const getData = ()=>{
//     const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//     fetch(endpoint,{cache: 'no-cache'})
//   .then(response =>{
//     if(response.ok){
//       // renderJsonResponse(response)
//       return response.json()
//     }
//     throw new Error('Request failed!')
//   },
//   networkError =>{
//     console.log(networkError.message)
//   })
//   .then(jsonResponse =>{
//     let arr = jsonResponse;
//     arr = arr.map(item =>{
//         return `${item.city} ${item.state} ${item.population}`;
//     })
//     input.addEventListener('input',()=>{
//         const wordQuery = input.value.toLowerCase();
//         const listItem = document.createElement('li');
//         // console.log(wordQuery)
//         arr = arr.filter(item =>{
//             if(item.includes(wordQuery)){
//                 listItem.textContent = item;
//                 list.appendChild(listItem)
//                 return item;
//             }
//         })
//         console.log(arr);
//     })
//     console.log(arr)
//     })

// }

// getData()





















