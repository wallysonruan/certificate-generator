import toolKit from "./toolKit.js";

const imgInputBox = document.querySelector("#input__img-box");

imgInputBox.addEventListener("change", function (e){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        addImgElementToSecondLayer(reader.result);
    })
    reader.readAsDataURL(this.files[0])
})

function addImgElementToSecondLayer(img){
    const secondLayer = document.querySelector("#layer__second");
    const imgElementContainer = document.createElement("div");
    const imgElement = document.createElement("img");

    imgElementContainer.draggable = true;

    imgElement.width = 300;
    imgElement.height = 300;
    imgElement.src = img;
    imgElement.draggable = false;

    imgElementContainer.appendChild(toolKit())
    imgElementContainer.appendChild(imgElement)
    secondLayer.appendChild(imgElementContainer);
}