languages = {
    en: {
        i: "i",
        yousg: "you",
        yousgfm: "you",
        youplinf: "you",
        he: "he",
        she: "she",
        wem: "we",
        wef: "we",
        youpl: "you",
        theym: "they",
        theyf: "they",
        in: "in",
        thesgm: "the",
        thesgf: "the",
        theplm: "the",
        theplf: "the",
        asgm: "a",
        asgf: "a",
        aplm: "some",
        aplf: "some",
        am: "am",
        is: "is",
        with: "with",
        park: "park",
        cat: "cat",
        white: "white",
        beer: "beer",
        man: "man",
        woman: "woman",
        howq: "how",
        whereq: "where",
        and: "and",
        or: "or",
        q: "",
        small: "small",
        tall: "tall",
        now: "now",
        city: "city",
        apple: "apple",
        car: "car",
        dog: "dog",
        bear: "bear",
        slow: "slow",
        fast: "fast",
        house: "house",
        red: "red",
        green: "green",
        blue: "blue",
        yellow: "yellow",
        orange: "orange",
        sauce: "sauce",
        banana: "banana",
        wine: "wine",
        color: "color",
        whatq: "what",
        favorite: "favorite",
        yes: "yes",
        no: "no",
        //languages
        en: "english",
        es: "spanish",
        pt: "portuguese",
        it: "italian",
        fr: "french",
        gl: "galician",
        ct: "catalan",
        yi: "yiddish",
        mk: "macedonian",
        sv: "swedish",
        eo: "esperanto",
        //text
        form: "form",
        vrb: "verb",
        of: "of",
        determined: "determined",
        by: "by",
        its: "its",
        subject: "subject",
        number: "number",
        gen: "gender",
        adj: "adjective",
        sustantive: "noun",
        feminine: "feminine",
        masculine: "masculine",
        neutral: "neutral",
        common: "common",
        plu: "plural",
        that: "that",
        signifies: "signifies",
        but: "but",
        only: "only",
        used: "used",
        location: "location",
        emotion: "emotion",
        para: "for",
        parato: "to",
        select: "select",
        level: "level",
        introduction: "introduction",
        food: "food",
        to: "to",
        translate: "translate",
        correct: "correct",
        incorrect: "incorrect",
        please: "please",
        write: "write",
        here: "here",
        submit: "submit",
        singular: "singular",
        enter: "enter",
        continue: "continue",
        present: "present",
        language: "language",
        click: "click",
        //
        beest: {
            infinitive: "to be",
            present: ["am", "are", "is", "are", "are", "are"]
        },
        beser: {
            infinitive: "to be",
            present: ["am", "are", "is", "are", "are", "are"]
        },
        have: {
            infinitive: "to have",
            present: ["have", "have", "has", "have", "have", "have"],
        },
        speak: {
            infinitive: "to speak",
            present: ["speak", "speak", "speaks", "speak", "speak", "speak"],
        },
        want: {
            infinitive: "to want",
            present: ["want", "want", "wants", "want", "want", "want"],
        },
        learn: {
            infinitive: "to learn",
        },
        eat: {
            infinitive: "to eat",
            present: ["eat", "eat", "eats", "eat", "eat", "eat"]
        },
        contractions: {"do not": "don't", "does not": "doesn't", "i am": "i'm", "you are": "you're", "we are": "we're", "he is": "he's", "she is": "she's", "it is": "it's", "they are": "they're", "i will": "i'll", "you will": "you'll", "he will": "he'll", "she will": "she'll", "it will": "it'll", "we will": "we'll", "they will": "they'll", "grey": "gray", "colour": "color"}, //incomplete
        plural: function(word){ 
            word = languages.en[word]
            if(word == "man") return "men"
            else if(word == "woman") return "women"
            else if(word.endsWith("x")) return word + "es"
            else return word + "s"
        },
        adjective: function(word, type, naun){
            return languages.en[word]
        },
        negativeVerb: function(verb, tense, person){return (verb == "be" ? languages.en.verb(verb, tense, person) + " not" : (person == 2 ? "does" : "do") + " not " + languages.en[verb].present[0])},
        noun: function(article, naun, adjective){
            noin = languages.en[naun]
            adjective = languages.en[adjective]
            d = (" " + (adjective ?? "") + " ").replace("  ", " ")
            if(article == "asg") return ("aeiou".includes(noin.charAt(0)) ? "an" : "a") + d + noin
            else if(article == "apl") return d + languages.en.plural(naun)
            else if(article == "thesg") return "the" + d + noin
            else return "the" + d + languages.en.plural(naun)
        },
        verb: function(verb, tense, person){
            if(verb.startsWith("be")) verb = "be"
            if(tense == "infinitive") return "to " + verb
            else{
                if(verb == "be"){
                    if(person == 0) return "am"
                    else if(person == 2) return "is"
                    else return "are"
                }
                else if(verb == "have" && person == 2) return "has"
                else if(verb.endsWith("o")) return verb + (person == 2 ? "es" : "")
                else return verb + (person == 2 ? "s" : "")
            }
        },
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.en.noun(o.split("=")[0], o.split("=")[1]) : languages.en[s]
            verb = languages.en.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.en.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["n"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        specialLetters: [],
        direction: "ltr",
    },
    es: {
        i: "yo",
        yousg: "tú",
        yousgfm: "usted",
        he: "él",
        she: "ella",
        wem: "nosotros",
        wef: "nosotras",
        youplinf: "vosotros",
        youpl: "ustedes",
        theym: "ellos",
        theyf: "ellas",
        in: "en",
        thesgm: "el",
        thesgf: "la",
        theplm: "los",
        theplf: "las",
        asgm: "un",
        asgf: "una",
        aplm: "unos",
        aplf: "unas",
        am: "soy",
        is: "es",
        with: "con",
        park: "parque",
        cat: "gato",
        beer: "cerveza",
        man: "hombre",
        woman: "mujer",
        white: "blanco",
        howq: "cómo",
        whereq: "dónde",
        and: "y",
        or: "o",
        q: "¿",
        small: "pequeño",
        tall: "alto",
        now: "ahora",
        city: "ciudad",
        apple: "manzana",
        car: "coche",
        dog: "perro",
        bear: "oso",
        slow: "lento",
        fast: "rápido",
        house: "casa",
        red: "rojo",
        green: "verde",
        blue: "azul",
        yellow: "amarillo",
        orange: "anaranjado",
        sauce: "salsa",
        banana: "plátano",
        wine: "vino",
        color: "color",
        whatq: "qué",
        favorite: "favorito",
        yes: "sí",
        no: "no",
        //languages
        en: "inglés",
        es: "español",
        pt: "portugués",
        it: "italiano",
        fr: "francés",
        gl: "galego",
        ct: "catalán",
        yi: "yidis",
        mk: "macedonio",
        sv: "sueco",
        eo: "esperanto",
        //text
        form: "forma",
        vrb: "verbo",
        of: "de",
        determined: "determinado",
        by: "por",
        its: "su",
        subject: "subjecto",
        number: "número",
        gen: "género",
        adj: "adjetivo",
        sustantive: "sustantivo",
        feminine: "feminino",
        masculine: "masculino",
        neutral: "neutral",
        common: "común",
        plu: "plural",
        that: "que",
        signifies: "significa",
        but: "pero",
        only: "solamente",
        used: "utilizado",
        location: "ubicación",
        emotion: "emoción",
        para: "para",
        parato: "para",
        select: "seleccione",
        level: "nivel",
        introduction: "introducción",
        food: "comida",
        to: "a",
        translate: "traduce",
        correct: "correcto",
        incorrect: "incorrecto",
        please: "por favor",
        write: "escriba",
        here: "aquí",
        submit: "entregar",
        singular: "singular",
        enter: "entrar",
        continue: "continuar",
        present: "presente",
        language: "lenguaje",
        click: "haz click",
        //
        beser: {
            infinitive: "ser",
            present: ["soy", "eres", "es", "somos", "sois", "son"],
        },
        beest: {
            infinitive: "estar",
            present: ["estoy", "estás", "está", "estamos", "estáis", "están"],
        },
        have: {
            infinitive: "tener",
            present: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
        },
        speak: {
            infinitive: "hablar",
            present: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
        },
        want: {
            infinitive: "querer",
            present: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
        },
        learn: {
            infinitive: "aprender",
        },
        eat: {
            infinitive: "comer",
            present: ["como", "comes", "come", "comemos", "coméis", "comen"]
        },
        contractions: {"de el": "del", "a el": "al"}, //complete
        plural: function(word){  //complete
            word = languages["es"][word]
            if(word.endsWith("s") || word.endsWith("x")) return word
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else if("ón".includes(word.slice(-1))) return word.replace("ó", "o") + "es"
            else if(word.endsWith("z")) return word.slice(0, -1) + "ces"
            else return word + "es"
        },
        adjective: function(word, type, naun){ //[basically] complete
            word = languages.es[word]
            noin = languages.es[naun]
            if(noin != undefined) type =  type + languages.es.gender(noin)
            if(type.endsWith("plf")) return (word.endsWith("o") ? word.slice(0, -1) + "as" : word + "es")
            else if(type.endsWith("sgf")) return word.endsWith("o") ? word.slice(0, -1) + "a" : word
            else if(type.endsWith("plm")) return (word.endsWith("o") ? word + "s" : word + "es")
            else return word
        },
        gender: function(naun){
            if("oel".includes(naun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, naun, adjective){
            noin = languages["es"][naun]
            if(adjective != undefined){
                return languages["es"][article + languages["es"].gender(noin)] + " " + (article.endsWith("pl") ? languages["es"].plural(naun) : noin) + " " + languages.es.adjective(adjective, article, naun)
            } 
            else return languages["es"][article + languages["es"].gender(noin)] + " " + (article.endsWith("pl") ? languages["es"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["es"][verb].infinitive
            else return languages["es"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `no ${languages.es.verb(verb, tense, person)}`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.es.noun(o.split("=")[0], o.split("=")[1]) : languages.es[s]
            verb = languages.es.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.es.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        specialLetters: ["á", "é", "í", "ñ", "ó", "ú", "ü", "¿"],
        direction: "ltr",
    },
    pt: { 
        i: "eu",
        yousg: "tu",
        yousgfm: "você",
        he: "ele",
        she: "ela",
        wem: "nós",
        wef: "nós",
        youplinf: "vós",
        youpl: "vocês",
        theym: "eles",
        theyf: "elas",
        in: "em",
        thesgm: "o",
        thesgf: "a",
        theplm: "os",
        theplf: "as",
        asgm: "um",
        asgf: "uma",
        aplm: "ums",
        aplf: "umas",
        am: "sou",
        is: "é",
        with: "com",
        park: "parque",
        cat: "gato",
        beer: "cerveja",
        man: "homem",
        woman: "mulher",
        white: "branco",
        howq: "como",
        whereq: "onde",
        and: "e",
        or: "ou",
        q: "",
        small: "pequeno",
        tall: "alto",
        now: "agora",
        city: "cidade",
        apple: "maçã",
        car: "carro",
        dog: "cachorro",
        bear: "urso",
        slow: "lento",
        fast: "rápido",
        house: "casa",
        red: "vermelho",
        green: "verde",
        blue: "azul",
        yellow: "amarelo",
        orange: "alaranjado",
        sauce: "molho",
        banana: "banana",
        wine: "vinho",
        color: "cor",
        whatq: "que",
        favorite: "favorito",
        yes: "sim",
        no: "não",
        //languages
        en: "inglês",
        es: "espanhol",
        pt: "português",
        it: "italiano",
        fr: "francês",
        gl: "galego",
        ct: "catalão",
        yi: "iídiche",
        mk: "macedónio",
        sv: "sueco",
        eo: "esperanto",
        //text
        form: "forma",
        vrb: "verbo",
        of: "de",
        determined: "determinado",
        by: "por",
        its: "o seu",
        subject: "assunto",
        number: "número",
        gen: "gênero",
        adj: "adjetivo",
        sustantive: "substantivo",
        feminine: "feminino",
        masculine: "masculino",
        neutral: "neutral",
        common: "comum",
        plu: "plural",
        that: "que",
        signifies: "significa",
        but: "mas",
        only: "só",
        used: "usado",
        location: "localização",
        emotion: "emoção",
        para: "para",
        parato: "para",
        select: "selecione",
        level: "nível",
        introduction: "introdução",
        food: "comida",
        to: "a",
        translate: "traduza",
        correct: "correcto",
        incorrect: "incorreta",
        please: "por favor",
        write: "escreva",
        here: "aqui",
        submit: "submeter",
        singular: "singular",
        enter: "entrar",
        continue: "continuar",
        present: "presente",
        language: "língua",
        click: "clique",
        //
        contractions: {"em o": "no","em a": "na","em os": "nos", "em as": "nas", "de o": "do", "de a": "da", "de os": "dos", "de as": "das"}, //incomplete
        beser: {
            infinitive: "ser",
            present: ["sou", "es", "é", "somos", "sois", "são"],
        },
        beest: {
            infinitive: "estar",
            present: ["estou", "estás", "está", "estamos", "estais", "estão"],
        },
        have: {
            infinitive: "ter",
            present: ["tenho", "estás", "tem", "temos", "estais", "têm"],
        },
        speak: {
            infinitive: "falar",
            present: ["falo", "falas", "fala", "falamos", "falais", "falam"],
        },
        want: {
            infinitive: "querer",
            present: ["quero", "queres", "quer", "queremos", "quereis", "querem"],
        },
        learn: {
            infinitive: "aprender",
        },
        eat: {
            infinitive: "comer",
            present: ["como", "comes", "come", "comemos", "comeis", "comem"]
        },
        plural: function(word){ 
            word = languages["pt"][word]
            if(word.endsWith("s")) return word
            else if(word.endsWith("al")) return word.slice(0, -1) + "is"
            else if(word.endsWith("m")) return word.slice(0, -1) + "ns"
            else if(word.endsWith("ão")) return word.slice(0, -2) + "ões"
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else return word + "es"
        },
        adjective: function(word, type, naun){ 
            word = languages["pt"][word]
            naun = languages["pt"][naun]
            if(naun != undefined) type = type + languages["pt"].gender(naun)
            if(type.endsWith("plf")){
                if(word.endsWith("o")) return word.slice(0, -1) + "as"
                else return word + "as"
            }
            else if(type.endsWith("sgf")){
                if(word.endsWith("o")) return word.slice(0, -1) + "a"
                else return word + "a"
            }
            else if(type.endsWith("plm")) return word + "s"
            else return word
        },
        gender: function(naun){
            if(naun.endsWith("dade")) return "f"
            else if("om".includes(naun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, naun, adjective){
            noin = languages["pt"][naun]
            if(adjective != undefined) return languages["pt"][article + languages["pt"].gender(noin)] + " " + (article.endsWith("pl") ? languages["pt"].plural(naun) : noin) + " " + languages["pt"].adjective(adjective, article, naun)
            else return languages["pt"][article + languages["pt"].gender(noin)] + " " + (article.endsWith("pl") ? languages["pt"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["pt"][verb].infinitive
            else return languages["pt"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `não ${languages.pt.verb(verb, tense, person)}`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.pt.noun(o.split("=")[0], o.split("=")[1]) : languages.pt[s]
            verb = languages.pt.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.pt.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        specialLetters: ["á", "â", "ã", "à", "ç", "é", "ê", "í", "ó", "ô", "õ", "ú"],
        direction: "ltr",
    },
    gl: {
        i: "eu",
        yousg: "ti",
        yousgfm: "ti",
        he: "el",
        she: "ela",
        wem: "nós",
        wef: "nós",
        youplinf: "vós",
        theym: "eles",
        theyf: "elas",
        in: "en",
        thesgm: "o",
        thesgf: "a",
        theplm: "os",
        theplf: "as",
        asgm: "un",
        asgf: "unha",
        aplm: "uns",
        aplf: "unhas",
        am: "son",
        is: "é",
        with: "con",
        park: "parque",
        cat: "gato",
        beer: "cervexa",
        man: "home",
        woman: "muller",
        white: "branco",
        howq: "como",
        whereq: "onde",
        and: "e",
        or: "ou",
        q: "¿",
        small: "pequeno",
        tall: "alto",
        now: "agora",
        city: "cidade",
        apple: "mazá",
        car: "coche",
        dog: "can",
        bear: "oso",
        slow: "lento",
        fast: "rápido",
        house: "casa",
        red: "vermello",
        green: "verde",
        blue: "azul",
        yellow: "amarelo",
        orange: "alaranxado",
        sauce: "salsa",
        banana: "plátano",
        wine: "viño",
        color: "cor",
        whatq: "que",
        favorite: "favorito",
        yes: "si",
        no: "non",
        //languages
        en: "inglés",
        es: "español",
        pt: "portugués",
        it: "italiano",
        fr: "francés",
        gl: "galego",
        ct: "catalán",
        yi: "yiddish",
        mk: "macedonio",
        sv: "sueco",
        eo: "esperanto",
        //text
        form: "forma",
        vrb: "verbo",
        of: "de",
        determined: "determinado",
        by: "por",
        its: "o seu",
        subject: "suxeito",
        number: "número",
        gen: "xénero",
        adj: "adxectivo",
        sustantive: "substantivo",
        feminine: "feminino",
        masculine: "masculino",
        neutral: "neutral",
        common: "común",
        plu: "plural",
        that: "que",
        signifies: "significa",
        but: "mas",
        only: "só",
        used: "usado",
        location: "localización",
        emotion: "emoción",
        para: "para",
        parato: "para",
        select: "seleccione",
        level: "nivel",
        introduction: "introdución",
        food: "comida",
        to: "a",
        translate: "traduce",
        correct: "correcto",
        incorrect: "incorrecto",
        please: "por favor",
        write: "escribe",
        here: "aquí",
        submit: "enviar",
        singular: "singular",
        enter: "entrar",
        continue: "continuar",
        present: "presente",
        language: "linguaxe",
        click: "fai clic",
        //verbs/contractions
        contractions: {"a o": "ao","a os": "aos","a a": "á", "a as": "ás", "de o": "do", "de a": "da", "de os": "dos", "de as": "das", "en o": "no", "en a": "na", "en os": "nos", "en as": "nas", "de un": "dun", "de unha": "dunha", "de unhas": "dunhas", "de uns": "duns", "por o": "polo", "por a": "pola", "por as": "polas", "por os": "polos"}, //incomplete
        beser: {
            infinitive: "ser",
            present: ["son", "es", "é", "somos", "sodes", "son"],
        },
        beest: {
            infinitive: "estar",
            present: ["estou", "estás", "está", "estamos", "estades", "están"],
        },
        have: {
            infinitive: "ter",
            present: ["tezo", "teces", "tece", "tecemos", "tecedes", "tecen"],
        },
        speak: {
            infinitive: "falar",
            present: ["falo", "falas", "fala", "falamos", "falades", "falan"],
        },
        want: {
            infinitive: "querer",
            present: ["quero", "queres", "quere", "queremos", "queredes", "queren"],
        },
        learn: {
            infinitive: "aprender",
        },
        eat: {
            infinitive: "comer",
            present: ["como", "comes", "come", "comemos", "comedes", "comen"]
        },
        plural: function(word){ 
            word = languages["gl"][word]
            if(word.endsWith("s")) return word
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else if(word.endsWith("al")) return word.slice(0, -1) + "is"
            else return word + "es"
        },
        adjective: function(word, type, naun){
            word = languages["gl"][word]
            naun = languages["gl"][naun]
            if(naun != undefined) type = type + languages["gl"].gender(naun)
            if(type.endsWith("plf")){
                if(word.endsWith("o")) return word.slice(0, -1) + "as"
                else return word + "as"
            }
            else if(type.endsWith("sgf")){
                if(word.endsWith("o")) return word.slice(0, -1) + "a"
                else return word + "a"
            }
            else if(type.endsWith("plm")) return word + "s"
            else return word
        },
        negativeVerb: function(verb, tense, person){return `non ${languages.gl.verb(verb, tense, person)}`},
        gender: function(naun){
            if(naun.endsWith("dade")) return "f"
            else if("oen".includes(naun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, naun, adjective){
            noin = languages["gl"][naun]
            if(adjective != undefined) return languages["gl"][article + languages["gl"].gender(noin)] + " " + (article.endsWith("pl") ? languages["gl"].plural(naun) : noin) + " " + languages["gl"].adjective(adjective, article)
            else return languages["gl"][article + languages["gl"].gender(noin)] + " " + (article.endsWith("pl") ? languages["gl"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["gl"][verb].infinitive
            else return languages["gl"][verb][tense][person]
        },
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.gl.noun(o.split("=")[0], o.split("=")[1]) : languages.gl[s]
            verb = languages.gl.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.gl.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        specialLetters: ["á", "é", "í", "ñ", "ó", "ú", "ü", "¿"],
        direction: "ltr",
    },
    it: {
        i: "io",
        yousg: "tu",
        yousgfm: "tu",
        he: "lui",
        she: "lei",
        wem: "noi",
        wef: "noi",
        youplinf: "voi",
        theym: "loro",
        theyf: "loro",
        in: "in",
        thesgm: "il",
        thesgf: "la",
        theplm: "i", //
        theplf: "le",
        asgm: "un",
        asgf: "una",
        aplm: "",
        aplf: "",
        am: "sono",
        is: "è",
        with: "con",
        park: "parco",
        cat: "gatto",
        beer: "birra",
        man: "uomo",
        woman: "donna",
        white: "bianco",
        howq: "come",
        whereq: "dove",
        and: "e",
        or: "o",
        q: "",
        small: "piccolo",
        tall: "alto",
        now: "adesso",
        city: "città",
        car: "macchina",
        apple: "mela",
        dog: "cane",
        bear: "orso",
        slow: "lento",
        fast: "veloce",
        house: "casa",
        red: "rosso",
        green: "verde",
        blue: "blu",
        yellow: "giallo",
        orange: "arancione",
        sauce: "salsa",
        banana: "banana",
        wine: "vino",
        color: "colore",
        whatq: "che",
        favorite: "preferito",
        yes: "sì",
        no: "no",
        //languages
        en: "inglese",
        es: "spagnolo",
        pt: "portoghese",
        it: "italiano",
        fr: "francese",
        gl: "galiziano",
        ct: "catalano",
        yi: "yiddish",
        mk: "macedone",
        sv: "svedese",
        eo: "esperanto",
        //text
        form: "forma",
        vrb: "verbo",
        of: "di",
        determined: "determinato",
        by: "per",
        its: "il suo",
        subject: "soggetto",
        number: "numero",
        gen: "genere",
        adj: "aggettivo",
        sustantive: "sostantivo",
        feminine: "femminile",
        masculine: "maschile",
        neutral: "neutrale",
        common: "comune",
        plu: "plurale",
        that: "che",
        signifies: "significa",
        but: "ma",
        only: "soltanto",
        used: "usato",
        location: "posizione",
        emotion: "emozione",
        para: "per",
        parato: "per",
        select: "seleziona",
        level: "livello",
        introduction: "introduzione",
        food: "cibo",
        to: "a",
        translate: "traduci",
        correct: "correcto",
        incorrect: "errato",
        please: "per favore",
        write: "scrivi",
        here: "qui",
        submit: "inviare",
        singular: "singolare",
        enter: "entrare",
        continue: "continuare",
        present: "presente",
        language: "lingua",
        click: "clicca",
        //
        beser: {
            infinitive: "essere",
            present: ["sono", "sei", "è", "siamo", "siete", "sono"],
        },
        beest: {
            infinitive: "stare",
            present: ["sto", "stai", "sta", "stiamo", "state", "stanno"],
        },
        have: {
            infinitive: "avere",
            present: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
        },
        speak: {
            infinitive: "parlare",
            present: ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"],
        },
        want: {
            infinitive: "volere",
            present: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
        },
        learn: {
            infinitive: "imparare",
        },
        eat: {
            infinitive: "mangiare",
            present: ["mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"]
        },
        contractions: {"il u": "l'u"}, //incomplete
        plural: function(word){ 
            word = languages["it"][word]
            if(word.endsWith("o")) return word.slice(0, -1) + "i"
            else if(word == "uomo") return "uomini"
            else return word.slice(0, -1) + "e"
        },
        adjective: function(word, type, naun){ 
            word = languages["it"][word]
            naun = languages["it"][naun]
            if(naun != undefined) type = type + languages["it"].gender(naun)
            if(type.endsWith("plf")){
                if(word.endsWith("e")) return word.slice(0, -1) + "i"
                else return word.slice(0, -1) + "e"
            }
            else if(type.endsWith("sgf")){
                if(word.endsWith("e")) return word
                else return word.slice(0, -1) + "a"
            }
            else if(type.endsWith("plm")){
                if(word.endsWith("o") || word.endsWith("e")) return word.slice(0, -1) + "i"
                else return word + "i"
            }
            else return word
        },
        gender: function(naun){
            if("o" == naun.slice(-1)) return "m"
            else return "f"
        },
        noun: function(article, naun, adjective){
            noin = languages["it"][naun]
            if(adjective != undefined) return languages["it"][article + languages["it"].gender(noin)] + " " + (article.endsWith("pl") ? languages["it"].plural(naun) : noin) + " " + languages["it"].adjective(adjective, article)
            else return languages["it"][article + languages["it"].gender(noin)] + " " + (article.endsWith("pl") ? languages["it"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages.it[verb].infinitive
            else return languages.it[verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `non ${languages.it.verb(verb, tense, person)}`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.it.noun(o.split("=")[0], o.split("=")[1]) : languages.it[s]
            verb = languages.it.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.it.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
        specialLetters: ["à","é","ì","ó","ò","ù"],
    },
    fr: {
        i: "je",
        yousg: "tu",
        yousgfm: "tu",
        he: "il",
        she: "elle",
        wem: "nous",
        wef: "nous",
        youplinf: "vous",
        theym: "ils",
        theyf: "elles",
        in: "en",
        thesgm: "le",
        thesgf: "la",
        theplm: "les", //
        theplf: "les",
        asgm: "un",
        asgf: "une",
        aplm: "des",
        aplf: "des",
        am: "suis",
        is: "est",
        with: "avec",
        park: "parc",
        cat: "chat",
        beer: "bière",
        man: "homme",
        woman: "femme",
        white: "blanc",
        howq: "comment",
        whereq: "où",
        and: "et",
        or: "ou",
        q: "",
        small: "petit",
        tall: "haut",
        now: "maintenant",
        city: "ville",
        car: "voiture",
        apple: "pomme",
        dog: "chien",
        bear: "ours",
        slow: "lent",
        fast: "rapide",
        house: "maison",
        red: "rouge",
        green: "vert",
        blue: "bleu",
        yellow: "jaune",
        orange: "orange",
        sauce: "sauce",
        banana: "banane",
        wine: "vin",
        color: "couleur",
        whatq: "quoi",
        favorite: "favori",
        yes: "oui",
        no: "non",
        //languages
        en: "anglais",
        es: "espanol",
        pt: "portugais",
        it: "italien",
        fr: "français",
        gl: "galicien",
        ct: "catalan",
        yi: "yidich",
        mk: "macedónien",
        sv: "suédois",
        eo: "esperanto",
        //text
        form: "forme",
        vrb: "verbe",
        of: "de",
        determined: "déterminé",
        by: "par",
        its: "son",
        subject: "sujet",
        number: "numéro",
        gen: "genre",
        adj: "adjectif",
        sustantive: "nom",
        feminine: "féminin",
        masculine: "masculin",
        neutral: "neutre",
        common: "commun",
        plu: "pluriel",
        that: "que",
        signifies: "signifie",
        but: "mais",
        only: "seul",
        used: "utilisé",
        location: "emplacement",
        emotion: "émocion",
        para: "pour",
        parato: "pour",
        select: "sélectionnez",
        level: "niveau",
        introduction: "introduction",
        food: "nourriture",
        to: "à",
        translate: "traduis",
        correct: "correct",
        incorrect: "incorrect",
        please: "s'il te plaît",
        write: "ecrire",
        here: "ici",
        submit: "envoyer",
        singular: "singulier",
        enter: "entrer",
        continue: "continuer",
        present: "instant",
        language: "langage",
        click: "cliquez",
        //
        beser: {
            infinitive: "être",
            present: ["suis", "es", "est", "sommes", "êtes", "sont"],
        },
        beest: {
            infinitive: "être",
            present: ["suis", "es", "est", "sommes", "êtes", "sont"],
        },
        have: {
            infinitive: "avoir",
            present: ["ai", "as", "a", "avons", "avez", "ont"],
        },
        speak: {
            infinitive: "parler",
            present: ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
        },
        want: {
            infinitive: "vouloir",
            present: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
        },
        learn: {
            infinitive: "apprendre",
        },
        eat: {
            infinitive: "manger",
            present: ["mange", "manges", "mange", "mangeons", "mangez", "mangent"]
        },
        contractions: {"je a": "j'a", "le h": "l'h", "à le": "au", "de un": "d'un"}, //incomplete
        plural: function(word){ 
            word = languages.fr[word]
            if(word.endsWith("eu")) return word + "x"
            else if("sxz".includes(word.slice(-1))) return word
            else return word + "s"
        },
        adjective: function(word, type, naun){
            console.log(word, type, naun)
            word = languages["fr"][word]
            naun = languages["fr"][naun]
            type = type.replace("asg", "sg").replace("thesg", "sg").replace("apl", "pl").replace("thepl", "pl")
            if(naun != undefined) type = type + languages["fr"].gender(naun)
            if(word.endsWith("e")) return word
            else return word + {"plf": "es", "sgf": "e", "plm": "s", "sm": ""}[type]
        },
        gender: function(naun){
            if(["homme", "verbe"].includes(naun)) return "m"
            else if(naun.endsWith("e") || naun.endsWith("n")) return "f"
            else return "m"
        },
        noun: function(article, naun, adjective){
            noin = languages.fr[naun]
            if(adjective != undefined) return languages.fr[article + languages.fr.gender(noin)] + " " + (article.endsWith("pl") ? languages["fr"].plural(naun) : noin) + " " + languages["fr"].adjective(adjective, article, naun)
            else return languages.fr[article + languages.fr.gender(noin)] + " " + (article.endsWith("pl") ? languages["fr"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            return tense == "infinitive" ? languages.fr[verb].infinitive : languages.fr[verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `ne ${languages.fr.verb(verb, tense, person)} pas`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.fr.noun(o.split("=")[0], o.split("=")[1]) : languages.fr[s]
            verb = languages.fr.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.fr.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
        specialLetters: ["à","â","ç","é","è","ê","ë","î","ï","œ","ö","ù","ü"],
    },
    ct: {
        i: "jo",
        yousg: "tu",
        yousgfm: "vostè",
        he: "ell",
        she: "ella",
        wem: "nosaltres",
        wef: "nosaltres",
        youplinf: "vostè",
        theym: "ells",
        theyf: "elles",
        in: "en",
        thesgm: "el",
        thesgf: "la",
        theplm: "els", //
        theplf: "les",
        asgm: "un",
        asgf: "una",
        aplm: "uns",
        aplf: "unes",
        am: "soc",
        is: "és",
        with: "amb",
        park: "parc",
        cat: "gat",
        beer: "cervesa",
        man: "home",
        woman: "dona",
        white: "blanc",
        howq: "com",
        whereq: "on",
        and: "i",
        or: "o",
        q: "¿",
        small: "petit",
        tall: "alt",
        city: "ciutat",
        now: "ara",
        car: "cotxe",
        apple: "poma",
        dog: "gos",
        bear: "ós",
        slow: "lent",
        fast: "ràpid",
        house: "casa",
        red: "vermell",
        green: "verd",
        blue: "blau",
        yellow: "groc",
        orange: "ataronjat",
        sauce: "salsa",
        banana: "banana",
        wine: "vi",
        color: "color",
        whatq: "què",
        favorite: "favorit",
        yes: "sí",
        no: "no",
        //languages
        en: "anglès",
        es: "espanyol",
        pt: "portuguès",
        it: "italià",
        fr: "francès",
        gl: "gallec",
        ct: "català",
        yi: "ídix",
        mk: "macedònic",
        sv: "suec",
        eo: "esperanto",
        //text
        form: "forma",
        vrb: "verb",
        of: "de",
        determined: "determinat",
        by: "pel",
        its: "seu",
        subject: "subjecte",
        number: "número",
        gen: "gènere",
        adj: "adjectiu",
        sustantive: "substantiu",
        feminine: "feminí",
        masculine: "masculí",
        neutral: "neutre",
        common: "comú",
        plu: "plural",
        that: "que",
        signifies: "significa",
        but: "però",
        only: "només",
        used: "utilitzat",
        location: "ubicació",
        emotion: "emoció",
        para: "per",
        parato: "per",
        select: "seleccioneu",
        level: "nivell",
        introduction: "introducció",
        food: "menjar",
        to: "a",
        translate: "tradueix",
        correct: "correcte",
        incorrect: "incorrecte",
        please: "si us plau",
        write: "escriu",
        here: "aquí",
        submit: "enviar",
        singular: "singular",
        enter: "entrar",
        continue: "continuar",
        present: "present",
        language: "llengüe",
        click: "feu clic",
        //
        beser: {
            infinitive: "ser",
            present: ["soc", "ets", "és", "som", "sou", "són"],
        },
        beest: {
            infinitive: "estar",
            present: ["estic", "estàs", "està", "estem", "esteu", "estan"],
        },
        have: {
            infinitive: "tiner",
            present: ["tinc", "tens", "té", "tenim", "teniu", "tenen"],
        },
        speak: {
            infinitive: "parlar",
            present: ["parlo", "parles", "parla", "parlem", "parleu", "parlen"],
        },
        want: {
            infinitive: "voler",
            present: ["vull", "vols", "vol", "volem", "voleu", "volen"],
        },
        learn: {
            infinitive: "aprendre",
        },
        eat: {
            infinitive: "menjar",
            present: ["menjo", "menges", "menja", "mengem", "mengeu", "mengen"]
        },
        //
        contractions: {"a el": "al","de el": "del","per el": "pel", "el h": "l'h"}, //incomplete
        //
        plural: function(word){
            word = languages.ct[word]
            if("ó" == word.slice(-1)) return word.slice(0,-1) + "ons"
            else return `${word}s`
        },
        adjective: function(word, type, naun){ 
            word = languages["ct"][word]
            naun = languages["ct"][naun]
            if(naun != undefined) type = type + languages["ct"].gender(naun)
            if(type.endsWith("plf")) return word + "es"
            else if(type.endsWith("sgf")) return word + "a"
            else if(type.endsWith("plm")) return word + "s"
            else return word
        },
        gender: function(naun){
            if(naun.endsWith("a") || naun.endsWith("tat")) return "f"
            else return "m"
        },
        noun: function(article, naun, adjective){
            noin = languages["ct"][naun]
            if(adjective != undefined) return languages["ct"][article + languages["ct"].gender(noin)] + " " + (article.endsWith("pl") ? languages["ct"].plural(naun) : noin) + " " + languages["ct"].adjective(adjective, article)
            else return languages["ct"][article + languages["ct"].gender(noin)] + " " + (article.endsWith("pl") ? languages["ct"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["ct"][verb].infinitive
            else return languages["ct"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `no ${languages.ct.verb(verb, tense, person)}`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.ct.noun(o.split("=")[0], o.split("=")[1]) : languages.ct[s]
            verb = languages.ct.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.ct.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
        specialLetters: ["à","ç","é","è","í","ï","ó","ò","ú","ü","¿"],
    },
    yi: {
        i: "איך",
        yousg: "דו",
        yousgfm: "איר",
        he: "ער",
        she: "זי",
        wem: "מיר",
        wef: "מיר",
        youplinf: "איר",
        theym: "זיי",
        theyf: "זיי",
        in: "אין",
        thesgm: "דער",
        thesgf: "די",
        thesgn: "דאָס",
        theplm: "די", //
        theplf: "די",
        asgm: "אַ",
        asgf: "אַ",
        aplm: "",
        aplf: "",
        am: "בין",
        is: "איז",
        with: "מיט",
        park: "פאַרק",
        cat: "קאַץ",
        beer: "ביר",
        man: "מאַן",
        woman: "פֿרוי",
        white: "וײַס",
        howq: "ווי",
        whereq: "וואו",
        and: "אַון",
        or: "אָדער",
        q: "",
        small: "קליין",
        tall: "הויך",
        city: "שטאָט",
        now: "איצט",
        car: "מאשין",
        apple: "עפל",
        dog: "הונט",
        bear: "בער",
        slow: "פאַמעלעך",
        fast: "שנעל",
        house: "הויז",
        red: "רויט",
        green: "גרין",
        blue: "בלוי",
        yellow: "געל",
        orange: "מאַראַנץ",
        sauce: "סאָוס",
        banana: "באַנאַנע",
        wine: "וויין",
        color: "קוליר",
        whatq: "וואס",
        favorite: "באילבט",
        yes: "יאָ",
        no: "ניין",
        //languages
        en: "ענגליש",
        es: "שפאַניש",
        pt: "פורטוגעזיש",
        it: "יטאַליעניש",
        fr: "פֿראַנצויזיש",
        gl: "גאַליציאניש",
        ct: "קאַטאַלאַניש",
        yi: "ייִדיש",
        mk: "מאַקעדוניש",
        sv: "שוועדיש",
        eo: "עספעראַנטאָ",
        //text
        form: "פֿאָרעם",
        vrb: "ווערב",
        of: "פֿון",
        determined: "באַשלאַן",
        by: "דורך",
        its: "זיין",
        subject: "טעמע",
        number: "נומער",
        gen: "מין",
        adj: "אדיעקתיפֿ",
        sustantive: "סובסטאַנטיוו",
        feminine: "ווײַבלעך",
        masculine: "מענלעך",
        neutral: "נייטראַל",
        common: "פּראָסט",
        plu: "מערצאָל",
        that: "אַז",
        signifies: "מיתל",
        but: "אָבער",
        only: "בלויז",
        used: "געניצט",
        location: "אָרט",
        emotion: "עמוציע",
        para: "פֿאַר",
        parato: "צו",
        select: "סעלעקטירן",
        level: "מאַדרייגע",
        introduction: "הקדמה",
        food: "עסנוואַרג",
        to: "צו",
        translate: "איבערזעצן",
        correct: "ריכתיק",
        incorrect: "פֿאלש",
        please: "ביטע",
        write: "שרייב",
        here: "דאָ",
        submit: "פֿורלייגן",
        singular: "מעשונעדיק",
        enter: "ארײַן",
        continue: "פאָרזעצן",
        present: "קראַנט",
        language: "שפראַך",
        click: "גיט",
        //
        beser: {
            infinitive: "זײַן",
            present: ["בין", "ביסט", "איז", "זענען", "זענען", "זענען"],
        },
        beest: {
            infinitive: "זײַן",
            present: ["בין", "ביסט", "איז", "זענען", "זענען", "זענען"],
        },
        have: {
            infinitive: "האָבן",
            present: ["האָב", "האָטס", "האָט", "האָבן", "האָבן", "האָבן"],
        },
        speak: {
            infinitive: "רעדן",
            present: ["רעד", "רעדסט", "רעדט", "רעדן", "רעדן", "רעדן"],
        },
        want: {
            infinitive: "וועלן",
            present: ["וויל", "ווילסט", "וויל", "ווילן", "ווילן", "ווילן"],
        },
        learn: {
            infinitive: "לערנען",
        },
        eat: {
            infinitive: "עסן",
            present: ["עס", "עסט", "עסט", "עסן", "עסן", "עסן"]
        },
        //
        contractions: {}, //incomplete?
        //
        plural: function(word){
            word = languages.yi[word]
            if("אָעואַ".includes(word.slice(-1))) return `${word}ס`
            else if(word == "מאַן") return "מענער‎"
            else if(word.endsWith("י")) return `${word}ען`
            else if(word.endsWith("ך")) return word.slice(0, -1) + "כן"
            else return `${word}ן`
        },
        adjective: function(word, type, naun){ 
            return languages.yi[word]
        },
        gender: function(naun){
            yiddishFemale = ["ווערב", "פֿרוי"]
            yiddishNeutral = ["הויז"]
            if(yiddishFemale.includes(naun)) return "f"
            else if(yiddishNeutral.includes(naun)) return "n"
            else return "m"
        },
        noun: function(article, naun, adjective){
            noin = languages["yi"][naun]
            if(adjective != undefined) return languages["yi"][article + languages["yi"].gender(noin)] + " " + languages["yi"].adjective(adjective, article) + " " + (article.endsWith("pl") ? languages["yi"].plural(naun) : noin)
            else return languages["yi"][article + languages["yi"].gender(noin)] + " " + (article.endsWith("pl") ? languages["yi"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["yi"][verb].infinitive
            else return languages["yi"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `${languages.yi.verb(verb, tense, person)} נישט`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.yi.noun(o.split("=")[0], o.split("=")[1]) : languages.yi[s]
            verb = languages.yi.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.yi.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["f", "m", "n"],
        definitiveSuffixes: false,
        writingSystem: "hebrew",
        direction: "rtl",
        specialLetters: [], //make a new keyboard lol
    },
    sv: {
        i: "jag",
        yousg: "du",
        yousgfm: "ni",
        he: "han",
        she: "hon",
        wem: "vi",
        wef: "vi",
        youplinf: "ni",
        theym: "de",
        theyf: "de",
        in: "i",
        thesgc: "det",
        thesgn: "den",
        theplm: "de", //
        theplf: "de",
        asgc: "en",
        asgn: "ett",
        aplm: "",
        aplf: "",
        am: "är",
        is: "är",
        with: "med",
        park: "park",
        cat: "katt",
        beer: "öl",
        man: "man",
        woman: "kvinna",
        white: "vit",
        howq: "hur",
        whereq: "var",
        and: "och",
        or: "eller",
        q: "",
        small: "små",
        tall: "lång",
        city: "stad",
        now: "nu",
        car: "bil",
        apple: "äpple", //ett
        dog: "hund",
        bear: "björn",
        slow: "långsam",
        fast: "snabb",
        house: "hus", //ett
        red: "röd",
        green: "grön",
        blue: "blå",
        yellow: "gul",
        orange: "orange",
        sauce: "sås",
        banana: "banan",
        wine: "vin",
        color: "färg",
        whatq: "vad",
        favorite: "favorit",
        yes: "ja",
        no: "nej",
        //languages
        en: "engelska",
        es: "spanska",
        pt: "portugisiska",
        it: "italienska",
        fr: "franska",
        gl: "galiciska",
        ct: "katalanska",
        yi: "jiddisch",
        mk: "makedonska",
        sv: "svenska",
        eo: "esperanto",
        //text
        form: "form",
        vrb: "verb", //ett
        of: "av",
        determined: "bestäms",
        by: "av",
        its: "dess",
        subject: "ämne", //ett
        number: "nummer", //ett
        gen: "kön", //ett
        adj: "adjektiv", //ett
        sustantive: "substantiv", //ett
        feminine: "feminin",
        masculine: "maskulin",
        neutral: "neutral",
        common: "utrum",
        plu: "plural",
        that: "som",
        signifies: "betyder",
        but: "men",
        only: "endast",
        used: "används",
        location: "plats",
        emotion: "känslor",
        para: "för",
        parato: "för",
        select: "välj",
        level: "nivå",
        introduction: "introduktion",
        food: "mat",
        to: "till",
        translate: "översätta",
        correct: "korrekt",
        incorrect: "inkorrekt",
        please: "snälla",
        write: "skriv",
        here: "här",
        submit: "skicka in",
        singular: "singuljär",
        continue: "att fortsätta",
        present: "presens",
        language: "språk", //ett
        click: "klicka",
        //
        beser: {
            infinitive: "att vara",
            present: ["är", "är", "är", "är", "är", "är"],
        },
        beest: {
            infinitive: "att vara",
            present: ["är", "är", "är", "är", "är", "är"],
        },
        have: {
            infinitive: "att ha",
            present: ["har", "har", "har", "har", "har", "har"],
        },
        speak: {
            infinitive: "att tala",
            present: ["talar", "talar", "talar", "talar", "talar", "talar"],
        },
        want: {
            infinitive: "att vilja",
            present: ["vill", "vill", "vill", "vill", "vill", "vill"],
        },
        learn: {
            infinitive: "att lära",
        },
        eat: {
            infinitive: "äta",
            present: ["äter", "äter", "äter", "äter", "äter", "äter"]
        },
        //
        contractions: {}, //incomplete?
        //
        plural: function(word){ //done
            ge = languages.sv.gender(word)
            word = languages.sv[word]
            if(ge == "c" && word.endsWith("a")) return word.slice(0, -1) + "or"
            else if(ge == "c" && "eiou".includes(word.slice(0,-1))) return word.slice(0,1) + "r"
            else if(ge == "c") return word + "ar"
            else if(ge == "n" && "aeiou".includes(word.slice(0,-1))) return word + "t"
            else return word 
        },
        adjective: function(word, type, naun){ 
            return languages.sv[word]
        },
        gender: function(naun){ //done
            return ["äpple", "hus", "språk", "verb", "nummer", "ämne", "kön", "substantiv", "adjektiv"].includes(languages.sv[naun]) ? "n" : "c"
        },
        noun: function(article, naun, adjective){ //done
            noin = languages["sv"][naun]
            g = languages.sv.gender(naun)
            c = (article.endsWith("pl") ? languages["sv"].plural(naun) : noin)
            if(adjective != undefined) c = `${languages.sv[adjective]} ${c}`
            if(article.startsWith("the")){
                if(g == "c"){
                    if(article.endsWith("pl")) c += "na"
                    else c += "aeiou".includes(noin.slice(-1)) ? "n" : "en"
                }
                else{ //neutral
                    if(article.endsWith("pl")) c += "aeiou".includes(noin.slice(-1)) ? "a" : "en"
                    else c += "aeiou".includes(noin.slice(-1)) ? "t" : "et"
                }
            }
            else if(article.startsWith("a") && article.endsWith("sg")) c = (g == "c" ? "en " : "ett ") + c
            return c
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["sv"][verb].infinitive
            else return languages["sv"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `${languages.sv.verb(verb, tense, person)} inte`},
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.sv.noun(o.split("=")[0], o.split("=")[1]) : languages.sv[s]
            verb = languages.sv.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.sv.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}`
        },
        //settings
        genderList: ["c", "n"],
        definitiveSuffixes: true,
        writingSystem: "latin",
        direction: "ltr",
        specialLetters: ["å","ä","ö"],
    },
    eo: {
        i: "mi",
        yousg: "vi",
        yousgfm: "vi",
        he: "li",
        she: "ŝi",
        wem: "ni",
        wef: "ni",
        youplinf: "vi",
        theym: "ili",
        theyf: "ili",
        in: "en",
        thesgc: "la",
        thesgn: "la",
        theplm: "la", //
        theplf: "la",
        asgc: "",
        asgn: "",
        aplm: "",
        aplf: "",
        am: "estas",
        is: "estas",
        with: "kun",
        park: "parko",
        cat: "kato",
        beer: "biero",
        man: "viro",
        woman: "virino",
        white: "blanka",
        howq: "kiel",
        whereq: "kie",
        and: "kaj",
        or: "aŭ",
        q: "",
        small: "malgranda",
        tall: "alta",
        city: "urbo",
        now: "nun",
        car: "aŭto",
        apple: "pomo",
        dog: "hundo",
        bear: "urso",
        slow: "malrapida",
        fast: "rapida",
        house: "domo",
        red: "ruĝa",
        green: "verda",
        blue: "blua",
        yellow: "flava",
        orange: "oranĝa",
        sauce: "saŭco",
        banana: "banano",
        wine: "vino",
        color: "koloro",
        whatq: "vad",
        favorite: "plej ŝatata",
        yes: "jes",
        no: "ne",
        //languages
        en: "angla",
        es: "hispana",
        pt: "portugala",
        it: "itala",
        fr: "franca",
        gl: "galega",
        ct: "kataluna",
        yi: "jida",
        mk: "makedona",
        sv: "sveda",
        eo: "esperanto",
        //text
        form: "formo",
        vrb: "verbo",
        of: "de",
        determined: "determinita",
        by: "de",
        its: "ĝia",
        subject: "subjekto",
        number: "nombro",
        gen: "sekso",
        adj: "adjektivo",
        sustantive: "substantivo",
        feminine: "ina",
        masculine: "vira",
        neutral: "neŭtrala",
        common: "ofta",
        plu: "pluralo",
        that: "ke",
        signifies: "signifas",
        but: "sed",
        only: "nur",
        used: "uzata",
        location: "loko",
        emotion: "emocio",
        para: "por",
        parato: "por",
        select: "elektu",
        level: "nivelo",
        introduction: "enkonduko",
        food: "manĝaĵo",
        to: "al",
        translate: "traduki",
        correct: "korekta",
        incorrect: "nekorekta",
        please: "bonvolu",
        write: "skribi",
        here: "ĉi tie",
        submit: "submetiĝi",
        singular: "unuopa",
        continue: "daŭrigi",
        present: "prezenta",
        language: "lingvo",
        click: "alklaku",
        //
        beser: {
            infinitive: "esti",
            present: ["estas", "estas", "estas", "estas", "estas", "estas"],
        },
        beest: {
            infinitive: "esti",
            present: ["estas", "estas", "estas", "estas", "estas", "estas"],
        },
        have: {
            infinitive: "havi",
            present: ["havas", "havas", "havas", "havas", "havas", "havas"],
        },
        speak: {
            infinitive: "paroli",
            present: ["parolas", "parolas", "parolas", "parolas", "parolas", "parolas"],
        },
        want: {
            infinitive: "voli",
            present: ["volas", "volas", "volas", "volas", "volas", "volas"],
        },
        learn: {
            infinitive: "lerni",
        },
        eat: {
            infinitive: "manĝi",
            present: ["manĝas", "manĝas", "manĝas", "manĝas", "manĝas", "manĝas"]
        },
        //
        contractions: {}, //incomplete?
        //
        plural: function(word){ //done
            word = languages.eo[word]
            return word + "j"
        },
        adjective: function(word, type, naun){ 
            return type == "p" ? (languages.eo[word] + "j") : languages.eo[word]
        },
        gender: function(naun){ //done
            return "n"
        },
        noun: function(article, naun, adjective, gCase){ //done
            c = languages.eo[naun]
            if(adjective != undefined) c = `${languages.eo[adjective]}${article.endsWith("pl") ? "j" : ""}${gCase == "accusative" ? "n" : ""} ${c}${article.endsWith("pl") ? "j" : ""}`
            else c = `${c}${article.endsWith("pl") ? "j" : ""}`
            if(article.startsWith("the")) c = `la ${c}`
            return (gCase != undefined && gCase == "accusative") ? c + "n" : c
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages.eo[verb].infinitive
            else return languages.eo[verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `ne ${languages.eo.verb(verb, tense, person)}`},
        //settings
        svo: function(s, v, o){
            subject = s.includes("=") ? languages.eo.noun(o.split("=")[0], o.split("=")[1]) : languages.eo[s]
            verb = languages.eo.verb(v.split("=")[0], v.split("=")[1], pronounToPerson(s))
            object = languages.eo.noun(o.split("=")[0], o.split("=")[1])
            return `${subject} ${verb} ${object}${verb.startsWith("be") ? "" : "n"}`
        },
        genderList: ["n"],
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
        specialLetters: ["ĉ","ĝ","ĥ","ĵ","ŝ","ŭ"],
    },
    mk: {
        i: "јас",
        yousg: "ти",
        yousgfm: "вие",
        he: "тој",
        she: "таа",
        wem: "ние",
        wef: "ние",
        youplinf: "вие",
        theym: "тие",
        theyf: "тие",
        in: "во",
        thesgm: "",
        thesgf: "",
        theplm: "", //
        theplf: "",
        asgm: "",
        asgf: "",
        aplm: "",
        aplf: "",
        am: "суме",
        is: "е",
        with: "со",
        park: "парк",
        cat: "мачка",
        beer: "пиво",
        man: "маж",
        woman: "жена",
        white: "бел",
        howq: "како",
        whereq: "каде",
        and: "и",
        or: "или",
        q: "",
        small: "мал",
        tall: "висок",
        city: "град",
        now: "сега",
        car: "автомобил",
        apple: "јаболко",
        dog: "куче",
        bear: "мечка",
        slow: "бавен",
        fast: "брз",
        house: "куќа",
        red: "црвен",
        orange: "портокалов",
        yellow: "жолт",
        green: "зелен",
        blue: "син",
        sauce: "сос",
        banana: "банана",
        wine: "вино",
        color: "боја",
        whatq: "што",
        favorite: "омилен",
        yes: "да",
        no: "не",
        //languages
        en: "англиски",
        es: "шпански",
        pt: "португалски",
        it: "италијански",
        fr: "француски",
        gl: "галициски",
        ct: "каталонски",
        yi: "јидски",
        mk: "македонски",
        sv: "шведски",
        eo: "есперанто",
        //text
        form: "форма",
        vrb: "глагол",
        of: "на",
        determined: "предодреден",
        by: "од",
        its: "свој",
        subject: "подмет",
        number: "број",
        gen: "пол",
        adj: "придавка",
        sustantive: "именка",
        feminine: "женски",
        masculine: "мажски",
        neutral: "неутрален",
        common: "заеднички",
        plu: "множински",
        that: "дека",
        signifies: "значи",
        but: "но",
        only: "само",
        used: "користи",
        location: "локација",
        emotion: "емоција",
        para: "за",
        parato: "за",
        select: "изберете",
        level: "ниво",
        introduction: "вовед",
        food: "храна",
        to: "во",
        translate: "преведете",
        correct: "правилно",
        incorrect: "погрешно",
        please: "ве молам",
        write: "пиши",
        here: "овде",
        submit: "достави",
        singular: "еднина",
        enter: "внесете",
        continue: "да продолжите",
        present: "сегашноста",
        language: "језик",
        click: "кликнете",
        //
        beser: {
            infinitive: ["бидам", "бидеш", "биде", "бидеме", "бидете", "бидат"],
            present: ["сум", "си", "е", "сме", "сте", "се"],
        },
        beest: {
            present: ["сум", "си", "е", "сме", "сте", "се"],
        },
        have: {
            present: ["имам", "имаш", "имам", "имаме", "имате", "имаат"],
        },
        speak: {
            present: ["зборувам", "зборуваш", "зборува", "зборуваме", "зборувате", "зборуваат"],
        },
        want: {
            present: ["сакам", "сакаш", "сака", "сакаме", "сакате", "сакаат"],
        },
        learn: {
            present: ["учам", "учиш", "учи", "учиме", "учите", "учат"],
        },
        eat: {
            present: ["јадам", "јадеш", "јаде", "јадеме", "јадете", "јадат"]
        },
        //
        contractions: {}, //incomplete?
        //
        plural: function(word){ //todo
            word = languages.mk[word]
            if("аеиоу".includes(word.slice(-1))) word = word.slice(0, -1)
            if(word.endsWith("к")) return word.slice(0,-1) + "ци"
            else if(languages.mk.gender(word) == "m") return word + "и"
            else if(languages.mk.gender(word) == "f") return word + "и"
            else if(languages.mk.gender(word) == "n") return word + "е"
        },
        adjective: function(word, type, naun){ //done
            word = languages.mk[word]
            naun = languages.mk[naun]
            if(naun != undefined) type = type + languages.mk.gender(naun)
            if(type.endsWith("p")) return word + "и"
            else if(type.startsWith("n")) return word + "о"
            else if(type.startsWith("f")) return word + "а"
            else return word
        },
        gender: function(naun){ //done (?)
            if(naun.endsWith("а")) return "f"
            else if(naun.endsWith("е")) return "n"
            else return "m"
        },
        noun: function(article, naun, adjective){ //done
            noin = languages["mk"][naun]
            if(article.startsWith("the")){
                if(article.endsWith("pl")){
                    if(languages.mk.gender(noin) == "m") noin += "те"
                    else if(languages.mk.gender(noin) == "f") noin += "те"
                    else if(languages.mk.gender(noin) == "n") noin += "та"
                }
                else if(article.endsWith("sg")){
                    if(languages.mk.gender(noin) == "m") noin += "от"
                    else if(languages.mk.gender(noin) == "f") noin += "та"
                    else if(languages.mk.gender(noin) == "n") noin += "то"
                }
            }
            else if(article.endsWith("pl")) naun = languages.mk.plural(noin)
            if(adjective != undefined){
                adjective = languages.mk.adjective(adjective, article.endsWith("pl") ? "p" : "s", naun)
                return adjective + " " + noin
            }
            return noin
        },
        verb: function(verb, tense, person){ //done
            if(tense == "infinitive"){
                if(!person) return "да " + languages.mk[verb].present[2]
                else if(verb.startsWith("be")) return "да " + languages.mk.beser.infinitive[person]
                else return "да " + languages["mk"][verb].present[person]
            }    
            else return languages["mk"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `не ${languages.mk.verb(verb, tense, person)}`},
        //settings
        genderList: ["f", "m", "n"],
        definitiveSuffixes: true,
        writingSystem: "cyrillic",
        direction: "ltr",
    },
}