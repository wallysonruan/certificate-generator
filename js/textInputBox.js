const addText = document.querySelector("#button__add-text");
addText.addEventListener("click", () => {
    createInputText();
})

function createInputText(){
    const displayer = document.querySelector("#second-layer");
    const inputTextContainer = document.createElement("div");
    const inputText = document.createElement("input");
    const inputTextToolKit = createInputTextToolKit();

    inputTextContainer.draggable = "true";
    inputText.type = "text";

    inputTextContainer.appendChild(inputTextToolKit);
    inputTextContainer.appendChild(inputText);
    displayer.appendChild(inputTextContainer);
}

function createInputTextToolKit(){
    const list = document.createElement("ul");
    const listItem = document.createElement("li");

    listItem.appendChild(createInputTextEraseButton());
    list.appendChild(listItem);

    return list;
}

function createInputTextEraseButton(){
    const button = document.createElement("button");

    button.textContent = "ERASE"
    button.classList.add("button", "button__erase");

    button.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.parentElement.remove();
    });

    return button;
}
