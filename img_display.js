const imgInput = document.querySelector("#input__img");

imgInput.addEventListener("change", function (e){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const displayer = document.querySelector("#img__container");
        displayer.style.backgroundImage = `url(${reader.result})`;
    })
    reader.readAsDataURL(this.files[0])
})
