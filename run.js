language = ""
lesson = 1
exercise = 1
questiontype = ""
keyboardNum = 1
L = {}
S = {}
function preformat(la, le){
    exercise = 1
    lesson = le
    language = la
    menu.style.display = "none"
    root.style.display = "block"
    L = languageData[language]
    S = scriptData[L.script]
    console.log(L.plan)
    console.log(L.plan[le-1])
    console.log(L.plan[le-1][exercise-1])
    format(L.plan[lesson-1][exercise-1])
}
function unformat(){
    root.style.display = "none"
    menu.style.display = "block"
}
function presentation(letterino){
    if(!S.plane && letterino.length > 1 && S.cameral) return letterino
    else if(letterino == "և") return "և"
    else if(letterino == "σ") return "Σσς"
    else if(L.script == "hebrew") return {"פ": "פף","צ": "צץ","מ": "מם","נ": "נן","כ": "כך",}[letterino] ?? letterino
    else if(L.script == "arabic" && !("َُِْٰ".includes(letterino))) return `${letterino} ${letterino}ـ ـ${letterino}ـ  ـ${letterino}`
    else if(S.cameral) return fontWrap(letterino.toUpperCase() + letterino)
    else return letterino
}
function pronunciationhandler(data){
    if(data.includes(",")) return `${language == "korean" ? "syllable" : "word"}-initially ${pronunciationhandler(data.split(",")[0])}, otherwise ${pronunciationhandler(data.split(",")[1])}`
    z = ipa[L.toIPA[data]] ?? ipa[data]
    return z.replace(/\[/g, "<span>").replace(/\]/g, "</span>")
}
function format(data){
    console.log(data)
    questiontypes = {
        "i": ["sentence", "words", "continuebutton"], //info
        "l": ["sentence", "letter", "letterinfo", "continuebutton"], //letter
        "d": ["sentence", "letter", "input", "keyboard", "enterbutton"], //definition
        "t": ["sentence", "letter", "input", "keyboard", "enterbutton"], //translit
        "c": ["sentence", "letter", "multiplechoice"], //capital
        "n": ["sentence", "letter", "continuebutton"], //number
        "m": ["sentence", "letter", "input", "numberkeyboard", "enterbutton"], //number
    }
    questiontype = data.split(":")[0]
    otherdata = data.split(":")[1]
    typelist = ["sentence", "letter", "letterinfo", "multiplechoice", "enterbutton", "continuebutton", "input", "keyboard", "words", "numberkeyboard"]
    for(var t of typelist) document.getElementById(t).style.display = questiontypes[questiontype].includes(t) ? "" : "none"
    switch(questiontype){
        case "n": //number
            buttonmoral("Interesting! ;)")
            sentence.textContent = "New digit"
            letter.innerHTML = `${fontWrap(otherdata)}<span style='color: #D3AF86'> (${S.numerals.indexOf(otherdata)})</span>`
            break
        case "m": //math
            input.value = ""
            sentence.textContent = "Convert this to Western numerals"
            letter.innerHTML = fontWrap(otherdata)
            break
        case "c":
            target = otherdata.split(">")[0]
            answers = otherdata.split(">")[1].split(" ")
            if(L.script != "arabic") sentence.textContent = `Find the ${target.toUpperCase() != target ? "uppercase" : "lowercase"} version of this letter:`
            else sentence.textContent = `Find the isolated version of this letter:`
            letter.textContent = target
            for(g of [0,1,2]) document.getElementById("b" + (g+1)).textContent = answers[g]
            break
        case "i":
            buttonmoral("Interesting! ;)")
            sentence.textContent = "Some helpful information ;)"
            words.innerHTML = otherdata
            break
        case "l":
            buttonmoral("Interesting! ;)")
            sentence.textContent = "New letter"
            letter.innerHTML = `${presentation(otherdata)}<span style='color: #D3AF86'> (${L.alphabet[otherdata] != "" ? L.alphabet[otherdata]: "silent"})</span>`
            if(language == "hiragana" && lesson >= 3){
                listen.innerHTML = ""
                pronunciation.innerHTML = ""
            }
            else{
                listen.innerHTML = "<b>[Listen here]</b>"
                pronunciation.innerHTML = pronunciationhandler(soundify(otherdata))
            }
            break
        case "t":
            input.value = ""
            sentence.textContent = `Transliterate this ${otherdata.length > 1 ? "word": "letter"} to ${otherdata.charCodeAt(0) > 1000 ? "Latin" : language.charAt(0).toUpperCase() + language.slice(1)}`
            for(b of document.getElementsByClassName("key")) b.textContent = ""
            if(otherdata.charCodeAt(0) > 1000){
                if(L.font) input.style
                letter.innerHTML = fontWrap(otherdata)
                for(ltr of "QWERTYUIOPASDFGHJKLZXCVBNM".split("")) document.getElementById("Key" + ltr).textContent = ltr.toLowerCase()
                for(letr in L.latinKeyboard) document.getElementById("Digit" + (+letr + 1)).textContent = L.latinKeyboard[letr]
                Quote.textContent = "'"
                input.style.fontFamily = ""
            }
            else{
                input.style.fontFamily = L.font
                letter.innerHTML = otherdata
                for(letr of Object.entries(L.nativeKeyboard)) document.getElementById(letr[0]).innerHTML = fontWrap(letr[1])
            }
            for(b of document.getElementsByClassName("key")) b.style.backgroundColor = b.textContent == "" ? "#6c71c4" : "#D3AF86"
            break
        case "d":
            input.value = ""
            sentence.textContent = `What is the English translation of this word?`
            for(b of document.getElementsByClassName("key")) b.textContent = ""
            for(ltr of "QWERTYUIOPASDFGHJKLZXCVBNM".split("")) document.getElementById("Key" + ltr).textContent = ltr.toLowerCase()
            letter.textContent = otherdata.split(">")[0]
            for(b of document.getElementsByClassName("key")) b.style.backgroundColor = b.textContent == "" ? "#6c71c4" : "#D3AF86"
            break
    }
}
function multchoice(answer){
    buttonmoral(answer.toUpperCase() == letter.textContent.toUpperCase() || answer == letter.textContent.replace(/ـ/g, "") ? "Correct! :)" : "Incorrect! :(")
    multiplechoice.style.display = "none"
}
function next(){
    ++exercise > L.plan[lesson-1].length ? unformat() : format(L.plan[lesson-1][exercise-1])
}
function fontWrap(text){
    if(L.font) return `<span class="${L.font}">${text}</span>`
    else return text
}
function buttonmoral(p,q){
    continuebutton.style.display = ""
    continuebutton.textContent = p + " Continue..."
    continuebutton.className = "widebutton " + p.toLowerCase().split("!")[0]
}
function enter(){
    enterbutton.style.display = "none"
    ans = input.value
    if(questiontype == "t") letter.textContent.charCodeAt(0) > 1000 ? buttonmoral(tlit(letter.textContent) == ans ? "Correct! :)" : "Incorrect! :(") : buttonmoral(tlit(ans) == letter.textContent ?  "Correct! :)" : "Incorrect! :(")
    else if(questiontype == "d") buttonmoral(ans.toLowerCase() == L.plan[lesson-1][exercise-1].split(">")[1].toLowerCase() ? "Correct! :)" : "Incorrect! :(")
    else if(questiontype == "m") buttonmoral(("" + ans).split("").map(x => S.numerals[x]).join("") == letter.textContent ? "Correct! :)" : "Incorrect! :(")
}
function tlit(word){
    if(S.cameral) word = word.toLowerCase()
    rrr = 1 + S.plane
    if(rrr == 2 && word.charCodeAt(0) < 1000)
    if(L.alphabet[word.slice(0, rrr)].includes(",")) word = L.alphabet[word.slice(0, rrr)].split(",")[0] + word.slice(1)
    for(f of Object.entries(L.alphabet)){
        if(f[1].includes(",")) f[1] = f[1].split(",")[1]
        regex = new RegExp(f[0].replace("X", ""), "g")
        word = word.replace(regex, f[1])
    }
    return word
}
function soundify(d){
    return L.toIPA[L.alphabet[d]] ?? L.alphabet[d]
}
document.addEventListener('keydown', (e) => {
    e = e.code
    if(questiontype == "m") e = e.replace("Digit", "D")
    if(input == document.activeElement) event.preventDefault()
    if(document.getElementById(e)){
        entertext(e)
        document.getElementById(e).style.backgroundColor = "#DC3958"
    }
})
document.addEventListener('keyup', (e) => {
    e = e.code
    if(questiontype == "m") e = e.replace("Digit", "D")
    if(document.getElementById(e).className.includes("blue")) document.getElementById(e).style.backgroundColor = "#268bd2"
    else if(document.getElementById(e).className.includes("orange")) document.getElementById(e).style.backgroundColor = "#F06431"
    else if(document.getElementById(e).textContent == "") document.getElementById(e).style.backgroundColor = "#6c71c4"
    else document.getElementById(e).style.backgroundColor = "#D3AF86"
})
document.addEventListener('mousedown', (e) => {
    if(e.srcElement.className == "key" && e.srcElement.textContent != "") e.srcElement.style.backgroundColor = "#DC3958" 
    else if(e.srcElement.id == "listen" || e.srcElement.parentElement.id == "listen") new Audio(`sounds/${soundify(L.plan[lesson-1][exercise-1].split(":")[1].split(",")[0])}.m4a`).play()
})
document.addEventListener('mouseup', (e) => {
    if(e.srcElement.className == "key" && e.srcElement.textContent != "") e.srcElement.style.backgroundColor = "#D3AF86" 
})
function delet(){
    if(input.value.charAt(input.value.length-2) == "�") input.value = input.value.slice(0, input.value.length - 2)
    else input.value = input.value.slice(0, input.value.length - 1)
}
function entertext(code){
    switch(code){
        case "Backspace":
            delet()
            break
        case "Enter":
            if(continuebutton.style.display != "none") next()
            else if(enterbutton.style.display != "none") enter()
            break
        case "ShiftLeft":
        case "ShiftRight":
            if(S.keyboardDimensions > 1 && keyboard.style.display != "none" && letter.textContent.charCodeAt(0) < 1000) for(letr of Object.entries(L[keyboard.textContent.includes(Object.values(L.secondaryKeyboard)[0]) ? "nativeKeyboard": "secondaryKeyboard"])) document.getElementById(letr[0]).textContent = letr[1]
            break
        default:
            input.value += document.getElementById(code).textContent
    }
}
window.addEventListener("load", function(){
    for(r in languageData) for(t in languageData[r].plan) document.getElementById(r + "-levels").innerHTML += `<div onclick="preformat('${r}', ${+t+1})">Level<br /><span>${+t+1}</span></div>`
})
