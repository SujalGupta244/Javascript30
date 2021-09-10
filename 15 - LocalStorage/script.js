const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAllBtn = document.querySelector('.checkAll');

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item ={
        text : text,
        done : false
    }
    items.push(item);
    populateList(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    // console.log(this)
    this.reset();
}


function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate,i)=>{
        return `
        <li>
            <input type="checkbox" name="" id="item${i}" data-index="${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
        </li>`
    }).join("");
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    // populateList(items,itemsList);
    // console.log(items[index])
}

function checkAll(){
    const elements = Array.from(this.previousElementSibling.previousElementSibling.children); 
    // console.log(Array.from(this.previousElementSibling.previousElementSibling.children)[0].querySelector('[type="checkbox"]'))
    elements.forEach(el =>{
        let it = el.querySelector('[type="checkbox"]');
        if(it.checked){
            uncheckboxAll()
            this.textContent = JSON.parse(localStorage.getItem('check'));
            // console.log(it)
        }else{
            checkboxAll()
            this.textContent = JSON.parse(localStorage.getItem('check'));
        }
        console.log(it)
    })
    this.textContent = JSON.parse(localStorage.getItem('check'));
}

function uncheckboxAll(){
    items.forEach(item =>{
        item.done = false;
        this.textContent = 'Check All';
        localStorage.setItem('check',JSON.stringify(this.textContent))
        // console.log(item)
        // console.log(this.textContent)
    })
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}

function checkboxAll(){
    items.forEach(item =>{
        item.done = true;
        this.textContent = 'Uncheck All';
        localStorage.setItem('check',JSON.stringify(this.textContent))
        // console.log(item)
        // console.log(this.textContent)
    })
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}

addItems.addEventListener('submit',addItem)
itemsList.addEventListener('click',toggleDone);
checkAllBtn.addEventListener('click',checkAll);
checkAllBtn.textContent = JSON.parse(localStorage.getItem('check'));

populateList(items,itemsList);


















/*
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const input = addItems.querySelector('[type="text"]');
const items = [];

function addItem(e){
    e.preventDefault();
    const inputValue = input.value;
    items.push(inputValue)
    localStorage.setItem('itemList',JSON.stringify(items));
    showItem(inputValue)
}

function showItem(value){
    const li = document.createElement('li');
    li.innerHTML =  `<input type="checkbox" name="${value}">
                    <label for="">${value}</label>`
    itemsList.appendChild(li);

    const checkbox = li.querySelector('[type="checkbox"]');
    const label = li.querySelector('label');

    label.addEventListener('click',checkedItem);
    // console.log(checkbox)
    
}


function showLocalItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(item =>{
            showItem(item);
        })
        itemsList.removeChild(itemsList.querySelectorAll('li')[0])
    }
    // console.log(items)
}

function checkedItem(e){
    const current = e.currentTarget.previousElementSibling;
    if(!current.checked){
        current.checked = true;
    }else{
        current.checked = false;
    }
    // console.log(current)
}


function getLocalStorage(){
    return localStorage.getItem('itemList') 
    ? JSON.parse(localStorage.getItem('itemList')) 
    : []  ; 
}


window.addEventListener('load',showLocalItems)
addItems.addEventListener('submit', addItem)
*/








