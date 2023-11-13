/* TO DO

Point system: Conditional statement?

Wireframe 1 rendering
Event listeners

Wireframe 2 rendering
Event listeners

Wireframe 3 rendering
Event listeners

Wireframe 4 rendering

Two functions for rendering

Conditional statement for round numbers: if or switch

Results page: local storage


*/

// h1 header
// button
// h2 header

const startButton = document.createElement('button');

makeElement(startButton, 'startButton');
startButton.textContent = 'start';
startButton.addEventListener('click', initGame)

function makeElement (element, parentElementIdString) {
    parentElement = document.getElementById(parentElementIdString);
    parentElement.appendChild(element);

}


function homepage () {

    const h1 = document.createElement('h1');
    makeElement(h1, 'header');
    h1.textContent = 'CHOOSE YOUR FATE';


    const h2 = document.createElement('h2');
    makeElement(h2, 'header2');
    h2.textContent = 'Coding Bootcamp: Enter If You Dare';
}

function initGame () {

}


homepage();
