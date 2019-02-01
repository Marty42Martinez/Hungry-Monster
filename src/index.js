const foodArray = ['olive','steel','copper','gold','cobalt'];
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
            break;
    }
    parent.appendChild(newButton);
}

function feedMonster(food) {
    const bodySegment = document.createElement('span');
    const monsterContainer = document.getElementById('monster-container');
    bodySegment.classList.add('segment',food);
    monsterContainer.appendChild(bodySegment);
}


for(let i = 0; i < foodArray.length; i++) {
    const food = foodArray[i];
    createButton(food,'food',feedButtonContainer);
}
