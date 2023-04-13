const imgInputBox = document.querySelector("#input__img-box");

imgInputBox.addEventListener("change", function (e){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        addImgElementToSecondLayer(reader.result);
    })
    reader.readAsDataURL(this.files[0])
})

function addImgElementToSecondLayer(img){
    const secondLayer = document.querySelector("#second-layer");

    const imgElement = document.createElement("img");
    imgElement.width = 300;
    imgElement.height = 300;
    imgElement.src = img;

    secondLayer.appendChild(imgElement);
}