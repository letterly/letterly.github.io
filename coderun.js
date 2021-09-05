programmingData = {
    JavaScript: {
        blockEnd: "}",
        ifBlockEnd: "}",
        print: function(str){ return `console.log(${str})`},
        length: function(str){return `${str}.length`}, 
        variable: function(str){return `${str}`}, 
        newvariable: function(str, type){return `${str}`}, 
        func: function(str, vars){return `function ${str}(${vars}){`},
        if: function(str){return `if(${str}){`}, 
        elseif: function(str){return `else if(${str}){`}, 
        else: `else{`,
        while: function(str){return `while(${str}){`},
        true: "true",
        false: "false",
        andOperator: "&&",
        orOperator: "||",
        notOperator: "!",
        s: "",
    },
    Python: {
        blockEnd: "",
        ifBlockEnd: "",
        print: function(str){ return `print(${str})`},
        length: function(str){return `len(${str})`}, 
        variable: function(str){return `${str}`}, 
        newvariable: function(str, type){return `${str}`}, 
        if: function(str){return `if ${str}:`}, 
        elseif: function(str){return `elif ${str}:`}, 
        else: `else:`,
        while: function(str){return `while ${str}:`},
        func: function(str, vars){return `def ${str}(${vars}):`},
        true: "True",
        false: "False",
        andOperator: "and",
        orOperator: "or",
        notOperator: "not ",
        s: "",
    },
    Ruby: {
        blockEnd: "",
        ifBlockEnd: "end",
        print: function(str){ return `puts ${str}`},
        length: function(str){return `${str}.length`}, 
        variable: function(str){return `${str}`}, 
        newvariable: function(str, type){return `${str}`}, 
        if: function(str){return `if ${str}`}, 
        elseif: function(str){return `elsif ${str}`}, 
        else: `else`,
        func: function(str, vars){return `def ${str}(${vars})`},
        while: function(str){return `while ${str}`},
        true: "true",
        false: "false",
        andOperator: "&&",
        orOperator: "||",
        notOperator: "!",
        s: "",
    },
    PHP: {
        blockEnd: "}",//
        ifBlockEnd: "}",//
        print: function(str){ return `echo ${str}`},//
        length: function(str){return `strlen(${str})`},
        variable: function(str){return `$${str}`},
        newvariable: function(str, type){return `$${str}`}, 
        if: function(str){return `if (${str}) {`},
        elseif: function(str){return `elseif (${str}) {`},
        else: `else {`,
        func: function(str, vars){return `function ${str}(${vars}) {`},
        while: function(str){return `while (${str}) {`},
        true: "true",
        false: "false",
        andOperator: "&&",
        orOperator: "||",
        notOperator: "!",
        s: "",
    },
    Lua: {
        blockEnd: "end",//
        ifBlockEnd: "end",//
        print: function(str){ return `print(${str})`},//
        length: function(str){return `#${str}`},
        variable: function(str){return `${str}`}, 
        newvariable: function(str, type){return `${str}`}, 
        if: function(str){return `if ${str} then`},
        elseif: function(str){return `elseif ${str} then`}, 
        else: `else then`, 
        func: function(str, vars){return `function ${str} (${vars})`},
        while: function(str){return `while ${str} do`},
        true: "true",
        false: "false",
        andOperator: "and",
        orOperator: "or",
        notOperator: "not ",
        s: "",
    },
    Java: {
        blockEnd: "}",//
        ifBlockEnd: "}",//
        print: function(str){ return `System.out.print(${str});`},//
        length: function(str){return `${str}.length()`},
        variable: function(str){return `${str}`}, 
        newvariable: function(str, type){return `${type} ${str}`}, 
        if: function(str){return `if (${str}) {`},
        elseif: function(str){return `else if (${str}) {`}, 
        else: `else {`, 
        func: function(str, vars){return `static void ${str}(${vars}) {`},
        while: function(str){return `while (${str}) {`},
        true: "true",
        false: "false",
        andOperator: "&&",
        orOperator: "||",
        notOperator: "!",
        s: ";",
    },
}
list = []
languageData = {}
bruh = (num) => Math.floor(Math.random() * num + 1)
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
            `c@${p.newvariable("x", "int")} = 5${p.s},${p.variable("x")} = ${p.variable("x")} + 1${p.s},${p.print(p.variable("x"))}${p.s}~6`,
            `c@${p.newvariable("y", "int")} = 2${p.s},${p.newvariable("z", "int")} = 2 * ${p.variable("y")}${p.s},${p.print(`${p.variable("z")} / 4`)}~1`,
            `c@${p.newvariable("n", "int")} = 4 * 4${p.s},${p.newvariable("l", "int")} = (${p.variable("n")} - 1) % 3${p.s},${p.print(p.variable("l"))}~0`,
        ],
        [
            "i@EXPcomparison-operators",
            "o@==,!=,<,>,<=,>=",
            `m@3 == ${bruh(10)}`,
            "m@4 != 8 % 2",
            `m@5 >= 16 - ${bruh(20)}`,
            `c@${p.newvariable("x", "int")} = 9${p.s},${p.newvariable("y", "int")} = 1 + ${p.variable("x")} * 2${p.s},${p.print(`${p.variable("x")} > 18`)}${p.s}~false`,
        ],
        [
            "i@EXPif-statement",
            `c@${p.newvariable("x", "int")} = 5${p.s},${p.if(`${p.variable("x")} <= 5`)},÷${p.print(`${p.variable("x")}+1`)}${p.s},${p.ifBlockEnd}~6`,
            `c@${p.newvariable("age", "int")} = 21${p.s},${p.if(`${p.variable("age")} >= 21`)},÷${p.print("'You can buy beer'")}${p.s},${p.ifBlockEnd},${p.if(`${p.variable("age")} < 21`)},÷${p.print("'You can't buy beer'")}${p.s}, ${p.ifBlockEnd}~'You can buy beer'`,
            `c@${p.newvariable("c", "int")} = 5${p.s},${p.newvariable("t", "int")} = 3${p.s},${p.if(`${p.variable("t")} > 0`)},÷${p.if(`${p.variable("c")} <= 8 - 4`)},÷÷${p.print('c')},÷${p.ifBlockEnd},${p.if(`${p.variable("c")} > 4.5`)},÷÷${p.print(p.variable("t"))},÷${p.ifBlockEnd},${p.ifBlockEnd}~3`,
        ],
        [
            "i@EXPstrings",
            "m@'h'+'n'",
            `m@${p.length("'harris'")}`,
            `m@${p.length("''")}`,
            `m@${p.length("'string'")} % ${bruh(5)}`,
            `c@${p.variable("str")} = 'pyt' + 'hon'${p.s},${p.variable("f")} = ${p.length(p.variable("str"))} + 1${p.s},${p.print(p.variable("f"))}~7`,
            `m@'${bruh(30)}' + '${bruh(30)}'`,
        ],
        [
            "i@EXPboolean",
            `o@${p.notOperator},${p.orOperator},${p.andOperator}`,
            `m@${p.true} ${p.andOperator} ${p.false}`,
            `m@${p.notOperator}${p.true}`,
            `c@${p.newvariable("a", "boolean")} = 19 % 2 == 1${p.s}, ${p.newvariable("b", "boolean")} =  ${p.notOperator}(${p.false} ${p.orOperator} ${p.variable("a")})${p.s},${p.print(p.variable("b"))}~${p.false}`,
            `m@(${p.false} ${p.andOperator} ${p.true}) ${p.orOperator} (${p.true} ${p.andOperator} ${p.false})`
        ],
        [
            "i@EXPifelse",
            `c@${p.newvariable("x", "int")} = 10${p.s},${p.if(`${p.variable("x")} < 10`)},÷${p.print(`x+1`)},${p.blockEnd},${p.elseif(p.variable("x") + ` % 4 == 2`)},÷${p.print(p.variable("x") + `-1`)},${p.ifBlockEnd}~9`,
            `c@${p.newvariable("str", "String")} = 'card'${p.s},${p.if(`${p.length(p.variable("str"))} == 3`)},÷${p.print("'hi'")},${p.blockEnd},${p.elseif(`${p.length(p.variable("str"))} == 14 % 5`)},÷${p.print("'bye'")},${p.blockEnd},${p.elseif(`${p.length(p.variable("str"))} > 0`)},÷${p.print("'sigh'")},${p.ifBlockEnd}~'bye'`,
            `c@${p.if("19 > 32")},÷${p.print("4")},${p.blockEnd},${p.else},÷${p.print("18")},${p.ifBlockEnd}~18`,
            `c@${p.if(`${p.length("''")} % ${bruh(10)} == 0`)},÷${p.print("'32'")},${p.blockEnd},${p.elseif(`42 >= 6 * 6 + 6`)},÷${p.print('32')},${p.blockEnd},${p.else},÷${p.print("'3 2'")},${p.ifBlockEnd}~'32'`,
        ],
        [
            "i@EXPwhile",
            `c@${p.newvariable("x", "int")} = 8${p.s},${p.while(`${p.variable("x")} < 20`)},÷${p.variable("x")} = ${p.variable("x")} * 2${p.s},${p.blockEnd}~32`,
            `c@${p.newvariable("fruit", "String")} = 'ba'${p.s},${p.while(`${p.length(p.variable("fruit"))} <= 7`)},÷${p.variable("fruit")} = ${p.variable("fruit")} + 'na',${p.blockEnd},${p.print(p.variable("fruit"))}~'bananana'`,
            `c@${p.newvariable("number", "int")} = 12${p.s},${p.while(`${p.variable("number")} % 7 != 0`)},÷${p.variable("number")} = ${p.variable("number")} + 3${p.s},${p.blockEnd},${p.print(`${p.variable("number")} + 2`)}~23`,
            `c@${p.newvariable("c", "int")} = 5${p.s},${p.while(`${p.variable("c")} < 30`)},÷${p.if(`${p.variable("c")} % 2 == 1`)},÷÷${p.variable("c")} = ${p.variable("c")} * 5${p.s},÷${p.blockEnd},÷${p.else},÷÷${p.variable("c")} = ${p.variable("c")} + 4${p.s},÷${p.ifBlockEnd},${p.ifBlockEnd},${p.print(p.variable("c"))}~33`,
        ],
        [
            "i@EXPfunction",
            `c@${p.func("square", p.variable("num"))},÷return ${p.variable("num")} * ${p.variable("num")},${p.blockEnd},${p.print(`square(5)`)}~25`,
            `c@${p.variable("h")} = 0,${p.func("add","")}${p.s},÷${p.variable("h")} = ${p.variable("h")} + 3${p.s},${p.blockEnd},add()${p.s},add()${p.s},${p.print(p.variable("h"))}~6`,
            `c@${p.func("stringadd", p.newvariable("str","String"))},÷${p.if(`${p.length(p.variable("str"))} >= 3`)},÷÷return 'this'${p.s},÷${p.blockEnd},÷${p.else},÷÷return ${p.variable("str")} + "i"${p.s},÷${p.ifBlockEnd},${p.blockEnd},${p.print(`stringadd("hi")`)}~'hii'`,
            `c@${p.func("stringadd", p.newvariable("str","String"))},÷${p.if(`${p.length(p.variable("str"))} > 3`)},÷÷return 'this'${p.s},÷${p.blockEnd},÷${p.else},÷÷return ${p.variable("str")} + "i"${p.s},÷${p.ifBlockEnd},${p.blockEnd},${p.variable('n')} = stringadd("hey"),${p.print(`stringadd(${p.variable('n')})`)}~'this'`,
        ],
    ]
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
            "whileL": "While Loops",
            "functionL": "Functions",
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
            "EXPprint": `The ${color(p.print(""))} function is used to print things in ${codelang}`,
            "EXPcomparison-operators": `You can use comparison operators to compare two values. These operators come after doing math, and will return ${color(p.true)} if the statement is correct and ${color(p.false)} if incorrect. For example ${color('4 > 3')} would return as ${color(p.true)} because it is correct that ${color('4')} is larger than ${color('3')}.`,
            "EXPif-statement": "For code only to be executed if a certain condition is fulfilled, you need to use what is called an 'if statement'. If the code inside an if statement is true, the code is executed, otherwise it is skipped over. Let's see an example...",
            "EXPstrings": `In programming, a string is a series of characters that is wrapped with ${color("'quotes'")}. You can add them together with an addition operator (+). You can get the number of characters in a string in ${codelang} with the ${color(p.length(""))} ${p.length("").startsWith("#") ? (p.length("").startsWith(".") ? "attribute" : "function") : "operator"}`,
            "EXPboolean": `Certain operators, called boolean operators, are combined with boolean values (${p.true} and ${p.false}) to return a new value. This can help you write statements with complex logic in programming.`,
            "EXPifelse": `If an [if statement] doesn't evaluate to be ${color(p.true)}, then the program will move to the next [${color(p.elseif("").startsWith("else ") ? "else if" : p.elseif("").split(" ")[0])}] statement to run if it's ${color(p.true)}. Finally, if neither the if statement nor ${color(p.true)} statement, then an 'else statement' can run by default. Confusing? Let's see an example.`,
            "EXPwhile": `A ${color("while")} loop is a block of code that keeps going until the statement within the ${color("while")} loop becomes ${color("false")}.`,
            "EXPfunction": `A function in programming is a certain set of instructions in a block that can be activated multiple times. This makes code writing a lot faster. Most functions take one variable (or more) as an input return one output (with the ${color('return')} keyword). It's not that complicated so just figure it out from the following exercises.`,
            "operator": "Operator",
            "+": "Adds numbers together",
            "-": "Subtracts numbers",
            "*": "Multiplies numbers together",
            "/": "Divides numbers",
            "%": "Finds the remainder after division",
            "==": `Returns ${color(p.true)} if two things are equal, otherwise ${color(p.false)}`,
            "!=": `Returns ${color(p.true)} if two things are unequal, otherwise ${color(p.false)}`,
            "<": `Returns ${color(p.true)} if one number is smaller than the next, otherwise ${color(p.false)}`,
            ">": `Returns ${color(p.true)} if one number is bigger than the next, otherwise ${color(p.false)}`,
            "<=": `Returns ${color(p.true)} if one number is smaller than or equal to the next, otherwise ${color(p.false)}`,
            ">=": `Returns ${color(p.true)} if one number is bigger than or equal to the next, otherwise ${color(p.false)}`,
            "!": "Returns the opposite of the following boolean value",
            "&&": `Returns ${color(p.true)} if both values are ${color(p.true)}, otherwise ${color(p.false)}`,
            "||": `Returns ${color(p.true)} if at least one of the values is ${color(p.true)}, otherwise ${color(p.false)}`,
            "not": "Returns the opposite of the following value",
            "and": `Returns ${color(p.true)} if both values are ${color(p.true)}, otherwise ${color(p.false)}`,
            "or": `Returns ${color(p.true)} if at least one of the values is ${color(p.true)}, otherwise ${color(p.false)}`,
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
            "EXPprint": `La función ${color(p.print(""))} se usa para imprimir cosas en ${codelang}`,
            "EXPstrings": `En programación, una cadena es una serie de caracteres entre comillas. Puedes agregarlos junto con un operador de suma (+). Puedes obtener el número de caracteres en una cadena en '${codelang}' con el atributo 'length'.`,
            "EXPcomparison-operators": `Puede utilizar operadores de comparación para comparar dos valores. Estos operadores vienen después de hacer operaciones y aparecerá ${color(p.true)} si la declaración es correcta y ${color(p.false)} si es incorrecta.`,
            "EXPif-statement": "Para que el código sólo se ejecute si se cumple una determinada condición, debe usar lo que se llama un 'operador condicional'. Si el código dentro de un 'operador condicional' es verdadero, el código se ejecuta; de lo contrario, se omite. Veamos un ejemplo...",
            "EXPboolean": "Ciertos operadores, llamados operadores booleanos, se combinan con valores booleanos ('true' y 'false') para devolver un nuevo valor. Esto puede ayudarlo a escribir declaraciones con lógica compleja en programación.",
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
            "==": `Se vuelve ${color(p.true)} si dos cosas son iguales, de lo contrario se convierte en ${color(p.false)}`,
            "!=": `Se vuelve ${color(p.true)} si dos cosas no son iguales, de lo contrario se convierte en ${color(p.false)}`,
            "<": `Se vuelve ${color(p.true)} si un número es menor que el siguiente, de lo contrario se convierte en ${color(p.false)}`,
            ">": `Se vuelve ${color(p.true)} si un número es es mayor que el siguiente, de lo contrario se convierte en ${color(p.false)}`,
            "<=": `Devuelve ${color(p.true)} si un número es menor o igual que el siguiente, de lo contrario se convierte en ${color(p.false)}`,
            ">=": `Devuelve ${color(p.true)} si un número es mayor o igual que el siguiente, de lo contrario se convierte en ${color(p.false)}`,
            "!": `Se vuelve el opuesto del seguinte valor booleano`,
            "&&": `Se vuelve ${color(p.true)} si ambos valores son ${color(p.true)}, de lo contrario ${color(p.false)}`,
            "||": `Se vuelve ${color(p.true)} si al menos uno de los valores es ${color(p.true)}, de lo contrario ${color(p.false)}`,
            "not": `Se vuelve el opuesto del seguinte valor booleano`,
            "and": `Se vuelve ${color(p.true)} si ambos valores son ${color(p.true)}, de lo contrario ${color(p.false)}`,
            "or": `Se vuelve ${color(p.true)} si al menos uno de los valores es ${color(p.true)}, de lo contrario ${color(p.false)}`,
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
            "EXPprint": `A função ${color(p.print(""))} é utilizada para imprimir coisas no ${codelang}.`,
            "EXPif-statement": `Se você deseja que um código seja executado somente se certas condições forem satisfeitas, use o que é chamado de "declaração if". Se o código dentro de um condicional if é verdadeiro, o código será executado, senão, é pulado. Vejamos um exemplo...`,
            "EXPstrings": `Na programação, uma cadeia é uma série de caracteres misturados em uma frase. Você pode juntar duas cadeias com o operador de soma ( + ). Você pode também pode saber a quantidade de caracteres em uma cadeia no ${codelang} com o atributo 'length'.`,
            "EXPcomparison-operators": `Você pode utilizar operadores comparativos para comparar dois valores. Estes operadores vem após operações matemáticas, e retornam ${p.true} se a sentença for correta ou ${p.false} se for incorreta. Por exemplo, ${color("4 > 3")} irá retornar ${color(p.true)} já que 4 é maior que 3. `,
            "EXPboolean": "Certos operadores, chamados de operadores booleanos, são combinados com valores booleanos ('true' e 'false') para retornar um novo valor. Isso pode ajudá-lo a escrever declarações com lógica complexa na programação.",
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
            "==": `(==) Retorna ${color(p.true)} se duas coisas ao serem comparadas forem iguais, senão retorna ${color(p.false)}`,
            "!=": `(!=) Retorna ${color(p.true)} se duas coisas forem diferentes ao serem comparadas, senão retorna ${color(p.false)}`,
            "<": `(<) Retorna ${color(p.true)} se um número é menor que o outro, senão retorna ${color(p.false)}`,
            ">": `(>) Retorna ${color(p.true)} se um número é maior que o outro, senão retorna ${color(p.false)}`,
            "<=": `(<=) Retorna ${color(p.true)} se um número é menor ou igual ao outro, senão retorna ${color(p.false)}`,
            ">=": `(<=) Retorna ${color(p.true)} se um número é maior ou igual ao outro, senão retorna ${color(p.false)}`,
            "!": "Retorna o oposto do seguinte valor booleano",
            "&&": `Retorna ${color(p.true)} se ambos os valores são ${color(p.true)}, caso contrário, ${color(p.false)}`,
            "||": `Retorna ${color(p.true)} se pelo menos um dos valores for ${color(p.true)}, caso contrário, ${color(p.false)}`,
            "not": "Retorna o oposto do seguinte valor booleano",
            "and": `Retorna ${color(p.true)} se ambos os valores são ${color(p.true)}, caso contrário, ${color(p.false)}`,
            "or": `Retorna ${color(p.true)} se pelo menos um dos valores for ${color(p.true)}, caso contrário, ${color(p.false)}`,
        },
    }
}

function parsejs(h){
    h = h.match(/(?:[^\s"]+|"[^"]*")+/g).join(" ")
    h = h.replace(/[\+\-\*\/\%\(\)\=\!\<\>\^\&\|\.\{\}\$\:\#\;÷]/g, "~$&~")
    h = h.replace(/=~~=/g, "==").replace(/!~~=/g, "!=").replace(/<~~=/g, "<=").replace(/>~~=/g, ">=").replace(/&~~&/g, "&&").replace(/\|~~\|/g, "||")
    replaceArray = ["puts", "len", "true", "false", "True", "False", "and", "not", "or", "echo", "then", "while", "function", "def", "do", "if", "else"]
    h = h.replace("puts", "puts~").replace("len", "len~").replace("true", "~true~").replace("false", "~false~").replace(/True/g, "~True~").replace(/False/g, "~False~").replace(/and/g, "~and~").replace(/not/g, "~not~").replace(/or/g, "~or~").replace("echo", "echo~").replace("then", "~then").replace("while", "while~").replace("function", "function~").replace("def", "def~").replace("do", "~do").replace("if", "if~").replace("else", "else~").replace("return", "return~").replace("System", "System~").replace("out", "out~").replace(/void/g, "~void~").replace(/static/g, "~static~").replace(/int/g, "~int~").replace(/boolean/g, "~boolean~").replace(/String/g, "~String~")
    h = h.replace("len~gth", "length~").replace("else~if", "elseif").replace("el~if", "elif").replace("els~if", "elsif").replace("pr~int", "print")
    h = h.split("~")
    return h
}
transl = (w) => languageData[language][w]

function color(arr){
    arr = parsejs(arr)
    str = ""
    for(x of arr){
        cl = ""
        if("+-*/%><!=^&|.(){}:#;".includes(x.trim().charAt(0))) cl = "operator"
        else if(["and", "or", "not", "then"].includes(x.trim())) cl = "operator"
        else if(!isNaN(x.trim())) cl = "number"
        else if(["if", "console", "log", "length", "print", "puts", "var", "len", "else", "elsif", "elif", "elseif", "strlen", "echo", "then", "end", "while", "function", "def", "do", "return", "System", "out", "static", "void", "int", "boolean", "String"].includes(x.trim())) cl = "keyword"
        else if(x.trim() == "÷") cl = "space"
        else if(x.trim().startsWith("'") || x.trim().startsWith(`"`)) cl = "quote"
        else if(["true", "false"].includes(x.trim().toLowerCase())) cl = "boolean"
        else cl = "variable"
        str += "<span class='" + cl + "'>" + x + "</span>"
    }
    return str
}

OperatorPrecedence = [
    [".", "len", "strlen", "#"],
    ["!", "not"],
    ["%", "*", "/"],
    ["+", "-"],
    ["==", "!=", "<=", ">=", "<", ">"],
    ["&&", "and"],
    ["||", "or"],
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
        case "&&":
        case "and":
            return first.toLowerCase() == "true" && second.toLowerCase() == "true" ? p.true : p.false
        case "||":
        case "or":
            return first.toLowerCase() == "true" || second.toLowerCase() == "true" ? p.true : p.false
        case ".":
            if(second == "length") return first.length - 2
            else return first[second]
        case "len":
        case "strlen":
        case "#":
            return first.length - 2
        case "!":
        case "not":
            return first.toLowerCase() == "true" ? p.false : p.true
    }
}
function solve(h){
    h = parsejs(h)
    h = h.filter(word => word.trim() !== "")
    h = h.join("€").replace(/\(€\)/, "").split("€")
    while(h.includes("(")) for(i in h) if(h[i] == "(" && (h.indexOf("(", +i+1) > h.indexOf(")", i) || h.indexOf("(", +i+1) == -1)) h = h.slice(0, i).concat([solve(h.slice(i, h.indexOf(")", i) + 1).slice(1, -1).join(""))],h.slice(h.indexOf(")", +i+1)+1))
    for(o of OperatorPrecedence){
        for(x in h) if(o.includes(h[x])) ["!", "not", "len", "strlen", "#"].includes(h[x]) ? h.splice(+x, 2, "", String(operation(h[x], h[+x+1]))) : h.splice(+x-1, 3, "", "", String(operation(h[x], h[+x-1], h[+x+1])))
        h = h.filter(word => word !== "")
    }
    return h[0]
}

document.addEventListener('keydown', (e) => {
    if(e.code == "Enter" && game.style.display == "block") next()
})
function buttonize(t){
    if(buttons.style.display != "none"){
        list[lesson][count]?.split(">")[1]?.startsWith(t) ? trueP.innerHTML = transl('correct') : falseP.innerHTML = transl('incorrect') + "<span id='wronganswer'>" + list[lesson][count]?.split(">")[1]?.split(",")[0] + "</span>"
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
        ans == input.value ? trueP.textContent = "Correct!" : falseP.innerHTML = transl('incorrect') + "<span id='wronganswer'>" + ans + "</span>"
        ent.textContent = transl('click')
    }
    else{
        input.value = ""
        ent.textContent = ""
        buttons.style.display = "none"
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
                tbody.innerHTML = content.split("~")[0].split(",").map(x => `<tr><td class='tableop'>${x}</td><td class='tablefn'>${transl(x.trim())}</td></tr>`).join("")
                break
        }
    }
}

function langswitch(ISOcode){
    for(x of Array.from(document.getElementsByClassName("newlevel"))) x.style.display = (ISOcode == "en" ? "block" : "none")
    listInitialize(codelang)
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
