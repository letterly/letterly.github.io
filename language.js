firstLanguage = "en"
secondLanguage = "es"
type = ""
f = languages[firstLanguage]
l = languages[secondLanguage]
naunlist = ["woman", "beer", "city", "man", "cat", "park", "apple", "banana", "car", "dog", "bear", "cat", "sauce", "wine"]
lessonNumber = 0
partNumber = 0
specialDefinition = {}
function pronounToPerson(sub){
    conv = {"i": 0, "yousginf": 1, "he": 2, "she": 2, "wem": 3, "wef": 3, "youplinf": 4, "theym": 5, "theyf": 5}
    if(conv[sub] != undefined) return conv[sub]
    else if(sub.includes("pl=")) return 5
    else return 2
}

function parse(txt, shprak){
    q = shprak ? languages[shprak] : l
    txt = txt.replace("%", f[secondLanguage])
    txt = txt.replace(/\[/g, " [ ").replace(/\]/g, " ]").split(" ")
    for(ind = 0; ind < txt.length; ind++){
        t = txt[ind]
        if(t.startsWith("#") && (t.indexOf("[", ind + 2) > t.indexOf("]", ind + 2) || t.indexOf("[", ind + 2) == -1) ){
            spl = txt.splice(txt.indexOf("[", ind), txt.indexOf("]", ind) - txt.indexOf("[", ind) + 1)
            spl = spl.splice(1, spl.length-2)
            txt[ind] = q[t.slice(1)](...spl)
        }
        else if(q[t] != undefined) txt[ind] = q[t]
    }
    txt = txt.join(" ")
    return txt.replace("¿ ", "¿").replace(" ?", "?")
}


function returnLesson(lNumber, pNumber, theLanguage){
    l = languages[theLanguage]
    f = languages[firstLanguage]
    specialDefinition = {
        asgm: `(${f.singular} ${f.and} ${f.masculine})`,
        asgf: `(${f.singular} ${f.and} ${f.feminine})`,
        asgn: `(${f.singular} ${f.and} ${f.neutral})`,
        asgc: `(${f.singular} ${f.and} ${f.common})`,
        aplm: `(${f.plu} ${f.and} ${f.masculine})`,
        aplf: `(${f.plu} ${f.and} ${f.feminine})`,
        apln: `(${f.plu} ${f.and} ${f.neutral})`,
        aplc: `(${f.plu} ${f.and} ${f.common})`,
        thesgm: `(${f.singular} ${f.and} ${f.masculine})`,
        thesgf: `(${f.singular} ${f.and} ${f.feminine})`,
        thesgn: `(${f.singular} ${f.and} ${f.neutral})`,
        thesgc: `(${f.singular} ${f.and} ${f.common})`,
        theplm: `(${f.plu} ${f.and} ${f.masculine})`,
        theplf: `(${f.plu} ${f.and} ${f.feminine})`,
        thepln: `(${f.plu} ${f.and} ${f.neutral})`,
        theplc: `(${f.plu} ${f.and} ${f.common})`,
    }
    lessonNon = {
        "0-4": !l.definitiveSuffixes,
    }
    lessons = [
        [ //Introduction
            "vocab@i",
            //
            //
            "vocab@man",
            "vocab@am",
            `sentence@${parse("i")}`,
            (!l.definitiveSuffixes ? "vocab@asgm" : ""),
            (secondLanguage == "sw" ? "vocab@asgc" : ""),
            (secondLanguage == "sw" ? "vocab@asgn" : ""),
            `sentence@${parse("#svo[i beser=present asg=man]")}`,
            "vocab@woman",
            (!l.definitiveSuffixes ? "vocab@asgf" : ""),
            `sentence@${parse("woman")}`,
            `sentence@${parse("#svo[i beser=present asg=woman]")}`,
            "vocab@He",
            "vocab@is",
            `sentence@${parse("#svo[he beser=present asg=man]")}`,
            "vocab@she",
            `translate@${parse("#svo[she beser=present asg=woman]")}`,
            "vocab@and",
            "vocab@or",
            "vocab@yousg",
            `translate@${parse("#noun[asg woman] and #noun[asg man]")}`,
            `sentence@${parse("yousg or i")}`,
        ],
        [ //plurals
            "vocab@park",
            `text@${parse("in % #noun[thesg form] of #noun[asg vrb] #verb[beser present 2] determined by its subject", firstLanguage)}`,
            "verb@beser~present",
            "vocab@small",
            "vocab@tall",
            (!l.definitiveSuffixes ? "vocab@thesgm" : ""),
            (!l.definitiveSuffixes ? "vocab@thesgf" : ""),
            `translate@${parse("#noun[thesg man]")}`,
            (!l.definitiveSuffixes ? "vocab@theplf" : ""),
            (!l.definitiveSuffixes ? "vocab@theplm" : ""),
            `sentence@${parse("#noun[thepl woman]")}`,
            `translate@${parse("#svo[wem beser=present thepl=man]")}`,
            `text@${parse("#svo[thepl=adj have=present thesg=gen] and #noun[thesg number] of #noun[thesg subject]")}`,
            `sentence@${parse("#noun[asg park small]")}`,
            `vocab@city`,
            `translate@${parse("#noun[asg woman] in #noun[asg city small]")}`,
            `vocab@now`,
            `sentence@${parse("now #svo[he beser=present asg=man]")}`,
            `sentence@${parse("#noun[thepl woman] #verb[beser present 5] #adjective[tall p woman]")}`,
            `translate@${parse("#noun[thesg man] #verb[beser present 2] #adjective[small s man]")}`,
        ],
        [ //to have
            `text@${f.usually}, ${f.add} ${secondLanguage != "it" ? (secondLanguage != "yi" ? `'-s' ${f.or} '-es'` : `'-s' ${f.or} '-en'`) : `-e ${f.to} ${f.noun("thepl", "sustantive", "feminine")} ${f.and} -i ${f.to} ${f.noun("thepl", "sustantive", "masculine")}`} ${f.para} ${f.noun("asg", "sustantive", "plu")} ${f.or} ${f.noun("asg", "adj", "plu")}`,
            `sentence@${parse("#plural[man]")}`,
            "vocab@apple",
            `translate@${parse("#plural[woman]")}`,
            "vocab@car",
            "verb@have~present",
            `sentence@${parse("#svo[she have=present asg=car]")}`,
            ((!["fr", "en", "yi", "mk"].includes(secondLanguage) && ["fr", "en", "mk", "yi"].includes(firstLanguage)) ? `text@${parse("#noun[thesg vrb] 'estar' #verb[beser present 2] #noun[asg vrb] that signifies #verb[beser infinitive] but #noun[thesg vrb] only #verb[beest present 2] used para #plural[location] and #plural[emotion]", firstLanguage)}` : ""),
            (!["fr", "sv", "en"].includes(secondLanguage) ? "verb@beest~present" : ""),
            `translate@${parse("#plural[apple]")}`,
            `translate@${parse("q whereq #verb[beest present 2] #noun[thesg car] ?")}`,
            "vocab@dog",
            "vocab@cat",
            "vocab@bear",
            `translate@${parse("bear")}`,
            `sentence@${parse("#noun[thepl cat]")}`,
            `sentence@${parse("#noun[thepl dog small]")}`,
            `vocab@slow`,
            `vocab@fast`,
            `translate@${parse("theyf #verb[have present 5] #noun[asg car slow]")}`,
            `translate@${parse("he #verb[beser present 2] #noun[asg cat fast]")}`,
            `vocab@in`,
            `vocab@house`,
            `translate@${parse("bear")}`,
            `sentence@${parse("#noun[thesg man] #verb[beest present 2] in #noun[thesg park]")}`,
            `sentence@${parse("wem #verb[have present 3] #noun[asg cat small accusative] and he #verb[beest present 2] in #noun[thesg house]")}`,
        ],
        [ //Food/Colors 1
            `vocab@red`,
            `vocab@orange`,
            `sentence@${parse("red")}`,
            `vocab@yellow`,
            `vocab@banana`,
            `sentence@${parse("#noun[thesg banana] #verb[beser present 2] #adjective[yellow s banana]")}`,
            `vocab@sauce`,
            `sentence@${parse("q whereq #verb[beest present 2] #noun[thesg sauce red] ?")}`,
            `translate@${parse("banana")}`,
            `vocab@orange`,
            `vocab@wine`,
            `vocab@blue`,
            `sentence@${parse("#noun[thesg wine] #verb[beser present 2] #adjective[yellow s wine] or #adjective[orange s wine]")}`,
            `sentence@${parse("green")}`,
            `vocab@color`,
            `vocab@whatq`,
            `sentence@${parse("q whatq color #verb[beser present 2] #noun[thesg car small] ?")}`,
            `translate@${parse("blue")}`,
        ],
        [ //Negative verbs
            `translate@${parse("yes she #verb[want present 2] #noun[thesg house blue accusative]")}`,
            `verb@want~present`,
            `sentence@${parse("wem #verb[want present 3]")}`,
            `translate@${parse("she #verb[want present 2]")}`,
            `verb@eat~present`,
            (secondLanguage != "mk" ? `translate@${parse("#verb[eat infinitive]")}` : ''),
            `vocab@with`,
            `vocab@yes`,
            `vocab@no`,
            `sentence@${parse("i #verb[want present 0] #verb[eat infinitive 0] in #noun[thesg house] with Harris")}`,
            `translate@${parse("wem #verb[eat present 3]")}`,
            `sentence@${parse("theym #negativeVerb[want present 5] #verb[eat infinitive 5] #noun[thesg banana green accusative]")}`,
            `translate@${parse("yes she #verb[want present 2] #noun[thesg house blue accusative]")}`,
            `translate@${parse("no i #negativeVerb[want present 0] #noun[thesg house blue accusative]")}`,
        ],
        [ //Food/Colors 2
            `verb@drink~present`,
            `vocab@water`,
            `vocab@lemonade`,
            `vocab@purple`,
            `vocab@pink`,
            `vocab@white`,
            `vocab@gray`,
            `vocab@black`,
        ],
    ]

    x = lessons[lNumber][pNumber].toLowerCase()
    for(y of Object.entries(l.contractions)) x = x.replace(`${y[0]}`, `${y[1]}`)
    for(y of Object.entries(languages[firstLanguage].contractions)) x = x.replace(`${y[0]}`, `${y[1]}`)
    return x
}

function render(){
    material = returnLesson(lessonNumber, partNumber, secondLanguage)
    if(material == ""){
        partNumber++
        render()
    }
    else{
        type = material.split("@")[0]
        content = material.split("@")[1]
        if(type == "vocab"){
            for(block of ["word", "definition", "info", "enter"]) document.getElementById(block).style.display = "block"
            for(block of ["input", "verbTable"]) document.getElementById(block).style.display = "none"
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            enter.style.backgroundColor = "#F79A32"
            word.textContent = languages[secondLanguage][content]
            definition.textContent = languages[firstLanguage][content]
            info.textContent = specialDefinition[content] ?? ""
            if(naunlist.includes(content) && l.genderList.length >= 2) info.textContent = `(${f[{"f": "feminine", "m": "masculine", "n": "neutral", "c": "common"}[l.gender(l[content])]]})`
            if(naunlist.includes(content)) info.innerHTML += "<br>" + f.plu + ": " + f.plural(content)
        }
        else if(type == "sentence" || type == "translate"){
            if(type == "translate") input.style.textAlign = secondLanguage == "yi" ? "right" : "left"
            else input.style.textAlign = firstLanguage == "yi" ? "right" : "left"
            for(block of ["word", "definition", "info", "enter", "input"]) document.getElementById(block).style.display = "block"
            verbTable.style.display = "none"
            input.value = ""
            //input.style.textAlign = "left"
            input.placeholder = `${f.write} ${f.here}`
            enter.style.backgroundColor = "#F79A32"
            enter.textContent = f.submit
            verbTable.style.display = "none"
            word.textContent = type == "sentence" ? content : returnLesson(lessonNumber, partNumber, firstLanguage).split("@")[1]
            definition.textContent = `${f.translate} ${f.to} ` + (type == "sentence" ? languages[firstLanguage][firstLanguage] : languages[firstLanguage][secondLanguage])
            info.textContent = ""
        }
        else if(type == "verb"){
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            for(block of ["enter", "verbTable"]) document.getElementById(block).style.display = "block"
            for(block of ["word", "definition", "info", "input"]) document.getElementById(block).style.display = "none"
            infinitivenative.textContent = l.verb(content.split("~")[0], "infinitive") + " [" + f[content.split("~")[1]] + "]"
            infinitiveenglish.textContent = `(${f.verb(content.split("~")[0], "infinitive")})`
            verb1s.textContent = l.i + " " + l[content.split("~")[0]][content.split("~")[1]][0]
            verb1p.textContent = l.wem + " " + l[content.split("~")[0]][content.split("~")[1]][3]
            verb2s.textContent = l.yousg + " " + l[content.split("~")[0]][content.split("~")[1]][1]
            verb2p.textContent = l.youplinf + " " + l[content.split("~")[0]][content.split("~")[1]][4]
            verb3s.textContent = l.he + "/" + l.she + " " + l[content.split("~")[0]][content.split("~")[1]][2]
            verb3p.textContent = l.theym + " " + l[content.split("~")[0]][content.split("~")[1]][5]
        }
        else if(type == "text"){
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            enter.style.display = "block"
            for(block of ["verbTable", "input", "info", "word"]) document.getElementById(block).style.display = "none"
            definition.textContent = content
        }
    }
}

document.addEventListener('keydown', (e) => {if(e.code == "Enter") enterFunction()})

function enterFunction(){
    if(["vocab", "verb", "text"].includes(type) || input.value.includes(f.click)){
        input.value = ""
        partNumber++
        if(partNumber == lessons[lessonNumber].length){
            partNumber = 0
            home.style.display = "block"
            lesson.style.display = "none"
        }
        else render()
    }
    else if(type == "sentence" || type == "translate"){
        if(input.style.display == "none"){
            partNumber++
            if(partNumber == lessons[lessonNumber].length){
                partNumber = 0
                home.style.display = "block"
                lesson.style.display = "none"
            }
            else render()
        }
        else if(input.value == ""){
            input.classList.add("angryinput")
            input.placeholder = `${f.please} ${f.write} ${f.here}...`
        }
        else{
            input.classList.remove("angryinput")
            input.placeholder = `${f.write} ${f.here}`
            input.style.display = "none"
            z = input.value.toLowerCase()
            for(y of Object.entries(languages[firstLanguage].contractions)) z = z.replace(`${y[0]}`, `${y[1]}`)
            answer = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            prodropanswer = firstLanguage == "en" ? "" : answer.replace(f.i, "").replace(f.yousg, "").replace(f.we, "").trim()
            if(z == answer || z == prodropanswer){
                enter.style.backgroundColor = "#889B4A"
                enter.textContent = `${f.correct}, ${f.click} ${f.parato} ${f.continue}`
            }
            else{
                enter.style.backgroundColor = "#DC3958"
                enter.textContent = `${f.incorrect}, ${f.click} ${f.parato} ${f.continue}`
                definition.textContent = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            }
        }
    }
}
function firstLangSelect(ln){
    document.getElementById(firstLanguage + "1").style.backgroundColor = "#FCAC51"
    document.getElementById(firstLanguage + "2").style.display = "inline"
    firstLanguage = ln
    f = languages[firstLanguage]
    document.title = f.plural("language").charAt(0).toUpperCase() + f.plural("language").slice(1)
    if(firstLanguage == secondLanguage){
        secondLanguage = (firstLanguage == "es") ? "en" : "es"
        document.getElementById(firstLanguage + "2").style.backgroundColor = "#FCAC51"
        document.getElementById(secondLanguage + "2").style.backgroundColor = "#F14A68"
    }
    lang1.textContent = `${f.yousg} ${f.verb("speak", "present", 1)}:`,
    lang2.textContent = `${f.yousg} ${f.verb("want", "present", 1)} ${f.verb("learn", "infinitive", 1)}:`,
    lev.textContent = `${f.select} ${f.noun("asg", "level")}`
    for(v in Array.from(document.getElementById('levelselector').children)) document.getElementById("b" + v).textContent = "lvl " + (+v + 1) + ": " + [`${f.introduction}`, `${f.adjective("plu", 'plm')}`, `${f.verb("have", "infinitive")}`, `${f.food}/${f.plural("color")} 1`, `${f.no}`][v]
    for(v of Array.from(document.getElementById('selector2').children)) v.textContent = f[v.id.slice(0, -1)]
    document.getElementById(ln + "1").style.backgroundColor = "#F14A68"
    document.getElementById(ln + "2").style.display = "none"
}
function secondLangSelect(ln){
    document.getElementById(secondLanguage + "2").style.backgroundColor = "#FCAC51"
    secondLanguage = ln
    document.getElementById(ln + "2").style.backgroundColor = "#F14A68"
}
function levelSelect(nm){
    home.style.display = "none"
    lesson.style.display = "block"
    lessonNumber = nm
    partNumber = 0
    render()
}