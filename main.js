function appendToUl(element){
    const ul = document.querySelector('ul');
    ul.appendChild(element);
}

function appendToLorem(element){
    const lorem = document.querySelector('#lorem');
    lorem.appendChild(element);
}

function makeNewLi(newText){
    const newLi = document.createElement('li');
    newLi.innerText = newText;
    // return liText
}

function appendImg(img, sourceStr){

}

function assignClass(thing1, thing2){

}

function newElementAndID(tag, newID){

}

function strIDColor(colorStr, idStr){

}

text1 = makeNewLi('new li 1');
appendToUl(text1);