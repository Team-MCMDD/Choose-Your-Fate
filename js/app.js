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
const section = document.getElementById('startButton');
section.appendChild(startButton);
startButton.textContent = 'start';

function makeElement () {
    
}


function homepage () {
    const header = document.getElementById('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'CHOOSE YOUR FATE'
    header.appendChild(h1);

    const header2 = document.getElementById('header2')
    const h2 = document.createElement('h2');
    header2.appendChild(h2);
    h2.textContent = 'Coding Bootcamp: Enter If You Dare';
}

homepage();
