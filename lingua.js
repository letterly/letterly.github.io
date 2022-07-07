Lnum = 0 //lesson number
Pnum = 1 //problem number
material = ""
course = ""
courseLanguage = ""
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
            problem.innerHTML += definitionTranslations[courseLanguage] + ": " + material.split(" = ")[2]
            break
        case "Verb":
            table.style.display = "block"
            problemInput.style.display = "none"
            problemHeader.textContent = material.split(" = ")[1]
            problem.textContent = definitionTranslations[courseLanguage] + ": " + material.split(" = ")[2]
            table1s.textContent = pronouns[courseTarget][0] + " " + verbs[courseTarget][material.split(" = ")[1]][0]
            table2s.textContent = pronouns[courseTarget][1] + " " + verbs[courseTarget][material.split(" = ")[1]][1]
            table3s.textContent = pronouns[courseTarget][2] + " " + verbs[courseTarget][material.split(" = ")[1]][2]
            table1p.textContent = pronouns[courseTarget][3] + " " + verbs[courseTarget][material.split(" = ")[1]][3]
            table2p.textContent = pronouns[courseTarget][4] + " " + verbs[courseTarget][material.split(" = ")[1]][4]
            table3p.textContent = pronouns[courseTarget][5] + " " + verbs[courseTarget][material.split(" = ")[1]][5]
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
            problemHeader.textContent = {
                "sv": "Translate to Swedish",
                "es": "Traduce a español",
                "pt": "Traduz para o português",
            }[course.split("=>")[0]]
            problem.textContent = material.split(" = ")[1]
            break
        case "TranslateH":
            problemInput.value = ""
            problemButton.style.display = "none"
            submitButton.style.display = "block"
            table.style.display = "none"
            problemInput.style.display = "block"
            problemHeader.textContent = {
                "sv=>ovd": "Translate to Elfdalian",
                "es=>an": "Traduce a aragonés",
                "pt=>mwl": "Traduz para o mirandês",
            }[course]
            problem.textContent = material.split(" = ")[1]
            break
    }
}

function submit(){
    if(problemInput.value.toLowerCase() == material.split(" = ")[2].toLowerCase()){
        problem.innerHTML += `<br><p class='right'>${course.endsWith('ovd') ? "correct": "correcto"}</p>`
    }
    else{
        problem.innerHTML += `<br><p class='wrong'>${course.endsWith('ovd') ? "incorrect, it's" : "falso, debe ser"} '${material.split(" = ")[2]}'</p>`
    }
    submitButton.style.display = "none"
    problemButton.style.display = "block"
}

function langreveal(cors){
    course = cors
    courseLanguage = cors.split("=>")[0]
    courseTarget = cors.split("=>")[1]
    langselect.style.display = "none"
    background.style.display = "block"
    background.style.backgroundImage = `url('images/${courseTarget}.jpg')`
    languagename.textContent = autonym[courseTarget]
    lessonlist.innerHTML = ""
    submitButton.textContent = submitButtonTranslations[courseLanguage]
    problemButton.textContent = continueTranslations[courseLanguage]
    problemInput.placeholder = typeHereTranslations[courseLanguage] + "..."
    sum.textContent = summary[courseTarget]
    for(g in lessons[course]) lessonlist.innerHTML += `<h2 onclick="lessonStart(${g})">${+g + 1}) ${lessons[course][g][0]}</h2>`
}