document.addEventListener('keypress', function(e){
    if(e.code != "Space" && e.code != "Enter"){
        event.preventDefault()
        pressKey(e.code)
    }
});
document.addEventListener('keydown', function(e){
    if(e.code.startsWith("Shift")){
        theShift(e.code)
    }
    else if(e.code == "CapsLock"){
        theShift(e.code)
    }
    else if(e.code == "Backspace" || e.code == "Enter") document.getElementById(e.code).style.backgroundColor = "#859900"
});
document.addEventListener('keyup', function(e){
    if(e.code.startsWith("Shift")){
        leShift(e.code)
    }
    else if(e.code == "CapsLock"){
        leShift(e.code)
    }
    else if(e.code == "Backspace" || e.code == "Enter") document.getElementById(e.code).style.backgroundColor = "#d33682"
    else if(e.code != "Space") document.getElementById(e.code).style.backgroundColor = "#cb4b16"
});
document.body.onmousedown = function(e){
    if(e.path[0].id == "CapsLock") theShift("CapsLock")
    else if(e.path[0].id == "Enter") text.value += "\r"
    else if(e.path[0].classList[0] == "key" && !(["Tab", "ShiftLeft", "ShiftRight", "Enter", "Backspace"].includes(e.path[0].id))){
        pressKey(e.srcElement.id)
    }
}
document.body.onmouseup = function(e){
    if(e.path[0].id == "CapsLock") leShift("CapsLock")
    else if(e.path[0].classList[0] == "key" && !(["Tab", "ShiftLeft", "ShiftRight", "Enter", "Backspace"].includes(e.path[0].id))) e.path[0].style.backgroundColor = "#cb4b16"
}

function pressKey(k){
    n = text.selectionStart + 1
    if(k != "Space") document.getElementById(k).style.backgroundColor = "#859900"
    text.value += document.getElementById(k).textContent
    text.selectionStart = n
    text.value = text.value.replace("ą", "ą")
}

function theShift(c){
    document.getElementById(c).style.backgroundColor = "#859900"
    for(x of "QWERTYUIOPASDFGHJKLZXCVBNM".split("").map(r => `Key${r}`).concat(["Backquote", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash"])){
        console.log(x)
        document.getElementById(x).textContent = document.getElementById(x).textContent.toUpperCase()
    }
}

function leShift(c){
    document.getElementById(c).style.backgroundColor = "#b58900"
    for(x of "QWERTYUIOPASDFGHJKLZXCVBNM".split("").map(r => `Key${r}`).concat(["Backquote", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash"])) document.getElementById(x).textContent = document.getElementById(x).textContent.toLowerCase()
}

keyboards = {
    English: {
        //
        Backspace: "del",
        CapsLock: "caps",
        Enter: "return",
        ShiftLeft: "shift",
        ShiftRight: "shift",
        Tab: "tab",
        //
        Backquote: "~",
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        Digit0: "0",
        Minus: "-",
        Equal: "=",
        //
        KeyQ: "q",
        KeyW: "w",
        KeyE: "e",
        KeyR: "r",
        KeyT: "t",
        KeyY: "y",
        KeyU: "u",
        KeyI: "i",
        KeyO: "o",
        KeyP: "p",
        BracketLeft: "[",
        BracketRight: "]",
        Backslash: "\\",
        //
        KeyA: "a",
        KeyS: "s",
        KeyD: "d",
        KeyF: "f",
        KeyG: "g",
        KeyH: "h",
        KeyJ: "j",
        KeyK: "k",
        KeyL: "l",
        Semicolon: ";",
        Quote: "'",
        //
        KeyZ: "z",
        KeyX: "x",
        KeyC: "c",
        KeyV: "v",
        KeyB: "b",
        KeyN: "n",
        KeyM: "m",
        Comma: ",",
        Period: ".",
        Slash: "/",
        //
    },
    Goral: {
        //
        Backspace: "del",
        CapsLock: "caps",
        Enter: "return",
        ShiftLeft: "shift",
        ShiftRight: "shift",
        Tab: "tab",
        //
        Backquote: "~",
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        Digit0: "0",
        Minus: "ô", //é
        Equal: "ó",
        //
        KeyQ: "q",
        KeyW: "w",
        KeyE: "e",
        KeyR: "r",
        KeyT: "t",
        KeyY: "y",
        KeyU: "u",
        KeyI: "i",
        KeyO: "o",
        KeyP: "p",
        BracketLeft: "ź",
        BracketRight: "é",
        Backslash: "\\",
        //
        KeyA: "a",
        KeyS: "s",
        KeyD: "d",
        KeyF: "f",
        KeyG: "g",
        KeyH: "h",
        KeyJ: "j",
        KeyK: "k",
        KeyL: "l",
        Semicolon: "ý",
        Quote: ",",
        //
        KeyZ: "z",
        KeyX: "x",
        KeyC: "c",
        KeyV: "v",
        KeyB: "b",
        KeyN: "n",
        KeyM: "m",
        Comma: "ś",//
        Period: "ć",
        Slash: ".",
        //
    },
    Elfdalian: {
        //
        Backspace: "del",
        CapsLock: "caps",
        Enter: "return",
        ShiftLeft: "shift",
        ShiftRight: "shift",
        Tab: "tab",
        //
        Backquote: "~",
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        Digit0: "0",
        Minus: "-",
        Equal: "=",
        //
        KeyQ: "q",
        KeyW: "w",
        KeyE: "e",
        KeyR: "r",
        KeyT: "t",
        KeyY: "y",
        KeyU: "u",
        KeyI: "i",
        KeyO: "o",
        KeyP: "p",
        BracketLeft: "å",
        BracketRight: "ð",
        Backslash: "̨",
        //
        KeyA: "a",
        KeyS: "s",
        KeyD: "d",
        KeyF: "f",
        KeyG: "g",
        KeyH: "h",
        KeyJ: "j",
        KeyK: "k",
        KeyL: "l",
        Semicolon: "ö",
        Quote: "ä",
        //
        KeyZ: "z",
        KeyX: "x",
        KeyC: "c",
        KeyV: "v",
        KeyB: "b",
        KeyN: "n",
        KeyM: "m",
        Comma: ",",
        Period: ".",
        Slash: "/",
        //
    },
    Vlach: {
        //
        Backspace: "del",
        CapsLock: "caps",
        Enter: "return",
        ShiftLeft: "shift",
        ShiftRight: "shift",
        Tab: "tab",
        //
        Backquote: "ӑ", //
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        Digit0: "0",
        Minus: "ш́", //
        Equal: "ж́", //
        //
        KeyQ: "љ",
        KeyW: "њ",
        KeyE: "е",
        KeyR: "р",
        KeyT: "т",
        KeyY: "з",
        KeyU: "у",
        KeyI: "и",
        KeyO: "о",
        KeyP: "п",
        BracketLeft: "ш",
        BracketRight: "ђ",
        Backslash: "ж",
        //
        KeyA: "а",
        KeyS: "с",
        KeyD: "д",
        KeyF: "ф",
        KeyG: "г",
        KeyH: "х",
        KeyJ: "ј",
        KeyK: "к",
        KeyL: "л",
        Semicolon: "ч",
        Quote: "ћ",
        //
        KeyZ: "ѕ",
        KeyX: "џ",
        KeyC: "ц",
        KeyV: "в",
        KeyB: "б",
        KeyN: "н",
        KeyM: "м",
        Comma: ",",
        Period: ".",
        Slash: "й", //
        //
    },
    "Judeo-Arabic": {
        //
        Backspace: "del",
        CapsLock: "caps",
        Enter: "return",
        ShiftLeft: "shift",
        ShiftRight: "shift",
        Tab: "tab",
        // 
        Backquote: "ﭏ",
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        Digit0: "0",
        Minus: "גׄ",
        Equal: "דׄ",
        //
        KeyQ: "טׄ",
        KeyW: "תׄ",
        KeyE: "ק",
        KeyR: "ר",
        KeyT: "א",
        KeyY: "ט",
        KeyU: "ו",
        KeyI: "ן",
        KeyO: "ם",
        KeyP: "פ",
        BracketLeft: "כׄ",
        BracketRight: "ךׄ",
        Backslash: "צׄ",
        //
        KeyA: "ש",
        KeyS: "ד",
        KeyD: "ג",
        KeyF: "כ",
        KeyG: "ע",
        KeyH: "י",
        KeyJ: "ח",
        KeyK: "ל",
        KeyL: "ך",
        Semicolon: "ף",
        Quote: "ץׄ",
        //
        KeyZ: "ז",
        KeyX: "ס",
        KeyC: "ב",
        KeyV: "ה",
        KeyB: "נ",
        KeyN: "מ",
        KeyM: "צ",
        Comma: "ת",
        Period: "ץ",
        Slash: ".",
        //
    },
}

function keySet(lang){
    for(n of Object.entries(keyboards[lang])) document.getElementById(n[0]).textContent = n[1]
}
keySet("Goral")
console.log("QWERTYUIOPASDFGHJKLZXCVBNM".split("").map(r => `Key${r}`).concat(["Backquote", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash"]))