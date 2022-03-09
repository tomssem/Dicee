const imageFolder = "images";

const randomImage = _ => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let imageName = `dice${randomNumber}.png`;
    return imageFolder + "/" + imageName;
}
document.getElementsByClassName("img1")[0].setAttribute("src", randomImage());
document.getElementsByClassName("img2")[0].setAttribute("src", randomImage());