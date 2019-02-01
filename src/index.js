const foodArray = ['olive','steel','copper','gold','cobalt'];
const feedButtonContainer = document.getElementById('feed-button-container');
const danceButtonContainer = document.getElementById('dance-button-container');

function feedMonster(food) {
    const bodySegment = document.createElement('span');
    const monsterContainer = document.getElementById('monster-container');
    bodySegment.classList.add('segment',food);
    monsterContainer.appendChild(bodySegment);
}


for(let i = 0; i < foodArray.length; i++) {
    const food = foodArray[i];
    const foodButton = document.createElement('button');
    foodButton.textContent = food;
    foodButton.value = food;
    foodButton.classList.add(food);

    foodButton.addEventListener('click', function() {
        feedMonster(food);
    });

    feedButtonContainer.appendChild(foodButton);
}
