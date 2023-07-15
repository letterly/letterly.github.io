function toBraille(text){

    g = [ //add decimal and comma later
        [" 1", " ⠼⠁"],
        ["1", "⠁"],
        [" 2", " ⠼⠃"],
        ["2", "⠃"],
        [" 3", " ⠼⠉"],
        ["3", "⠉"],
        [" 4", " ⠼⠙"],
        ["4", "⠙"],
        [" 5", " ⠼⠑"],
        ["5", "⠑"],
        [" 6", " ⠼⠋"],
        ["6", "⠋"],
        [" 7", " ⠼⠛"],
        ["7", "⠛"],
        [" 8", " ⠼⠓"],
        ["8", "⠓"],
        [" 9", " ⠼⠊"],
        ["9", "⠊"],
        [" 0", " ⠼⠚"],
        ["0", "⠚"],
        [" ", "⠀"],
    ]


    for(l of Object.entries(languages[language.value])){
        text = text.replace(new RegExp(l[0], "g"), l[1])
        caps = {"en-1": "⠠", "es": "⠨", "pt": "⠨", "pl": "⠨", "sl": "⠨", "hr": "⠨"}[language.value]
        if(l[0].toUpperCase != l[0] && language.value != "ka") text = text.replace(new RegExp(l[0].toUpperCase(), "g"), caps + l[1])
    }

    for(l of g){
        text = text.replace(new RegExp(l[0], "g"), l[1])
    }

    return text
}

function printBraille(text){
    output.value = toBraille(text)
}


function changeLang(lang){
    input.placeholder = {
        "es": "Escribe aquí",
        "en-1": "Write here",
        "pt": "Escreve aqui",
        "pl": "Napisz tutaj",
        "ka": "დაწერე აქ",
        "sl": "Napišite tukaj",
        "hr": "Pišite ovdje",
    }[lang] + "..."
}