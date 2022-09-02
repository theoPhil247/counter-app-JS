//Selecting the value
const value = document.querySelector(".value");

//Selecting each button
const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");
const btnReset = document.querySelector(".reset");

let count = 0;

//Click event for increment
btnIncrement.addEventListener("click", () =>{
    count++;
    value.textContent = count;

    if (count < 0) {
        count = 1;
        value.textContent = count;
    };
});


//Click event for decrement
btnDecrement.addEventListener("click", () =>{
    count--;
    value.textContent = count;

    if (count < 1) {
        value.textContent = 0;
    };

});


//Click event for reset
btnReset.addEventListener("click", () =>{
    count = 0;
    value.textContent = count;
});

