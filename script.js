const textWrapper = document.querySelector(".textWrapper")
let Allowed = true
textWrapper.addEventListener("mouseenter", () => {
    if (!Allowed) { return }
    console.log(textWrapper.innerText)
    let text = textWrapper.innerText
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let encrypted
    let limit = 6
    let orignal = []
    let full
    const intervalId = setInterval(() => {
        Allowed = false
        if (text.split('').length <= 0) {
            clearInterval(intervalId)
            Allowed = true
        }

        limit -= 1
        if (limit < 1) {
            orignal.push(text.charAt(0))
            text = text.split('').splice(1).join('')
        }
        encrypted = text.split('').map((item, idx) => { return letters.charAt(Math.floor(Math.random() * 53)) }).join('')
        full = orignal.join('') + encrypted
        textWrapper.innerText = full
    }, 100);

})