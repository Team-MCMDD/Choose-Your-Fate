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

function Storyobject (text, img, option1, option2){
    this.text=text;
    this.img=img;
    this.option1=option1;
    this.option2=option2;
};

const start = 

{
    start: 
    {

        text: 
        [       
            "You are a coding student in bootcamp, green and wide eyed. The day is bright and promising.", 
            "You have yet to have your soul sucked from your body. But just you wait! Today just might be the day!"
        ],

        choices: 
        [
            {
                buttonText1: "Eat",
                text: "You must nourish your body, you decide to cook yourself a well balanced meal.",
                nextState: 'examTimeFull',
            },

            {
                buttonText2: "Study",
                text: 
                    [
                        "You tell Mr. Instructor, ‘I am but a soldier and what I do is follow orders.’ and bid him farewell.",
                        "You then you go home, open your laptop, and study like the goody two shoes you are."
                    ],

                nextState: 'examTimePrepared',
            }

        ],
    }
}

const startobject=new Storyobject (start.start.text, start.img, start.choices.buttonText1, start.choices.buttonText2);

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
    rendergames(start.start);

}

function removeElements (parentElement, childElement) {
    parentElement = document.getElementById(JSON.stringify(parentElement));
    childElement = parentElement.firstChild;
    childElement.remove();
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
    makeElement(p,'text');
    p.textContent = state.text;
    const arrow = document.createElement('img');
    makeElement(arrow,'text');
    const picture = document.createElement('img');
    makeElement(picture,'container');

}
homepage();
initGame();


const examTime = 
{
    examTimeFull:
    {
        text: "Now it is time to take the exam, but with your tummy full, you are now ready to sleep off your meal."
    },

    examTimePrepared:
    {
        text: "Now it is time to take the exam, you feel confident since you studied but also feel sleepy."
    },

    choices:
    [
        {
            buttonText: "Take Exam",
            text: "You crack your knuckles and prioritize the exam before sleep! You are a Responsible adult!",
            nextState: '?'
        },

        {
            buttonText: "Take a nap",
            text: "You snuggle into bed and close your eyes and think of your long lost love until you fall asleep.",
            nextState: '?'
        },
    ]
}

const endResults = 
{

}

// const story = {

//     start: {
//       text: [
//             "It's your first day as a junior coder and you're pretty nervous . . .",
//             "You see a coffee stand to your right and a group gathering for classes. Which do you go to?"
//         ],
//       choices: [
//         {
//           buttontext: "Go get Coffee",
//           text: [

//             "Forget people, you don't like being in a crowd!",
//             "You grab some coffee to wait out the crowd . . ."

//             ],
//           nextState: 'gotCoffee',
//         },
//         {
//           buttontext: "Check the crowd",
//           text: [
//             "You're already wired from the adrenaline of the first day who needs coffee!",
//             "You push through the crowd to see what course you're in . . ."
//           ],
//           nextState: 'checkCrowd',
//         },
//       ],
//     },
// };