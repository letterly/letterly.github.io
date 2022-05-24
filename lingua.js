lessons = [
    [
        "Word = kall|kalln|m = man",
        "Word = ig = jag",
        "Verb = wårå = är",
        "Explanation = To say 'a/an', we use the words 'ie', 'ien', 'įe' for neutral, male, and female nouns respectively.",
        "TranslateH = mannen = kalln",
        "Word = kelingg|kelindję|f = kvinna",
        "TranslateE = Ig ir ien kall = Jag är en man",  
        "Word = kelingg|kelindję|f = kvinna",
        "TranslateE = Du ir įe kelingg = Du är en kvinna",   
        "Word = war = var",
        "Word = jär = här",
        "TranslateE = War ir kalln? = Var är mannen?",   
        "TranslateH = Mannen är här = Kalln ir jär",   
        //"TranslateH = Kvinnan är med mannen = Kelindję ir nest kallem.",   
    ],
    [
        "Word = eppel|eppleð|n = äpple",
        "Word = bröð = bröd",
        "Verb = åvå = har",
        "TranslateH = Jag har = Ig ar",
        "Explanation = Drop subjects before verbs if the subject is a plural pronoun.",
        "TranslateE = An ar iet eppel og bröð = Han har ett äpple och bröd",  
        "Word = ą̊ = hon",
        "Word = frukuostn = frukosten",
        "Word = int = inte",
        "TranslateE = Amm frukuostn = Vi har frukosten",    
        "TranslateE = Ą̊ ar int eppleð = Hon har inte äpplet",   
        //"Här är frukten = Jen ir fruktę",   
        "TranslateE = Iet eppel ir įe frukt = Ett äpple är en frukt",   
        "TranslateH = Vi har äpplet = Amm eppleð",
    ],
    [
        "Word = war = var",
        "Word = Swerre = Sverige",
        "TranslateE = War ir skauln? = Var är skolan?",
        "Word = liker = älskar",
        "Word = wiso = varför",
        "TranslateH = Varför är han i Sverige? = Wiso ir an i Swerre?",  
        "Word = ukin = vem" ,
        "TranslateE = Jag älskar Älvdalen = Ig liker Övdaln",
        //"Vad är klockan? = Ur mitjið ir klukką?",
        "Vem är Astrid? = Ukin ir Astrid?",
    ],
    [
        "Word = lärer = lär",
        "TranslateE = Ig lärer mig dalska = Jag lär mig älvdalska",
        "Word = Menn = Min",
        "Explanation = Possessive words like 'menn' come after a noun, not before like in Swedish",
        "Word = Finnland = Finland",
        "Word = dalska = älvdalska",
        "TranslateH = Kvinna ir i Finland = Kelingg ir i Finnland",
        "Word = eld = eller",
        "Word = från = frą̊",
        "Word = faðer = pappa",
        "Word = på = ą̊",
        "TranslateH = Är hon från Finland eller Sverige? = Ir ą̊ frą̊ Finnland eld Swerre?",   
        "Word = swensker = pratar svenska",
        "Word = wet = vet / vet att",
        "TranslateH = Min pappa kan inte älvdalska = Faðer menn kann int dalska",
        //"Hans bror är från Norge = Bruor ånumes ir frą̊ Norre",
        "TranslateE = Björn swensker min mig = Björn pratar svenska med mig",   
        "TranslateH = Jag vet att de pratar svenska på Åland = Ig wet dier swensk ą̊ Åland",   
    ],
]
verbs = {
    wårå: ["ir", "irum", "irið", "irå"],
    åvå: ["ar", "amm", "amið", "åvå"],
}

Lnum = 0 //lesson number
Pnum = 0 //problem number
material = ""

function lessonStart(num){
    Lnum = num
    Pnum = 0
    background.style.display = "none"
    workspace.style.display = "block"
    material = lessons[Lnum][Pnum]
    runProblem()
}

function nextProblem(){
    console.log('b')
    Pnum++
    if(Pnum == lessons[Lnum].length){
        background.style.display = "block"
        workspace.style.display = "none"
    }
    else{
        material = lessons[Lnum][Pnum]
        runProblem()
    }
}

function runProblem(){
    switch(material.split(" ")[0]){
        case "Word":
            table.style.display = "none"
            problemInput.style.display = "none"
            problemHeader.textContent = material.split(" = ")[1].split("|")[0]
            problem.innerHTML = ""
            if(material.split(" = ")[1].includes("|")){
                problem.innerHTML += `definitive: ${material.split(" = ")[1].split("|")[1]}<br>`
                problem.innerHTML += `gender: ${material.split(" = ")[1].split("|")[2]}<br>`
            }
            problem.innerHTML += "definition: " + material.split(" = ")[2]
            break
        case "Verb":
            table.style.display = "block"
            problemInput.style.display = "none"
            problemHeader.textContent = material.split(" = ")[1]
            problem.textContent = "definition: " + material.split(" = ")[2]
            table1s.textContent = "ig " + verbs[material.split(" = ")[1]][0]
            table2s.textContent = "du " + verbs[material.split(" = ")[1]][0]
            table3s.textContent = "an/ą̊ " + verbs[material.split(" = ")[1]][0]
            table1p.textContent = "wįð " + verbs[material.split(" = ")[1]][1]
            table2p.textContent = "ið " + verbs[material.split(" = ")[1]][2]
            table3p.textContent = "dier " + verbs[material.split(" = ")[1]][3]
            break
        case "Explanation":
            table.style.display = "none"
            problemInput.style.display = "none"
            problemHeader.textContent = "Explanation"
            problem.textContent = material.split(" = ")[1]
            break
        case "TranslateE":
            problemInput.value = ""
            problemButton.style.display = "none"
            submitButton.style.display = "block"
            table.style.display = "none"
            problemInput.style.display = "block"
            problemHeader.textContent = "Translate to Swedish"
            problem.textContent = material.split(" = ")[1]
            break
        case "TranslateH":
            problemInput.value = ""
            problemButton.style.display = "none"
            submitButton.style.display = "block"
            table.style.display = "none"
            problemInput.style.display = "block"
            problemHeader.textContent = "Translate to Elfdalian"
            problem.textContent = material.split(" = ")[1]
            break
    }
}

function submit(){
    if(problemInput.value.toLowerCase() == material.split(" = ")[2].toLowerCase()){
        problem.innerHTML += "<br><p class='right'>correct</p>"
    }
    else{
        problem.innerHTML += `<br><p class='wrong'>incorrect, it's '${material.split(" = ")[2]}'</p>`
    }
    submitButton.style.display = "none"
    problemButton.style.display = "block"
}