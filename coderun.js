
function parsejs(h){
    h = h.match(/(?:[^\s"]+|"[^"]*")+/g).join(" ")
    h = h.replace(/[\+\-\*\/\%\(\)\=\!\<\>\^\&\|\.\{\}\$\:]/g, "~$&~")
    h = h.replace(/=~~=/g, "==").replace(/!~~=/g, "!=").replace(/<~~=/g, "<=").replace(/>~~=/g, ">=").replace(/&~~&/g, "&&").replace(/\|~~\|/g, "||")
    h = h.split("~")
    return h
}
transl = (w) => languageData[language][w]

function color(arr){
    arr = parsejs(arr)
    str = ""
    for(x of arr){
        console.log(x)
        cl = ""
        if("+-*/%><!=^&|.(){}:".includes(x.charAt(0))) cl = "operator"
        else if(!isNaN(x)) cl = "number"
        else if(["if"].includes(x)) cl = "reserveword"
        else if(["console", "log", "length", "print"].includes(x)) cl = "keyword"
        else if(x == "$") cl = "space"
        else if(x.startsWith("'")) cl = "quote"
        else cl = "variable"
        str += "<span class='" + cl + "'>" + x + "</span>"
    }
    return str
}

javaScriptUnaryOperatorPrecedence = [
    ["!"],
],
javaScriptOperatorPrecedence = [
    ["%", "*", "/"],
    ["+", "-"],
    ["==", "!=", "<=", ">=", "<", ">"],
]

function operation(symbol, first, second){
    switch(symbol){
        case "+":
            return +first + +second
        case "-":
            return +first - +second
        case "%":
            return +first % +second
        case "*":
            return +first * +second
        case "/":
            return +first / +second
        case "<=":
            return +first <= +second
        case ">=":
            return +first >= +second
        case "==":
            return first == second
        case "!=":
            return first != second
        case "<":
            return +first < +second
        case ">":
            return +first > +second
    }
}
function unary(symbol, first){
    switch(symbol){
        case "^": //////
            return -first
    }
}
function solve(h){
    h = parsejs(h)
    h = h.filter(word => word.trim() !== "")
    while(h.includes("(")) for(i in h) if(h[i] == "(" && (h.indexOf("(", +i+1) > h.indexOf(")", i) || h.indexOf("(", +i+1) == -1)) h = h.slice(0, i).concat([solve(h.slice(i, h.indexOf(")", i) + 1).slice(1, -1).join(""))],h.slice(h.indexOf(")", +i+1)+1))
    for(o of javaScriptUnaryOperatorPrecedence){
        for(x in h) if(o.includes(h[x])) h.splice(+x-1, 2, "", String(unary(h[x], h[+x-1])))
        h = h.filter(word => word !== "")
    }
    for(o of javaScriptOperatorPrecedence){
        for(x in h) if(o.includes(h[x])) h.splice(+x-1, 3, "", "", String(operation(h[x], h[+x-1], h[+x+1])))
        h = h.filter(word => word !== "")
    }
    return h[0]
}

document.addEventListener('keydown', (e) => {
    if(e.code == "Enter") next()
})
function buttonize(t){
    if(buttons.style.display != "none"){
        list[codelang][lesson][count]?.split(">")[1]?.startsWith(t) ? trueP.textContent = transl('correct') : falseP.textContent = transl('incorrect') + list[codelang][lesson][count]?.split(">")[1]?.split(",")[0]
        ent.textContent = transl('click')
    }
}
function boolbuttonize(t){
    if(booleanbuttons.style.display != "none"){
        list[codelang][lesson][count]?.split(">")[1]?.startsWith(t) ? trueP.textContent = "Correct!" : falseP.textContent = "Incorrect, the answer is " + list[codelang][lesson][count]?.split(">")[1]?.split(",")[0]
        ent.textContent = transl('click')
    }
}

function levelset(num, l){
    game.style.display = 'block'
    levelselects.style.display = "none"
    languageselect.style.display = "none"
    lesson = num
    codelang = l
    count = -1
    next()
}

function next(){
    trueP.textContent = ""
    falseP.textContent = ""
    if(ent.textContent == transl('enter')){
        ans = type == "m" ? solve(text.textContent) : list[codelang][lesson][count].split("@")[1].split("~")[1]
        ans == input.value ? trueP.textContent = "Correct!" : falseP.textContent = transl('incorrect') + ans
        ent.textContent = transl('click')
    }
    else{
        input.value = ""
        ent.textContent = ""
        buttons.style.display = "none"
        booleanbuttons.style.display = "none"
        table.style.display = "none"
        count++
        if(count == list[codelang][lesson].length){
            h.textContent = "codecode project"
            game.style.display = 'none'
            levelselects.style.display = "block"
            languageselect.style.display = "block"
        }
        item = list[codelang][lesson][count]
        content = item.split("@")[1]
        type = item.split("@")[0]
        h.textContent = transl(type + "Question")
        ent.textContent = transl("cm".includes(type) ? "enter" : "continue")
        switch(type){
            case "c": //code block
                input.style.display = "block"
                console.log(content.split(","))
                text.innerHTML = content.split("~")[0].split(",").map(x => `<p>${color(x)}</p>`).join("")
                text.style.textAlign = "left"
                break
            case "i": //information
                text.textContent = transl(content)
                input.style.display = "none"
                break
            case "m": //math
                text.innerHTML = color(content)
                input.style.display = "block"
                text.style.textAlign = "center"
                break
            case "o": //operator list
                text.textContent = ""
                table.style.display = "block"
                operator.textContent = transl('operator')
                functionality.textContent = transl('functionality')
                tbody.innerHTML = content.split("~")[0].split(",").map(x => `<tr><td class='tableop'>${x}</td><td class='tablefn'>${transl(x)}</td></tr>`).join("")
                break
        }
            
    }
}

function langswitch(ISOcode){
    if(language != ISOcode){
        language = ISOcode
        for(x of Object.entries(languageData[language])) if(x[0].endsWith("TEXT")) document.getElementById(x[0]).textContent = x[1]
        for(x of Object.entries(languageData[language])) if(x[0].endsWith("L")) Array.from(document.getElementsByClassName(x[0])).map(c => c.textContent = x[1])
        input.placeholder = transl('placeholder')
    }
}

type = "" //global
codelang = "javascript"
lesson = 0
count = 0
language = "en"

//code
//line
//multiple choice
//true/false
//info
//operators
list = {
    js: [
        [
            "m@2 + 3",
            "m@4 - 6",
            "i@EXPorder-of-operations",
            "o@+,-,*,/,%",
            "m@5 - 2 * 3",
            "m@7 % 3",
            "m@56 % 7",
            "m@2 % 9",
            "m@4 * (2 + 3 / (1 + 2)) + (4 % 2)",
        ],
        [   
            "i@EXPvariables",
            "i@EXPjavascript-print",
            "c@x = 5,x = x + 1,console.log(x)~6",
            "c@y = 2,z = 2 * y,console.log(z / 4)~1",
            "c@n = 4 * 4,l = (n - 1) % 3,console.log(l)~0",
        ],
        [
            "i@EXPcomparison-operators",
            "o@==,!=,<,>,<=,>=",
            "m@3 == 5",
            "m@4 != 8 % 2",
            "m@5 >= 16 - 17",
            `c@x = 9, y = 1 + x * 2, console.log(x > 18)~false`,
        ],
        [
            "i@EXPif-statement",
            "c@x = 5,if(x > 2){,$console.log(x+1),}~6",
            "c@age = 21,if(f >= 21){,$console.log('You can buy beer'),},if(age < 21){,$console.log('You cannot buy beer'),}~You can buy beer",
            "c@c = 5, t = 3,if(t > 0){,$if(c <= 8-4){,$$console.log(c),$},$if(c > 4.5){,$$console.log(t),$},}~3",
        ],
    ],
    py: [
        [
            "m@2 + 3",
            "m@4 - 6",
            "i@EXPorder-of-operations",
            "o@+,-,*,/,%",
            "m@5 - 2 * 3",
            "m@7 % 3",
            "m@56 % 7",
            "m@2 % 9",
            "m@4 * (2 + 3 / (1 + 2)) + (4 % 2)",
        ],
        [   
            "i@EXPvariables",
            "i@EXPpython-print",
            "c@x = 5,x = x + 1,print(x)~6",
            "c@y = 2,z = 2 * y,print(z / 4)~1",
            "c@n = 4 * 4,l = (n - 1) % 3,print(l)~0",
        ],
        [
            "i@EXPcomparison-operators",
            "o@==,!=,<,>,<=,>=",
            "m@3 == 5",
            "m@4 != 8 % 2",
            "m@5 >= 16 - 17",
            `c@x = 9, y = 1 + x * 2, print(x > 18)~false`,
        ],
        [
            "i@EXPif-statement",
            "c@x = 5,if(x <= 5):,$print(x+1)~6",
            "c@age = 21,if(f >= 21):,$print('You can buy beer'),if(age < 21):,$print('You cannot buy beer')~You can buy beer",
            "c@c = 5, t = 3,if(t > 0):,$if(c <= 8-4):,$$print(c),$if(c > 4.5):,$$print(t),}~3",
        ],
    ],
rb: [
        [
            "m@9 + 5",
            "m@4 - 6",
            "i@EXPorder-of-operations",
            "o@+,-,*,/,%",
            "m@5 - 2 * 3",
            "m@10 % 3",
            "m@56 % 7",
            "m@2 % 9",
            "m@4 * (2 + 3 / (1 + 2)) + (4 % 2)",
        ],
        [   
            "i@EXPvariables",
            "i@EXPjavascript-print",
            "c@x = 5,x = x + 1,print(x)~6",
            "c@y = 2,z = 2 * y,print(z / 4)~1",
            "c@n = 4 * 4,l = (n - 1) % 3,print(l)~0",
        ],
    ]
}

languageData = {
    en: {
        "languageTEXT": "Languages:",
        "levelL": "Level",
        "mathL": "Math",
        "variablesL": "Variables",
        "comparisonL": "Comparison Operators",
        "booleanL": "Boolean Operators",
        "conditionalL": "Conditional Statements",
        "cQuestion": "What will the code print?",
        "iQuestion": "Important information:",
        "mQuestion": "What will this evaluate to?",
        "oQuestion": "Some useful operators:",
        "correct": "Correct!",
        "incorrect": "Incorrect, the answer is ",
        "click": "[Click to continue]",
        "placeholder": "Answer here...",
        "enter": "[Enter]",
        "continue": "[Continue]",
        "EXPorder-of-operations": "Programming uses the order of operations just like normal math. One new symbol is the modulo (a percent sign %) which returns the remainder of two numbers dividing.",
        "EXPvariables": "Variables are used as placeholders in programming to make code easier to write and understand. Variables can have almost any name.",
        "EXPjavascript-print": "The console.log() function is used to print things in JavaScript",
        "EXPpython-print": "The print() function is used to print things in Python",
        "EXPcomparison-operators": "You can use comparison operators to compare two values. These operators come after doing math, and will return 'true' if the statement is correct and 'false' if incorrect. For example '4 > 3' would return as 'true' because it is correct that 4 is larger than 3.",
        "EXPif-statement": "For code only to be executed if a certain condition is fulfilled, you need to use what is called an 'if statement'. If the code inside an if statement is true, the code is executed, otherwise it is skipped over. Let's see an example...",
        "operator": "Operator",
        "+": "Adds numbers together",
        "-": "Subtracts numbers",
        "*": "Multiplies numbers together",
        "/": "Divides numbers",
        "%": "Finds the remainder after division",
        "==": "Returns true if two things are equal, otherwise false",
        "!=": "Returns true if two things are unequal, otherwise false",
        "<": "Returns true if one number is smaller than the next, otherwise false",
        ">": "Returns true if one number is bigger than the next, otherwise false",
        "<=": "Returns true if one number is smaller than or equal to the next, otherwise false",
        ">=": "Returns true if one number is bigger than or equal to the next, otherwise false",
    },
    es: {
        "languageTEXT": "Idiomas:",
        "levelL": "Nivel",
        "mathL": "Matemáticas",
        "variablesL": "Variables",
        "comparisonL": "Operadores de Comparación",
        "booleanL": "Operadores Booleanos",
        "conditionalL": "Sentencias Condicionales",
        "cQuestion": "¿Qué imprimirá el código?",
        "iQuestion": "Información importante:",
        "mQuestion": "¿A qué evaluará esto?",
        "oQuestion": "Algunos operadores útiles:",
        "correct": "¡Correcto!",
        "EXPorder-of-operations": "La programación usa el orden de las operaciones al igual que las matemáticas normales. Un nuevo símbolo es el módulo (un signo de porcentaje%) que regresa el resto de dos números divididos.",
        "EXPvariables": "Las variables se utilizan como marcadores de posición en la programación para facilitar la escritura y la comprensión del código. Las variables pueden tener casi cualquier nombre.",
        "EXPjavascript-print": "La funcción console.log() se usa para imprimir cosas en JavaScript",
        "EXPpython-print": "La funcción print() se usa para imprimir cosas en Python",
        "EXPcomparison-operators": "Puede utilizar operadores de comparación para comparar dos valores. Estos operadores se evalúan después de los operadores matemáticos y devolverán 'true' si la declaración es correcta y 'false' si es incorrecta. Por ejemplo, '4> 3' se devolvería como 'verdadero' porque es correcto que 4 sea mayor que 3.",
        "EXPif-statement": "Para que el código solo se ejecute si se cumple una determinada condición, debe usar lo que se llama una 'instrucción if'. Si el código dentro de una declaración if es verdadero, el código se ejecuta; de lo contrario, se omite. Aquí está un ejemplo...",
        "incorrect": "Incorrecto, la respuesta es ",
        "click": "[Haz click para continuar]",
        "placeholder": "Responder aquí...",
        "enter": "[Entrar]",
        "continue": "[Continuar]",
        "operator": "Operador",
        "functionality": "Funcionalidad",
        "+": "Suma números juntos",
        "-": "Subtracta números",
        "*": "Multiplica números juntos",
        "/": "Divide números",
        "%": "Encuentra el resto después de la división",
        "==": "Regresa true si dos cosas son iguales, sino false",
        "!=": "Regresa true si dos cosas no son iguales, sino false",
        "<": "Regresa true si un número es más pequeño que el próximo, sino false",
        ">": "Regresa true si un número es más grande que el próximo, sino false",
        "<=": "Regresa true si un número es más pequeño que o igual al próximo, sino false",
        ">=": "Regresa true si un número es más grande que o igual al próximo, sino false",
    },
}
