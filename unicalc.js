currentSystem = "Western Arabic"

numberstorage = {
    "Western Arabic": "0123456789",
    "Adlam": "𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙",
    "Balinese": "᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙",
    "Burmese": "၀၁၂၃၄၅၆၇၈၉",
    "Chakma": "𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿",
    "Cham": "꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙",
    "Devanagari": "०१२३४५६७८९",
    "Eastern Arabic": "٠١٢٣٤٥٦٧٨٩",
    "Eastern Nagari": "০১২৩৪৫৬৭৮৯",
    "Gujarati": "૦૧૨૩૪૫૬૭૮૯",
    "Gunjali Gondi": "𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩",
    "Gurmukhi": "੦੧੨੩੪੫੬੭੮੯",
    "Hmong": "𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉",
    "Javanese": "꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙",
    //"Kannada": "೦೧೨೩೪೫೬೭೮೯",
    "Kayah Li": "꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉",
    "Khmer": "០១២៣៤៥៦៧៨៩",
    "Lao": "໐໑໒໓໔໕໖໗໘໙",
    "Lepcha": "᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉",
    "Limbu": "᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏",
    //"Malayalam": "൦൧൨൩൪൫൬൭൮൯",
    "Masaram Gondi": "𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙",
    "Meitei": "꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹",
    "Mru": "𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩",
    "Mundari Bani": "𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹",
    "New Tai Lue": "᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙",
    "Newar": "𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙",
    "N'ko": "߀߁߂߃߄߅߆߇߈߉",
    "Odia": "୦୧୨୩୪୫୬୭୮୯",
    "Pahawh Hmong": "𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙",
    "Persian": "۰۱۲۳۴۵۶۷۸۹",
    "Rohingya": "𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹",
    "Santali": "᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙",
    "Shan": "႐႑႒႓႔႕႖႗႘႙",
    "Sora": "𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹",
    "Sourashtra": "꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙",
    "Sundanese": "᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹",
    "Syloti": "0123456789", // temporary
    "Tai Laing": "꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹",
    "Tai Tham": "᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉",
    //"Tamil": "௦௧௨௩௪௫௬௭௮௯",
    "Tangsa": "𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉",
    //"Telugu": "౦౧౨౩౪౫౬౭౮౯",
    "Thai": "๐๑๒๓๔๕๖๗๘๙",
    "Tibetan": "༠༡༢༣༤༥༦༧༨༩",
    "Wancho": "𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹",
    "Warang Citi": "𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩",
}

function z(text){
    display.textContent += text
}

function refresh(){
    display.textContent = ""
}

function del(){
    display.textContent = Array.from(display.textContent).slice(0, -1).join("")
}

function solveMath(){
    operationList = "+-⋅÷×*^"
    constants = {
        "π": 3.14159,
        "e": 2.71828,
        "%": 0.01,
        "γ": 0.57721,
    }
    equation = display.textContent

    if(currentSystem != "Western Arabic"){
        for(a = 0; a < 10; a++){
            equation = equation.replace(new RegExp(Array.from(numberstorage[currentSystem])[a], "g"), numberstorage["Western Arabic"][a])
        }
    }
    //parenthesis validator

    //no weird shit validator

    //
    equation = equation.replace(/\-\-/g, "+")
    equation = equation.replace(/[\+\-⋅÷×\(\)\^%πeγ]/g, "~$&~")
    equation = equation.replace(/~~/g, "~")
    if(equation.startsWith("~")) equation = equation.slice(1)
    if(equation.endsWith("~")) equation = equation.slice(0,-1)


    firstarray = []
    //add negatives
    for(x of equation.split("~")){
        console.log(x)
        if(firstarray.length == 0){
            if(Object.keys(constants).includes(x)){
                firstarray.push(constants[x])
            }
            else{
                firstarray.push(x)
            }
        }
        else if(Object.keys(constants).includes(x)){
            if(!isNaN(firstarray[firstarray.length-1])) firstarray.push("*")
            firstarray.push(constants[x])
            console.log(firstarray)
        }
        else if(isNaN(firstarray.slice(-2)[0]) && firstarray.slice(-1)[0] == "-" && x == "("){ // hanging minus becore parenthesis
            firstarray[firstarray.length-1] += "1"
            firstarray.push("*")
            firstarray.push(x) // (
        }
        //implicit number multiply parentheses
        else if((!isNaN(firstarray.slice(-1)[0]) || firstarray.slice(-1)[0] == ")") && x == "("){
            firstarray.push("*")
            firstarray.push(x) // (
        }
        //implicit parentheses multiply parentheses

        
        else if(((firstarray.length == 1 && firstarray[0] == "-") || (firstarray.slice(-2)[0] == "(" && firstarray.slice(-1)[0] == "-")) && !isNaN(x)){
            firstarray[0] += x
        }
        else if(firstarray.length >= 2 && operationList.includes(firstarray.slice(-2)[0]) && firstarray.slice(-1)[0] == "-"){
            firstarray[firstarray.length - 1] += x
        }
        else{
            firstarray.push(x)
        }
    }
    //deal with implicit multiplication ("*" sign maybe)
    //deal with implicit negative

    leresult = orderOfOps(firstarray)[0]
    if(currentSystem != "Western Arabic"){
        leresult = "" + leresult
        for(a = 0; a < 10; a++){
            leresult = leresult.replace(new RegExp(numberstorage["Western Arabic"][a], "g"), Array.from(numberstorage[currentSystem])[a])
        }
    }
    display.textContent = leresult
}

function orderOfOps(equationArray){
    while(equationArray.includes("(")){
        for(x = 0; x < equationArray.length; x++){
            if(equationArray[x] == "(" && (equationArray.indexOf(")", x + 1) < equationArray.indexOf("(", x + 1) || equationArray.indexOf("(", x + 1) == -1)){
                equationArray = equationArray.slice(0, x).concat(orderOfOps(equationArray.slice(x + 1, equationArray.indexOf(")", x + 1))), equationArray.slice(equationArray.indexOf(")", x + 1) + 1, equationArray.length))
                x = equationArray.length
            }
        }
    }
    originalarray = []
    for(g of equationArray){
        if(g == "*") originalarray[originalarray.length - 1] += g
        else if(originalarray.length > 0 && "*" == ("" + originalarray[originalarray.length - 1]).slice(-1)){
            originalarray[originalarray.length - 1] = +originalarray[originalarray.length - 1].slice(0,-1) * +g
        }
        else originalarray.push(g)
    }
    
    exponentarray = []
    for(g of originalarray.reverse()){
        if(g == "^") exponentarray[exponentarray.length - 1] += g
        else if(exponentarray.length > 0 && "^" == ("" + exponentarray[exponentarray.length - 1]).slice(-1)){
            exponentarray[exponentarray.length - 1] = Math.pow(+g, +exponentarray[exponentarray.length - 1].slice(0,-1))
        }
        else exponentarray.push(g)
    }
    exponentarray = exponentarray.reverse()
    


    secondarray = []
    for(g of exponentarray){
        if("⋅×÷".includes(g)) secondarray[secondarray.length - 1] += g
        else if(secondarray.length > 0 && "⋅×÷".includes(("" + secondarray[secondarray.length - 1]).slice(-1))){
            secondarray[secondarray.length - 1] = {
                "⋅": +secondarray[secondarray.length - 1].slice(0,-1) * +g,
                "×": +secondarray[secondarray.length - 1].slice(0,-1) * +g,
                "÷": +secondarray[secondarray.length - 1].slice(0,-1) / +g,
            }[secondarray[secondarray.length - 1].slice(-1)]
        }
        else secondarray.push(g)
    }

    thirdarray = []
    for(g of secondarray){
        if("+-".includes(g) && !isNaN(thirdarray[thirdarray.length - 1])) thirdarray[thirdarray.length - 1] += g
        else if(thirdarray.length > 0 && "+-".includes(("" + thirdarray[thirdarray.length - 1]).slice(-1))){
            thirdarray[thirdarray.length - 1] = {
                "+": +thirdarray[thirdarray.length - 1].slice(0,-1) + +g,
                "-": +thirdarray[thirdarray.length - 1].slice(0,-1) - +g,
            }[thirdarray[thirdarray.length - 1].slice(-1)]
        }
        else thirdarray.push(g)
    }
    return thirdarray
}


function reset(){
    display.dir = ["Adlam", "Eastern Arabic", "N'ko"].includes(numsystem.value) ? "rtl" : "ltr"
    display.style.fontFamily = numsystem.value == "Syloti" ? "Syloti" : "Verdana"
    for(r = 0; r < 10; r++) document.getElementById("D" + r).style.fontFamily = numsystem.value == "Syloti" ? "Syloti" : "Verdana"
    for(y = 0; y < 10; y++){
        document.getElementById("D" + y).textContent = Array.from(numberstorage[numsystem.value])[y]
        display.textContent = display.textContent.replace(new RegExp(Array.from(numberstorage[currentSystem])[y], "g"), Array.from(numberstorage[numsystem.value])[y])
    }
    currentSystem = numsystem.value
}