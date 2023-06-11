currentSystem = "Western Arabic"

numberstorage = {
    "Western Arabic": "0123456789", //??
    "Adlam": "𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙", //WA
    "Balinese": "᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙", //SEA
    "Burmese": "၀၁၂၃၄၅၆၇၈၉", //SEA
    "Chakma": "𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿", //SA
    "Cham": "꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙", //SEA
    "Devanagari": "०१२३४५६७८९", //SA
    "Eastern Arabic": "٠١٢٣٤٥٦٧٨٩", //ME
    "Eastern Nagari": "০১২৩৪৫৬৭৮৯", //SA
    "Gujarati": "૦૧૨૩૪૫૬૭૮૯", //SA
    "Gunjali Gondi": "𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩", //SA
    "Gurmukhi": "੦੧੨੩੪੫੬੭੮੯", //SA
    "Hmong": "𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉", //SEA
    "Javanese": "꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙", //SEA
    //"Kannada": "೦೧೨೩೪೫೬೭೮೯",
    "Kayah Li": "꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉", //SEA
    "Khmer": "០១២៣៤៥៦៧៨៩", //SEA
    "Lao": "໐໑໒໓໔໕໖໗໘໙", //SEA
    "Lepcha": "᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉", //SA
    "Limbu": "᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏", //SA
    //"Malayalam": "൦൧൨൩൪൫൬൭൮൯",
    "Masaram Gondi": "𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙", //SA
    "Meitei": "꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹", //SA
    "Mru": "𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩", //SA
    "Mundari Bani": "𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹", //SA
    "New Tai Lue": "᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙", //SEA
    "Newar": "𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙", //SA
    "N'ko": "߀߁߂߃߄߅߆߇߈߉", //WA
    "Odia": "୦୧୨୩୪୫୬୭୮୯", //SA
    "Ol Chiki": "᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙", //SA
    "Pahawh Hmong": "𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙", //SEA
    "Persian": "۰۱۲۳۴۵۶۷۸۹", //ME
    "Rohingya": "𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹", //SA
    "Shan": "႐႑႒႓႔႕႖႗႘႙", //SEA
    "Sora": "𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹", //SA
    "Sourashtra": "꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙", //SA
    "Sundanese": "᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹", //SEA
    "Syloti": "0123456789", // SA
    "Tai Laing": "꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹", //SEA
    "Tai Tham": "᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", //SEA
    //"Tamil": "௦௧௨௩௪௫௬௭௮௯",
    "Tangsa": "𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉", //SA
    //"Telugu": "౦౧౨౩౪౫౬౭౮౯",
    "Thai": "๐๑๒๓๔๕๖๗๘๙", //SEA
    "Tibetan": "༠༡༢༣༤༥༦༧༨༩", //SA
    "Wancho": "𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹", //SA
    "Warang Citi": "𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩", //SA
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
    operationList = "+-⋅÷×*^√∛∜!LN"
    constants = {
        "π": 3.14159,
        "e": 2.71828,
        "%": 0.01,
        "γ": 0.57721,
        "φ": 1.61803,
        "ψ": 1.46557,
        "‰": 0.001,
        "‱": 0.0001,
    }
    equation = display.textContent
    equation = equation.replace(/log/g, "L").replace(/ln/g, "N")

    if(currentSystem != "Western Arabic"){
        for(a = 0; a < 10; a++){
            equation = equation.replace(new RegExp(Array.from(numberstorage[currentSystem])[a], "g"), numberstorage["Western Arabic"][a])
        }
    }
    //parenthesis validator WORK ON IT
    if(equation.includes("()")){
        alert('ERROR 1: EMPTY PAIR OF PARENTHESES')
        return 0
    }

    //no weird shit validator WORK ON IT

    //
    equation = equation.replace(/\-\-/g, "+")
    equation = equation.replace(/[\+\-⋅÷×\(\)\^%πeγφψ‰‱√∛∜!LN]/g, "~$&~")
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

    exponentarray = []
    for(g of equationArray.reverse()){
        if(g == "^") exponentarray[exponentarray.length - 1] += g
        else if(exponentarray.length > 0 && "^" == ("" + exponentarray[exponentarray.length - 1]).slice(-1)){
            exponentarray[exponentarray.length - 1] = Math.pow(+g, +exponentarray[exponentarray.length - 1].slice(0,-1))
        }
        else if(exponentarray[exponentarray.length - 1] == "!"){
            if(g % 1 == 0){
                if(g >= 0){
                    u = 1
                    while(g >= 1){
                        u *= g
                        g--
                    }
                    exponentarray[exponentarray.length - 1] = u
                }
                else{
                    alert('ERROR 3: NEGATIVE FACTORIAL')
                    return 0
                }
            }
            else{
                alert('ERROR 2: NON-INTEGER FACTORIAL')
                return 0
            }
        }
        else if(g == "√") exponentarray[exponentarray.length - 1] = Math.pow(exponentarray[exponentarray.length - 1], 0.5)
        else if(g == "∛") exponentarray[exponentarray.length - 1] = Math.pow(exponentarray[exponentarray.length - 1], (1/3))
        else if(g == "∜") exponentarray[exponentarray.length - 1] = Math.pow(exponentarray[exponentarray.length - 1], 0.25)
        else if(g == "L") exponentarray[exponentarray.length - 1] = Math.log10(exponentarray[exponentarray.length - 1])
        else if(g == "N") exponentarray[exponentarray.length - 1] = Math.log(exponentarray[exponentarray.length - 1])
        else exponentarray.push(g)
    }
    exponentarray = exponentarray.reverse()


    originalarray = []
    for(g of exponentarray){
        if(g == "*") originalarray[originalarray.length - 1] += g
        else if(originalarray.length > 0 && "*" == ("" + originalarray[originalarray.length - 1]).slice(-1)){
            originalarray[originalarray.length - 1] = +originalarray[originalarray.length - 1].slice(0,-1) * +g
        }
        else originalarray.push(g)
    }

    


    secondarray = []
    for(g of originalarray){
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
    display.dir = ["Adlam", "Eastern Arabic", "N'ko", "Rohingya", "Persian"].includes(numsystem.value) ? "rtl" : "ltr"
    display.style.fontFamily = numsystem.value == "Syloti" ? "Syloti" : "Verdana"
    for(r = 0; r < 10; r++) document.getElementById("D" + r).style.fontFamily = numsystem.value == "Syloti" ? "Syloti" : "Verdana"
    for(y = 0; y < 10; y++){
        document.getElementById("D" + y).textContent = Array.from(numberstorage[numsystem.value])[y]
        display.textContent = display.textContent.replace(new RegExp(Array.from(numberstorage[currentSystem])[y], "g"), Array.from(numberstorage[numsystem.value])[y])
    }
    currentSystem = numsystem.value
}