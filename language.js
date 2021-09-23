languages = {
    en: {
        name: "english",
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
        //languages
        en: "english",
        es: "spanish",
        pt: "portuguese",
        it: "italian",
        fr: "french",
        gl: "galician",
        ct: "catalan",
        //text
        form: "form",
        verb: "verb",
        of: "of",
        determined: "determined",
        by: "by",
        its: "its",
        subject: "subject",
        number: "number",
        gen: "gender",
        adj: "adjective",
        sustantive: "noun",
        usually: "usually",
        add: "add",
        feminine: "feminine",
        masculine: "masculine",
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
        present: "",
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
        contractions: {"do not": "don't", "i am": "i'm", "you are": "you're", "we are": "we're", "he is": "he's", "she is": "she's", "it is": "it's", "they are": "they're", "i will": "i'll", "you will": "you'll", "he will": "he'll", "she will": "she'll", "it will": "it'll", "we will": "we'll", "they will": "they'll"}, //incomplete
        plural: function(word){ 
            if(word == "man") return "men"
            else if(word == "woman") return "women"
            else if(word.endsWith("x")) return word + "es"
            else return word + "s"
        },
        adjective: function(word, type){return word},
        negativeVerb: function(verb){return ["am", "is", "are"].includes(verb) ? verb + " not" : "don't " + verb},
        noun: function(article, noun, adjective){
            d = (adjective ?? "") + " "
            if(article == "asg") return ("aeiou".includes(noun.charAt(0)) ? "an" : "a") + d + noun
            else if(article == "apl") return d + languages["en"].plural(noun)
            else if(article == "thesg") return "the" + d + noun
            else return "the" + d + languages["en"].plural(noun)
        },
        //settings
        grammaticalGender: false,
    },
    es: {
        name: "spanish",
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
        //languages
        en: "inglés",
        es: "español",
        pt: "portugués",
        it: "italiano",
        fr: "francés",
        gl: "galego",
        ct: "catalán",
        //text
        form: "forma",
        verb: "verbo",
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
        present: "",
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
        contractions: {"de el": "del", "a el": "al"}, //complete
        plural: function(word){  //complete
            if(word.endsWith("s") || word.endsWith("x")) return word
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else if("ón".includes(word.slice(-1))) return word.replace("ó", "o") + "es"
            else if(word.endsWith("z")) return word.slice(0, -1) + "ces"
            else return word + "es"
        },
        adjective: function(word, type){ //[basically] complete
            if(type.endsWith("fp")) return (word.endsWith("o") ? word.slice(0, -1) + "as" : word + "es")
            else if(type.endsWith("fs")) return word.endsWith("o") ? word.slice(0, -1) + "a" : word
            else if(type.endsWith("mp")) return (word.endsWith("o") ? word + "s" : word + "es")
            else return word
        },
        negativeVerb: function(verb){return `no ${verb}`},
        gender: function(noun){
            if("oe".includes(noun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return languages["es"][article + languages["es"].gender(noun)] + " " + (article.endsWith("pl") ? languages["es"].plural(noun) : noun) + " " + languages["es"].adjective(adjective, article)
            else return languages["es"][article + languages["es"].gender(noun)] + " " + (article.endsWith("pl") ? languages["es"].plural(noun) : noun)
        },
        //settings
        grammaticalGender: true,
    },
    pt: {
        name: "portuguese",
        i: "eu",
        yousg: "tu",
        yousgfm: "você",
        he: "ele",
        she: "ela",
        wem: "nós",
        wef: "nós",
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
        //languages
        en: "inglês",
        es: "espanhol",
        pt: "português",
        it: "italiano",
        fr: "francês",
        gl: "galego",
        ct: "catalão",
        //
        //text
        form: "forma",
        verb: "verbo",
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
        present: "",
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
        plural: function(word){ 
            if(word.endsWith("s")) return word
            else if(word.endsWith("al")) return word.slice(0, -1) + "is"
            else if(word.endsWith("ão")) return word.slice(0, -2) + "ões"
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else return word + "es"
        },
        adjective: function(word, type, noun){ 
            if(noun != undefined) type += languages["pt"].gender(noun)
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
        nA: function(noun, adj){
            return `${noun} ${adj}`
        },
        negativeVerb: function(verb){
            return "não " + verb
        },
        gender: function(noun){
            if(noun.endsWith("dade")) return "f"
            else if("om".includes(noun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return languages["pt"][article + languages["pt"].gender(noun)] + " " + (article.endsWith("pl") ? languages["pt"].plural(noun) : noun) + " " + languages["pt"].adjective(adjective, article)
            else return languages["pt"][article + languages["pt"].gender(noun)] + " " + (article.endsWith("pl") ? languages["pt"].plural(noun) : noun)
        },
        //settings
        grammaticalGender: true,
    },
    gl: {
        name: "galician",
        i: "eu",
        yousg: "ti",
        yousgfm: "ti",
        he: "el",
        she: "ela",
        wem: "nós",
        wef: "nós",
        youpl: "vós",
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
        q: "",
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
        //languages
        en: "inglés",
        es: "español",
        pt: "portugués",
        it: "italiano",
        fr: "francés",
        gl: "galego",
        ct: "catalán",
        //text
        form: "forma",
        verb: "verbo",
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
        present: "",
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
        plural: function(word){ 
            if(word.endsWith("s")) return word
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else if(word.endsWith("al")) return word.slice(0, -1) + "is"
            else return word + "es"
        },
        adjective: function(word, type, noun){
            if(noun != undefined) type += languages["gl"].gender(noun)
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
        nA: function(noun, adj){
            return `${noun} ${adj}`
        },
        negativeVerb: function(verb){
            return "non " + verb
        },
        gender: function(noun){
            if(noun.endsWith("dade")) return "f"
            else if("oen".includes(noun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return languages["gl"][article + languages["gl"].gender(noun)] + " " + (article.endsWith("pl") ? languages["gl"].plural(noun) : noun) + " " + languages["gl"].adjective(adjective, article)
            else return languages["gl"][article + languages["gl"].gender(noun)] + " " + (article.endsWith("pl") ? languages["gl"].plural(noun) : noun)
        },
        //settings
        grammaticalGender: true,
    },
    it: {
        name: "italian",
        i: "io",
        yousg: "tu",
        yousgfm: "tu",
        he: "lui",
        she: "lei",
        wem: "noi",
        wef: "noi",
        youpl: "voi",
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
        //languages
        en: "inglese",
        es: "spagnolo",
        pt: "portoghese",
        it: "italiano",
        fr: "francese",
        gl: "galiziano",
        ct: "catalano",
        //text
        form: "forma",
        verb: "verbo",
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
        present: "",
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
        contractions: {"il u": "l'u"}, //incomplete
        plural: function(word){ 
            if(word.endsWith("o")) return word.slice(0, -1) + "i"
            else if(word == "uomo") return "uomini"
            else return word.slice(0, -1) + "e"
        },
        adjective: function(word, type, noun){ 
            if(noun != undefined) type += languages["it"].gender(noun)
            if(type.endsWith("fp")){
                if(word.endsWith("e")) return word.slice(0, -1) + "i"
                else return word.slice(0, -1) + "e"
            }
            else if(type.endsWith("fs")){
                if(word.endsWith("e")) return word
                else return word.slice(0, -1) + "a"
            }
            else if(type.endsWith("mp")) return word.slice(0, -1) + "i"
            else return word
        },
        nA: function(noun, adj){
            return `${noun} ${adj}`
        },
        negativeVerb: function(verb){
            return "non " + verb
        },
        gender: function(noun){
            if("o" == noun.slice(-1)) return "m"
            else return "f"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return languages["it"][article + languages["it"].gender(noun)] + " " + (article.endsWith("pl") ? languages["it"].plural(noun) : noun) + " " + languages["it"].adjective(adjective, article)
            else return languages["it"][article + languages["it"].gender(noun)] + " " + (article.endsWith("pl") ? languages["it"].plural(noun) : noun)
        },
        //settings
        grammaticalGender: true,
    },
    fr: {
        name: "french",
        i: "je",
        yousg: "tu",
        yousgfm: "tu",
        he: "il",
        she: "elle",
        wem: "nous",
        wef: "nous",
        youpl: "vous",
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
        //languages
        en: "anglais",
        es: "espanol",
        pt: "portugais",
        it: "italien",
        fr: "français",
        gl: "galicien",
        ct: "catalan",
        //text
        form: "forme",
        verb: "verbe",
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
        present: "",
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
        contractions: {"je a": "j'a", "le h": "l'h", "à le": "au", "de un": "d'un"}, //incomplete
        plural: function(word){ 
            if(word.endsWith("eu")) return word + "x"
            else if("sxz".includes(word.slice(-1))) return word
            else return word + "s"
        },
        adjective: function(word, type, noun){
            if(noun != undefined) type += languages["fr"].gender(noun)
            return word + {"fp": "es", "fs": "e", "mp": "s", "ms": ""}[type]
        },
        nA: function(noun, adj){return `${noun} ${adj}`},
        negativeVerb: function(verb){return `ne ${verb} pas`},
        gender: function(noun){
            if(["homme", "verbe"].includes(noun)) return "m"
            else if(noun.endsWith("e")) return "f"
            else return "m"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return languages["fr"][article + languages["fr"].gender(noun)] + " " + (article.endsWith("pl") ? languages["fr"].plural(noun) : noun) + " " + languages["fr"].adjective(adjective, article)
            else return languages["fr"][article + languages["fr"].gender(noun)] + " " + (article.endsWith("pl") ? languages["fr"].plural(noun) : noun)
        },
        //settings
        grammaticalGender: true,
    },
    ct: {
        name: "catalan",
        i: "jo",
        yousg: "tu",
        yousgfm: "vostè",
        he: "ell",
        she: "ella",
        wem: "nosaltres",
        wef: "nosaltres",
        youpl: "vostè",
        theym: "ells",
        theyf: "elles",
        in: "a",
        thesgm: "el",
        thesgf: "la",
        theplm: "els", //
        theplf: "les",
        asgm: "un",
        asgf: "una",
        aplm: "uns",
        aplf: "unes",
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
        q: "",
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
        //languages
        en: "anglès",
        es: "espanyol",
        pt: "portuguès",
        it: "italià",
        fr: "francès",
        gl: "gallec",
        ct: "català",
        //text
        form: "forma",
        verb: "verb",
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
        present: "",
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
        //
        contractions: {"a el": "al","de el": "del","per el": "pel"}, //incomplete
        //
        plural: function(word){
            if("ó" == word.slice(-1)) return word.slice(0,-1) + "ons"
            else return `${word}s`
        },
        adjective: function(word, type, noun){ 
            if(noun != undefined) type += languages["ct"].gender(noun)
            if(type.endsWith("fp")) return word + "es"
            else if(type.endsWith("fs")) return word + "a"
            else if(type.endsWith("mp")) return word + "s"
            else return word
        },
        nA: function(noun, adj){return `${noun} ${adj}`},
        negativeVerb: function(verb){return `no ${verb}`},
        gender: function(noun){
            if(noun.endsWith("a") || noun.endsWith("tat")) return "f"
            else return "m"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return languages["ct"][article + languages["ct"].gender(noun)] + " " + (article.endsWith("pl") ? languages["ct"].plural(noun) : noun) + " " + languages["ct"].adjective(adjective, article)
            else return languages["ct"][article + languages["ct"].gender(noun)] + " " + (article.endsWith("ct") ? languages["ct"].plural(noun) : noun)
        },
        //settings
        grammaticalGender: true,
    },
}

firstLanguage = "en"
secondLanguage = "es"
type = ""
f = languages[firstLanguage]
l = languages[secondLanguage]
nounlist = ["woman", "beer", "city", "man", "cat", "park", "apple", "banana", "car", "dog", "bear", "cat", "sauce", "wine"]
lessonNumber = 0
partNumber = 0
specialDefinition = {}

function returnLesson(lNumber, pNumber, theLanguage){
    l = languages[theLanguage]
    f = languages[firstLanguage]
    specialDefinition = {
        asgm: "(singular and masculine)",
        asgf: "(singular and feminine)",
        aplm: "(plural and masculine)",
        aplf: "(plural and feminine)",
        thesgm: "(singular and masculine)",
        thesgf: "(singular and feminine)",
        theplm: "(plural and masculine)",
        theplf: "(plural and feminine)",
    }
    lessons = [
        [ //Introduction
            "vocab@I",
            "vocab@Man",
            "vocab@beser~present~0",
            `sentence@${l.i}`,
            "vocab@asgm",
            `sentence@${l.i} ${l.beser.present[0]} ${l.noun("asg", l.man)}`,
            "vocab@woman",
            "vocab@asgf",
            `sentence@${l.woman}`,
            `sentence@${l.i} ${l.beser.present[0]} ${l.noun("asg", l.woman)}`,
            "vocab@He",
            "vocab@beser~present~2",
            `sentence@${l.he} ${l.beser.present[2]} ${l.noun("asg", l.man)}`,
            "vocab@she",
            `translate@${l.she} ${l.beser.present[2]} ${l.noun("asg", l.woman)}`,
            "vocab@and",
            "vocab@or",
            "vocab@yousg",
            `translate@${l.noun("asg", l.woman)} ${l.and} ${l.noun("asg", l.man)}`,
            `sentence@${l.yousg} ${l.or} ${l.i}`,
        ],
        [ //Adjectives
            "vocab@park",
            `text@${f.in} ${f[theLanguage]}, ${f.noun("thesg", f.form)} ${f.of} ${f.noun("asg", f.verb)} ${f.beest.present[2]} ${f.determined} ${f.by} ${f.its} ${f.subject}`,
            "verb@beser~present",
            "vocab@small",
            "vocab@tall",
            `vocab@thesgm`,
            `vocab@thesgf`,
            `translate@${l.noun("thesg", l.man)}`,
            `vocab@theplf`,
            `vocab@theplm`,
            `sentence@${l.noun("thepl", l.woman)}`,
            `translate@${l.we} ${l.beser.present[3]} ${l.noun("thepl", l.man)}`,
            `text@${f.noun("thepl", f.adj)} ${f.have.present[5]} ${f.noun("thesg", f.gen)} ${f.and} ${f.noun("thesg", f.number)} ${f.of} ${f.noun("thesg", f.subject)}`,
            `sentence@${l.noun("asg", l.park, l.small)}`,
            `vocab@city`,
            `translate@${l.noun("asg", l.woman)} ${l.in} ${l.noun("asg",l.city, l.small)}`,
            `vocab@now`,
            `sentence@${l.now} ${l.he} ${l.beser.present[2]} ${l.noun("asgm", l.man)}`,
            `sentence@${l.noun("thepl", l.woman)} ${l.beser.present[5]} ${l.adjective(l.tall, "pl", l.woman)}`,
            `translate@${l.noun("thesg", l.man)} ${l.beser.present[5]} ${l.adjective(l.small, "sg", l.man)}`,
        ],
        [ //to have
            `text@${f.usually}, ${f.add} ${secondLanguage != "it" ? `-s ${f.or} -es` : `-e ${f.to} ${f.noun("thepl", f.sustantive, f.feminine)} ${f.and} -i ${f.to} ${l.noun("thepl", f.sustantive, f.masculine)}`} ${f.para} ${l.noun("asg", f.sustantive, f.plu)} ${f.or} ${f.noun("asg", f.adj, f.plu)}`,
            `sentence@${l.plural(l.man)}`,
            "vocab@apple",
            `translate@${l.plural(l.woman)}`,
            "vocab@car",
            "verb@have~present",
            `sentence@${l.she} ${l.have.present[2]} ${l.noun("asg", l.car)}`,
            ((secondLanguage != "fr" || ["fr", "en"].includes(firstLanguage)) ? `text@${f.noun('thesg', f.verb)} 'estar' ${f.beser.present[2]} ${f.noun('asg', f.verb)} ${f.that} ${f.signifies} '${f.beser.infinitive}' ${f.but} ${f.noun('thesg', f.verb)} ${f.only} ${f.beest.present[2]} ${f.used} ${f.para} ${f.plural(f.location)} ${f.and} ${f.plural(f.emotion)}` : ""),
            (secondLanguage != "fr" ? "verb@beest~present" : ""),
            `translate@${l.plural(l.apple)}`,
            `translate@${l.q}${l.whereq} ${l.beest.present[2]} ${l.noun("thesg", l.car)}?`,
            "vocab@dog",
            "vocab@cat",
            "vocab@bear",
            `translate@${l.plural(l.bear)}`,
            `sentence@${l.noun("thepl", l.cat)}`,
            `sentence@${l.noun("thepl", l.dog, l.small)}`,
            `vocab@slow`,
            `vocab@fast`,
            `translate@${l.they} ${l.have.present[5]} ${l.noun("asg", l.car, l.slow)}`,
            `translate@${l.he} ${l.beser.present[2]} ${l.noun("asg", l.cat, l.fast)}`,
            `vocab@in`,
            `vocab@house`,
            `translate@${l.bear}`,
            `sentence@${l.noun("thesg", l.man)} ${l.beest} ${l.in} ${l.noun("thesg", l.park)}`,
            `sentence@${l.we} ${l.have.present[3]} ${l.noun("asg", l.cat, l.small)} ${l.and} ${l.he} ${l.beest.present[2]} ${l.in} ${l.noun("thesg", l.house)}`,
        ],
        [ //Food/Colors
            `vocab@red`,
            `vocab@orange`,
            `sentence@${l.red}`,
            `vocab@yellow`,
            `vocab@banana`,
            `sentence@${l.noun("thesg", l.banana)} ${l.beser.present[2]} ${l.adjective(l.yellow, "sg", l.banana)}`,
            `vocab@sauce`,
            `sentence@${l.q}${l.whereq} ${l.beest.present[5]} ${l.noun("the", l.sauce, l.red)}?`,
            `translate@${l.banana}`,
            `vocab@orange`,
            `vocab@wine`,
            `vocab@blue`,
            `sentence@${l.noun("the", l.wine)} ${l.beser.present[2]} ${l.adjective(l.yellow, "sg", l.wine)} ${l.or} ${l.adjective(l.orange, "sg", l.wine)}`,
            `sentence@${l.green}`,
            `vocab@color`,
            `vocab@whatq`,
            `sentence@${l.q}${l.whatq} ${l.color} ${l.beest.present[2]} ${l.noun("the", l.car, l.small)}?`,
            `translate@${l.blue}`,
        ],
    ].map(q => q.filter(w => w))
    x = lessons[lNumber][pNumber].toLowerCase()
    for(y of Object.entries(l.contractions)) x = x.replace(`${y[0]}`, `${y[1]}`)
    for(y of Object.entries(languages[firstLanguage].contractions)) x = x.replace(`${y[0]}`, `${y[1]}`)
    return x
}

function render(){
    material = returnLesson(lessonNumber, partNumber, secondLanguage)
    type = material.split("@")[0]
    content = material.split("@")[1]
    if(type == "vocab"){
        word.style.display = "block"
        definition.style.display = "block"
        info.style.display = "block"
        enter.style.display = "none"
        verb.style.display = "none"
        input.style.color = "#002b36"
        input.readOnly = true
        input.style.textAlign = "center"
        input.value = `[${f.enter}] ${f.parato} ${f.continue}`
        if(content.includes("~")){
            word.textContent = languages[secondLanguage][content.split("~")[0]][content.split("~")[1]][+content.split("~")[2]]
            definition.textContent = languages[firstLanguage][content.split("~")[0]][content.split("~")[1]][+content.split("~")[2]]
            info.textContent = ""
        }
        else{
            word.textContent = languages[secondLanguage][content]
            definition.textContent = languages[firstLanguage][content]
            info.textContent = specialDefinition[content] ?? ""
            if(nounlist.includes(content) && l.grammaticalGender) info.textContent = `(${l.gender(l[content]) == "f" ? f.feminine : f.masculine})`
        }
    }
    else if(type == "sentence" || type == "translate"){
        for(block of ["word", "definition", "info", "enter", "input"]) document.getElementById(block).style.display = "block"
        verb.style.display = "none"
        input.value = ""
        input.style.textAlign = "left"
        input.placeholder = `${f.write} ${f.here}`
        input.readOnly = false
        enter.textContent = f.submit
        verb.style.display = "none"
        word.textContent = type == "sentence" ? content : returnLesson(lessonNumber, partNumber, firstLanguage).split("@")[1]
        definition.textContent = `${f.translate} ${f.to} ` + (type == "sentence" ? languages[firstLanguage][firstLanguage] : languages[firstLanguage][secondLanguage])
        info.textContent = ""
    }
    else if(type == "verb"){
        input.value = `[${f.enter}] ${f.parato} ${f.continue}`
        verb.style.display = "block"
        word.style.display = "none"
        definition.style.display = "none"
        info.style.display = "none"
        infinitivenative.textContent = l[content.split("~")[0]].infinitive + " [" + content.split("~")[1] + "]"
        infinitiveenglish.textContent = `(${languages[firstLanguage][content.split("~")[0]].infinitive})`
        verb1s.textContent = l.i + " " + l[content.split("~")[0]][content.split("~")[1]][0]
        verb1p.textContent = l.wem + " " + l[content.split("~")[0]][content.split("~")[1]][3]
        verb2s.textContent = l.yousg + " " + l[content.split("~")[0]][content.split("~")[1]][1]
        verb2p.textContent = l.youplinf + " " + l[content.split("~")[0]][content.split("~")[1]][4]
        verb3s.textContent = l.he + "/" + l.she + " " + l[content.split("~")[0]][content.split("~")[1]][2]
        verb3p.textContent = l.theym + " " + l[content.split("~")[0]][content.split("~")[1]][5]
    }
    else if(type == "text"){
        input.value = "[enter] to continue"
        verb.style.display = "none"
        info.style.display = "none"
        word.style.display = "none"
        definition.textContent = content
    }
}
//render()

document.addEventListener('keydown', (e) => {if(e.code == "Enter") enterFunction()})

function enterFunction(){
    console.log('bruh')
    if(["vocab", "verb", "text"].includes(type) || input.value.includes(f.enter)){
        console.log('h')
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
        if(input.value == ""){
            input.classList.add("angryinput")
            input.placeholder = `${f.please} ${f.write} ${f.here}...`
        }
        else{
            input.classList.remove("angryinput")
            input.placeholder = `${f.write} ${f.here}`
            input.readOnly = true
            enter.style.display = "none"
            z = input.value.toLowerCase()
            for(y of Object.entries(languages[firstLanguage].contractions)) z = z.replace(`${y[0]}`, `${y[1]}`)
            answer = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            prodropanswer = firstLanguage == "en" ? "" : answer.replace(f.i, "").replace(f.yousg, "").replace(f.we, "").trim()
            if(z == answer || z == prodropanswer){
                input.style.color = "#268bd2"
                input.value = `${f.correct}, [${f.enter}] ${f.parato} ${f.continue}`
            }
            else{
                input.style.color = "#dc322f"
                input.value = `${f.incorrect}, [${f.enter}] ${f.parato} ${f.continue}`
                definition.textContent = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            }
        }
    }
}
function firstLangSelect(ln){
    document.getElementById(firstLanguage + "1").style.backgroundColor = "#fdf6e3"
    document.getElementById(firstLanguage + "2").style.display = "inline"
    firstLanguage = ln
    f = languages[firstLanguage]
    if(firstLanguage == secondLanguage){
        secondLanguage = (firstLanguage == "es") ? "en" : "es"
        document.getElementById(firstLanguage + "2").style.backgroundColor = "#fdf6e3"
        document.getElementById(secondLanguage + "2").style.backgroundColor = "#d33682"
    }
    lang1.textContent = `${f.yousg} ${f.speak.present[1]}:`,
    lang2.textContent = `${f.yousg} ${f.want.present[1]} ${f.learn.infinitive}:`,
    lev.textContent = `${f.select} ${f.noun("asg", f.level)}`
    for(v in Array.from(document.getElementById('levelselector').children)) document.getElementById("b" + v).textContent = "lvl " + (+v + 1) + ": " + [`${f.introduction}`, `${f.adjective('plural', 'mp')}`, `${f.have.infinitive}`, `${f.food}/${f.plural(f.color)} 1`][v]
    for(v of Array.from(document.getElementById('selector1').children)) v.textContent = f[v.id.slice(0, -1)]
    for(v of Array.from(document.getElementById('selector2').children)) v.textContent = f[v.id.slice(0, -1)]
    document.getElementById(ln + "1").style.backgroundColor = "#d33682"
    document.getElementById(ln + "2").style.display = "none"
}
function secondLangSelect(ln){
    document.getElementById(secondLanguage + "2").style.backgroundColor = "#fdf6e3"
    secondLanguage = ln
    document.getElementById(ln + "2").style.backgroundColor = "#d33682"
}
function levelSelect(nm){
    home.style.display = "none"
    lesson.style.display = "block"
    lessonNumber = nm
    partNumber = 0
    render()
}