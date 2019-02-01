const foodArray = ['olive','steel','copper','gold','cobalt'];
const feedButtonContainer = document.getElementById('feed-button-container');

function feedMonster(food) {
    
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
