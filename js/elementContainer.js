import toolKit from "./toolKit.js";

export default function elementContainer(element){
    const toolKitElement = toolKit();
    toolKitElement.style.order = 1;

    const newElement = element;
    newElement.style.order = 2;
    newElement.classList.add("hasToolKit")

    const container = document.createElement("div");
    container.classList.add("element-container");
    container.draggable = "true";
    container.appendChild(newElement);
    container.appendChild(toolKitElement);
    return container;
}