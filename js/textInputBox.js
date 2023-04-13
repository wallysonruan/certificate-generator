const addText = document.querySelector("#button__add-text");
addText.addEventListener("click", () => {
    createInputText();
})

function createInputText(){
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.draggable = "true";
    
    const displayer = document.querySelector("#second-layer");
    displayer.appendChild(inputText);
}