import elementContainer from "./elementContainer.js";

const addText = document.querySelector("#button__add-text");
addText.addEventListener("click", () => {
    createInputText();
})

function createInputText(){
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.classList.add("input__addText");
    
    const inputTextContainer = elementContainer(inputText);

    const displayer = document.querySelector("#layer__second");
    displayer.appendChild(inputTextContainer);
}