const foodArray = ['orc-forge', 'steel', 'copper', 'gold', 'cobalt'];
const feedButtonContainer = document.getElementById('feed-button-container');
const danceButtonContainer = document.getElementById('dance-button-container');

function createButton(buttonCategory, type, parent) {
    const newButton = document.createElement('button');
    newButton.textContent = buttonCategory;
    newButton.value = buttonCategory;
    switch (type) {
        case 'food':
            newButton.classList.add(buttonCategory);
            newButton.addEventListener('click', function(){
                feedMonster(buttonCategory);
            });
            newButton.addEventListener('mouseover', function() {
                changeMouth('open');
            });
            newButton.addEventListener('mouseout', function() {
                changeMouth('close');
            });
            break;

        case 'dance':
            newButton.classList.add(buttonCategory);
            newButton.addEventListener('click', function(){
                danceAction(buttonCategory);
            });
            break;
        // case 'wave':
        //     newButton.classList.add(buttonCategory);
        //     newButton.addEventListener('click', function() {
        //         bodyWave('single');
        //     });
        //     break;
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

function changeMouth(state) {
    const mouth = document.getElementById('mouth');
    if(state === 'open') {
        // mouth.classList.add('open-mouth');
        mouth.style.height = '38px';
        mouth.style.borderRadius = '30px 30px 15px 15px';
    } else {
        mouth.style.height = '12px';
        mouth.style.borderRadius = '0px 0px 50px 50px';
    }
}


for(let i = 0; i < foodArray.length; i++) {
    const food = foodArray[i];
    createButton(food,'food',feedButtonContainer);
    createButton(food,'dance',danceButtonContainer);
}
//createButton('wave','wave',danceButtonContainer);
