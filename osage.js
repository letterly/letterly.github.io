eventCode = {
    "KeyQ": "𐓫",
    "KeyW": "𐓷",
    "KeyE": "𐓟",
    "KeyR": "𐓲",
    "KeyT": "𐓵",
    "KeyY": "𐓻",
    "KeyU": "𐓶",
    "KeyI": "𐓣",
    "KeyO": "𐓪",
    "KeyP": "𐓬",
    "KeyA": "𐓘",
    "KeyS": "𐓮",
    "KeyD": "𐓰",
    "KeyF": "͘",
    "KeyG": "𐓚",
    "KeyH": "𐓡",
    "KeyJ": "𐓙",
    "KeyK": "𐓤",
    "KeyL": "𐓧",
    "KeyZ": "𐓺",
    "KeyX": "𐓸",
    "KeyC": "𐓝",
    "KeyV": "𐓯",
    "KeyB": "𐓜",
    "KeyN": "𐓩",
    "KeyM": "𐓨",
    "Space": " ",
    "Enter": "",
}

document.addEventListener("DOMContentLoaded", function(){
    var textarea = [].slice.call(document.getElementsByTagName("textarea"))[0]
    var key = [].slice.call(document.getElementsByClassName('key'))
    key.forEach((element, index) => {
        element.addEventListener('click', (event) => {
            if(element.textContent.trim().slice(0,1).charCodeAt() > 50000) w = element.textContent.trim().slice(0,2)
            else w = element.textContent.trim().slice(0,1)
            type(w)
        })
    })
    this.addEventListener('keydown', event => {
        if(Object.keys(eventCode).includes(event.code)) event.preventDefault()
        if(eventCode[event.code] !== undefined){
            type(eventCode[event.code])
            if(event.code != "Enter" && event.code != "Space") document.getElementById(event.code).style.backgroundColor = "#2aa198"
            if(event.code == "Enter"){
                update(textarea.value)
                textarea.value = ""
            }
        }
    })
    this.addEventListener('keyup', event => {
        if(Object.keys(eventCode).includes(event.code)) event.preventDefault()
        if(eventCode[event.code] !== undefined && event.code != "Enter" && event.code != "Space") document.getElementById(event.code).style.backgroundColor = "#002b36"
    })
    function type(letter){
        n = textarea.selectionStart
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + letter + textarea.value.slice(textarea.selectionStart)
        if(textarea.value.includes("𐓘͘𐓣͘")){
            textarea.value = textarea.value.replace("𐓘͘𐓣͘", "𐓚")
            n-=4
        }
        if(textarea.value.includes("𐓪͘𐓣͘")){
            textarea.value = textarea.value.replace("𐓪͘𐓣͘", "𐓫")
            n-=4
        }
        if(textarea.value.includes("𐓘𐓟")){
            textarea.value = textarea.value.replace("𐓘𐓟", "𐓙")
            n-=2
        }
        if(textarea.value.includes("𐓙͘")){
            textarea.value = textarea.value.replace("𐓙͘", "𐓚")
            n-=2
        }
        if(textarea.value.includes("𐓘𐓣")){
            textarea.value = textarea.value.replace("𐓘𐓣", "𐓙")
            n-=2
        }
        if(textarea.value.includes("𐓘𐓣͘")){
            textarea.value = textarea.value.replace("𐓘𐓣͘", "𐓚")
            n-=3
        }
        if(textarea.value.includes("𐓘͘𐓣")){
            textarea.value = textarea.value.replace("𐓘͘𐓣", "𐓚")
            n-=3
        }
        if(textarea.value.includes("𐓟𐓣͘")){
            textarea.value = textarea.value.replace("𐓟𐓣͘", "𐓚")
            n-=3
        }
        if(textarea.value.includes("𐓪𐓣͘")){
            textarea.value = textarea.value.replace("𐓪𐓣͘", "𐓫")
            n-=3
        }
        if(textarea.value.includes("𐓶𐓣͘")){
            textarea.value = textarea.value.replace("𐓶𐓣͘", "𐓫")
            n-=3
        }
        textarea.selectionStart = n + 2
    }
    function update(sentence){
        sentence = sentence.replace(/\,/g, "")
        sentence = sentence.replace(/\./g, "")
        sentence = sentence.replace(/\?/g, "")
        result.innerHTML = `<p>${sentence.split(" ").map(x => x in dictionary ? `<div class="${dictionary[x].type}">${x}<br><span><u>${dictionary[x].type}</u></span><br><span>${dictionary[x].means}</span></div>` : `<div>${x}</div>`).join(" ")}</p>`
    }
})