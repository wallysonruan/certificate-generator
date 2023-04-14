export default function toolKit(){
    const list = document.createElement("ul");
    const listItem = document.createElement("li");

    listItem.appendChild(eraseButton());
    list.appendChild(listItem);
    list.classList.add("toolKit");

    return list;
}

function eraseButton(){
    const button = document.createElement("button");

    button.textContent = "ERASE"
    button.classList.add("button", "button__erase");

    button.addEventListener("click", (event) => {
        //Chain of parents [element: button] > li > ul > div (which contains the entire element)
        event.target.parentElement.parentElement.parentElement.remove();
    });

    return button;
}
