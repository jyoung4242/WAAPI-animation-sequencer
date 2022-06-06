import './style.css';
import { waApiSequencer } from './lib/sequencer';
let myAppDiv: HTMLElement;
let containerDiv: HTMLElement;
let myBox: HTMLElement;
let buttonDiv: HTMLElement;
let button1: HTMLButtonElement;
let button2: HTMLButtonElement;
let button3: HTMLButtonElement;
let button4: HTMLButtonElement;
let button4toggle: boolean = false;

let seq1 = new waApiSequencer({
    loop: true,
    gapDelay: 0,
});
let seq2 = new waApiSequencer({
    loop: true,
    gapDelay: 0,
});

const loadSeq1 = () => {
    seq1.addSeq({
        element: myBox,
        keyFrames: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }],
        options: { duration: 2000, easing: 'ease-in-out', iterations: 1 },
    }).addSeq({
        element: myBox,
        keyFrames: [{ backgroundColor: `white` }, { backgroundColor: `blue` }, { backgroundColor: `pink` }],
        options: { duration: 2000, easing: 'ease-in-out', iterations: 1 },
    });
};
const loadSeq2 = () => {
    seq2.addSeq({
        element: myBox,
        keyFrames: [{ transform: `scale(2)` }, { transform: `scale(.5)` }, { transform: `scale(1)` }],
        options: { duration: 2000, easing: 'ease-in-out', iterations: Infinity },
    });
};

const init = () => {
    myAppDiv = document.getElementById('myApp');
    containerDiv = document.createElement('div');
    myBox = document.createElement('div');
    buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    button1 = document.createElement('button');
    button1.innerText = 'Sequence 1';
    button2 = document.createElement('button');
    button2.innerText = 'Sequence 2';
    button3 = document.createElement('button');
    button3.innerText = 'Cancel';
    button4 = document.createElement('button');
    button4.innerText = 'Pause';
    containerDiv.classList.add('container');
    myBox.classList.add('box');

    myAppDiv.appendChild(containerDiv);
    myAppDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);
    buttonDiv.appendChild(button4);
    containerDiv.appendChild(myBox);

    let myRect = containerDiv.getBoundingClientRect();
    buttonDiv.style.top = `${myRect.top}px`;
};

init();
loadSeq1();
loadSeq2();

if (button1 && button2 && button3 && button4) {
    button1.addEventListener('click', () => {
        console.log(`Running Sequence 1`);
        seq1.playSeq();
    });

    button2.addEventListener('click', () => {
        console.log(`Running Sequence 2`);
        seq2.playSeq();
    });

    button3.addEventListener('click', () => {
        console.log(`cancelling sequences`);
        seq1.cancelSeq();
        seq2.cancelSeq();
    });
    button4.addEventListener('click', () => {
        if (button4toggle) {
            button4toggle = false;
            console.log(`resuming sequences`);
            seq1.resumeSeq();
            seq2.resumeSeq();
            button4.innerText = 'Pause';
        } else {
            button4toggle = true;
            console.log(`pausing sequences`);
            seq1.pauseSeq();
            seq2.pauseSeq();
            button4.innerText = 'Resume';
        }
    });
}
