[language, answer, lesson, exercise, questiontype, keyboardNum, L, S] = ["", "", 1, 1, "", 1, {}, {}]
switchAround = (a, b) => [menu.style.display, root.style.display] = [a, b]
function preformat(la, le){
    exercise = 1
    lesson = le
    language = la
    switchAround("none", "block")
    L = languageData[language]
    S = scriptData[L.script]
    format()
}
function presentation(letterino){
    if(Array.from(letterino) > 1 && S.cameral) return letterino
    else if(letterino == "և") return "և"
    else if(letterino == "σ") return "Σσς"
    else if(L.script == "hebrew") return {"פ": "פף","צ": "צץ","מ": "מם","נ": "נן","כ": "כך",}[letterino] ?? letterino
    else if(L.script == "arabic" && !("َُِْٰ".includes(letterino))) return `${letterino} ${letterino}ـ ـ${letterino}ـ  ـ${letterino}`
    else if(S.cameral) return fontWrap(letterino.toUpperCase() + letterino)
    else return letterino
}
pronunciationhandler = (data) => data.includes(",") ? (`${language == "korean" ? "syllable" : "word"}-initially ${pronunciationhandler(data.split(",")[0])}, otherwise ${pronunciationhandler(data.split(",")[1])}`) : (ipa[L.toIPA[data.replace("Y", "")]] ?? ipa[data.replace("Y", "")]).replace(/\[/g, "<span>").replace(/\]/g, "</span>")
function format(){
    questiontypes = {
        "i": ["sentence", "words", "continuebutton"], //info
        "l": ["sentence", "letter", "letterinfo", "continuebutton"], //letter
        "d": ["sentence", "letter", "input", "keyboard", "enterbutton"], //definition
        "t": ["sentence", "letter", "input", "keyboard", "enterbutton"], //translit
        "c": ["sentence", "letter", "multiplechoice"], //capital
        "o": ["sentence", "letter", "multiplechoice"], //options
        "n": ["sentence", "letter", "continuebutton"], //number
        "m": ["sentence", "letter", "input", "numberkeyboard", "enterbutton"], //number
    }
    questiontype = L.plan[lesson-1][exercise-1].split(":")[0]
    otherdata = L.plan[lesson-1][exercise-1].split(":")[1]
    typelist = ["sentence", "letter", "letterinfo", "multiplechoice", "enterbutton", "continuebutton", "input", "keyboard", "words", "numberkeyboard"]
    for(var t of typelist) document.getElementById(t).style.display = questiontypes[questiontype].includes(t) ? "" : "none"
    switch(questiontype){
        case "n": //number
            buttonmoral("Okay!")
            sentence.textContent = "New digit"
            letter.innerHTML = `${fontWrap(otherdata)}<span style='color: #e4c6a5'> (${Array.from(S.numerals).indexOf(otherdata) % 10})</span>`
            break
        case "m": //math
            [input.value, sentence.textContent] = ["", "Convert this to Western numerals"]
            letter.innerHTML = fontWrap(otherdata)
            break
        case "o": //options (math)
            target = otherdata.split(">")[0]
            answers = Array.from(otherdata.split(">")[1])
            sentence.textContent = `Find the ${language.charAt(0).toUpperCase() + language.slice(1)} version of this number:`
            letter.innerHTML = fontWrap(target)
            for(g of [0,1,2]) document.getElementById("b" + (g+1)).innerHTML = fontWrap(answers[g])
            break
        case "c":
            target = otherdata.split(">")[0]
            answers = Array.from(otherdata.split(">")[1])
            sentence.textContent = (L.script != "arabic") ? `Find the ${target.toUpperCase() != target ? "uppercase" : "lowercase"} version of this letter:` : `Find the isolated version of this letter:`
            letter.innerHTML = fontWrap(target)
            for(g of [0,1,2]) document.getElementById("b" + (g+1)).innerHTML = fontWrap(answers[g])
            break
        case "i":
            buttonmoral("Okay!")
            sentence.textContent = "Some helpful information ;)"
            words.innerHTML = otherdata
            break
        case "l":
            buttonmoral("Okay!")
            sentence.textContent = "New letter"
            letter.innerHTML = `${presentation(otherdata)}<span style='color: #e4c6a5'> (${L.alphabet[otherdata] != "" ? L.alphabet[otherdata].replace("Y", ""): "silent"})</span>`
            listen.innerHTML = "<b>[Listen here]</b>"
            if(language == "hiragana" && lesson >= 3) [listen.innerHTML, pronunciation.innerHTML] = ["", ""]
            else pronunciation.innerHTML = pronunciationhandler(soundify(otherdata))
            break
        case "t":
            input.value = ""
            sentence.textContent = `Transliterate this ${otherdata.length > 1 ? "word": "letter"} to ${otherdata.charCodeAt(0) > 800 ? "Latin" : language.charAt(0).toUpperCase() + language.slice(1)}`
            for(b of document.getElementsByClassName("key")) b.textContent = ""
            if(otherdata.charCodeAt(0) > 800){
                letter.innerHTML = fontWrap(otherdata)
                for(ltr of "QWERTYUIOPASDFGHJKLZXCVBNM".split("")) document.getElementById("Key" + ltr).textContent = ltr.toLowerCase()
                for(letr in L.latinKeyboard) document.getElementById("Digit" + (+letr + 1)).textContent = L.latinKeyboard[letr]
                Quote.textContent = "'"
                input.style.fontFamily = ""
            }
            else{
                input.style.fontFamily = L.font ?? "Noto Sans"
                letter.innerHTML = otherdata
                for(letr of Object.entries(L.nativeKeyboard)) document.getElementById(letr[0]).innerHTML = fontWrap(letr[1])
            }
            for(b of document.getElementsByClassName("key")) b.style.backgroundColor = b.textContent == "" ? "#6c71c4" : "#e4c6a5"
            break
        case "d":
            [input.value, sentence.textContent] = ["", `What is the English translation of this word?`]
            for(b of document.getElementsByClassName("key")) b.textContent = ""
            for(ltr of "QWERTYUIOPASDFGHJKLZXCVBNM".split("")) document.getElementById("Key" + ltr).textContent = ltr.toLowerCase()
            letter.textContent = otherdata.split(">")[0]
            for(b of document.getElementsByClassName("key")) b.style.backgroundColor = b.textContent == "" ? "#6c71c4" : "#e4c6a5"
            break
    }
}
multchoice = (answer) => {isNaN(letter.textContent) ? buttonmoral(answer.toUpperCase() == letter.textContent.toUpperCase() || answer == letter.textContent.replace(/ـ/g, "") ? "Correct! :) " : "Incorrect! :(") : buttonmoral(answer == Array.from(S.numerals)[+letter.textContent] ? "Correct! :) " : "Incorrect! :(")}
next = () => ++exercise > L.plan[lesson-1].length ? switchAround("block", "none") : format()
fontWrap = (text) => L.font ? `<span class="${L.font}">${text}</span>` : text
function buttonmoral(p){
    [multiplechoice.style.display, continuebutton.style.display] = ["none", ""]
    leanswer = ""
    if(p.startsWith("I")){
        if(questiontype == "t") leanswer = (letter.textContent.charCodeAt(0) > 800) ? ` The answer is ${tlit(L.plan[lesson-1][exercise-1].split(":")[1])}. ` : ` The answer is ${fontWrap(detlit(L.plan[lesson-1][exercise-1].split(":")[1]))}. `
        else if(questiontype == "d") leanswer = ` The answer is ${fontWrap(L.plan[lesson-1][exercise-1].split(":")[1].split(">")[1])}. `
        else if(questiontype == "c") leanswer = ` The answer is ${fontWrap(letter.textContent.toLowerCase() != letter.textContent ? letter.textContent.toLowerCase() : letter.textContent.toUpperCase())}. `
        else if(questiontype == "m") leanswer = ` The answer is ${Array.from(letter.textContent).map(x => Array.from(S.numerals).indexOf(x) % 10).join("")}. `
        else if(questiontype == "o") leanswer = ` The answer is ${Array.from(S.numerals)[+letter.textContent]}. `
    }
    continuebutton.className = "widebutton " + p.toLowerCase().split("!")[0].toLowerCase()
    continuebutton.innerHTML = (p == "Okay!" ? "" : p) + leanswer + "Continue..."
}
function enter(){
    enterbutton.style.display = "none"
    ans = input.value
    if(questiontype == "t") letter.textContent.charCodeAt(0) > 800 ? buttonmoral(tlit(letter.textContent) == ans ? "Correct! :) " : "Incorrect! :(") : buttonmoral(tlit(ans) == letter.textContent ?  "Correct! :) " : "Incorrect! :(")
    else if(questiontype == "d") buttonmoral(ans.toLowerCase() == L.plan[lesson-1][exercise-1].split(">")[1].toLowerCase() ? "Correct! :) " : "Incorrect! :(")
    else if(questiontype == "m") buttonmoral(Array.from(letter.textContent).map(x => (Array.from(S.numerals).indexOf(x) % 10)).join("") == ans ? "Correct! :) " : "Incorrect! :(")
}
function tlit(word){
    if(S.cameral) word = word.toLowerCase()
    console.log(Array.from(word))
    if(L.alphabet[Array.from(word)[0]]?.includes(",")) word = L.alphabet[Array.from(word)[0]].split(",")[0] + word.slice(1)
    for(f of Object.entries(L.alphabet)) word = word.replace(new RegExp(f[0].replace("X", ""), "g"), f[1].split(",")[f[1].split(",").length-1])
    return word
}
function detlit(word){
    if(S.cameral) word = word.toLowerCase()
    for(f of Object.entries(L.alphabet)) word = word.replace(new RegExp(f[1], "g"), f[0])
    return word
}
soundify = (d) => L.toIPA[L.alphabet[d]] ?? L.alphabet[d]
document.addEventListener('keydown', (e) => {
    e = (questiontype == "m") ? e.code.replace("Digit", "D") : e.code
    if(input == document.activeElement) event.preventDefault()
    if(document.getElementById(e)) entertext(e)
})
document.addEventListener('keyup', (e) => {
    e = (questiontype == "m") ? e.code.replace("Digit", "D") : e.code
    if(document.getElementById(e).className.includes("blue")) document.getElementById(e).style.backgroundColor = "#268bd2"
    else if(document.getElementById(e).className.includes("orange")) document.getElementById(e).style.backgroundColor = "#F06431"
    else if(document.getElementById(e).textContent == "") document.getElementById(e).style.backgroundColor = "#6c71c4"
    else document.getElementById(e).style.backgroundColor = "#e4c6a5"
})
document.addEventListener('mousedown', (e) => {
    if(e.srcElement.className.endsWith("key") && e.srcElement.textContent != "") entertext(e.srcElement.id)
    else if(e.srcElement.id == "listen" || e.srcElement.parentElement.id == "listen") new Audio(`sounds/${soundify(L.plan[lesson-1][exercise-1].split(":")[1].split(",")[0].replace("Y", ""))}.m4a`).play()
})
document.addEventListener('mouseup', (e) => {
    if(e.srcElement.className.endsWith("key") && e.srcElement.textContent != "") document.getElementById(e.srcElement.id).style.backgroundColor = "#e4c6a5"
})
delet = () => input.value = input.value.slice(0, input.value.length - (input.value.charCodeAt(input.value.length-2) == 55354 ? 2 : 1))
function entertext(code){
    document.getElementById(code).style.backgroundColor = "#DC3958"
    if(code == "Backspace") delet()
    else if(code == "Enter"){
        if(continuebutton.style.display != "none") next()
        else if(enterbutton.style.display != "none") enter()
    }
    else if(code.startsWith("Shift")){
        if(L.secondaryKeyboard != undefined && keyboard.style.display != "none" && letter.textContent.charCodeAt(0) < 800) for(letr of Object.entries(L[keyboard.textContent.includes(Object.values(L.secondaryKeyboard)[0]) ? "nativeKeyboard": "secondaryKeyboard"])) document.getElementById(letr[0]).textContent = letr[1]
    }
    else input.value += document.getElementById(code).textContent
}
window.addEventListener("load", function(){
    for(r in languageData) for(t in languageData[r].plan) document.getElementById(r + "-levels").innerHTML += `<div onclick="preformat('${r}', ${+t+1})">Level<br /><span>${+t+1}</span></div>`
})