
document.addEventListener("keydown", function (e) {

    let q
    let key
    try {
        let pressed = e.key.toLowerCase()
        q = new Audio(`./audio/${pressed}.mp3`)
        key = document.querySelector(`.${pressed}`)
    } catch (error) {
        console.log("Invalid key")
    }

    key.style.backgroundColor = "lightblue";
    key.style.transform = "scale(0.7)";

    setTimeout(() => {
        key.style.backgroundColor = "white";
        key.style.transform = "scale(1)";
    }, 100);
    q.play()
})
