window.addEventListener("load", myFunction);

function myFunction() {
    alert("Hello Mr.White, all right");

    let charactersArray = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A"
    ];

    let iconsArray = [
        '\u2660',
        '\u2663',
        '\u2665',
        '\u2666'
    ];

    let randomIcon = Math.floor(Math.random() * 3);
    let randomIconStyle = iconsArray[randomIcon]
    console.log(randomIcon)

    let randomNumber = Math.floor(Math.random() * 13);
    let randomCard = charactersArray[randomNumber]
    console.log(randomCard)

    document.getElementById("centerNumber").innerHTML = randomCard;
    document.getElementById("iconNormal").innerHTML = randomIconStyle;
    document.getElementById("iconRotate").innerHTML = randomIconStyle;
};