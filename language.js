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
        sustantive: "naun",
        usually: "usually",
        add: "add",
        feminine: "feminine",
        masculine: "masculine",
        neutral: "neutral",
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
        contractions: {"do not": "don't", "does not": "doesn't", "i am": "i'm", "you are": "you're", "we are": "we're", "he is": "he's", "she is": "she's", "it is": "it's", "they are": "they're", "i will": "i'll", "you will": "you'll", "he will": "he'll", "she will": "she'll", "it will": "it'll", "we will": "we'll", "they will": "they'll"}, //incomplete
        plural: function(word){ 
            word = languages.en[word]
            if(word == "man") return "men"
            else if(word == "woman") return "women"
            else if(word.endsWith("x")) return word + "es"
            else return word + "s"
        },
        adjective: function(word, type, naun){
            console.log(languages.en[word])
            return languages.en[word]
        },
        negativeVerb: function(verb, tense, person){return (verb == "be" ? languages.en.verb(verb, tense, person) + " not" : (person == 2 ? "does" : "do") + " not " + languages.en[verb].present[0])},
        noun: function(article, naun, adjective){
            noin = languages["en"][naun]
            d = (" " + (adjective ?? "") + " ").replace("  ", " ")
            if(article == "asg") return ("aeiou".includes(noin.charAt(0)) ? "an" : "a") + d + noin
            else if(article == "apl") return d + languages["en"].plural(naun)
            else if(article == "thesg") return "the" + d + noin
            else return "the" + d + languages["en"].plural(naun)
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
                else return verb + (person == 2 ? "s" : "")
            }
        },
        //settings
        genderNum: 1,
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
        usually: "generalmente",
        add: "agregue",
        feminine: "feminino",
        masculine: "masculino",
        neutral: "neutral",
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
            word = languages["es"][word]
            noin = languages["es"][naun]
            if(noin != undefined) type = languages["es"].gender(noin) + type
            if(type.endsWith("fp")) return (word.endsWith("o") ? word.slice(0, -1) + "as" : word + "es")
            else if(type.endsWith("fs")) return word.endsWith("o") ? word.slice(0, -1) + "a" : word
            else if(type.endsWith("mp")) return (word.endsWith("o") ? word + "s" : word + "es")
            else return word
        },
        gender: function(naun){
            if("oel".includes(naun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, naun, adjective){
            noin = languages["es"][naun]
            if(adjective != undefined) return languages["es"][article + languages["es"].gender(noin)] + " " + (article.endsWith("pl") ? languages["es"].plural(naun) : noin) + " " + languages["es"].adjective(adjective, article)
            else return languages["es"][article + languages["es"].gender(noin)] + " " + (article.endsWith("pl") ? languages["es"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["es"][verb].infinitive
            else return languages["es"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `no ${languages.es.verb(verb, tense, person)}`},
        //settings
        genderNum: 2,
        definitiveSuffixes: false,
        writingSystem: "latin",
        specialLetters: ["á", "é", "í", "ñ", "ó", "ú", "ü", "¿"],
        direction: "ltr",
    },
    pt: { //EUROPEAN not brazilian
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
        usually: "usualmente",
        add: "adicione",
        feminine: "feminino",
        masculine: "masculino",
        neutral: "neutral",
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
            if(naun != undefined) type = languages["pt"].gender(naun) + type
            if(type.endsWith("fp")){
                if(word.endsWith("o")) return word.slice(0, -1) + "as"
                else return word + "as"
            }
            else if(type.endsWith("fs")){
                if(word.endsWith("o")) return word.slice(0, -1) + "a"
                else return word + "a"
            }
            else if(type.endsWith("mp")) return word + "s"
            else return word
        },
        gender: function(naun){
            if(naun.endsWith("dade")) return "f"
            else if("om".includes(naun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, naun, adjective){
            noin = languages["pt"][naun]
            if(adjective != undefined) return languages["pt"][article + languages["pt"].gender(noin)] + " " + (article.endsWith("pl") ? languages["pt"].plural(naun) : noin) + " " + languages["pt"].adjective(adjective, article)
            else return languages["pt"][article + languages["pt"].gender(noin)] + " " + (article.endsWith("pl") ? languages["pt"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["pt"][verb].infinitive
            else return languages["pt"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `não ${languages.pt.verb(verb, tense, person)}`},
        //settings
        genderNum: 2,
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
        usually: "normalmente",
        add: "engade",
        feminine: "feminino",
        masculine: "masculino",
        neutral: "neutral",
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
            if(naun != undefined) type = languages["gl"].gender(naun) + type
            if(type.endsWith("fp")){
                if(word.endsWith("o")) return word.slice(0, -1) + "as"
                else return word + "as"
            }
            else if(type.endsWith("fs")){
                if(word.endsWith("o")) return word.slice(0, -1) + "a"
                else return word + "a"
            }
            else if(type.endsWith("mp")) return word + "s"
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
        //settings
        genderNum: 2,
        definitiveSuffixes: false,
        writingSystem: "latin",
        specialLetters: [], //FIX
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
        usually: "generalmente",
        add: "aggiungi",
        feminine: "femminile",
        masculine: "maschile",
        neutral: "neutrale",
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
            if(naun != undefined) type = languages["it"].gender(naun) + type
            if(type.endsWith("fp")){
                if(word.endsWith("e")) return word.slice(0, -1) + "i"
                else return word.slice(0, -1) + "e"
            }
            else if(type.endsWith("fs")){
                if(word.endsWith("e")) return word
                else return word.slice(0, -1) + "a"
            }
            else if(type.endsWith("mp")){
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
            if(tense == "infinitive") return languages["it"][verb].infinitive
            else return languages["it"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `non ${languages.it.verb(verb, tense, person)}`},
        //settings
        genderNum: 2,
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
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
        usually: "d'habitude",
        add: "ajoutez",
        feminine: "féminin",
        masculine: "masculin",
        neutral: "neutre",
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
            type = type.replace("asg", "s").replace("thesg", "s").replace("apl", "p").replace("thepl", "p")
            if(naun != undefined) type = languages["fr"].gender(naun) + type
            if(word.endsWith("e")) return word
            else return word + {"fp": "es", "fs": "e", "mp": "s", "ms": ""}[type]
        },
        gender: function(naun){
            if(["homme", "verbe"].includes(naun)) return "m"
            else if(naun.endsWith("e")) return "f"
            else return "m"
        },
        noun: function(article, naun, adjective){
            noin = languages["fr"][naun]
            if(adjective != undefined) return languages["fr"][article + languages["fr"].gender(noin)] + " " + (article.endsWith("pl") ? languages["fr"].plural(naun) : noin) + " " + languages["fr"].adjective(adjective, article, naun)
            else return languages["fr"][article + languages["fr"].gender(noin)] + " " + (article.endsWith("pl") ? languages["fr"].plural(naun) : noin)
        },
        verb: function(verb, tense, person){
            if(tense == "infinitive") return languages["fr"][verb].infinitive
            else return languages["fr"][verb][tense][person]
        },
        negativeVerb: function(verb, tense, person){return `ne ${languages.fr.verb(verb, tense, person)} pas`},
        //settings
        genderNum: 2,
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
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
        usually: "generalment",
        add: "afegiu",
        feminine: "feminí",
        masculine: "masculí",
        neutral: "neutre",
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
            if(naun != undefined) type = languages["ct"].gender(naun) + type
            if(type.endsWith("fp")) return word + "es"
            else if(type.endsWith("fs")) return word + "a"
            else if(type.endsWith("mp")) return word + "s"
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
        //settings
        genderNum: 2,
        definitiveSuffixes: false,
        writingSystem: "latin",
        direction: "ltr",
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
        usually: "אַפֿט",
        add: "לייגן",
        feminine: "ווײַבלעך",
        masculine: "מענלעך",
        neutral: "נייטראַל",
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
        //settings
        genderNum: 3,
        definitiveSuffixes: false,
        writingSystem: "hebrew",
        direction: "rtl",
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
        usually: "обично",
        add: "додадете",
        feminine: "женски",
        masculine: "мажски",
        neutral: "неутрален",
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
            if(naun != undefined) type = languages.mk.gender(naun) + type
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
        genderNum: 3,
        definitiveSuffixes: true,
        writingSystem: "cyrillic",
        direction: "ltr",
    },
}

firstLanguage = "en"
secondLanguage = "es"
type = ""
f = languages[firstLanguage]
l = languages[secondLanguage]
naunlist = ["woman", "beer", "city", "man", "cat", "park", "apple", "banana", "car", "dog", "bear", "cat", "sauce", "wine"]
lessonNumber = 0
partNumber = 0
specialDefinition = {}

function parse(txt, shprak){
    q = shprak ? languages[shprak] : l
    txt = txt.replace("%", f[secondLanguage])
    txt = txt.replace(/\[/g, " [ ").replace(/\]/g, " ]").split(" ")
    for(ind = 0; ind < txt.length; ind++){
        t = txt[ind]
        if(t.startsWith("#") && (t.indexOf("[", ind + 2) > t.indexOf("]", ind + 2) || t.indexOf("[", ind + 2) == -1) ){
            spl = txt.splice(txt.indexOf("[", ind), txt.indexOf("]", ind) - txt.indexOf("[", ind) + 1)
            spl = spl.splice(1, spl.length-2)
            txt[ind] = q[t.slice(1)](...spl)
        }
        else if(q[t] != undefined) txt[ind] = q[t]
    }
    return txt.join(" ")
}


function returnLesson(lNumber, pNumber, theLanguage){
    l = languages[theLanguage]
    f = languages[firstLanguage]
    specialDefinition = {
        asgm: `(${f.singular} ${f.and} ${f.masculine})`,
        asgf: `(${f.singular} ${f.and} ${f.feminine})`,
        aplm: `(${f.plu} ${f.and} ${f.masculine})`,
        aplf: `(${f.plu} ${f.and} ${f.feminine})`,
        thesgm: `(${f.singular} ${f.and} ${f.masculine})`,
        thesgf: `(${f.singular} ${f.and} ${f.feminine})`,
        theplm: `(${f.plu} ${f.and} ${f.masculine})`,
        theplf: `(${f.plu} ${f.and} ${f.feminine})`,
        sg: ``,
    }
    lessons = [
        [ //Introduction
            "vocab@i",
            "vocab@man",
            "vocab@am",
            `sentence@${parse("i")}`,
            (!l.definitiveSuffixes ? "vocab@asgm" : ""),
            `sentence@${parse("i #verb[beser present 0] #noun[asg man]")}`,
            "vocab@woman",
            (!l.definitiveSuffixes ? "vocab@asgf" : ""),
            `sentence@${parse("woman")}`,
            `sentence@${parse("i #verb[beser present 0] #noun[asg woman]")}`,
            "vocab@He",
            "vocab@is",
            `sentence@${parse("he #verb[beser present 2] #noun[asg man]")}`,
            "vocab@she",
            `translate@${parse("she #verb[beser present 2] #noun[asg woman]")}`,
            "vocab@and",
            "vocab@or",
            "vocab@yousg",
            `translate@${parse("#noun[asg woman] and #noun[asg man]")}`,
            `sentence@${parse("yousg or i")}`,
        ],
        [ //plurals
            "vocab@park",
            `text@${parse("in % #noun[thesg form] of #noun[asg vrb] #verb[beser present 2] determined by its subject", firstLanguage)}`,
            "verb@beser~present",
            "vocab@small",
            "vocab@tall",
            (!l.definitiveSuffixes ? "vocab@thesgm" : ""),
            (!l.definitiveSuffixes ? "vocab@thesgf" : ""),
            `translate@${parse("#noun[thesg man]")}`,
            (!l.definitiveSuffixes ? "vocab@theplf" : ""),
            (!l.definitiveSuffixes ? "vocab@theplm" : ""),
            `sentence@${parse("#noun[thepl woman]")}`,
            `translate@${parse("wem #verb[beser present 3] #noun[thepl man]")}`,
            `text@${parse("#noun[thepl adj] #verb[have present 5] #noun[thesg gen] and #noun[thesg number] of #noun[thesg subject]")}`,
            `sentence@${parse("#noun[asg park small]")}`,
            `vocab@city`,
            `translate@${parse("#noun[asg woman] in #noun[asg city small]")}`,
            `vocab@now`,
            `sentence@${parse("now he #verb[beser present 2] #noun[asg man]")}`,
            `sentence@${parse("#noun[thepl woman] #verb[beser present 5] #adjective[tall p woman]")}`,
            `translate@${parse("#noun[thesg man] #verb[beser present 2] #adjective[small s man]")}`,
        ],
        [ //to have
            `text@${f.usually}, ${f.add} ${secondLanguage != "it" ? (secondLanguage != "yi" ? `'-s' ${f.or} '-es'` : `'-s' ${f.or} '-en'`) : `-e ${f.to} ${f.noun("thepl", "sustantive", "feminine")} ${f.and} -i ${f.to} ${f.noun("thepl", "sustantive", "masculine")}`} ${f.para} ${f.noun("asg", "sustantive", "plu")} ${f.or} ${f.noun("asg", "adj", "plu")}`,
            //(secondLanguage == "it" ? "verb@beest~present" : ""),
            `sentence@${parse("#plural[man]")}`,
            "vocab@apple",
            `translate@${parse("plural[woman]")}`,
            "vocab@car",
            "verb@have~present",
            `sentence@${parse("she #verb[have present 2] #noun[asg car]")}`,
            ((!["fr", "en", "yi", "mk"].includes(secondLanguage) && ["fr", "en", "mk", "yi"].includes(firstLanguage)) ? `text@${parse("#noun[thesg vrb] 'estar' #verb[beser present 2] #noun[asg vrb] that signifies #verb[beser infinitive] but #noun[thesg vrb] only #verb[beest present 2] used para #plural[location] and #plural[emotion]", firstLanguage)}` : ""),
            (secondLanguage != "fr" ? "verb@beest~present" : ""),
            `translate@${parse("#plural[apple]")}`,
            `translate@${parse("q whereq #verb[beest present 2] #noun[thesg car]")}`,
            "vocab@dog",
            "vocab@cat",
            "vocab@bear",
            `translate@${parse("bear")}`,
            `sentence@${parse("#noun[thepl cat]")}`,
            `sentence@${parse("#noun[thepl dog small]")}`,
            `vocab@slow`,
            `vocab@fast`,
            `translate@${parse("theyf #verb[have present 5] #noun[asg car slow]")}`,
            `translate@${parse("he #verb[beser present 2] #noun[asg cat fast]")}`,
            `vocab@in`,
            `vocab@house`,
            `translate@${parse("bear")}`,
            `sentence@${parse("#noun[thesg man] #verb[beest present 2] in #noun[thesg park]")}`,
            `sentence@${parse("wem #verb[have present 3] #noun[asg cat small] and he #verb[beest present 2] in #noun[thesg house]")}`,
        ],
        [ //Food/Colors 1
            `vocab@red`,
            `vocab@orange`,
            `sentence@${parse("red")}`,
            `vocab@yellow`,
            `vocab@banana`,
            `sentence@${parse("#noun[thesg banana] #verb[beser present 2] #adjective[yellow s banana]")}`,
            `vocab@sauce`,
            `sentence@${parse("q whereq #verb[beest present 2] #noun[thesg sauce red]")}`,
            `translate@${parse("banana")}`,
            `vocab@orange`,
            `vocab@wine`,
            `vocab@blue`,
            `sentence@${parse("#noun[thesg wine] #verb[beser present 2] #adjective[yellow s wine] or #adjective[orange s wine]")}`,
            `sentence@${parse("green")}`,
            `vocab@color`,
            `vocab@whatq`,
            `sentence@${parse("q whatq color #verb[beser present 2] #noun[thesg car small]")}`,
            `translate@${parse("blue")}`,
        ],

        [ //Negative verbs
            `verb@want~present`,
            `sentence@${parse("wem #verb[want present 3]")}`,
            `translate@${parse("she #verb[want present 2]")}`,
            `verb@eat~present`,
            (secondLanguage != "mk" ? `translate@${parse("#verb[eat infinitive]")}` : ''),
            `vocab@with`,
            `vocab@yes`,
            `vocab@no`,
            `sentence@${parse("i #verb[want present 0] #verb[eat infinitive 0] in #noun[thesg house] with Harris")}`,
            `translate@${parse("wem #verb[eat present 3]")}`,
            `sentence@${parse("theym #negativeVerb[want present 5] #verb[eat infinitive 5] #noun[thesg banana green]")}`,
            `translate@${parse("yes she #verb[want present 2] #noun[thesg house blue]")}`,
            `translate@${parse("no i #negativeVerb[want present 0] #noun[thesg house blue]")}`,
        ],
    ]

    x = lessons[lNumber][pNumber].toLowerCase()
    for(y of Object.entries(l.contractions)) x = x.replace(`${y[0]}`, `${y[1]}`)
    for(y of Object.entries(languages[firstLanguage].contractions)) x = x.replace(`${y[0]}`, `${y[1]}`)
    return x
}

function render(){
    material = returnLesson(lessonNumber, partNumber, secondLanguage)
    if(material == ""){
        partNumber++
        render()
    }
    else{
        type = material.split("@")[0]
        content = material.split("@")[1]
        if(type == "vocab"){
            for(block of ["word", "definition", "info", "enter"]) document.getElementById(block).style.display = "block"
            for(block of ["input", "verb"]) document.getElementById(block).style.display = "none"
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            enter.style.backgroundColor = "#F79A32"
            word.textContent = languages[secondLanguage][content]
            definition.textContent = languages[firstLanguage][content]
            info.textContent = specialDefinition[content] ?? ""
            if(naunlist.includes(content) && l.genderNum >= 2) info.textContent = `(${f[{"f": "feminine", "m": "masculine", "n": "neutral"}[l.gender(l[content])]]})`
        }
        else if(type == "sentence" || type == "translate"){
            for(block of ["word", "definition", "info", "enter", "input"]) document.getElementById(block).style.display = "block"
            verb.style.display = "none"
            input.value = ""
            input.style.textAlign = "left"
            input.placeholder = `${f.write} ${f.here}`
            enter.style.backgroundColor = "#F79A32"
            enter.textContent = f.submit
            verb.style.display = "none"
            word.textContent = type == "sentence" ? content : returnLesson(lessonNumber, partNumber, firstLanguage).split("@")[1]
            definition.textContent = `${f.translate} ${f.to} ` + (type == "sentence" ? languages[firstLanguage][firstLanguage] : languages[firstLanguage][secondLanguage])
            info.textContent = ""
        }
        else if(type == "verb"){
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            for(block of ["enter", "verb"]) document.getElementById(block).style.display = "block"
            for(block of ["word", "definition", "info", "input"]) document.getElementById(block).style.display = "none"
            infinitivenative.textContent = l.verb(content.split("~")[0], "infinitive") + " [" + f[content.split("~")[1]] + "]"
            infinitiveenglish.textContent = `(${f.verb(content.split("~")[0], "infinitive")})`
            verb1s.textContent = l.i + " " + l[content.split("~")[0]][content.split("~")[1]][0]
            verb1p.textContent = l.wem + " " + l[content.split("~")[0]][content.split("~")[1]][3]
            verb2s.textContent = l.yousg + " " + l[content.split("~")[0]][content.split("~")[1]][1]
            verb2p.textContent = l.youplinf + " " + l[content.split("~")[0]][content.split("~")[1]][4]
            verb3s.textContent = l.he + "/" + l.she + " " + l[content.split("~")[0]][content.split("~")[1]][2]
            verb3p.textContent = l.theym + " " + l[content.split("~")[0]][content.split("~")[1]][5]
        }
        else if(type == "text"){
            enter.textContent = `${f.click} ${f.parato} ${f.continue}`
            for(block of ["verb", "input", "info", "word"]) document.getElementById(block).style.display = "none"
            definition.textContent = content
        }
    }
}

document.addEventListener('keydown', (e) => {if(e.code == "Enter") enterFunction()})

function enterFunction(){
    if(["vocab", "verb", "text"].includes(type) || input.value.includes(f.click)){
        input.value = ""
        partNumber++
        if(partNumber == lessons[lessonNumber].length){
            partNumber = 0
            home.style.display = "block"
            lesson.style.display = "none"
        }
        else render()
    }
    else if(type == "sentence" || type == "translate"){
        if(input.style.display == "none"){
            partNumber++
            if(partNumber == lessons[lessonNumber].length){
                partNumber = 0
                home.style.display = "block"
                lesson.style.display = "none"
            }
            else render()
        }
        else if(input.value == ""){
            input.classList.add("angryinput")
            input.placeholder = `${f.please} ${f.write} ${f.here}...`
        }
        else{
            input.classList.remove("angryinput")
            input.placeholder = `${f.write} ${f.here}`
            input.style.display = "none"
            z = input.value.toLowerCase()
            for(y of Object.entries(languages[firstLanguage].contractions)) z = z.replace(`${y[0]}`, `${y[1]}`)
            answer = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            prodropanswer = firstLanguage == "en" ? "" : answer.replace(f.i, "").replace(f.yousg, "").replace(f.we, "").trim()
            if(z == answer || z == prodropanswer){
                enter.style.backgroundColor = "#889B4A"
                enter.textContent = `${f.correct}, ${f.click} ${f.parato} ${f.continue}`
            }
            else{
                enter.style.backgroundColor = "#DC3958"
                enter.textContent = `${f.incorrect}, ${f.click} ${f.parato} ${f.continue}`
                definition.textContent = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            }
        }
    }
}
function firstLangSelect(ln){
    document.getElementById(firstLanguage + "1").style.backgroundColor = "#FCAC51"
    document.getElementById(firstLanguage + "2").style.display = "inline"
    firstLanguage = ln
    f = languages[firstLanguage]
    document.title = f.plural("language").charAt(0).toUpperCase() + f.plural("language").slice(1)
    if(firstLanguage == secondLanguage){
        secondLanguage = (firstLanguage == "es") ? "en" : "es"
        document.getElementById(firstLanguage + "2").style.backgroundColor = "#FCAC51"
        document.getElementById(secondLanguage + "2").style.backgroundColor = "#F14A68"
    }
    lang1.textContent = `${f.yousg} ${f.verb("speak", "present", 1)}:`,
    lang2.textContent = `${f.yousg} ${f.verb("want", "present", 1)} ${f.verb("learn", "infinitive", 1)}:`,
    lev.textContent = `${f.select} ${f.noun("asg", "level")}`
    for(v in Array.from(document.getElementById('levelselector').children)) document.getElementById("b" + v).textContent = "lvl " + (+v + 1) + ": " + [`${f.introduction}`, `${f.adjective("plu", 'mp')}`, `${f.verb("have", "infinitive")}`, `${f.food}/${f.plural("color")} 1`, `${f.no}`][v]
    for(v of Array.from(document.getElementById('selector2').children)) v.textContent = f[v.id.slice(0, -1)]
    document.getElementById(ln + "1").style.backgroundColor = "#F14A68"
    document.getElementById(ln + "2").style.display = "none"
}
function secondLangSelect(ln){
    document.getElementById(secondLanguage + "2").style.backgroundColor = "#FCAC51"
    secondLanguage = ln
    document.getElementById(ln + "2").style.backgroundColor = "#F14A68"
}
function levelSelect(nm){
    home.style.display = "none"
    lesson.style.display = "block"
    lessonNumber = nm
    partNumber = 0
    render()
}