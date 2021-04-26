document.addEventListener('click', function(e){
    switch(true){
        case (e.target.parentNode?.className.split(" ")[0] == 'ascript'):
        Hhide("languages")
            if(e.target.parentNode.className.split(" ")[2] == "now"){
                writingSystem = e.target.parentNode.getAttribute("id").trim()
                if(Object.keys(scripts[writingSystem].langs).length > 1) languagesRender()
                else{
                    language = Object.keys(scripts[writingSystem].langs)[0]
                    levelRender()
                }
            }
            break  
        case (e.target.className == "subtitle"):
            Hhide(["level", "languages", "lesson"])
            Hshow("scripts")
            break
        case (e.target.parentNode?.className.split(" ")[0] == 'alanguage'):
            language = e.target.parentNode.getAttribute("id").trim()
            levelRender()
            break
        case (e.target.className.split(" ").slice(-1)[0] == 'next'):
            score = 0
            currentLevel = []
            levelNumber = e.target.textContent - 1
            theseLetters = scripts[writingSystem].langs[language].levelList[levelNumber].letters
            if(levelNumber > 0) previousLetters = [].concat.apply([],scripts[writingSystem].langs[language].levelList.slice(0, levelNumber).map(x => x.letters))
            theseWords = Object.keys(scripts[writingSystem].langs[language].levelList[levelNumber].words)
            levelSequence = 0
            if(scripts[writingSystem].langs[language].levelList[levelNumber].tip != undefined) currentLevel.push("tip" + scripts[writingSystem].langs[language].levelList[levelNumber].tip)
            for(var l of shuffle(theseLetters)) currentLevel.push("ltr" + l)
            for(var l of shuffle(theseLetters)) currentLevel.push("tlt" + l)
            if(levelNumber > 0) currentLevel.push("tlt" + shuffle(previousLetters)[0])
            currentLevel.push("snd" + shuffle(theseLetters)[0])
            if(levelNumber > 0) currentLevel.push("snd" + shuffle(previousLetters)[0])
            for(var l of shuffle(theseWords)) currentLevel.push("wrd" + l)
            currentLevel.push("fin")
            lessonRender(currentLevel[levelSequence])
            Hhide(["scripts", "languages", "level"])
            Hshow("lesson")
            break
        case (e.target.id == "result"):
            levelSequence++
            if(levelSequence == currentLevel.length){
                Hempty("lesson")
                Hhide("lesson")
                levelRender()
            }
            else lessonRender(currentLevel[levelSequence])
            break
        case (e.target.className == "tf"):
            Hremove("t")
            Hremove("f")
            if((e.target.getAttribute("id") == "t") == (letterInQuestion == scripts[writingSystem].langs[language].alphabet[itemContent])){
                Happend("lesson", `<button id="result" class="true">Click here to continue...</button>`)
                score++
            }
            else{ 
                Happend("lesson", `<button id="result" class="false">Incorrect, click here to continue...</button>`)
                score--
            }
            break
        case (e.target.id == "enter"):
            console.log(transliterate(itemContent.toLowerCase()))
            if(document.getElementById("input").value.toLowerCase() == transliterate(itemContent.toLowerCase())){
                score++
                Happend("lesson", `<button id="result" class="true">${itemType == "wrd" ? `'${itemContent}' means '${scripts[writingSystem].langs[language].levelList[levelNumber].words[itemContent]}'<br>`: ""} Correct, click here to continue...</button>`)
            }
            else{
                score--
                Happend("lesson", `<button id="result" class="false">Incorrect, click here to continue...</button>`)
            }
            Hremove("enter")
            break
        case (e.target.className == "listen"):
            var obj = document.createElement("audio")
            obj.src = "sounds/" + e.target.getAttribute("id").split("_")[1].split(",")[0] + ".ogg"
            obj.play()
            break
        case (e.target.className == "specialLettersButton"):
            document.getElementById("input").value = document.getElementById("input").value + e.target.textContent
            break
        case (e.target.id == "switch"):
            const theme = document.getElementById("css")
            if (theme.getAttribute("href") == "lightmode.css") {
                document.getElementById("switch").textContent = "Click for light mode"
                theme.href = "darkmode.css"
            } 
            else {
                document.getElementById("switch").textContent = "Click for dark mode"
                theme.href = "lightmode.css"
            }                
        break
    }
})