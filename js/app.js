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

add text to page 2

*/

const start = 

{
    start: 
    {
        img: 
        [
            'img/Classroom1.jpg'
        ],

        showImage: true,

        text: 
        [       
            "You are a coding student in bootcamp, green and wide-eyed. The day is bright and promising. You have yet to have your soul sucked from your body. But just you wait! Today just might be the day!"
        ],

        nextText: 
        [
            "You realize you still have to study for the exam, but also, your tummy is grumbling."

        ],

        choices: 
        [
            {
                buttonText: "Eat",
                text: "You must nourish your body, you decide to cook yourself a well balanced meal.",
                nextState: 'examTimeFull',
            },

            {
                buttonText: "Study",
                text: 
                    [
                        "You tell Mr. Instructor, ‘I am but a soldier and what I do is follow orders.’ and bid him farewell.  You then go home, open your laptop, and study like the good soldier you are."
                    ],

                nextState: 'examTimePrepared',
            }

        ],

    },

    examTimeFull:
    {
        img: 
        [
            'img/Cooking.jpg'
        ],

        showImage: true,

        text: "Now it is time to take the exam, but with your tummy full you are now ready to sleep off your meal.",

        choices:
            [
                {
                    buttonText: "Take Exam",
                    text: "You crack your knuckles and prioritize the exam before sleep! You are a responsible adult, after all!",
                    nextState: '?'
                },

                {
                    buttonText: "Take a nap",
                    text: "You snuggle into bed and close your eyes and think of your long lost love until you fall asleep.",
                    nextState: '?'
                },
            ]
    },

    examTimePrepared:
    {

        img: 
        [
            'img/Studying.jpg'
        ],

        showImage: true,

        text: "Now it is time to take the exam.  You feel confident, since you studied, but you also feel sleepy.",

        choices:
        [
            {
                buttonText: "Take Exam",
                text: "You crack your knuckles and prioritize the exam before sleep! You are a responsible adult, after all!",
                nextState: '?'
            },

            {
                buttonText: "Take a nap",
                text: "You snuggle into bed and close your eyes and think of your long lost love until you fall asleep.",
                nextState: '?'
            },
        ]
    },
}

// const startobject=new Storyobject (start.start.text, start.img, start.choices, start.choices);

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

function initGame() {
    // Get references to the elements you want to remove
    const header = document.getElementById('header');
    const header2 = document.getElementById('header2');
    const startButton = document.getElementById('startButton');
    // Remove the elements
    header.remove();
    header2.remove();
    startButton.remove();
    // Continue with the rest of your game setup

    generatePicture();
    rendergames(start.start);

    // Source: ChatGPT
}
    
function initOptions () {
    const button = document.createElement('button');
    makeElement(button,'text');
    button.textContent = state.buttonText;
}

function rendergames (state){
    const textcontainer = document.getElementById('text');
    textcontainer.innerHTML = '';
    
    const p = document.createElement('p');
    p.setAttribute('id', 'p');
    makeElement(p,'text');
    p.classList.add('page1');
    p.textContent = state.text;

    const arrow = document.createElement('img')
    arrow.classList.add('pageArrow');
    makeElement(arrow,'text');
    arrow.setAttribute('src', 'img/arrow.jpg');
    arrow.addEventListener('click', function(){
        createChoices(state, state.choices)
    }
    );
    
    const picture = document.querySelector('.page1');

    if (state.showImage){
        picture.setAttribute('src' , state.img);

    }

}
function changeText (state) {
    const p = document.getElementById('p');
    p.textContent = '';
    p.textContent = start.state;


}

function createChoices(state, choices){

    const optionContainer = document.createElement('div');
    makeElement(optionContainer, 'text');
   
    const p = document.getElementById('p');

    p.innerHTML = ''
    p.textContent = state.nextText || state.text;


    for (let i = 0; i < choices.length; i++){
        
        const button = document.createElement('button');
        button.textContent = choices[i].buttonText;
        button.classList.add('button-choice');
        optionContainer.appendChild(button);
        button.addEventListener('click', function() {

            displayChoiceText(choices[i].text, choices[i].nextState);

        });
        
    }
    
}

function generatePicture(){
    const picture = document.createElement('img');
    makeElement(picture,'container');
    picture.classList.add('page1');
    picture.setAttribute('src', start.start.img);
}

// function displayChoiceText(choiceText, nextState){
//     const textcontainer = document.getElementById('text');
//     textcontainer.innerHTML = '';

//     const p = document.createElement('p');
//     makeElement(p, 'text');
//     p.textContent = choiceText;
//     textcontainer.appendChild(p);

//     let arrow = document.querySelector('.pageArrow');
//     if (arrow) {
//         arrow.addEventListener('click', function() {

//             rendergames(start[nextState]);
//         });
//     }
// }

function displayChoiceText(choiceText, nextState){
    const textcontainer = document.getElementById('text');
    textcontainer.innerHTML = '';

    const p = document.createElement('p');
    makeElement(p, 'text');
    p.textContent = choiceText;
    textcontainer.appendChild(p);

    let arrow = document.querySelector('.pageArrow');
    
    if (!arrow) {
        // Create the arrow if it does not exist
        arrow = document.createElement('img');
        arrow.classList.add('pageArrow');
        makeElement(arrow, 'text');
        arrow.setAttribute('src', 'img/arrow.jpg');
    }

    // Ensure arrow is visible
    arrow.style.display = 'block';

    // Remove any existing event listeners
    arrow.replaceWith(arrow.cloneNode(true));
    arrow = document.querySelector('.pageArrow'); // Re-select the arrow

    // Add new event listener
    arrow.addEventListener('click', function() {
        rendergames(start[nextState]);
    });
}


homepage();
