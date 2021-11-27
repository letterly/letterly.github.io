firstLanguage = "en"
secondLanguage = "es"
type = ""
f = languages[firstLanguage]
l = languages[secondLanguage]
naunlist = ["woman", "city", "man", "cat", "park", "apple", "banana", "car", "dog", "bear", "cat", "sauce", "wine", "house", "lemonade", "beer", "water", "vodka", "school", "dialect", "movie"]
lessonNumber = 0
partNumber = 0
specialDefinition = {
    asgm: `singular and masculine`,
    asgf: `singular and feminine`,
    asgn: `singular and neutral`,
    asgc: `singular and common`,
    aplm: `plural and masculine`,
    aplf: `plural and feminine`,
    apln: `plural and neutral`,
    aplc: `plural and common`,
    thesgm: `singular and masculine`,
    thesgf: `singular and feminine`,
    thesgn: `singular and neutral`,
    thesgc: `singular and common`,
    theplm: `plural and masculine`,
    theplf: `plural and feminine`,
    thepln: `plural and neutral`,
    theplc: `plural and common`,
}
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
    lessons = [
        [ //Introduction
            "vocab@i",
            "vocab@man",
            "vocab@am",
            `sentence@i`,
            "vocab@asgm", //l == "sv" 0-4
            "vocab@asgc", //l != "sv" 0-5
            "vocab@asgn", //l != "sv" 0-6
            `sentence@#svo[i beser=present asg=man]`,
            "vocab@woman",
            "vocab@asgf", //l == "sv" 0-9
            `sentence@woman`,
            `sentence@#svo[i beser=present asg=woman]`,
            "vocab@He",
            "vocab@is",
            `sentence@#svo[he beser=present asg=man]`,
            "vocab@she",
            `translate@#svo[she beser=present asg=woman]`,
            "vocab@and",
            "vocab@or",
            "vocab@yousg",
            `translate@#noun[asg woman] and #noun[asg man]`,
            `sentence@yousg or i`,
        ],
        [ //plurals
            "vocab@park",
            `text@in % #noun[thesg form] of #noun[asg vrb] #verb[beser present 2] determined by its subject`,
            "verb@beser~present",
            "vocab@small",
            "vocab@tall",
            "vocab@thesgm", //l.definitiveSuffixes 1-5
            "vocab@thesgf", //l.definitiveSuffixes 1-6
            `translate@#noun[thesg man]`,
            "vocab@theplf", //l.definitiveSuffixes 1-8
            "vocab@theplm", //l.definitiveSuffixes 1-9
            `sentence@#noun[thepl woman]`,
            `translate@#svo[wem beser=present thepl=man]`,
            `text@#svo[thepl=adj have=present thesg=gen] and #noun[thesg number] of #noun[thesg subject]`,
            `sentence@#noun[asg park small]`,
            `vocab@city`,
            `translate@#noun[asg woman] in #noun[asg city small]`,
            `vocab@now`,
            `sentence@now #svo[he beser=present asg=man]`,
            `sentence@#noun[thepl woman] #verb[beser present 5] #adjective[tall p woman]`,
            `translate@#noun[thesg man] #verb[beser present 2] #adjective[small s man]`,
        ],
        [ //to have
            `sentence@#plural[man]`,
            "vocab@apple",
            `translate@#plural[woman]`,
            "vocab@car",
            "verb@have~present",
            `sentence@#svo[she have=present asg=car]`,
            `text@#noun[thesg vrb] 'estar' #verb[beser present 2] #noun[asg vrb] that signifies #verb[beser infinitive] but #noun[thesg vrb] only #verb[beest present 2] used para #plural[location] and #plural[emotion]`, //!l.twoCopula || f.twoCopula 2-6
            "verb@beest~present", //!l.twoCopula 2-7
            `translate@#plural[apple]`,
            `translate@q whereq #verb[beest present 2] #noun[thesg car] ?`,
            "vocab@dog",
            "vocab@cat",
            "vocab@bear",
            `translate@bear`,
            `sentence@#noun[thepl cat]`,
            `sentence@#noun[thepl dog small]`,
            `vocab@slow`,
            `vocab@fast`,
            `translate@theyf #verb[have present 5] #noun[asg car slow]`,
            `translate@he #verb[beser present 2] #noun[asg cat fast]`,
            `vocab@in`,
            `vocab@house`,
            `translate@bear`,
            `sentence@#noun[thesg man] #verb[beest present 2] in #noun[thesg park]`,
            `sentence@wem #verb[have present 3] #noun[asg cat small accusative] and he #verb[beest present 2] in #noun[thesg house]`,
        ],
        [ //Food/Colors 1
            `vocab@red`,
            `vocab@orange`,
            `sentence@red`,
            `vocab@yellow`,
            `vocab@banana`,
            `sentence@#noun[thesg banana] #verb[beser present 2] #adjective[yellow s banana]`,
            `vocab@sauce`,
            `sentence@q whereq #verb[beest present 2] #noun[thesg sauce red] ?`,
            `translate@banana`,
            `vocab@orange`,
            `vocab@wine`,
            `vocab@blue`,
            `sentence@#noun[thesg wine] #verb[beser present 2] #adjective[yellow s wine] or #adjective[orange s wine]`,
            `sentence@green`,
            `vocab@color`,
            `vocab@whatq`,
            `sentence@q whatq color #verb[beser present 2] #noun[thesg car small] ?`,
            `translate@blue`,
        ],
        [ //Negative verbs [LESSON 5]
            `translate@yes she #verb[want present 2] #noun[thesg house blue accusative]`,
            `verb@want~present`,
            `sentence@wem #verb[want present 3]`,
            `translate@she #verb[want present 2]`,
            `verb@eat~present`,
            `translate@#verb[eat infinitive]`, //4-5
            `vocab@with`,
            `vocab@yes`,
            `vocab@no`,
            `sentence@i #verb[want present 0] #verb[eat infinitive 0] in #noun[thesg house] with Harris`,
            `translate@wem #verb[eat present 3]`,
            `sentence@#negativesvo[theym want present] #verb[eat infinitive 5] #noun[thesg banana green accusative]`,
            `translate@yes she #verb[want present 2] #noun[thesg house blue accusative]`,
            `translate@no #negativesvo[i want present] #noun[thesg house blue accusative]`,
        ],
        [ //Food/Colors 2 [LESSON 6]
            `translate@q whereq #verb[beest present 2] #noun[thesg lemonade pink] ?`, //
            `verb@drink~present`,
            `vocab@water`,
            `vocab@lemonade`,
            `vocab@purple`,
            `vocab@pink`,
            `vocab@white`,
            `vocab@gray`,
            `sentence@white`,
            `vocab@black`,
            `translate@q whereq #verb[beest present 2] #noun[thesg lemonade pink] ?`,
            `sentence@gray`,
            `vocab@beer`,
            `vocab@school`,
            `vocab@vodka`,
            `translate@#negativesvo[wem can present] #verb[drink infinitive 3] #noun[thesg vodka purple accusative] in #noun[thesg school]`,
            `vocab@funny`,
            `sentence@#noun[thesg dog funny] #verb[beser present 2] #adjective[black s dog] and #adjective[white s dog]`,
            `translate@#negativesvo[i want present 0] #verb[drink infinitive 0] or #verb[eat infinitive 0] with #noun[thesg bear]`,
        ],
        [ //Future [LESSON 7]
            `vocab@movie`,
            `verb@will~present`, //6-1
            `verb@see~present`,
            `translate@movie`,
            `sentence@yousg #verb[see present 1]`,
            `translate@she #verb[see present 2]`,
            `verb@see~future`, //6-6
            `vocab@tomorrow`,
            `sentence@wem #verb[see future 3] #noun[thesg movie] tomorrow`,
            `verb@beest~future`, //6-9
            `vocab@poland`,
            `vocab@canada`,
            `vocab@france`,
            `sentence@i #verb[beest future 0] in france`,
            `vocab@fr`,
            `vocab@en`,
            `vocab@yi`,
            `verb@speak~future`, //6-17
            `vocab@dialect`,
            `vocab@from`,
            `sentence@in canada theym #verb[speak present 5] fr and en`,
            `translate@#svo[wef speak=present thepl=dialect] from poland`,
            `translate@canada #verb[speak future 2] yi in 2025`,
        ],
    ]

    x = lessons[lNumber][pNumber].toLowerCase()
    return x
}

function render(){
    material = returnLesson(lessonNumber, partNumber, secondLanguage)
    l = languages[secondLanguage]
    lessonNon = { //to skip
        "0-4": secondLanguage == "sv",
        "0-5": secondLanguage != "sv",
        "0-6": secondLanguage != "sv",
        "0-9": secondLanguage == "sv",
        "1-5": l.definitiveSuffixes,
        "1-6": l.definitiveSuffixes,
        "1-8": l.definitiveSuffixes,
        "1-9": l.definitiveSuffixes,
        "2-6": !l.twoCopula || f.twoCopula,
        "2-7": !l.twoCopula,
        "4-5": secondLanguage == "mk",
        "6-1": !["yi"].includes(secondLanguage),
        "6-6": ["yi", "en", "sv"].includes(secondLanguage),
        "6-9": ["yi", "en", "sv"].includes(secondLanguage),
        "6-17": ["yi", "en", "sv"].includes(secondLanguage),
    }
    if(lessonNon[`${lessonNumber}-${partNumber}`]){
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
            info.textContent = parse(specialDefinition[content] ?? "", firstLanguage)
            if(naunlist.includes(content) && l.genderList.length >= 2) info.textContent = `(${f[{"f": "feminine", "m": "masculine", "n": "neutral", "c": "common", "m/f": "masculine_feminine"}[l.gender(l[content])]]})`
            if(naunlist.includes(content)) info.innerHTML += "<br>" + f.plu + ": " + l.plural(content)
        }
        else if(type == "sentence" || type == "translate"){
            if(type == "sentence") for(y of Object.entries(l.contractions)) content = content.replace(`${y[0]}`, `${y[1]}`)
            if(type == "translate") for(y of Object.entries(languages[firstLanguage].contractions)) content = content.replace(`${y[0]}`, `${y[1]}`)
            if(type == "translate") input.style.textAlign = secondLanguage == "yi" ? "right" : "left"
            if(type == "translate") definition.style.direction = secondLanguage == "yi" ? "rtl" : "ltr"
            else input.style.textAlign = firstLanguage == "yi" ? "right" : "left"
            for(block of ["word", "definition", "info", "enter", "input"]) document.getElementById(block).style.display = "block"
            verbTable.style.display = "none"
            input.value = ""
            input.placeholder = `${f.write} ${f.here}`
            enter.style.backgroundColor = "#F79A32"
            enter.textContent = f.submit
            verbTable.style.display = "none"
            word.textContent = type == "sentence" ? parse(content, secondLanguage) : parse(content, firstLanguage)
            definition.textContent = `${f.translate} ${f.to} ` + (type == "sentence" ? languages[firstLanguage][firstLanguage] : languages[firstLanguage][secondLanguage])
            info.textContent = ""
        }
        else if(type == "verb"){
            enter.style.backgroundColor = "#F79A32"
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            for(block of ["enter", "verbTable"]) document.getElementById(block).style.display = "block"
            for(block of ["word", "definition", "info", "input"]) document.getElementById(block).style.display = "none"
            infinitivenative.textContent = l.verb(content.split("~")[0], "infinitive") + " [" + f[content.split("~")[1]] + "]"
            infinitiveenglish.textContent = `(${f.verb(content.split("~")[0], "infinitive")})`
            verb1s.textContent = l.i + " " + l.verb([content.split("~")[0]], [content.split("~")[1]], 0)
            verb1p.textContent = l.wem + " " + l.verb([content.split("~")[0]], [content.split("~")[1]], 3)
            verb2s.textContent = l.yousg + " " + l.verb([content.split("~")[0]], [content.split("~")[1]], 1)
            verb2p.textContent = l.youplinf + " " + l.verb([content.split("~")[0]], [content.split("~")[1]], 4)
            verb3s.textContent = l.he + "/" + l.she + " " + l.verb([content.split("~")[0]], [content.split("~")[1]], 2)
            verb3p.textContent = l.theym + " " + l.verb([content.split("~")[0]], [content.split("~")[1]], 5)
        }
        else if(type == "text"){
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            enter.style.display = "block"
            for(block of ["verbTable", "input", "info", "word"]) document.getElementById(block).style.display = "none"
            definition.textContent = parse(content, firstLanguage)
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
            for(y of Object.entries(languages[type == "sentence" ? firstLanguage : secondLanguage].contractions)) z = z.replace(`${y[0]}`, `${y[1]}`)
            answer = parse(lessons[lessonNumber][partNumber].split("@")[1].toLowerCase(), (type == "sentence" ? firstLanguage : secondLanguage))
            for(y of Object.entries(languages[type == "sentence" ? firstLanguage : secondLanguage].contractions)) answer = answer.replace(`${y[0]}`, `${y[1]}`)
            prodropanswer = firstLanguage == "en" ? "" : answer.replace(f.i, "").replace(f.yousg, "").replace(f.we, "").trim()
            if(z == answer || z == prodropanswer){
                enter.style.backgroundColor = "#889B4A"
                enter.textContent = `${f.correct}, ${f.click} ${f.parato} ${f.continue}`
            }
            else{
                enter.style.backgroundColor = "#DC3958"
                enter.textContent = `${f.incorrect}, ${f.click} ${f.parato} ${f.continue}`
                definition.textContent = parse(lessons[lessonNumber][partNumber].split("@")[1].toLowerCase(), (type == "sentence" ? firstLanguage : secondLanguage))
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
    for(v in Array.from(document.getElementById('levelselector').children)) document.getElementById("b" + v).textContent = "lvl " + (+v + 1) + ": " + [`${f.introduction}`, `${f.adjective("plu", 'plm')}`, `${f.verb("have", "infinitive")}`, `${f.food}/${f.plural("color")} 1`, `${f.no}`, `${f.food}/${f.plural("color")} 2`, `${f.future}`][v]
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