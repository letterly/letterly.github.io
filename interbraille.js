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
        if(l[0].toUpperCase != l[0] && !["ka", "he"].includes(language.value) && !(language.value == "tr" && "Iiıİ".includes(l[0]))) text = text.replace(new RegExp(l[0].toUpperCase(), "g"), (["en-1", "tr"].includes(language.value) ? "⠠" : "⠨") + l[1])
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
    input.dir = lang == "he" ? "rtl": "ltr"
    input.placeholder = {
        "es": "Escribe aquí",
        "en-1": "Write here",
        "pt": "Escreve aqui",
        "pl": "Napisz tutaj",
        "ka": "დაწერე აქ",
        "sl": "Napišite tukaj",
        "hr": "Pišite ovdje",
        "hu": "Írj ide",
        "tr": "Buraya yaz",
        "de": "Hier schreiben",
        "fr": "Écrivez ici",
        "he": "כתוב כאן",
    }[lang] + "..."

    for(r = 0; r < 6; r++){
        document.getElementById("t" + r).innerHTML = ""
        document.getElementById("y" + r).innerHTML = ""
    }

    punc = `()[]{},.:;-'!?°"$*„“/\\_<>&#%+=@”`

    theletters = Object.entries(languages[lang]).filter(f => !punc.includes(f[0].replace("\\", "")) && f[0] == f[0].toLowerCase()).sort()

    thepunctuation = Object.entries(languages[lang]).filter(f => punc.includes(f[0].replace("\\", "")))

    theletters.forEach(([k, v], i) => {
        brltype.textContent = language.options[language.selectedIndex].text.split(" | ")[0]
        document.getElementById("t" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
    })

    thepunctuation.forEach(([k, v], i) => {
        thebrltype.textContent = language.options[language.selectedIndex].text.split(" | ")[0]
        document.getElementById("y" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
    })



}
