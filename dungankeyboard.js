eventCode = {
    "KeyQ": "й",
    "KeyW": "ц",
    "KeyE": "у",
    "KeyR": "к",
    "KeyT": "е",
    "KeyY": "н",
    "KeyU": "г",
    "KeyI": "ш",
    "KeyO": "щ",
    "KeyP": "з",
    "BracketLeft": "х",
    "BracketRight": "ў",
    "Backslash": "ё",
    "KeyA": "ф",
    "KeyS": "ы",
    "KeyD": "в",
    "KeyF": "а",
    "KeyG": "п",
    "KeyH": "р",
    "KeyJ": "о",
    "KeyK": "л",
    "KeyL": "д",
    "Semicolon": "ж",
    "Quote": "э",
    "KeyZ": "я",
    "KeyX": "ч",
    "KeyC": "с",
    "KeyV": "м",
    "KeyB": "и",
    "KeyN": "т",
    "KeyM": "җ",
    "Comma": "б",
    "Period": "ю",
    "Slash": "ң",
}

document.addEventListener("DOMContentLoaded", function(){
    var textarea = [].slice.call(document.getElementsByTagName("textarea"))[0]
    var key = [].slice.call(document.getElementsByClassName('key'))
    key.forEach((element, index) => {
        element.addEventListener('click', (event) => {
           textarea.value += event.target.textContent.trim().charAt(0)
        })
    })
    this.addEventListener('keydown', event => {
        if(Object.keys(eventCode).includes(event.code)) event.preventDefault()
        if(eventCode[event.code] !== undefined){
            textarea.value += eventCode[event.code]
            if(event.code != "Enter" && event.code != "Space") document.getElementById(event.code).style.backgroundColor = "#2aa198"
            if(event.code == "Enter") textarea.value = ""
            update(textarea.value)
        }
    })
    this.addEventListener('keyup', event => {
        if(Object.keys(eventCode).includes(event.code)) event.preventDefault()
        if(eventCode[event.code] !== undefined && event.code != "Enter" && event.code != "Space") document.getElementById(event.code).style.backgroundColor = "#fdf6e3"
    })
})
