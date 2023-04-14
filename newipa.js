language = "spanish"
dialect = ""
result = {}

languages = {
    asturian: {
        dialects: ["standard"],
        phonetic: {
            " ": " ",
            "'": "",
            a: {
                "default": "a",
                "consonantbefore:mn": "ã",
            },
            á: {
                "default": "á",
                "consonantbefore:mn": "ã́",
            },
            b: {
                "default": "β̞",
                "after:mn": "b",
                "initial": "b",
            },
            c: {
                "default": "k",
                "before:eiéí": "θ",
                "before:t": "ɣ̞",
                "after:x": "",
            },
            ch: "t͡ɕ",
            d: {
                "default": "ð̞",
                "initial": "d̪",
                "after:ln": "d̪",
            },
            e: {
                "default": "e",
                "consonantbefore:mn": "ẽ",
                "before:u": "ø",
            },
            é: {
                "default": "é",
                "consonantbefore:mn": "ẽ́",
                "before:u": "ø",
            },
            f: "f",
            g: {
                "default": "g",
                "before:eiéí": "x",
                "before:üoa": "ɣ̞",
                "after:rz": "ɣ̞",
            },
            gu: {
                "default": "g",
                "before:a": "gw",
                "after:rz": "ɣ̞",
            },
            h: "",
            i: {
                "default": "i",
                "consonantbefore:mn": "ĩ",
                "before:aeouáéóú": "j",
                "after:ae": "i̯",
            },
            í: {
                "default": "í",
                "consonantbefore:mn": "ĩ́",
                //"after:ae": "í̯",
            },
            j: "x",
            k: "k",
            l: {
                "default": "l",
                "before:t": "l̪",
            },
            ll: "ʎ",
            m: "m",
            n: {
                "default": "n",
                "before:c": "n̟",
                "before:m": "m",
                "before:f": "ɱ",
                "before:g": "ŋ",
                "before:dt": "n̪",
                "before:y": "ɲ", //before m??
            },
            ñ: "ɲ",
            o: {
                "default": "o",
                "consonantbefore:mn": "õ",
            },
            ó: {
                "default": "ó",
                "consonantbefore:mn": "ṍ",
            },
            p: {
                "default": "p",
                "before:ct": "β̞",
            },
            q: "k",
            qu: "k",
            r: {
                "default": "ɾ",
                "initial": "r",
            },
            rr: "r",
            s: "s",
            t: {
                "default": "t̪",
                "after:x": "t", //check if true
            },
            u: {
                "default": "u",
                "before:e": "w",
                "consonantbefore:mn": "ũ",
                "after:aáeé": "u̯",
                //"before:aeioáéíó": "w",
                //"after:aeioáéíó": "w",
            },
            ú: {
                "default": "ú",
                "consonantbefore:mn": "ṹ",
                //"before:aeioáéíó": "w",
                //"after:aeioáéíó": "w", ?
            },
            ü: "w",
            v: "b",
            w: "w",
            x: {
                "default": "ɕ",
                //"initial": "s",
                //"before:c": "k,s",
            },
            y: {
                "default": "ʝ",
                "initial": "ɟ͡ʝ",
                "alone": "i",
                "after:n": "ɟ͡ʝ",
                "after:e": "i̯",
            },
            ý: "í",
            z: "θ",
        },
        phoneticDialects: {},
        phonemic: {
            " ": " ",
            "'": "",
            a: "a",
            á: "á",
            b: "b",
            c: {
                "default": "k",
                "before:eiéí": "θ",
                "before:t": "ɣ̞",
                "after:x": "",
            },
            ch: "t͡ʃ",
            d: "d",
            e: "e",
            é: "é",
            f: "f",
            g: {
                "default": "g",
                "before:eiéí": "x",
            },
            gu: {
                "default": "g",
                "before:a": "gw",
            },
            h: "",
            i: {
                "default": "i",
                "before:aeouáéóú": "j",
            },
            í: "í",
            j: "x",
            k: "k",
            l: "l",
            ll: "ʎ",
            m: "m",
            n: "n",
            ñ: "ɲ",
            o: "o",
            ó: "ó",
            p: {
                "default": "p",
                "before:ct": "b",
            },
            q: "k",
            qu: "k",
            r: {
                "default": "ɾ",
                "initial": "r",
            },
            rr: "r",
            s: "s",
            t: "t",
            u: {
                "default": "u",
                "before:e": "w",
            },
            ú: "ú",
            ü: "w",
            v: "b",
            w: "w",
            x: {
                "default": "ʃ",
                //"initial": "s",
                //"before:c": "k,s",
            },
            y: {
                "default": "ʝ",
                "after:e": "i",
            },
            ý: "í", //investigate!
            z: "θ",
        },
        phonemicDialects: {},
    },
    spanish: {
        dialects: ["standard", "argentina", "spain"],
        phonetic: {
            " ": " ",
            a: {
                "default": "a",
                "consonantbefore:mn": "ã",
            },
            á: {
                "default": "á",
                "consonantbefore:mn": "ã́",
            },
            b: {
                "default": "β̞",
                "after:mn": "b",
                "initial": "b",
            },
            c: {
                "default": "k",
                "before:eiéí": "s",
                "before:t": "ɣ̞",
                "after:x": "",
            },
            ch: "t͡ʃ",
            d: {
                "default": "ð̞",
                "initial": "d̪",
                "after:ln": "d̪",
            },
            e: {
                "default": "e",
                "consonantbefore:mn": "ẽ",
            },
            é: {
                "default": "é",
                "consonantbefore:mn": "ẽ́",
            },
            f: "f",
            g: {
                "default": "g",
                "before:eiéí": "x",
                "before:üoa": "ɣ̞",
                "after:rz": "ɣ̞",
            },
            gu: {
                "default": "g",
                "before:a": "gw",
                "after:rz": "ɣ̞",
            },
            h: "",
            i: {
                "default": "i",
                "consonantbefore:mn": "ĩ",
                "before:aeouáéóú": "j",
                "after:ae": "i̯",
            },
            í: {
                "default": "í",
                "consonantbefore:mn": "ĩ́",
                //"after:ae": "í̯",
            },
            j: "x",
            k: "k",
            l: {
                "default": "l",
                "before:t": "l̪",
            },
            ll: {
                "default": "ʝ",
                "initial": "ɟ͡ʝ",
            },
            m: "m",
            n: {
                "default": "n",
                "before:m": "m",
                "before:f": "ɱ",
                "before:g": "ŋ",
                "before:dt": "n̪",
                "before:y": "ɲ", //before m??
            },
            ñ: "ɲ",
            o: {
                "default": "o",
                "consonantbefore:mn": "õ",
            },
            ó: {
                "default": "ó",
                "consonantbefore:mn": "ṍ",
            },
            p: {
                "default": "p",
                "before:t": "β̞",
            },
            q: "k",
            qu: "k",
            r: {
                "default": "ɾ",
                "initial": "r",
            },
            rr: "r",
            s: "s",
            t: {
                "default": "t̪",
                "after:x": "t", //check if true
            },
            u: {
                "default": "u",
                "before:e": "w",
                "consonantbefore:mn": "ũ",
                "after:a": "u̯",
                //"before:aeioáéíó": "w",
                //"after:aeioáéíó": "w",
            },
            ú: {
                "default": "ú",
                "consonantbefore:mn": "ṹ",
                //"before:aeioáéíó": "w",
                //"after:aeioáéíó": "w", ?
            },
            ü: "w",
            v: "b",
            w: "w",
            x: {
                "default": "ɣ̞,s",
                "initial": "s",
                //"before:c": "k,s",
            },
            y: {
                "default": "ʝ",
                "initial": "ɟ͡ʝ",
                "alone": "i",
                "after:n": "ɟ͡ʝ",
                "after:e": "i̯",
            },
            ý: "í",
            z: {
                "default": "s",
                "before:gm": "z",
            },
        },
        phoneticDialects: {
            spain: {
                c: {
                    "default": "k",
                    "before:eiéí": "θ",
                },
                l: {
                    "default": "l",
                    "before:t": "l̪",
                    "before:z": "l̟",
                },
                n: {
                    "default": "n",
                    "before:m": "m",
                    "before:c": "n̟",
                    "before:f": "ɱ",
                    "before:g": "ŋ",
                    "before:dt": "n̪",
                    "before:y": "ɲ",
                },
                /*s: {
                    //"default": "θ",
                    "before:kptaeiouéíóú": "s",
                }, */
                z: "θ",
            },
            argentina: {
                y: {
                    "default": "ʃ",
                    "only": "i",
                },
                ll: "ʃ",
            },
        },
        phonemic: {
            " ": " ",
            a: "a",
            á: "á",
            b: "b",
            c: {
                "default": "k",
                "before:eiéí": "s",
                "before:t": "ɣ̞",
                "after:x": "",
            },
            ch: "t͡ʃ",
            d: "d",
            e: "e",
            é: "é",
            f: "f",
            g: {
                "default": "g",
                "before:eiéí": "x",
            },
            gu: {
                "default": "g",
                "before:a": "gw",
            },
            h: "",
            i: {
                "default": "i",
                "before:aeouáéóú": "j",
            },
            í: "í",
            j: "x",
            k: "k",
            l: "l",
            ll: "ʝ",
            m: "m",
            n: "n",
            ñ: "ɲ",
            o: "o",
            ó: "ó",
            p: {
                "default": "p",
                "before:t": "b",
            },
            q: "k",
            qu: "k",
            r: {
                "default": "ɾ",
                "initial": "r",
            },
            rr: "r",
            s: "s",
            t: "t",
            u: {
                "default": "u",
                "before:e": "w",
            },
            ú: "ú",
            ü: "w",
            v: "b",
            w: "w",
            x: {
                "default": "g,s",
                "initial": "s",
                //"before:c": "k,s",
            },
            y: {
                "default": "ʝ",
                "after:e": "i",
            },
            ý: "í", //investigate!
            z: {
                "default": "s",
                "before:gm": "z",
            },
        },
        phonemicDialects: {
            spain: {
                c: {
                    "default": "k",
                    "before:eiéí": "θ",
                },
               /* s: {
                    "default": "θ",
                    "before:kptaeiouéíóú": "s",
                }, */
                z: "θ",
            },
            argentina: {
                y: {
                    "default": "ʃ",
                    "only": "i",
                },
                ll: "ʃ",
            },
        },
    }
}

function traducir(){
    content = ""
    theinp = inp.value.toLowerCase()
    if(theinp.trim() != ""){
        for(ccc of Object.entries(resultpreparer(theinp))){
            content += ccc[1] + ": " + ccc[0] + "<br>"
        }
        rez.innerHTML = content
    }
    else{
        rez.innerHTML = ""
    }
}

function resultpreparer(wo){
    result = {}
    objs = []
    for(dial of languages[language].dialects){
        objs.push(total(wo, dial))
    }
    for(obj of objs){
        p = `${obj.phonemic} ${obj.phonetic}`
        if(Object.keys(result).includes(p) && result[p] != "standard"){
            result[p] += `/${obj.dialect}`
        }
        else if(!Object.keys(result).includes(p)){
            result[p] = obj.dialect
        }
    }
    return result
}

function total(w, d){
    dialect = d.toLowerCase()
    ipaphonem = IPAize(unicodeNormalization(w), "phonemic")
    ipaphonet = IPAize(unicodeNormalization(w), "phonetic")
    syllipaphonem = syllabize(ipaphonem)
    syllipaphonet = syllabize(ipaphonet)
    newsyllipaphonem = [[]]
    newsyllipaphonet = [[]]
    for(spn of syllipaphonem){
        if(spn != " "){
            newsyllipaphonem[newsyllipaphonem.length - 1].push(spn)
        }
        else{
            newsyllipaphonem.push([])
        }
    }
    for(spt of syllipaphonet){
        if(spt != " "){
            newsyllipaphonet[newsyllipaphonet.length - 1].push(spt)
        }
        else{
            newsyllipaphonet.push([])
        }
    }
    phonem = newsyllipaphonem.map(phnm => emphasisFinder(phnm).replace(/\./g, "")).join(" ")
    phonet = newsyllipaphonet.map(phnt => emphasisFinder(phnt)).join(" ")

    if(language == "asturian"){ //extremely spaghetti code, we'll elaborate later
        phonet = phonet.replaceAll("s ð̞", "z̪ ð̞")
    }
    m = {
        dialect: d,
        phonemic: `/${phonem}/`,
        phonetic: `[${phonet}]`,
    }
    return m
}

function unicodeNormalization(word){
    toNormalize = {
        "á": "á",
        "é": "é",
        "í": "í",
        "ñ": "ñ",
        "ó": "ó",
        "ú": "ú",
        "ü": "ü",
        "ý": "ý",
    }
    for(e of Object.entries(toNormalize)) word = word.replace(new RegExp(e[0], 'g'), e[1])
    return word
}


function IPAize(word, mode){
    word = word.split("").join("~")

    digraphs = ["ch", "gu", "ll", "qu", "rr"]

    for(e of digraphs){
        word = word.replace(new RegExp(`${e.charAt(0)}~${e.charAt(1)}`, 'g'), e)
    }

    word = word.split("~")

    newarr = []
    if(dialect != "standard"){
        stringSet = {
            ...languages[language][mode],
            ...languages[language][mode + "Dialects"][dialect]
        }
    }
    else{
        stringSet = languages[language][mode]
    }
    for(n = 0; n < word.length; n++){
        x = word[n]
        if(typeof stringSet[x] == "object"){
            h = ""
            for(cond of Object.entries(stringSet[x])){
                if(
                    (cond[0] == "default") ||
                    (cond[0] == "initial" && n == 0) ||
                    (cond[0] == "only" && n == 0 && word.length == 1) ||
                    (cond[0].startsWith("before") && n < word.length - 1 && cond[0].split(":")[1].includes(word[n+1])) ||
                    (cond[0].startsWith("after") && n > 0 && cond[0].split(":")[1].includes(word[n-1])) ||
                    (cond[0].startsWith("consonantbefore") && n < word.length - 2 && cond[0].split(":")[1].includes(word[n+1]) && !"aeiouáéíóú".includes(word[n+2])) ||
                    (cond[0].startsWith("consonantbefore") && n == word.length - 2 && cond[0].split(":")[1].includes(word[n+1]))
                ) h = cond[1]
            }
        }
        else h = stringSet[x]
        for(hh of h.split(",")) newarr.push(hh)
    }

    return newarr
}

function syllabize(word){
    vowels = ["ã", "a", "ẽ", "e", "ĩ", "i", "õ", "o", "ø", "ũ", "u", "u̯", "i̯"] //maybe j and w
    semivowels = ["j", "w"]
    syllabalizedArray = []
    for(x = 0; x < word.length; x++){
        function v(num){
            let = word[x + num].replace("́", "")
            return vowels.includes(let)
        }
        function s(num){
            let = word[x + num].replace("́", "")
            return semivowels.includes(let)
        }
        syllabalizedArray.push(word[x])
        if(language == "asturian"){
            if(
                (x < word.length - 1 && word[x+1] == " ") ||
                (word[x] == " ") ||
                (x < word.length - 4 && x > 0 && !v(0) && (!v(1) && !s(1)) && v(-1) && v(3) && word[x+2] != "θ") ||
                (x < word.length - 2 && x > 0 && !v(-1) && !v(0) && !v(1) && !v(2)) ||
                (x < word.length - 3 && x > 0 && !v(0) && !v(1) && (!v(2) && word[x+2] != "θ") && v(3) && v(-1)) ||
                (x < word.length - 1 && x > 0 && !v(-1) && !v(0) && word[x+1] == "θ") ||
                (x < word.length - 1 && word[x] == "n" && !v(1)) ||
                (x < word.length - 2 && v(0) && !v(1) && s(2)) ||
                (x < word.length - 1 && x > 0 && v(0) && v(1) && !s(-1) && word[x-1] != "") ||
                (x < word.length - 2 && v(0) && !v(1) && v(2)) ||
                (x < word.length - 3 && x > 0 && v(0) && (!v(1) && word[x+1] != "n") && !v(2) && v(3) && !v(-1)) ||
                (x < word.length - 2 && x > 1 && v(-2) && v(-1) && !v(0) && !v(1)) ||
                (x < word.length - 1 && v(0) && word[x+1].includes("́"))
            ) syllabalizedArray.push("~")
        }
        if(language == "spanish"){
            if(
                (x < word.length - 1 && word[x+1] == " ") ||
                (word[x] == " ") ||
                (x < word.length - 4 && x > 0 && !v(0) && (!v(1) && !s(1)) && v(-1) && v(3) && word[x+2] != "θ") ||
                (x < word.length - 2 && x > 0 && !v(-1) && !v(0) && !v(1) && !v(2)) ||
                (x < word.length - 3 && x > 0 && !v(0) && !v(1) && (!v(2) && word[x+2] != "θ") && v(3) && v(-1)) ||
                (x < word.length - 1 && x > 0 && !v(-1) && !v(0) && word[x+1] == "θ") ||
                (x < word.length - 1 && word[x] == "n" && !v(1)) ||
                (x < word.length - 2 && v(0) && !v(1) && s(2)) ||
                (x < word.length - 1 && x > 0 && v(0) && v(1) && !s(-1) && word[x-1] != "") ||
                (x < word.length - 2 && v(0) && !v(1) && v(2)) ||
                (x < word.length - 3 && v(0) && (!v(1) && word[x+1] != "n") && !v(2) && v(3)) ||
                (x < word.length - 1 && v(0) && word[x+1].includes("́"))
            ) syllabalizedArray.push("~")
        }

    }
    syllabalizedArray = syllabalizedArray.join("").split("~")
    return syllabalizedArray
}


function emphasisFinder(syllables){
    console.log(syllables)
    sylfinal = ""
    if(syllables.length == 1){ //if one syllable
        sylfinal = syllables[0].replace("́", "")
    }
    else if(syllables.join("").includes("́")){ //if has accent
        for(syl = 0; syl < syllables.length; syl++){
            if(syllables.length - 1 == syl){
                sylfinal += syllables[syl].replace("́", "")
            }
            else{
                if(syllables[syl+1].includes("́")){
                    sylfinal += syllables[syl] + "ˈ"
                }
                else{
                    sylfinal += syllables[syl].replace("́", "") + "."
                }
            }
        }
    }
    else if("aeiousn".includes(syllables[syllables.length-1].slice(-1))){
        if(syllables.length == 2){
            sylfinal = "ˈ" + syllables[0] + "." + syllables[1]
        }
        else{
            for(syl = 0; syl < syllables.length; syl++){
                if(syl == syllables.length - 1){
                    sylfinal += syllables[syl]
                }
                else{
                    if(syl == syllables.length - 3){
                        sylfinal += syllables[syl] + "ˈ"
                    }
                    else{
                        sylfinal += syllables[syl] + "."
                    }
                }
            }
        }
    }
    else{
        for(syl = 0; syl < syllables.length; syl++){
            if(syl == syllables.length - 1){
                sylfinal += syllables[syl]
            }
            else{
                if(syl == syllables.length - 2){
                    sylfinal += syllables[syl] + "ˈ"
                }
                else{
                    sylfinal += syllables[syl] + "."
                }
            }
        }
    }
    console.log(sylfinal)
    return sylfinal
}