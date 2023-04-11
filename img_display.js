const imgInput = document.querySelector("#imgInput");

imgInput.addEventListener("change", function (e){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const displayer = document.querySelector("#img-container");
        const img = document.createElement("img");
        img.src = reader.result;
        img.width = "400";
        img.height = "400";
        displayer.appendChild(img); 
    })
    reader.readAsDataURL(this.files[0])
})