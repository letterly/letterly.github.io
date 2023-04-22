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
               // "before:üoa": "g",
                "after:rz": "ɣ̞",
            },
            gu: {
                "default": "g",
                "before:aá": "ɣ̞~w",
                "after:rz": "ɣ̞",
            },
            h: "",
            ḥ: "h",
            i: {
                "default": "i",
                "consonantbefore:mn": "ĩ",
                "before:aeouáéóú": "j",
                "after:aeáé": "i̯",
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
                "before:m": "m",
                "before:f": "ɱ",
                "before:dt": "n̪",
                "before:gc": "ŋ",
                "before:yx": "ɲ", //before m??
                "custombefore:c:eiéí": "n̟",
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
            s: {
                "default": "s",
                "before:t": "s̪",
            },
            t: "t̪",
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
            v: {
                "default": "β̞",
                "after:mn": "b",
                "initial": "b",
            },
            w: "w",
            x: {
                "default": "ɕ",
                //"initial": "s",
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
                "before:aá": "g~w",
            },
            h: "",
            ḥ: "h",
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
                //"before:üoa": "g",
                "after:rz": "ɣ̞",
            },
            gu: {
                "default": "g",
                "before:aá": "ɣ̞~w",
                "after:rz": "ɣ̞",
            },
            h: "",
            i: {
                "default": "i",
                "consonantbefore:mn": "ĩ",
                "before:aeouáéóú": "j",
                "after:aeáé": "i̯",
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
                "before:dt": "n̪",
                "before:y": "ɲ", //before m??
                "before:cg": "ŋ",
                "custombefore:c:eiéí": "n",
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
            t: "t̪",
            u: {
                "default": "u",
                "before:ae": "w",
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
            v: {
                "default": "β̞",
                "after:mn": "b",
                "initial": "b",
            },
            w: "w",
            x: {
                "default": "ɣ̞~s",
                "initial": "s",
                "before:n": "ɣ̞~z",
            },
            y: {
                "default": "ʝ",
                "initial": "ɟ͡ʝ",
                "alone": "i",
                "after:n": "ɟ͡ʝ",
                "after:aáée": "i̯",
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
                    "before:gc": "ŋ",
                    "before:dt": "n̪",
                    "before:y": "ɲ",
                    "custombefore:c:ei": "n",
                },
                z: "θ",
            },
            argentina: {
                y: {
                    "default": "ʃ",
                    "after:aáée": "i̯",
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
                "before:aá": "g~w",
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
                "before:ae": "w",
            },
            ú: "ú",
            ü: "w",
            v: "b",
            w: "w",
            x: {
                "default": "g~s",
                "initial": "s",
            },
            y: {
                "default": "ʝ",
                "after:aeáé": "i",
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
                z: "θ",
            },
            argentina: {
                y: {
                    "default": "ʃ",
                    "after:aeáé": "i",
                    "only": "i",
                },
                ll: "ʃ",
            },
        },
    }
}

function traducir(){
    content = ""
    theinp = inp.value.toLowerCase().trim()
    theinp = theinp.replace(/[\.\,\:\;\!\?\)]/g, " \$\&")
    theinp = theinp.replace(/[¿¡\(]/g, "\$\& ")
    if(theinp.length > 1 || ["a", "e", "o", "u"].includes(theinp)){
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
    syllipaphonem = syllabize(ipaphonem).filter(x => x !== "")
    syllipaphonet = syllabize(ipaphonet).filter(x => x !== "")
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

    phonem = phonem.replace(/ (?=[\.\,\:\;\?\!])/g, "")
    phonem = phonem.replace(/(?<=[¡¿\(]) /g, "")
    phonet = phonet.replace(/ (?=[\.\,\:\;\?\!])/g, "")
    phonet = phonet.replace(/(?<=[¡¿\(]) /g, "")

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
                    (cond[0].startsWith("consonantbefore") && n == word.length - 2 && cond[0].split(":")[1].includes(word[n+1])) ||
                    (cond[0].startsWith("custombefore") && n < word.length - 2 && cond[0].split(":")[1].includes(word[n+1]) && cond[0].split(":")[2].includes(word[n+2])) ||
                    (cond[0].startsWith("custombefore") && n == word.length - 2 && cond[0].split(":")[1].includes(word[n+1]))
                ) h = cond[1]
            }
        }
        else h = stringSet[x]
        if(".,:;!¡?¿()".includes(x)) h = x
        for(hh of h.split("~")) newarr.push(hh)
    }

    return newarr
}

function syllabize(word){
    vowels = ["ã", "a", "ẽ", "e", "ĩ", "i", "õ", "o", "ø", "ũ", "u", "u̯", "i̯"] //maybe j and w
    semivowels = ["j", "w"]
    syllabalizedArray = []
    for(x = 0; x < word.length; x++){
        syllabalizedArray.push(word[x])
        v = (char) => {
            if(char >= word.length) return false
            else return vowels.includes(word[char].replace(/́/g, ""))
        }
        i = (lets, char) => {
            if(char >= word.length) return false
            else return lets.includes(word[char].replace(/[̞̪]/g, "")) 
        }
        q = (reason) => {
            //console.log(word[x] + " and " + word[x+1])
            //console.log(reason)
        }
        if(language == "asturian"){
            vowels = "aeiouãẽĩõũø"
            conditions = false
            if(!v(x) && word[x+2] != undefined && word[x-1] != undefined && (!v(x+1) && word[x+1] != "j" && word[x+1] != "w") && !(i("bcdɣgfpβ", x) && i("lɾ", x+1)) && v(x-1) && !(word[x] == "n" && word[x+1] == "s")){
                conditions = true
                q("Split 1: non-linking consonant cluster, not after a consonant")
            }
            if(word[x] == "s" && i("t", x+1)){
                conditions = true
                q("Split 1.5: the st split")
            }
            if(word[x] == " "){
                q("Split 2: Next is space")
                conditions = true
            }
            if(word[x+1] == " "){
                q("Split 3: First is space")
                conditions = true
            }
            if(v(x) && word[x+2] != undefined && i("ðxnβpɣgsʃɾlt͡ɕ", x+1) && (v(x+2) || word[x+2] == "j" || word[x+2] == "w")){
                q("Split 4: Vowel before hard consonant (?)")
                conditions = true
            }
            if(v(x) && word[x+2] != undefined && i("dðɣɾmgɲtʎθβk", x+1) && (v(x+2) || word[x+2] == "j" || word[x+2] == "w")){
                conditions = true
                q("Split 6: classic consonant split")
            }
            if(v(x) && word[x+3] != undefined && i("bcdɣgfpβ", x+1) && i("lɾ", x+2) && v(x+3)){
                conditions = true
                q("Split 7: n after a vowel")
            }
            if(word[x+1] != undefined && "oía".includes(word[x]) && "oaʝ".includes(word[x+1])){
                q("Split 8: double vowel")
                conditions = true
            }
            if(conditions) syllabalizedArray.push("~")
        }
        if(language == "spanish"){
            vowels = "aeiouãẽĩõũ"
            conditions = false
            if(word[x-1] != undefined && word[x+1] != undefined && (word[x-1] == "ɣ̞" || word[x-1] == "g") && (word[x] == "s" || word[x] == "z") && !(v(x+1) || word[x+1] == "w")){
                conditions = true
                q("Split 0: consonant after 'x'-cluster")
            }
            if(!v(x) && word[x+2] != undefined && word[x-1] != undefined && (!v(x+1) && word[x+1] != "j" && word[x+1] != "w") && !(i("bcdɣgfpβ", x) && i("lɾ", x+1)) && v(x-1) && !((word[x] == "ɣ̞" || word[x] == "g") && (word[x+1] == "s" || word[x+1] == "z") && (!v(x+2) && word[x+2] != "w")) && !(word[x] == "n" && word[x+1] == "s" && word[x+2] != "j")){
                conditions = true
                q("Split 1: non-linking consonant cluster, not after a consonant")
            }
            if(word[x] == "s" && i("t", x+1)){
                conditions = true
                q("Split 1.5: the st split")
            }
            if(word[x] == " "){
                q("Split 2: Next is space")
                conditions = true
            }
            if(word[x+1] == " "){
                q("Split 3: First is space")
                conditions = true
            }
            if(v(x) && word[x+2] != undefined && i("ðxnβpgɣsʃɾl", x+1) && (v(x+2) || word[x+2] == "j" || word[x+2] == "w")){
                q("Split 4: Vowel before hard consonant (?)")
                conditions = true
            }
            if(word[x].startsWith("n") && word[x-1] != undefined && word[x+1] != undefined && v(x-1) && !(v(x+1) || word[x+1] == "s" || word[x+1] == "j")){
                conditions = true
                q("Split 5: n after a vowel and not before vowel")
            }
            if(v(x) && word[x+2] != undefined && i("dðɣɾmkɲt", x+1) && v(x+2)){
                conditions = true
                q("Split 6: classic consonant split")
            }
            if(v(x) && word[x+3] != undefined && i("bcdɣgfpβ", x+1) && i("lɾ", x+2) && v(x+3)){
                conditions = true
                q("Split 7: n after a vowel")
            }
            if(word[x+1] != undefined && "oía".includes(word[x]) && "oaʝ".includes(word[x+1])){
                q("Split 8: Double vowel split")
                conditions = true
            }
            if(conditions) syllabalizedArray.push("~")
        }

    }
    syllabalizedArray = syllabalizedArray.join("").split("~")
    return syllabalizedArray
}


function emphasisFinder(syllables){
    sylfinal = ""
    if(syllables.length == 1){ //if one syllable
        sylfinal = syllables[0].replace("́", "")
    }
    else if(syllables.join("").includes("́")){ //if has accent
        if(syllables[0].includes("́")){
            syllables[0] = "ˈ" + syllables[0].replace("́", "")
        }
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
    return sylfinal
}


test = {
    spanish: {
        "lingüística": "[lĩŋˈgwis.t̪i.ka]",
        "paraguay": "[pa.ɾaˈɣ̞wai̯]",
        "quinientos": "[kiˈnjẽn̪.t̪os]",
        "contigo": "[kõn̪ˈt̪i.ɣ̞o]",
        "andrógino": "[ãn̪ˈd̪ɾo.xi.no]",
        "alta": "[ˈal̪.t̪a]",
        "abrir": "[aˈβ̞ɾiɾ]",
        "examen mañana": "[eɣ̞ˈsa.mẽn maˈɲa.na]",
        "maltrato": "[mal̪ˈt̪ɾa.t̪o]",
        "extra": "[ˈeɣ̞s.t̪ɾa]",
        "experimentar": "[eɣ̞s.pe.ɾi.mẽn̪ˈt̪aɾ]",
        "exnovio": "[eɣ̞zˈno.β̞jo]",
        "operación": "[o.pe.ɾaˈsjõn]",
        "cooperación": "[ko.o.pe.ɾaˈsjõn]",
        "zanahoria": "[sa.naˈo.ɾja]",
        "hallar": "[aˈʝaɾ]",
        "sexual": "[seɣ̞ˈswal]",
        "circunstancia": "[siɾ.kũnsˈt̪ãn.sja]",
        "éxito": "[ˈeɣ̞.si.t̪o]",
    },
    asturian: {
        "llingüística": "[ʎĩŋˈɡwis̪.t̪i.ka]",
        "berenxenal": "[be.ɾẽɲ.ɕeˈnal]",
        "cenciellu": "[θẽn̟ˈθje.ʎu]",
        "circunstancia": "[θiɾ.kũnsˈt̪ãn̟.θja]",
        "cincocientos": "[θĩŋ.koˈθjẽn̪.t̪os]",
        "duviachu": "[d̪uˈβ̞ja.t͡ɕu]",
        "paraguái": "[pa.ɾaˈɣ̞wai̯]",
    }
}
for(tt of Object.entries(test)){
    language = tt[0]
    for(tst of Object.entries(tt[1])){
        ddd = total(tst[0], "standard").phonetic
        if(ddd != tst[1]){
            console.log("RED ALERT @ " + tt[0] + " language @ " + tst[0])
            console.log("EXPECTED " + tst[1] + ", RECEIVED " + ddd)
        }
    }   
}
language = "spanish"

function selectLang(lingua){
    document.getElementById(language).style.backgroundColor = "red"
    document.getElementById(language).style.fontWeight = 400
    language = lingua
    document.getElementById(language).style.backgroundColor = "green"
    document.getElementById(language).style.fontWeight = 700
}