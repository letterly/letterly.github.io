programmingData = {
    JavaScript: {
        blockStart: "{",
        blockEnd: "}",
        ifBlockEnd: "}",
        print: function(str){ return `console.log(${str})`},
        length: function(str){return `${str}.length`}, 
    },
    Python: {
        blockStart: ":",
        blockEnd: "",
        ifBlockEnd: "",
        print: function(str){ return `print(${str})`},
        length: function(str){return `len(${str})`}, 
    },
    Ruby: {
        blockStart: "",
        blockEnd: "",
        ifBlockEnd: "end",
        print: function(str){ return `puts ${str}`},
        length: function(str){return `${str}.length`}, 
    },
}
list = []
bruh = (num) => Math.floor(Math.random() * num)
type = "" //global
codelang = "JavaScript"
lesson = 0
count = 0
language = "en"
p = programmingData[codelang]
function listInitialize(lang){
    p = programmingData[lang]
    list = [
        [
            `m@2 + ${bruh(10)}`,
            `m@${bruh(10)} - ${bruh(10)}`,
            `i@EXPorder-of-operations`,
            `o@+,-,*,/,%`,
            `m@5 - 2 * ${bruh(5)}`,
            `m@${bruh(10)} % 3`,
            `m@56 % 7`,
            `m@2 % ${bruh(10)}`,
            `m@${bruh(10)} * (2 + 3 / (1 + 2)) + (4 % 2)`,
        ],
        [   
            `i@EXPvariables`,
            `i@EXPprint`,
            `c@x = 5,x = x + 1,${p.print("x")}~6`,
            `c@y = 2,z = 2 * y,${p.print("z / 4")}~1`,
            `c@n = 4 * 4,l = (n - 1) % 3,${p.print("l")}~0`,
        ],
        [
            "i@EXPcomparison-operators",
            "o@==,!=,<,>,<=,>=",
            `m@3 == ${bruh(10)}`,
            "m@4 != 8 % 2",
            `m@5 >= 16 - ${bruh(20)}`,
            `c@x = 9, y = 1 + x * 2, ${p.print("x > 18")}~false`,
        ],
        [
            "i@EXPif-statement",
            `c@x = 5,if(x <= 5)${p.blockStart},$${p.print("x+1")}, ${p.ifBlockEnd}~6`,
            `c@age = 21,if(age >= 21)${p.blockStart},$${p.print("'You can buy beer'")},${p.ifBlockEnd},if(age < 21)${p.blockStart},$${p.print("'You cannot buy beer'")}, ${p.ifBlockEnd}~You can buy beer`,
            `c@c = 5, t = 3,if(t > 0)${p.blockStart},$if(c <= 8 - 4)${p.blockStart},$$${p.print('c')},${p.ifBlockEnd},$if(c > 4.5)${p.blockStart},$$${p.print('t')},$${p.ifBlockEnd},${p.ifBlockEnd}~3`,
        ],
        [
            "i@EXPstrings",
            "m@'h'+'n'",
            `m@${p.length("'harris'")}`,
            `m@${p.length("''")}`,
            `m@${p.length("'string'")} % ${bruh(5)}`,
            `c@str = 'pyt' + 'hon',f = ${p.length('str')} + 1,${p.print('f')}~7`,
            "m@'23' + '42'",
        ],
    ]
}

function parsejs(h){
    h = h.match(/(?:[^\s"]+|"[^"]*")+/g).join(" ")
    h = h.replace(/[\+\-\*\/\%\(\)\=\!\<\>\^\&\|\.\{\}\$\:]/g, "~$&~")
    h = h.replace(/=~~=/g, "==").replace(/!~~=/g, "!=").replace(/<~~=/g, "<=").replace(/>~~=/g, ">=").replace(/&~~&/g, "&&").replace(/\|~~\|/g, "||").replace("puts", "puts~").replace("len", "len~").replace("len~gth", "length~")
    h = h.split("~")
    return h
}
transl = (w) => languageData[language][w]

function color(arr){
    arr = parsejs(arr)
    str = ""
    for(x of arr){
        cl = ""
        if("+-*/%><!=^&|.(){}:".includes(x.trim().charAt(0))) cl = "operator"
        else if(!isNaN(x.trim())) cl = "number"
        else if(["if", "console", "log", "length", "print", "puts", "var", "len"].includes(x.trim())) cl = "keyword"
        else if(x.trim() == "$") cl = "space"
        else if(x.trim().startsWith("'") || x.trim().startsWith(`"`)) cl = "quote"
        else if(["true", "false"].includes(x.trim())) cl = "boolean"
        else cl = "variable"
        str += "<span class='" + cl + "'>" + x + "</span>"
    }
    return str
}

OperatorPrecedence = [
    [".", "len"],
    ["%", "*", "/"],
    ["+", "-"],
    ["==", "!=", "<=", ">=", "<", ">"],
]

function operation(symbol, first, second){
    first = first.trim()
    second = second?.trim()
    switch(symbol){
        case "+":
            return first.startsWith("'") ? (first.slice(0,-1) + second.slice(1)) : (+first + +second)
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
        case ".":
            if(second == "length") return first.length - 2
            else return first[second]
        case "len":
            console.log(first)
            return first.length - 2
    }
}
function solve(h){
    h = parsejs(h)
    h = h.filter(word => word.trim() !== "")
    while(h.includes("(")) for(i in h) if(h[i] == "(" && (h.indexOf("(", +i+1) > h.indexOf(")", i) || h.indexOf("(", +i+1) == -1)) h = h.slice(0, i).concat([solve(h.slice(i, h.indexOf(")", i) + 1).slice(1, -1).join(""))],h.slice(h.indexOf(")", +i+1)+1))
    for(o of OperatorPrecedence){
        for(x in h) if(o.includes(h[x])) h[x].toUpperCase() != h[x].toLowerCase() ? h.splice(+x, 2, "", String(operation(h[x], h[+x+1]))) : h.splice(+x-1, 3, "", "", String(operation(h[x], h[+x-1], h[+x+1])))
        h = h.filter(word => word !== "")
    }
    return h[0]
}

document.addEventListener('keydown', (e) => {
    if(e.code == "Enter" && game.style.display == "block") next()
})
function buttonize(t){
    if(buttons.style.display != "none"){
        list[lesson][count]?.split(">")[1]?.startsWith(t) ? trueP.textContent = transl('correct') : falseP.textContent = transl('incorrect') + list[lesson][count]?.split(">")[1]?.split(",")[0]
        ent.textContent = transl('click')
    }
}
function boolbuttonize(t){
    if(booleanbuttons.style.display != "none"){
        list[lesson][count]?.split(">")[1]?.startsWith(t) ? trueP.textContent = "Correct!" : falseP.textContent = "Incorrect, the answer is " + list[lesson][count]?.split(">")[1]?.split(",")[0]
        ent.textContent = transl('click')
    }
}

function levelset(num){
    game.style.display = 'block'
    levelselects.style.display = "none"
    languageselect.style.display = "none"
    codingselect.style.display = "none"
    message.style.display = "none"
    lesson = num
    count = -1
    listInitialize(codelang)
    next()
}

function next(){
    trueP.textContent = ""
    falseP.textContent = ""
    if(ent.textContent == transl('enter')){
        ans = type == "m" ? solve(text.textContent) : list[lesson][count].split("@")[1].split("~")[1]
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
        if(count == list[lesson].length){
            h.textContent = "codecode project"
            game.style.display = 'none'
            levelselects.style.display = "block"
            languageselect.style.display = "block"
            codingselect.style.display = "block"
            message.style.display = "block"
        }
        item = list[lesson][count]
        content = item?.split("@")[1]
        type = item.split("@")[0]
        h.textContent = transl(type + "Question")
        ent.textContent = transl("cm".includes(type) ? "enter" : "continue")
        switch(type){
            case "c": //code block
                input.style.display = "block"
                text.innerHTML = content.split("~")[0].split(",").filter(item => item.trim()).map(x => `<p>${color(x)}</p>`).join("")
                text.style.textAlign = "left"
                break
            case "i": //information
                text.innerHTML = transl(content)
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
    for (x of Array.from(document.getElementsByClassName("lang"))) x.style.fontWeight = 400
    document.getElementById(ISOcode).style.fontWeight = 700
    if(language != ISOcode){
        language = ISOcode
        for(x of Object.entries(languageData[language])) if(x[0].endsWith("TEXT")) document.getElementById(x[0]).textContent = x[1]
        for(x of Object.entries(languageData[language])) if(x[0].endsWith("L")) Array.from(document.getElementsByClassName(x[0])).map(c => c.textContent = x[1])
        input.placeholder = transl('placeholder')
    }
}
function codingswitch(name){
    for (x of Array.from(document.getElementsByClassName("codelang"))) x.style.fontWeight = 400
    document.getElementById(name).style.fontWeight = 700
    codelang = name
    document.getElementById("language").textContent = name
}
//code
//line
//multiple choice
//true/false
//info
//operators
languageData = {
    en: {
        "languageTEXT": "Languages:",
        "levelL": "Level",
        "mathL": "Math",
        "variablesL": "Variables",
        "comparisonL": "Comparison Operators",
        "booleanL": "Boolean Operators",
        "conditionalL": "Conditional Statements",
        "stringsL": "Strings",
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
        "EXPvariables": `${color("Variables")} are used as placeholders in programming to make code easier to write and understand. Variables can have almost any name.`,
        "EXPprint": `The ${color(programmingData[codelang].print(""))} function is used to print things in ${codelang}`,
        "EXPcomparison-operators": `You can use comparison operators to compare two values. These operators come after doing math, and will return ${color('true')} if the statement is correct and ${color('false')} if incorrect. For example ${color('4 > 3')} would return as ${color('true')} because it is correct that ${color('4')} is larger than ${color('3')}.`,
        "EXPif-statement": "For code only to be executed if a certain condition is fulfilled, you need to use what is called an 'if statement'. If the code inside an if statement is true, the code is executed, otherwise it is skipped over. Let's see an example...",
        "EXPstrings": `In programming, a string is a series of characters that is wrapped with ${color("'quotes'")}. You can add them together with an addition operator (+). You can get the number of characters in a string in ${codelang} with the ${color(programmingData[codelang].length(""))} ${programmingData[codelang].length("").startsWith(".") ? "attribute" : "function"}`,
        "operator": "Operator",
        "+": "Adds numbers together",
        "-": "Subtracts numbers",
        "*": "Multiplies numbers together",
        "/": "Divides numbers",
        "%": "Finds the remainder after division",
        "==": `Returns ${color("true")} if two things are equal, otherwise ${color("false")}`,
        "!=": `Returns ${color("true")} if two things are unequal, otherwise ${color("false")}`,
        "<": `Returns ${color("true")} if one number is smaller than the next, otherwise ${color("false")}`,
        ">": `Returns ${color("true")} if one number is bigger than the next, otherwise ${color("false")}`,
        "<=": `Returns ${color("true")} if one number is smaller than or equal to the next, otherwise ${color("false")}`,
        ">=": `Returns ${color("true")} if one number is bigger than or equal to the next, otherwise ${color("false")}`,
    },
    es: {
        "languageTEXT": "Idiomas:",
        "levelL": "Nivel",
        "mathL": "Matemáticas",
        "variablesL": "Variables",
        "comparisonL": "Operadores de Comparación",
        "booleanL": "Operadores Booleanos",
        "conditionalL": "Sentencias Condicionales",
        "stringsL": "Cadenas",
        "cQuestion": "¿Qué imprimirá el código?",
        "iQuestion": "Información importante:",
        "mQuestion": "¿A qué evaluará esto?",
        "oQuestion": "Algunos operadores útiles:",
        "correct": "¡Correcto!",
        "EXPorder-of-operations": "La programación usa el orden de las operaciones al igual que las matemáticas normales. Un nuevo símbolo es el modulo (un signo de porcentaje %) que devuelve el resto de dos números enteros divididos.",
        "EXPvariables": `Las ${color("variables")} se utilizan como marcadores de posición en la programación, para facilitar la escritura y la comprensión del código. Las variables pueden tener casi cualquier nombre.`,
        "EXPprint": `La función ${color(programmingData[codelang].print(""))} se usa para imprimir cosas en ${codelang}`,
        "EXPstrings": `En programación, una cadena es una serie de caracteres entre comillas. Puedes agregarlos junto con un operador de suma (+). Puedes obtener el número de caracteres en una cadena en '${codelang}' con el atributo 'length'.`,
        "EXPcomparison-operators": `Puede utilizar operadores de comparación para comparar dos valores. Estos operadores vienen después de hacer operaciones y aparecerá ${color('true')} si la declaración es correcta y ${color('false')} si es incorrecta.`,
        "EXPif-statement": "Para que el código sólo se ejecute si se cumple una determinada condición, debe usar lo que se llama un 'operador condicional'. Si el código dentro de un 'operador condicional' es verdadero, el código se ejecuta; de lo contrario, se omite. Veamos un ejemplo...",
        "incorrect": "Incorrecto, la respuesta es ",
        "click": "[Haz click para continuar]",
        "placeholder": "Responder aquí...",
        "enter": "[Entrar]",
        "continue": "[Continuar]",
        "operator": "Operador",
        "functionality": "Funcionalidad",
        "+": "Suma números",
        "-": "Resta números",
        "*": "Multiplica números",
        "/": "Divide números",
        "%": "Encuentra el resto después de la división",
        "==": `Se vuelve ${color("true")} si dos cosas son iguales, de lo contrario se convierte en ${color("false")}`,
        "!=": `Se vuelve ${color("true")} si dos cosas no son iguales, de lo contrario se convierte en ${color("false")}`,
        "<": `Se vuelve ${color("true")} si un número es menor que el siguiente, de lo contrario se convierte en ${color("false")}`,
        ">": `Se vuelve ${color("true")} si un número es es mayor que el siguiente, de lo contrario se convierte en ${color("false")}`,
        "<=": `Devuelve ${color("true")} si un número es menor o igual que el siguiente, de lo contrario se convierte en ${color("false")}`,
        ">=": `Devuelve ${color("true")} si un número es mayor o igual que el siguiente, de lo contrario se convierte en ${color("false")}`,
    },
    pt: {
        "languageTEXT": "Idiomas:",
        "levelL": "Nível",
        "mathL": "Matemática",
        "variablesL": "Variáveis",
        "comparisonL": "Operadores Comparativos",
        "booleanL": "Operadores Lógicos",
        "conditionalL": "Sentenças Condicionais",
        "stringsL": "Cadeias",
        "cQuestion": "O que o código irá imprimir?",
        "iQuestion": "Informações importantes:",
        "mQuestion": "O que isso irá avaliar?",
        "oQuestion": "Alguns operadores úteis:",
        "correct": "Correto!",
        "EXPorder-of-operations": "Programação utiliza ordens de operação assim como na matemática. Um dos símbolos é o módulo (o sinal de porcentagem %) que retorna o resto da divisão entre dois números.",
        "EXPvariables": `${color("Variáveis")} são utilizadas como marcadores na programação, para tornar o código fácil de se escrever e entender. Variáveis podem receber qualquer nome (com algumas exceções).`,
        "EXPprint": `A função ${color(programmingData[codelang].print(""))} é utilizada para imprimir coisas no ${codelang}.`,
        "EXPif-statement": `Se você deseja que um código seja executado somente se certas condições forem satisfeitas, use o que é chamado de "declaração if". Se o código dentro de um condicional if é verdadeiro, o código será executado, senão, é pulado. Vejamos um exemplo...`,
        "EXPstrings": `Na programação, uma cadeia é uma série de caracteres misturados em uma frase. Você pode juntar duas cadeias com o operador de soma ( + ). Você pode também pode saber a quantidade de caracteres em uma cadeia no ${codelang} com o atributo 'length'.`,
        "EXPcomparison-operators": `Você pode utilizar operadores comparativos para comparar dois valores. Estes operadores vem após operações matemáticas, e retornam "verdadeiro" se a sentença for correta ou "falso" se for incorreta. Por exemplo, ${color("4 > 3")} irá retornar ${color("true")} já que 4 é maior que 3. `,
        "incorrect": "Incorreto, a resposta é ",
        "click": "[Clique para continuar]",
        "placeholder": "Responda aqui...",
        "enter": "[Entrar]",
        "continue": "[Continuar]",
        "operator": "Operador",
        "functionality": "Funcionalidade",
        "+": "Suma dois números",
        "-": "Subtrai dois números",
        "*": "Multiplica dois números",
        "/": "Divide dois números",
        "%": "Pega o resto da divisão",
        "==": `(==) Retorna ${color("true")} se duas coisas ao serem comparadas forem iguais, senão retorna ${color("false")}`,
        "!=": `(!=) Retorna ${color("true")} se duas coisas forem diferentes ao serem comparadas, senão retorna ${color("false")}`,
        "<": `(<) Retorna ${color("true")} se um número é menor que o outro, senão retorna ${color("false")}`,
        ">": `(>) Retorna ${color("true")} se um número é maior que o outro, senão retorna ${color("false")}`,
        "<=": `(<=) Retorna ${color("true")} se um número é menor ou igual ao outro, senão retorna ${color("false")}`,
        ">=": `(<=) Retorna ${color("true")} se um número é maior ou igual ao outro, senão retorna ${color("false")}`,
    },
}
