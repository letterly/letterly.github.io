lessonNum = 0
pointNum = 0
category = "plurals"
lessonNow = []

function start(section){
    main.style.display = "none"
    lesson.style.display = "block"
    category = section
    lessonNum = 0
    pointNum = 0
    lessonNow = Object.entries(lessons[category][lessonNum]).sort(() => .5 - Math.random())
    leq.textContent = {
        "plurals": "What is the plural of",
        "past": "What is the past tense of",
        "participle": "What is the past participle of",
        "ambi": "What is the British spelling of",
    }[section]
    keyword.textContent = lessonNow[pointNum][0]
}

function enter(){
    if(button.textContent.includes("Continue")){
        pointNum++
        if(lessonNum == 2 && pointNum > 2){
            button.textContent = "Return to menu"
            button.style.color = "white"
        }
        else if(pointNum > 2){
            pointNum = 0
            lessonNum++
            lessonNow = Object.entries(lessons[category][lessonNum]).sort(() => .5 - Math.random())
            leinput.value = ""
            button.style.color = "white"
            button.textContent = "Enter"
            keyword.textContent = lessonNow[pointNum][0]
        }
        else{
            keyword.textContent = lessonNow[pointNum][0]
            leinput.value = ""
            button.style.color = "white"
            button.textContent = "Enter"
        }
    }
    else if(button.textContent.includes("Return")){
        main.style.display = "block"
        lesson.style.display = "none"
    }
    else{
        console.log(lessonNow)
        val = leinput.value
        if(val == lessons[category][lessonNum][keyword.textContent]){
            button.style.color = "#86C232"
            button.textContent = "Correct! Continue"
        }
        else{
            leinput.value = lessons[category][lessonNum][keyword.textContent]
            button.style.color = "#dc322f"
            button.textContent = "Incorrect :( Continue"
        }
    }
}

/* a)EYM_DFn3Vaj>zoD_*o */
lessons = {
    "plurals": [
        {
            "fireman": "firemen",
            "child": "children",
            "tornado": "tornadoes",
            "fish": "fish",
            "calf": "calves",
            "goose": "geese",
            "tooth": "teeth",
            "monkey": "monkeys",
            "series": "series",
        },
        {
            "louse": "lice",
            "hovercraft": "hovercraft",
            "ox": "oxen",
            "soliloquy": "soliloquies",
            "axis": "axes",
            "radius": "radii",
            "cactus": "cacti",
            "alumnus": "alumni",
            "die": "dice",
            "passerby": "passersby",
            "millenium": "millenia",
            "polyhedron": "polyhedra",
        },
        {
            "memorandum": "memoranda",
            "antenna": "antennae",
            "viscus": "viscera",
            "stigma": "stigmata",
            "phenomenon": "phenomena",
            "vertex": "vertices",
            "genus": "genera",
            "acropolis": "acropoleis",
            "parenthesis": "parentheses",
        },
    ],
    "past": [
        {
            "go": "went",
            "sleep": "slept",
            "think": "thought",
            "steal": "stole",
            "ring": "rang",
            "ship": "shipped",
        },
        {
            "flee": "fled",
            "wring": "wrung",
            "cling": "clung",
            "bid": "bid",
            "creep": "crept",
            "wind": "wound",
            "thrust": "thrust",
            "shut": "shut",
            "catch": "caught",
            "kneel": "knelt",
        },
        {
            "foresake": "forsook",
            "cleave": "cleft",
            "bereave": "bereft",
            "stand": "stood",
            "seek": "sought",
            "speed": "sped",
            "sneak": "snuck",
            "slay": "slew",
            "plea": "pled",
            "light": "lit",
        },
    ],
    "participle": [
        {
            "eat": "eaten",
            "swim": "swum",
            "run": "run",
            "prove": "proven",
            "clothe": "clad",
            "forgo": "forgone",
            "fly": "flown",
            "spin": "spun",
            "weave": "woven",
        },
        {
            "forbid": "forbidden",
            "tread": "trodden",
            "tore": "torn",
            "undertaken": "undertaken",
            "drink": "drunk",
            "forswear": "forsworn",
            "strive": "striven",
            "stride": "stridden",
            "strew": "strewn",
            "sow": "sown",
        },
        {
            "shoe": "shodden",
            "shear": "shorn",
            "sew": "sewn",
            "rise": "risen",
            "underlie": "underlain",
            "leap": "leapt",
            "foresake": "forsaken",
            "forefeel": "forefelt",
            "become": "become",
            "bear": "borne",
        },
    ],
    "ambi": [
        {
            "enroll": "enrol",
            "color": "colour",
            "manouver": "manoevre",
            "center": "centre",
            "labor": "labour",
            "fulfill": "fulfil",
            "disk": "disc",
            "program": "programme",
            "behavior": "behaviour",
            "defense": "defence",
            "analyze": "analyse",
            "ax": "axe",
            "tire": "tyre",
            "chili": "chilli",
        },
        {
            "check": "cheque",
            "aging": "ageing",
            "dialog": "dialogue",
            "quarreled": "quarrelled",
            "jewelery": "jewellery",
            "skeptic": "sceptic",
            "aluminum": "aluminium",
            "cozy": "cosy",
            "gray": "grey",
            "omelet": "omelette",
            "mustache": "moustache",
            "fetus": "foetus",
        },
        {
            "plow": "plough",
            "naïveté": "naivety",
            "pajamas": "pyjamas",
            "apothegm": "apophthegm",
            "idyl": "idyll",
            "curb": "kerb",
            "chamomile": "camomile",
            "licorice": "liquorice",
            "primeval": "primaeval",
            "sulfur": "sulphur",
        },
    ],
}