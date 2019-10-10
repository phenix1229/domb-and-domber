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
    img1.setAttribute('width', '250px');
    return img1;
}

function assignClass(thing1, thing2){
    const class1 = thing1.getAttribute('class')
    thing2.setAttribute('class', class1);
}

function newElementAndID(tag, newId){
    const newItem = document.createElement(tag);
    newItem.setAttribute('id', newId);
    return newItem;
}

function strIDColor(idStr, colorStr){
    document.querySelector('#'+idStr).style.color = colorStr;
}



appendToUl(makeNewLi('i am here'));
appendToUl(makeNewLi('so am i'));
appendToUl(makeNewLi('don\'t forget me'));

appendToLorem(addImg('gh-logo', 'https://image.flaticon.com/icons/svg/25/25231.svg'))
appendToLorem(addImg('ci-logo','https://www.multichannel.com/.image/t_share/MTU0MDYzODU3ODUyMDk4Mjk5/aws-logojpg.jpg'));

const ol1 = document.querySelector('ol');
const olLi =ol1.querySelectorAll('li');
assignClass(olLi[0], olLi[1]);
assignClass(olLi[0], olLi[2]);

strIDColor('heading', 'lightGreen')