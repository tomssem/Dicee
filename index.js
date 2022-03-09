const imageFolder = "images";

const generateNumber = _ => Math.floor(Math.random() * 6) + 1;
const getImagePath = number => imageFolder + "/" + `dice${number}.png`;

const number1 = generateNumber();
const image1 = getImagePath(number1);
document.getElementsByClassName("img1")[0].setAttribute("src", image1);

const number2 = generateNumber();
const image2 = getImagePath(number2);
document.getElementsByClassName("img2")[0].setAttribute("src", image2);

let titleText = undefined;
// Set title depending on who wins
if (number1 < number2) {
    titleText = "Player 2 wins 🚩";

} else if (number1 > number2) {
    titleText = "🚩 Player 1 wins";
} else {
    titleText = "Draw";
}

document.getElementsByTagName("h1")[0].textContent = titleText;