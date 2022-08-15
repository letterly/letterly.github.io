document.addEventListener('keypress', function(e){
    if(e.code != "Space" && e.code != "Enter"){
        event.preventDefault()
        pressKey(e.code)
    }
});
document.addEventListener('keydown', function(e){
    if(e.code.startsWith("Shift")){
        if(lang != "Osage") theShift(e.code)
    }
    else if(e.code == "CapsLock"){
        if(lang != "Osage") theShift(e.code)
    }
    else if(e.code == "Backspace" || e.code == "Enter") document.getElementById(e.code).style.backgroundColor = "#859900"
});
document.addEventListener('keyup', function(e){
    console.log(e.code)
    if(e.code.startsWith("Shift")){
        if(lang != "Osage") leShift(e.code)
    }
    else if(e.code == "CapsLock"){
        if(lang != "Osage") leShift(e.code)
    }
    else if(e.code == "Backspace" || e.code == "Enter") document.getElementById(e.code).style.backgroundColor = "#d33682"
    else if(e.code.startsWith("Key") || e.code.startsWith("Digit")) document.getElementById(e.code).style.backgroundColor = e.code != "Backspace" ? "#cb4b16" : "#d33682"
});
document.body.onmousedown = function(e){
    if(e.path[0].id == "CapsLock" && lang != "Osage") theShift("CapsLock")
    else if(e.path[0].id == "Enter") text.value += "\r"
    else if(e.path[0].classList[0] == "key" && !(["Tab", "ShiftLeft", "ShiftRight", "Enter"].includes(e.path[0].id))){
        pressKey(e.srcElement.id)
    }
}
document.body.onmouseup = function(e){
    if(e.path[0].id == "CapsLock") leShift("CapsLock")
    else if(e.path[0].classList[0] == "key" && !(["Tab", "ShiftLeft", "ShiftRight", "Enter"].includes(e.path[0].id))) e.path[0].style.backgroundColor = e.path[0].id != "Backspace" ? "#cb4b16" : "#d33682"
}

function pressKey(k){
    n = text.selectionStart + document.getElementById(k).textContent.length
    if(k != "Space") document.getElementById(k).style.backgroundColor = "#859900"
    if(k != "Backspace"){
        text.value += document.getElementById(k).textContent
    }
    else{
        text.value = text.value.slice(0,-1)
    }
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
    Osage: {
        Backquote:"!",
        Digit1:1,
        Digit2:2,
        Digit3:3,
        Digit4:4,
        Digit5:5,
        Digit6:6,
        Digit7:7,
        Digit8:8,
        Digit9:9,
        Digit0:0,
        Minus:"?",
        Equal:"=",
        Backspace:"del",
        CapsLock:"caps",
        Enter:"return",
        ShiftLeft:"shift",
        ShiftRight:"shift",
        Tab:"tab",
        KeyQ:"𐒾",
        KeyW:"𐓏",
        KeyE:"𐒷",
        KeyR:"𐓊",
        KeyT:"𐓍",
        KeyY:"𐓓",
        KeyU:"𐓎",
        KeyI:"𐒻",
        KeyO:"𐓂",
        KeyP:"𐓄",
        BracketLeft:"𐓅",
        BracketRight:"𐒲",
        Backslash:"𐒱",
        KeyA:"𐒰",
        KeyS:"𐓆",
        KeyD:"𐓈",
        KeyF:"𐓉",
        KeyJ:"͘",
        KeyH:"𐒹",
        KeyG:"𐒼",
        KeyK:"𐒽",
        KeyL:"𐒿",
        Semicolon:"𐓋",
        Quote:"𐓌",
        KeyZ:"𐓒",
        KeyX:"𐓐",
        KeyC:"𐒵",
        KeyV:"𐓇",
        KeyB:"𐒴",
        KeyN:"𐓁",
        KeyM:"𐓀",
        Comma:"𐓑",
        Period:".",
        Slash:"𐓃",
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
        Minus: "ה̈",
        Equal: "=",
        //
        KeyQ: "/",
        KeyW: "׳",
        KeyE: "ק",
        KeyR: "ר",
        KeyT: "א",
        KeyY: "ט",
        KeyU: "ו",
        KeyI: "ן",
        KeyO: "ם",
        KeyP: "פ",
        BracketLeft: ",",
        BracketRight: ".",
        Backslash: "ֿ",
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
        Quote: "גִ",
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
        Slash: "ׄ",
        //
    },
    "Dungan": {
                //
                Backspace: "del",
                CapsLock: "caps",
                Enter: "return",
                ShiftLeft: "shift",
                ShiftRight: "shift",
                Tab: "tab",
                //
        "Backquote": "ё",
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
        "Minus": "ў",
        "Equal": "ү",
        "KeyQ": "й",
        "KeyW": "ц",
        "KeyE": "у",
        "KeyR": "к",
        "KeyT": "е",
        "KeyY": "н",
        "KeyU": "г",
        "KeyI": "ш",
        "KeyO": "ә",
        "KeyP": "з",
        "BracketLeft": "х",
        "BracketRight": "ң",
        "Backslash": "җ",
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
        "KeyM": "щ",
        "Comma": "б",
        "Period": "ю",
        Slash: ".",
    },
    "Circassian": {
                //
                Backspace: "del",
                CapsLock: "caps",
                Enter: "return",
                ShiftLeft: "shift",
                ShiftRight: "shift",
                Tab: "tab",
                //
        "Backquote": ":",
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
        "Minus": ".",
        "Equal": ",",
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
        "BracketRight": "ъ",
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
        "KeyM": "ь",
        "Comma": "б",
        "Period": "ю",
        Slash: "ӏ",
    },
}

function keySet(lang){
    for(n of Object.entries(keyboards[lang])) document.getElementById(n[0]).textContent = n[1]
    text.style.direction = lang == "Judeo-Arabic" ? "rtl" : "ltr"
}
keySet("Osage")
console.log("QWERTYUIOPASDFGHJKLZXCVBNM".split("").map(r => `Key${r}`).concat(["Backquote", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash"]))

function customize(){
    custom.style.display = "block"
    custom.value = ""
    for(h of Object.entries(keyboards.Osage)){
        custom.value += `${h[0]}:${h[1]}` + "\r"
    }
}

function customKeySet(){
    console.log(custom.value.split("\n"))
    for(g of custom.value.split("\n")) document.getElementById(g.split(":")[0]).textContent = g.split(":")[1]
}