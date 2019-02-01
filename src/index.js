const foodArray = ['orc-forge','steel','copper','gold','cobalt'];
const feedButtonContainer = document.getElementById('feed-button-container');
const danceButtonContainer = document.getElementById('dance-button-container');

function createButton(foodCategory, type, parent) {
    const newButton = document.createElement('button');
    newButton.textContent = foodCategory;
    newButton.value = foodCategory;
    switch (type) {
        case 'food':
            newButton.classList.add(foodCategory);
            newButton.addEventListener('click', function(){
                feedMonster(foodCategory);
            })
            
            break;

        case 'dance':
            newButton.classList.add(foodCategory);
            newButton.addEventListener('click', function(){
                danceAction(foodCategory);
            })
            break;
    }
    parent.appendChild(newButton);
}

function feedMonster(foodCategory) {
    const bodySegment = document.createElement('span');
    const monsterContainer = document.getElementById('monster-container');
    bodySegment.classList.add('segment',foodCategory);
    monsterContainer.appendChild(bodySegment);
}

function danceAction(foodCategory) {
    //look for dancing parts, remove
    const dancingParts = document.querySelectorAll('.dance');
    const selected = document.querySelectorAll('.segment.'+ foodCategory);
    //Look for selected parts, make dance
    for(let i=0; i<dancingParts.length; i++) {
        dancingParts[i].classList.remove('dance');
    }
    for(let i=0; i<selected.length; i++) {
        selected[i].classList.add('dance');
    }
}


for(let i = 0; i < foodArray.length; i++) {
    const food = foodArray[i];
    createButton(food,'food',feedButtonContainer);
    createButton(food,'dance',danceButtonContainer);
}
