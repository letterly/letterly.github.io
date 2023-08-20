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
    else if(language.value == "ur-pk"){
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
        if(l[0].toUpperCase != l[0] && scriptData[otherdata[language.value].script].capitalize && !(Object.keys(languages[language.value]).includes("İ") && "Iiıİ".includes(l[0]))) text = text.replace(new RegExp(l[0].charAt(0).toUpperCase() + l[0].slice(1), "g"), otherdata[language.value].capital + l[1])
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
    input.dir = scriptData[otherdata[lang].script].dir
    input.placeholder = otherdata[lang].writeHere + "..."

    for(r = 0; r < 6; r++){
        document.getElementById("t" + r).innerHTML = ""
        document.getElementById("y" + r).innerHTML = ""
    }

    punc = `()[]{},.:;-'!?°"$*„“‚‘/\\_<>&#%‰+=@”«»§|፡።፣፤፦፧᎐؟،؛۔՞֊՝։՜`

    theletters = Object.entries(languages[lang]).filter(f => !punc.includes(f[0].replace("\\", "") ) && f[0] == f[0].toLowerCase() && f[0].length <= 2).sort((a,b) => a[0].length - b[0].length)

    thepunctuation = Object.entries(languages[lang]).filter(f => punc.includes(f[0].replace("\\", ""))).sort()

    theletters.forEach(([k, v], i) => {
        brltype.textContent = language.options[language.selectedIndex].text.split(" | ")[0]
        if(input.dir == "rtl"){
            document.getElementById("t" + (5 - (i % 6))).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
        }
        else{
            document.getElementById("t" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
        }
    })

    thepunctuation.forEach(([k, v], i) => {
        thebrltype.textContent = language.options[language.selectedIndex].text.split(" | ")[0]
        document.getElementById("y" + (i % 6)).innerHTML += `<tr><td>${k.replace("\\", "")}</td><td><span class="brl">${v}</span></td></tr>` 
    })



}
