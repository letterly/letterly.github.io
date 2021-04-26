eventCode = {
    "KeyQ": "ך",
    "KeyW": "ש",
    "KeyE": "ע",
    "KeyR": "ר",
    "KeyT": "ט",
    "KeyY": "י",
    "KeyU": "ו",
    "KeyI": "יִ",
    "KeyO": "אָ",
    "KeyP": "פ",
    "KeyA": "אַ",
    "KeyS": "ס",
    "KeyD": "ד",
    "KeyF": "פֿ",
    "KeyG": "ג",
    "KeyH": "ה",
    "KeyJ": "ײַ",
    "KeyK": "ק",
    "KeyL": "ל",
    "Semicolon": "ף",
    "KeyZ": "ז",
    "KeyX": "כ",
    "KeyC": "צ",
    "KeyV": "ץ",
    "KeyB": "ב",
    "KeyN": "נ",
    "KeyM": "מ",
    "Comma": "ם",
    "Period": "ן",
    "Slash": "וּ",
    "BracketLeft": "א",
    "BracketRight": "ת",
    "Backslash": "ח",
    "Space": " ",
    "Enter": "",
    "Quote": "בֿ",
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
            if(event.code == "Enter"){
                textarea.value = ""
            }
            update(textarea.value)
        }
    })
    this.addEventListener('keyup', event => {
        if(Object.keys(eventCode).includes(event.code)) event.preventDefault()
        if(eventCode[event.code] !== undefined && event.code != "Enter" && event.code != "Space") document.getElementById(event.code).style.backgroundColor = "#fdf6e3"
    })
    function update(sentence){
        result.innerHTML = `<p>${translit(sentence)}</p>`
    }
    function translit(sentence){
        tkey = {
            "א": "",
            "ײַ": "ay",
            "וו": "v",
            "וי": "oy",
            "דזש": "dzh",
            "זש": "zh",
            "טש": "tsh",
            "ייִ": "yi",
            "יי": "ey",
            "יִ": "i",
            "ו": "u",
            "אַ": "a",
            "אָ": "o",
            "בֿ": "v",
            "ב": "b",
            "ג": "g",
            "ד": "d",
            "ה": "h",
            "ז": "z",
            "ח": "ch",
            "ט": "t",
            "י": "i",
            "כ": "ch",
            "ך": "ch",
            "ל": "l",
            "מ": "m",
            "ם": "m",
            "נ": "n",
            "ן": "n",
            "ס": "s",
            "ע": "e",
            "פֿ": "f",
            "ף": "f",
            "פּ": "p",
            "צ": "tz",
            "ץ": "tz",
            "ק": "k",
            "ר": "r",
            "ת": "t",
            "ו": "u",
            "ש": "sh",
            "וּ": "u",
            "ת": "t",
            "ח": "ch",
        }
        for(f of Object.entries(tkey)){
            regex = new RegExp(f[0].replace("X", ""), "g")
            sentence = sentence.replace(regex, f[1])        
        }
        console.log(sentence)
        return sentence
    }
})
