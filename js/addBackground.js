const imgInput = document.querySelector("#input__img");

imgInput.addEventListener("change", function (e){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        addBackground(reader.result);
    })
    reader.readAsDataURL(this.files[0])
})


function addBackground(img){
    addImgElementToImgContainer();

    const backgroundElement = document.querySelector("#background-img");
    backgroundElement.src = img;
}

function addImgElementToImgContainer(){
    const displayer = document.querySelector("#layer__first");

    // Does not allow to create a new <img>.
    if(displayer.children[1]){
        return;
    }

    const imgElement = document.createElement("img");
    imgElement.width = displayer.clientWidth;
    imgElement.height = displayer.clientHeight;
    imgElement.id = "background-img";

    displayer.appendChild(imgElement);
}