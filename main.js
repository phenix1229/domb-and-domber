function appendToUl(element){
    const ul = document.querySelector('ul');
    const element = document.querySelector('element');
    ul.appendChild(element);
}

function appendToLorem(element){
    const lorem = document.querySelector('#lorem');
    const element = document.querySelector('element');
    lorem.appendChild(element);
}

function newLi(text){
    const newLi = document.createElement('li');
    return newLi.innerText = text;
}

function appendImg(img, sourceStr){

}

