function appendToUl(element){
    const ul1 = document.querySelector('ul');
    ul1.appendChild(element);
}

function appendToLorem(element){
    const lorem = document.querySelector('#lorem');
    lorem.appendChild(element);
}

function makeNewLi(newText){
    const newLi = document.createElement('li');
    newLi.innerText = newText;
    return newLi;
}

function addImg(img, sourceStr){
    const img1 = document.createElement('img');
    img1.setAttribute('alt', img);
    img1.setAttribute('src', sourceStr);
}

function assignClass(thing1, thing2){

}

function newElementAndID(tag, newID){

}

function strIDColor(colorStr, idStr){

}



appendToUl(makeNewLi('i am here'));
appendToUl(makeNewLi('so am i'));
appendToUl(makeNewLi('don\'t forget me'));
