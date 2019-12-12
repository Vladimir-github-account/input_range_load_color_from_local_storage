'use strict';

import {DOCUMENT_BG_COLOR} from './constants/index.js';

window.onload = loadSavedColor;

const inputs = document.querySelectorAll('input[type="range"]');
const rangeValue = document.querySelector('h1');
const doc = document.querySelector(":root");


let documentBGColor = null;


for (const input of inputs) {
    input.addEventListener('input', refreshDocumentBGColor);
}


function refreshDocumentBGColor(e) {
    let index = 0;
    for (const prop in documentBGColor) {
        documentBGColor[prop] = inputs[index].value;
        index++;
    }
    doc.style.backgroundColor = `rgba(
        ${documentBGColor.red},
        ${documentBGColor.green},
        ${documentBGColor.blue},
        ${documentBGColor.alpha})
    `;

    localStorage.setItem(DOCUMENT_BG_COLOR, JSON.stringify(documentBGColor));
}

function loadSavedColor() {
    documentBGColor = localStorage.getItem(DOCUMENT_BG_COLOR);
    if (documentBGColor) {
        documentBGColor = JSON.parse(documentBGColor);
        let index = 0;
        for (const prop in documentBGColor) {
            inputs[index].value = documentBGColor[prop];
            index++;
        }
    } else {
        documentBGColor = {
            red: inputs[0],
            green: inputs[1],
            blue: inputs[2],
            alpha: inputs[3],
        }
    }
    refreshDocumentBGColor();

}


/*const [widthElem, heightElem] = document.getElementsByTagName('h1');
function refreshSizeValues(e/!*optional,this will be always here by first argument*!/){
   widthElem.innerText = `Inner width = ${window.innerWidth}px`;
   heightElem.innerText = `Inner height = ${window.innerHeight}px`;
}
window.addEventListener('resize', refreshSizeValues);
window.onresize =  refreshSizeValues;
*/

/*function refreshValue (e) {
     rangeValue.innerText = `${rangeInputR.value}`;
   // rangeValue.innerText = `${e.currentTarget.value}`; // if we use this on load it will be undefined
}*/





