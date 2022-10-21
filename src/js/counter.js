let counter = 0;

const increaseButton = document.getElementById('increase-button');
const resetButton = document.getElementById('reset-button');
const decreaseButton = document.getElementById('decrease-button');
const counterText = document.querySelector('.counter');

function increaseCounter(){
    counter++;
}

function decreaseCounter(){
    counter--;
}

function resetCounter(){
    counter = 0;
}

function showCounter(){
    counterText.textContent = counter;
    console.log(counter);
}

increaseButton.addEventListener("click",
    () => {
        increaseCounter();
        showCounter();
    }
);

resetButton.addEventListener("click",
    () => {
        resetCounter();
        showCounter();
    }
);

decreaseButton.addEventListener("click",
    () => {
        decreaseCounter();
        showCounter();
    }
);