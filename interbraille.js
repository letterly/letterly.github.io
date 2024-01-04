function toBraille(text){
    text = " " + text + " "
    if(language.value == "fr"){
        g = [ //add decimal and comma later
            [" 1", " ⠠⠡"],
            ["1", "⠡"],
            [" 2", " ⠠⠣"],
            ["2", "⠣"],
            [" 3", " ⠠⠩"],
            ["3", "⠩"],
            [" 4", " ⠠⠹"],
            ["4", "⠹"],
            [" 5", " ⠠⠱"],
            ["5", "⠱"],
            [" 6", " ⠠⠫"],
            ["6", "⠫"],
            [" 7", " ⠠⠻"],
            ["7", "⠻"],
            [" 8", " ⠠⠳"],
            ["8", "⠳"],
            [" 9", " ⠠⠪"],
            ["9", "⠪"],
            [" 0", " ⠠⠼"],
            ["0", "⠼"],
        ]
    }
    else if(language.value == "lb"){
        g = [ //add decimal and comma later
            ["1", "⠡"],
            ["2", "⠣"],
            ["3", "⠩"],
            ["4", "⠹"],
            ["5", "⠱"],
            ["6", "⠫"],
            ["7", "⠻"],
            ["8", "⠳"],
            ["9", "⠪"],
            ["0", "⠼"],
        ]
    }
    else if(language.value == "th"){
        g = [
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
            [" ๑", " ⠠⠼⠁"],
            ["๑", "⠁"],
            [" ๒", " ⠠⠼⠃"],
            ["๒", "⠃"],
            [" ๓", " ⠠⠼⠉"],
            ["๓", "⠉"],
            [" ๔", " ⠠⠼⠙"],
            ["๔", "⠙"],
            [" ๕", " ⠠⠼⠑"],
            ["๕", "⠑"],
            [" ๖", " ⠠⠼⠋"],
            ["๖", "⠋"],
            [" ๗", " ⠠⠼⠛"],
            ["๗", "⠛"],
            [" ๘", " ⠠⠼⠓"],
            ["๘", "⠓"],
            [" ๙", " ⠠⠼⠊"],
            ["๙", "⠊"],
            [" ๐", " ⠠⠼⠚"],
            ["๐", "⠚"],
        ]
    }
    else if(language.value == "ar"){
        g = [
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
            [" ١", " ⠼⠁"],
            ["١", "⠁"],
            [" ٢", " ⠼⠃"],
            ["٢", "⠃"],
            [" ٣", " ⠼⠉"],
            ["٣", "⠉"],
            [" ٤", " ⠼⠙"],
            ["٤", "⠙"],
            [" ٥", " ⠼⠑"],
            ["٥", "⠑"],
            [" ٦", " ⠼⠋"],
            ["٦", "⠋"],
            [" ٧", " ⠼⠛"],
            ["٧", "⠛"],
            [" ٨", " ⠼⠓"],
            ["٨", "⠓"],
            [" ٩", " ⠼⠊"],
            ["٩", "⠊"],
            [" ٠", " ⠼⠚"],
            ["٠", "⠚"],
        ]
    }
    else if(language.value == "hi"){
        g = [
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
            [" १", " ⠼⠁"],
            ["१", "⠁"],
            [" २", " ⠼⠃"],
            ["२", "⠃"],
            [" ३", " ⠼⠉"],
            ["३", "⠉"],
            [" ४", " ⠼⠙"],
            ["४", "⠙"],
            [" ५", " ⠼⠑"],
            ["५", "⠑"],
            [" ६", " ⠼⠋"],
            ["६", "⠋"],
            [" ७", " ⠼⠛"],
            ["७", "⠛"],
            [" ८", " ⠼⠓"],
            ["८", "⠓"],
            [" ९", " ⠼⠊"],
            ["९", "⠊"],
            [" ०", " ⠼⠚"],
            ["०", "⠚"],
        ]
    }
    else if(language.value == "ff"){
        g = [
            [" 𞥑", " ⠼⠁"],
            ["𞥑", "⠁"],
            [" 𞥒", " ⠼⠃"],
            ["𞥒", "⠃"],
            [" 𞥓", " ⠼⠉"],
            ["𞥓", "⠉"],
            [" 𞥔", " ⠼⠙"],
            ["𞥔", "⠙"],
            [" 𞥕", " ⠼⠑"],
            ["𞥕", "⠑"],
            [" 𞥖", " ⠼⠋"],
            ["𞥖", "⠋"],
            [" 𞥗", " ⠼⠛"],
            ["𞥗", "⠛"],
            [" 𞥘", " ⠼⠓"],
            ["𞥘", "⠓"],
            [" 𞥙", " ⠼⠊"],
            ["𞥙", "⠊"],
            [" 𞥐", " ⠼⠚"],
            ["𞥐", "⠚"],
            [" १", " ⠼⠁"],
            ["१", "⠁"],
            [" २", " ⠼⠃"],
            ["२", "⠃"],
            [" ३", " ⠼⠉"],
            ["३", "⠉"],
            [" ४", " ⠼⠙"],
            ["४", "⠙"],
            [" ५", " ⠼⠑"],
            ["५", "⠑"],
            [" ६", " ⠼⠋"],
            ["६", "⠋"],
            [" ७", " ⠼⠛"],
            ["७", "⠛"],
            [" ८", " ⠼⠓"],
            ["८", "⠓"],
            [" ९", " ⠼⠊"],
            ["९", "⠊"],
            [" ०", " ⠼⠚"],
            ["०", "⠚"],
        ]
    }
    else if(language.value == "ur_pk"){
        g = [
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
            [" ۱", " ⠼⠁"],
            ["۱", "⠁"],
            [" ۲", " ⠼⠃"],
            ["۲", "⠃"],
            [" ۳", " ⠼⠉"],
            ["۳", "⠉"],
            [" ۴", " ⠼⠙"],
            ["۴", "⠙"],
            [" ۵", " ⠼⠑"],
            ["۵", "⠑"],
            [" ۶", " ⠼⠋"],
            ["۶", "⠋"],
            [" ۷", " ⠼⠛"],
            ["۷", "⠛"],
            [" ۸", " ⠼⠓"],
            ["۸", "⠓"],
            [" ۹", " ⠼⠊"],
            ["۹", "⠊"],
            [" ۰", " ⠼⠚"],
            ["۰", "⠚"],
        ]
    }
    else if(language.value == "lo"){
        g = [
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
            [" ໑", " ⠠⠼⠁"],
            ["໑", "⠁"],
            [" ໒", " ⠠⠼⠃"],
            ["໒", "⠃"],
            [" ໓", " ⠠⠼⠉"],
            ["໓", "⠉"],
            [" ໔", " ⠠⠼⠙"],
            ["໔", "⠙"],
            [" ໕", " ⠠⠼⠑"],
            ["໕", "⠑"],
            [" ໖", " ⠠⠼⠋"],
            ["໖", "⠋"],
            [" ໗", " ⠠⠼⠛"],
            ["໗", "⠛"],
            [" ໘", " ⠠⠼⠓"],
            ["໘", "⠓"],
            [" ໙", " ⠠⠼⠊"],
            ["໙", "⠊"],
            [" ໐", " ⠠⠼⠚"],
            ["໐", "⠚"],
        ]
    }
    else{
        g = []
        for(q = 0; q < 10; q++){
            sym = "⠚⠁⠃⠉⠙⠑⠋⠛⠓⠊".charAt(q)
            g.push([" " + q, " ⠼" + sym])
            g.push([q, sym])
        }
    }
    g.push([" ", "⠀"])


    if(["lo", "th"].includes(language.value)){
        specialvowellist = "โแเไใແເໂໄໃ"
        newword = ""
        specialvowel = ""
        for(w of text.split("")){
            if(specialvowellist.includes(w)){
                specialvowel = w
            }
            else{
                newword += w
                if(specialvowel != ""){
                    newword += specialvowel
                    specialvowel = ""
                }
            }
        }
        text = newword
    }

    for(l of Object.entries(languages[language.value])){
        text = text.replace(new RegExp(l[0], "g"), l[1])
        if(language.value == "ff") text = text.replace(new RegExp(l[0].toUpperCase(), "g"), otherdata[language.value].capital + l[1])
        else if(l[0].toUpperCase != l[0] && scriptData[otherdata[language.value].script].capitalize && !(Object.keys(languages[language.value]).includes("İ") && "Iiıİ".includes(l[0]))) text = text.replace(new RegExp(l[0].charAt(0).toUpperCase() + l[0].slice(1), "g"), otherdata[language.value].capital + l[1])
    }

    for(l of g){
        text = text.replace(new RegExp(l[0], "g"), l[1])
    }

    return text.slice(1, -1)
}

function printBraille(text){
    output.value = toBraille(text)
}


function changeLang(lang){
    document.getElementById('language').value = lang
    input.dir = scriptData[otherdata[lang].script].dir
    input.placeholder = otherdata[lang].writeHere + "..."
    title.textContent = otherdata[lang].title ?? "Braille Conversion Website"
    harriswebsite.textContent = otherdata[lang].byharris ?? "By Harris Mowbray"
    update.textContent = otherdata[lang].updates ?? "Updates"
    choose.textContent = (otherdata[lang].choose ?? "Choose a Language") + ":"
    asci.textContent = otherdata[lang].convertascii ?? "Convert to Braille ASCII"

    brltype.textContent = otherdata[lang].braille1 ?? (language.options[language.selectedIndex].text.split(" | ")[0] + " Braille")
    thebrltype.textContent = otherdata[lang].braille2 ?? (language.options[language.selectedIndex].text.split(" | ")[0] + " Braille Punctuation")


    for(r = 0; r < 6; r++){
        document.getElementById("t" + r).innerHTML = ""
        document.getElementById("y" + r).innerHTML = ""
    }

    punc = `()[]{},.:;-'!?°"$*„“‚‘/\\_<>&#%‰+=@”«»§|፡።፣፤፦፧᎐؟،؛۔՞֊՝։՜·`

    theletters = Object.entries(languages[lang]).filter(f => !punc.includes(f[0].replace("\\", "") ) && f[0] == f[0].toLowerCase() && f[0].length <= 3).sort((a,b) => a[0].length - b[0].length)

    thepunctuation = Object.entries(languages[lang]).filter(f => punc.includes(f[0].replace("\\", ""))).sort()

    theletters.forEach(([k, v], i) => {
        if(input.dir == "rtl"){
            document.getElementById("t" + (5 - (i % 6))).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
        }
        else{
            document.getElementById("t" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
        }
    })

    thepunctuation.forEach(([k, v], i) => {
        document.getElementById("y" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
    })



}


function asciize(){
    v = (output.value)

    stringo = {
        "⠀": " ",
        "⠮": "!",
        "⠐": `"`,
        "⠼": "#",
        "⠫": "$",
        "⠩": "%",
        "⠯": "&",
        "⠄": "'",
        "⠷": "(",
        "⠾": ")",
        "⠡": "*",
        "⠬": "+",
        "⠠": ",",
        "⠤": "-",
        "⠨": ".",
        "⠌": "/",
        "⠴": "0",
        "⠂": "1",
        "⠆": "2",
        "⠒": "3",
        "⠲": "4",
        "⠢": "5",
        "⠖": "6",
        "⠶": "7",
        "⠦": "8",
        "⠔": "9",
        "⠱": ":",
        "⠰": ";",
        "⠣": "<",
        "⠿": "=",
        "⠜": ">",
        "⠹": "?",
        "⠈": "@",
        "⠁": "A",
        "⠃": "B",
        "⠉": "C",
        "⠙": "D",
        "⠑": "E",
        "⠋": "F",
        "⠛": "G",
        "⠓": "H",
        "⠊": "I",
        "⠚": "J",
        "⠅": "K",
        "⠇": "L",
        "⠍": "M",
        "⠝": "N",
        "⠕": "O",
        "⠏": "P",
        "⠟": "Q",
        "⠗": "R",
        "⠎": "S",
        "⠞": "T",
        "⠥": "U",
        "⠧": "V",
        "⠺": "W",
        "⠭": "X",
        "⠽": "Y",
        "⠵": "Z",
        "⠪": "[",
        "⠳": "\\",
        "⠻": "]",
        "⠘": "^",
        "⠸": "_",
    }

    for(o of Object.entries(stringo)){
        v = v.replace(new RegExp(o[0], "g"), o[1])
    }

    output.value = v
}