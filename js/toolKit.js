export default function toolKit(){
    const list = document.createElement("ul");
    const listItem = document.createElement("li");

    listItem.appendChild(eraseButton());
    list.appendChild(listItem);

    return list;
}

function eraseButton(){
    const button = document.createElement("button");

    button.textContent = "ERASE"
    button.classList.add("button", "button__erase");

    button.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.parentElement.remove();
    });

    return button;
}
