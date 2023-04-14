import elementContainer from "./elementContainer.js";

const imgInputBox = document.querySelector("#input__img-box");

imgInputBox.addEventListener("change", function (e){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        addImgElementToSecondLayer(reader.result);
    })
    reader.readAsDataURL(this.files[0])
})

function addImgElementToSecondLayer(img){
    const imgElement = document.createElement("img");
    imgElement.width = 300;
    imgElement.height = 300;
    imgElement.src = img;
    imgElement.draggable = false;
    
    const imgElementContainer = elementContainer(imgElement);

    const secondLayer = document.querySelector("#layer__second");
    secondLayer.appendChild(imgElementContainer);
}