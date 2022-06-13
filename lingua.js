lessons = {
    "sv=>ovd": [
        [   
            "Introduction",
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
            "Food",
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
            "Questions",
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
            "Places",
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
    ],
    "es=>an": [
        [
            "Introducción",
            "Word = muller = mujer",
            "Word = a = la",
            "TranslateH = la mujer = a muller",
            "Verb = estar = estar/ser",
            "Explanation = no hay distinción entre ser y estar en aragonés, 'estar' tiene los dos significados",
            "TranslateH = estás = yes",
            "TranslateH = soy = soi",
            "Word = o = el",
            "TranslateE = o gato ye aquí = el gato está aquí",
            "TranslateE = él ye con o gato? = ¿él está con el gato?",
        ],
        [
            "Frutas",
            "Verb = tener = tener",
            `Explanation = la palabra "o" se convierte en "l'" antes de un vocal`,
            "Word = ombre = hombre",
            "TranslateE = l'ombre = el hombre",
            "Word = mazana = manzana",
            "TranslateH = la mujer tiene la manzana = a muller tien a mazana",
            "Word = uga = uva",
            "TranslateE = as ugas son en a mía casa = las uvas están en mi casa",
            "Word = ocián = océano",
            "TranslateE = estoy en el océano = soi en l'ocián",
        ],
    ]
}
verbs = {
    wårå: ["ir", "irum", "irið", "irå"],
    åvå: ["ar", "amm", "amið", "åvå"],
    estar: ["soy", "yes", "ye", "semos", "sotz", "son"],
    tener: ["tiengo", "tiens", "tien", "tenemos", "tenetz", "tienen"],
}

pronouns = {
    an: ["yo", "tú", "él/ella", "nusatros/as", "busatros/as", "ellos/as"],
    ovd: ["ig", "du", "an/ą̊", "wįð", "ið", "dier"],
}

autonym = {
    an: "Aragonés",
    ovd: "Övdalską",
}

summary = {
    an: "Nuestro idioma aragonés ha sobrevivido por muchos siglos, pero ahora está en peligro debido a la asimilación. La situación es difícil, pero ahora usted tiene la oportunidad de aprender la lengua materna de Aragón. ¡Buena suerte!",
    ovd: "Our Elfdalian language has survived for a thousand years, but now outside modern influences threaten to assimilate our river valley into the mainstream Swedish language. The situation of Elfdalian is dire compared to most languages in the world, but not all hope is lost! With the use of technology, our new generation can redeem the Elfdalian language and bring it to new heights. Come, learn the tongue of your ancestors, and help preserve it for the future.",
}

Lnum = 0 //lesson number
Pnum = 1 //problem number
material = ""
course = ""
courseTarget = ""

function lessonStart(num){
    Lnum = num
    Pnum = 1
    background.style.display = "none"
    workspace.style.display = "block"
    runProblem()
}

function nextProblem(){
    Pnum++
    if(Pnum == lessons[course][Lnum].length){
        background.style.display = "block"
        workspace.style.display = "none"
    }
    else runProblem()
}

function runProblem(){
    material = lessons[course][Lnum][Pnum]
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
            table1s.textContent = pronouns[courseTarget][0] + " " + verbs[material.split(" = ")[1]][0]
            table2s.textContent = pronouns[courseTarget][1] + " " + verbs[material.split(" = ")[1]][0]
            table3s.textContent = pronouns[courseTarget][2] + " " + verbs[material.split(" = ")[1]][0]
            table1p.textContent = pronouns[courseTarget][3] + " " + verbs[material.split(" = ")[1]][1]
            table2p.textContent = pronouns[courseTarget][4] + " " + verbs[material.split(" = ")[1]][2]
            table3p.textContent = pronouns[courseTarget][5] + " " + verbs[material.split(" = ")[1]][3]
            break
        case "Explanation":
            table.style.display = "none"
            problemInput.style.display = "none"
            problemHeader.textContent = course.endsWith("ovd") ? "Explanation" : "Explicación"
            problem.textContent = material.split(" = ")[1]
            break
        case "TranslateE":
            problemInput.value = ""
            problemButton.style.display = "none"
            submitButton.style.display = "block"
            table.style.display = "none"
            problemInput.style.display = "block"
            problemHeader.textContent = course.endsWith("ovd") ? "Translate to Swedish" : "Traduce a español"
            problem.textContent = material.split(" = ")[1]
            break
        case "TranslateH":
            problemInput.value = ""
            problemButton.style.display = "none"
            submitButton.style.display = "block"
            table.style.display = "none"
            problemInput.style.display = "block"
            problemHeader.textContent = course.endsWith("ovd") ? "Translate to Elfdalian" : "Traduce a aragonés"
            problem.textContent = material.split(" = ")[1]
            break
    }
}

function submit(){
    if(problemInput.value.toLowerCase() == material.split(" = ")[2].toLowerCase()){
        problem.innerHTML += `<br><p class='right'>${course.endsWith('ovd') ? "correct": "correcto"}</p>`
    }
    else{
        problem.innerHTML += `<br><p class='wrong'>${course.endsWith('ovd') ? "incorrect, it's" : "false, debe ser"} '${material.split(" = ")[2]}'</p>`
    }
    submitButton.style.display = "none"
    problemButton.style.display = "block"
}

function langreveal(cors){
    course = cors
    courseTarget = cors.split("=>")[1]
    langselect.style.display = "none"
    background.style.display = "block"
    languagename.textContent = autonym[courseTarget]
    lessonlist.innerHTML = ""
    sum.textContent = summary[courseTarget]
    for(g in lessons[course]) lessonlist.innerHTML += `<h2 onclick="lessonStart(${g})">${+g + 1}) ${lessons[course][g][0]}</h2>`
}