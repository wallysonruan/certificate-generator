const displayer = document.querySelector("#second-layer");
let elementBeingDragged = undefined;
let mousePositionX = undefined;
let mousePositionY = undefined;

//Disables the browser default behavior towards the drag-drop events.
document.addEventListener("dragover", (event) => {
    event.preventDefault();
})

//Captures the element if it's a draggable one.
window.addEventListener("dragstart", (event) => {
    if(event.target.draggable){
        elementBeingDragged = event.target;
    }
})

//Calculates the mouse position considering the displayer as the reference.
displayer.addEventListener('dragover', (event) => {
    mousePositionX = event.layerX;
    mousePositionY = event.layerY;
});

//Sets the captured element to be the same as the mouse's.
displayer.addEventListener("drop", () => {
    elementBeingDragged.style.position = "absolute";
    elementBeingDragged.style.left = `${mousePositionX}px`;
    elementBeingDragged.style.top = `${mousePositionY}px`;
})