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
    else if(language.value == "hoc"){
        g = [
            [" 𑣡", " ⠼⠁"],
            ["𑣡", "⠁"],
            [" 𑣢", " ⠼⠃"],
            ["𑣢", "⠃"],
            [" 𑣣", " ⠼⠉"],
            ["𑣣", "⠉"],
            [" 𑣤", " ⠼⠙"],
            ["𑣤", "⠙"],
            [" 𑣥", " ⠼⠑"],
            ["𑣥", "⠑"],
            [" 𑣦", " ⠼⠋"],
            ["𑣦", "⠋"],
            [" 𑣧", " ⠼⠛"],
            ["𑣧", "⠛"],
            [" 𑣨", " ⠼⠓"],
            ["𑣨", "⠓"],
            [" 𑣩", " ⠼⠊"],
            ["𑣩", "⠊"],
            [" 𑣠", " ⠼⠚"],
            ["𑣠", "⠚"],
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

    for(l of Object.entries(unicodenorm)){
        text = text.replace(new RegExp(l[0], "g"), l[1])
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
    if(document.getElementById("language").value == "lb"){
        ascii.textContent = "Sorry, ASCII Braille does not exist for 8-dot systems"
    }
    else asciize()
}


function changethelang(lang){
    url = new URL(window.location.href)
    url.searchParams.set('lang', lang);
    history.pushState({}, "", url);
    changeLang(lang)
}

function changeLang(lang){
    



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
        "⠁": "a",
        "⠃": "b",
        "⠉": "c",
        "⠙": "d",
        "⠑": "e",
        "⠋": "f",
        "⠛": "g",
        "⠓": "h",
        "⠊": "i",
        "⠚": "j",
        "⠅": "k",
        "⠇": "l",
        "⠍": "m",
        "⠝": "n",
        "⠕": "o",
        "⠏": "p",
        "⠟": "q",
        "⠗": "r",
        "⠎": "s",
        "⠞": "t",
        "⠥": "u",
        "⠧": "v",
        "⠺": "w",
        "⠭": "x",
        "⠽": "y",
        "⠵": "z",
        "⠪": "[",
        "⠳": "\\",
        "⠻": "]",
        "⠘": "^",
        "⠸": "_",
    }
    document.getElementById("language").value = lang
    input.dir = scriptData[otherdata[lang].script].dir
    input.placeholder = otherdata[lang].writeHere + "..."
    title.textContent = otherdata[lang].title ?? "Braille Conversion Website"
    harriswebsite.textContent = otherdata[lang].byharris ?? "By Harris Mowbray"
    update.textContent = otherdata[lang].updates ?? "Updates"
    choose.textContent = (otherdata[lang].choose ?? "Choose a Language") + ":"

    brltype.textContent = otherdata[lang].braille1 ?? (language.options[language.selectedIndex].text.split(" | ")[0] + " Braille")
    thebrltype.textContent = otherdata[lang].braille2 ?? (language.options[language.selectedIndex].text.split(" | ")[0] + " Braille Punctuation")


    for(r = 0; r < 6; r++){
        document.getElementById("t" + r).innerHTML = ""
        document.getElementById("y" + r).innerHTML = ""
    }

    punc = `()[]{},.:;-—'!?°"$*„“‚‘/\\_<>&#%‰+=@”«»§|፡።፣፤፦፧᎐؟،؛۔՞֊՝։՜־·`

    theletters = Object.entries(languages[lang]).filter(f => !punc.includes(f[0].replace("\\", "") ) && (lang == "osa" || f[0] == f[0].toLowerCase()) && f[0].length <= 3 && f[0] != "‫").sort((a,b) => a[0].length - b[0].length)

    thepunctuation = Object.entries(languages[lang]).filter(f => punc.includes(f[0].replace("\\", ""))).sort()

    theletters.forEach(([k, v], i) => document.getElementById("t" +  (input.dir == "rtl" ? (5 - (i % 6)) : (i % 6))  ).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` )

    thepunctuation.forEach(([k, v], i) => document.getElementById("y" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` )



}



function asciize(){
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
        "⠁": "a",
        "⠃": "b",
        "⠉": "c",
        "⠙": "d",
        "⠑": "e",
        "⠋": "f",
        "⠛": "g",
        "⠓": "h",
        "⠊": "i",
        "⠚": "j",
        "⠅": "k",
        "⠇": "l",
        "⠍": "m",
        "⠝": "n",
        "⠕": "o",
        "⠏": "p",
        "⠟": "q",
        "⠗": "r",
        "⠎": "s",
        "⠞": "t",
        "⠥": "u",
        "⠧": "v",
        "⠺": "w",
        "⠭": "x",
        "⠽": "y",
        "⠵": "z",
        "⠪": "[",
        "⠳": "\\",
        "⠻": "]",
        "⠘": "^",
        "⠸": "_",
    }
    v = (output.value)

    for(o of Object.entries(stringo)){
        v = v.replace(new RegExp(o[0], "g"), o[1])
    }

    rowlength = 0

    v = v.split(" ")
    asciival = []
    for(vvvv of v){
        rowlength += (vvvv.length)
        if(rowlength >= 32){
            asciival.push(vvvv)
            rowlength = vvvv.length
        }
        else{
            if(asciival.length == 0){
                asciival[0] = vvvv
            }
            else{
                asciival[asciival.length - 1] += (" " + vvvv)
                rowlength++
            }
        }
    }

    ascii.value = asciival.join("\n")

}

function ASCIItoUnicode(){
    stringo = {
        "⠀": " ",
        "⠮": "\\!",
        "⠐": `"`,
        "⠼": "#",
        "⠫": "\\$",
        "⠩": "%",
        "⠯": "&",
        "⠄": "'",
        "⠷": "\\(",
        "⠾": "\\)",
        "⠡": "\\*",
        "⠬": "\\+",
        "⠠": "\\,",
        "⠤": "\\-",
        "⠨": "\\.",
        "⠌": "\\/",
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
        "⠣": "\\<",
        "⠿": "\\=",
        "⠜": "\\>",
        "⠹": "\\?",
        "⠈": "@",
        "⠁": "a",
        "⠃": "b",
        "⠉": "c",
        "⠙": "d",
        "⠑": "e",
        "⠋": "f",
        "⠛": "g",
        "⠓": "h",
        "⠊": "i",
        "⠚": "j",
        "⠅": "k",
        "⠇": "l",
        "⠍": "m",
        "⠝": "n",
        "⠕": "o",
        "⠏": "p",
        "⠟": "q",
        "⠗": "r",
        "⠎": "s",
        "⠞": "t",
        "⠥": "u",
        "⠧": "v",
        "⠺": "w",
        "⠭": "x",
        "⠽": "y",
        "⠵": "z",
        "⠪": "\\[",
        "⠳": "\\\\",
        "⠻": "\\]",
        "⠘": "\\^",
        "⠸": "_",
    }
    v = ascii.value
    for(o of Object.entries(stringo)){
        v = v.replace(new RegExp(o[1], "g"), o[0])
    }
    input.value = ""
    output.value = v
}


unicodenorm = {

    //latin

    //hebrew
    "וּ": "וּ",
    "פּ": "פּ",
    "פֿ": "פֿ",
    "בֿ": "בֿ",
    "כּ": "כּ",
    "שׂ": "שׂ",
    "ײַ": "ייַ",
    "יִ": "יִ",
    "אָ": "אָ",
    "אַ": "אַ",
    "װ": "וו",
    "ױ": "וי",
    "ײ": "יי",
}

canonOrder = {
    sv: "",
}

canonPunctuationOrder = [".", ",", ":", ";", "¡", "!", "¿", "?", "-"] //etc...




function bruh(){
    const file = new File([ascii.value], 'file' + Math.round(Date.now() / 1000) + '.brl', {
        type: 'text/plain',
      })
      
      function download() {
        const link = document.createElement('a')
        const url = URL.createObjectURL(file)
      
        link.href = url
        link.download = file.name
        document.body.appendChild(link)
        link.click()
      
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      }
      download(file)
}