import toolKit from "./toolKit.js";

const addText = document.querySelector("#button__add-text");
addText.addEventListener("click", () => {
    createInputText();
})

function createInputText(){
    const displayer = document.querySelector("#layer__second");
    const inputTextContainer = document.createElement("div");
    const inputText = document.createElement("input");
    const inputTextToolKit = toolKit();

    inputTextContainer.draggable = "true";
    inputText.type = "text";

    inputTextContainer.appendChild(inputTextToolKit);
    inputTextContainer.appendChild(inputText);
    displayer.appendChild(inputTextContainer);
}