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
        english: "english",
        spanish: "spanish",
        portuguese: "portuguese",
        italian: "italian",
        french: "french",
        galician: "galician",
        catalan: "catalan",
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
            else if(article == "apl") return d + l.plural(noun)
            else if(article == "thesg") return "the" + d + noun
            else return "the" + d + l.plural(noun)
        },
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
        english: "inglés",
        spanish: "español",
        portuguese: "portugués",
        italian: "italiano",
        french: "francés",
        galician: "galego",
        catalan: "catalán",
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
        contractions: {"de el": "del", "a el": "al"}, //complete
        plural: function(word){  //complete
            if(word.endsWith("s")) return word
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else return word + "es"
        },
        adjective: function(word, type){ //[basically] complete
            if(type.endsWith("plf")) return (word.endsWith("o") ? word.slice(0, -1) + "as" : word + "es")
            else if(type.endsWith("sgf")) return word.endsWith("o") ? word.slice(0, -1) + "a" : word
            else if(type.endsWith("plm")) return (word.endsWith("o") ? word + "s" : word + "es")
            else return word
        },
        negativeVerb: function(verb){return `no ${verb}`},
        gender: function(noun){
            if("oe".includes(noun.slice(-1))) return "m"
            else return "f"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun) + " " + l.adjective(adjective, article)
            else return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun)
        },
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
        english: "inglês",
        spanish: "espanhol",
        portuguese: "português",
        italian: "italiano",
        french: "francês",
        galician: "galego",
        catalan: "catalão",
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
        plural: function(word){ 
            if(word.endsWith("s")) return word
            else if(word.endsWith("al")) return word.slice(0, -1) + "is"
            else return word + "s"
        },
        adjective: function(word, type, noun){ 
            if(noun != undefined) type += l.gender(noun)
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
            if(adjective != undefined) return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun) + " " + l.adjective(adjective, article)
            else return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun)
        },
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
        english: "inglés",
        spanish: "español",
        portuguese: "portugués",
        italian: "italiano",
        french: "francés",
        galician: "galego",
        catalan: "catalán",
        //
        contractions: {"a o": "ao","a os": "aos","a a": "á", "a as": "ás", "de o": "do", "de a": "da", "de os": "dos", "de as": "das", "en o": "no", "en a": "na", "en os": "nos", "en as": "nas"}, //incomplete
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
        plural: function(word){ 
            if(word.endsWith("s")) return word
            else if("aeiou".includes(word.slice(-1))) return word + "s"
            else if(word.endsWith("al")) return word.slice(0, -1) + "is"
            else return word + "es"
        },
        adjective: function(word, type, noun){
            if(noun != undefined) type += l.gender(noun)
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
            if(adjective != undefined) return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun) + " " + l.adjective(adjective, article)
            else return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun)
        },
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
        english: "inglese",
        spanish: "spagnolo",
        portuguese: "portoghese",
        italian: "italiano",
        french: "francese",
        galician: "galiziano",
        catalan: "catalano",
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
        contractions: {"il u": "l'u"}, //incomplete
        plural: function(word){ 
            if(word.endsWith("o")) return word.slice(0, -1) + "i"
            else if(word == "uomo") return "uomini"
            else return word.slice(0, -1) + "e"
        },
        adjective: function(word, type, noun){ 
            if(noun != undefined) type += l.gender(noun)
            if(type.endsWith("plf")){
                if(word.endsWith("e")) return word.slice(0, -1) + "i"
                else return word.slice(0, -1) + "e"
            }
            else if(type.endsWith("sgf")){
                if(word.endsWith("e")) return word
                else return word.slice(0, -1) + "a"
            }
            else if(type.endsWith("plm")) return word.slice(0, -1) + "i"
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
            if(adjective != undefined) return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun) + " " + l.adjective(adjective, article)
            else return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun)
        },
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
        english: "anglais",
        spanish: "espanol",
        portuguese: "portugais",
        italian: "italien",
        french: "français",
        galician: "galicien",
        catalan: "catalan",
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
        contractions: {"je a": "j'a", "le h": "l'h", "à le": "au"}, //incomplete
        plural: function(word){ 
            if(word.endsWith("eu")) return word + "x"
            else if("sxz".includes(word.slice(-1))) return word
            else return word + "s"
        },
        adjective: function(word, type, noun){
            if(noun != undefined) type += l.gender(noun)
            return word + {"fp": "es", "fs": "e", "mp": "s", "ms": ""}[type]
        },
        nA: function(noun, adj){return `${noun} ${adj}`},
        negativeVerb: function(verb){return `ne ${verb} pas`},
        gender: function(noun){
            if("homme" == noun) return "m"
            else if(noun.endsWith("e")) return "f"
            else return "m"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun) + " " + l.adjective(adjective, article)
            else return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun)
        },
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
        english: "anglès",
        spanish: "espanyol",
        portuguese: "portuguès",
        italian: "italià",
        french: "francès",
        galician: "gallec",
        catalan: "català",
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
        //
        contractions: {"a el": "al","de el": "del","per el": "pel"}, //incomplete
        //
        plural: function(word){return `${word}s`},
        adjective: function(word, type, noun){ 
            if(noun != undefined) type += l.gender(noun)
            if(type.endsWith("plf")) return word + "es"
            else if(type.endsWith("sgf")) return word + "a"
            else if(type.endsWith("plm")) return word + "s"
            else return word
        },
        nA: function(noun, adj){return `${noun} ${adj}`},
        negativeVerb: function(verb){return `no ${verb}`},
        gender: function(noun){
            if(noun.endsWith("a") || noun.endsWith("tat")) return "f"
            else return "m"
        },
        noun: function(article, noun, adjective){
            if(adjective != undefined) return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun) + " " + l.adjective(adjective, article)
            else return l[article + l.gender(noun)] + " " + (article.endsWith("pl") ? l.plural(noun) : noun)
        },
    },
}

firstLanguage = "en"
secondLanguage = "es"
type = ""
l = languages[secondLanguage]
nounlist = ["woman", "beer", "city", "man", "cat", "park", "apple", "banana", "car", "dog", "bear", "cat", "sauce", "wine"]
lessonNumber = 0
partNumber = 0
function returnLesson(lNumber, pNumber, theLanguage){
    l = languages[theLanguage]
    lessons = [
        [ //Introduction
            "vocab@I",
            "vocab@Man",
            "vocab@beser~present~0",
            `sentence@${l.i}`,
            "vocab@ASgM",
            `sentence@${l.i} ${l.beser.present[0]} ${l.noun("asg", l.man)}`,
            "vocab@Woman",
            "vocab@ASgF",
            `sentence@${l.woman}`,
            `sentence@${l.i} ${l.beser.present[0]} ${l.noun("asg", l.woman)}`,
            "vocab@He",
            "vocab@beser~present~2",
            `sentence@${l.he} ${l.beser.present[2]} ${l.noun("asg", l.man)}`,
            "vocab@She",
            `translate@${l.she} ${l.beser.present[2]} ${l.noun("asg", l.woman)}`,
            "vocab@And",
            "vocab@Or",
            "vocab@YouSg",
            `translate@${l.noun("asg", l.woman)} ${l.and} ${l.noun("asg", l.man)}`,
            `sentence@${l.yousg} ${l.or} ${l.i}`,
        ],
        [ //Adjectives
            "vocab@park",
            `text@in ${l.name}, the form of a verb is determined by its subject`,
            //
            //
            //
            //
            //
            "verb@beser~present",
            "vocab@small",
            "vocab@tall",
            `vocab@thesgm`,
            `vocab@thesgf`,
            `translate@${l.noun("thesg", l.man)}`,
            `vocab@theplf`,
            `vocab@theplm`,
            `sentence@${l.noun("thepl", l.woman)}`,
            `translate@${l.i} ${l.beser.present[0]} ${l.noun("thepl", l.man)}`,
            `text@adjectives change according to the subject's gender and number`,
            `sentence@${l.noun("asg", l.park, l.small)}`,
            `vocab@city`,
            `translate@${l.noun("asg", l.woman)} ${l.in} ${l.noun("asg",l.city, l.small)}`,
            `vocab@now`,
            `sentence@${l.now} ${l.he} ${l.beser.present[2]} ${l.noun("asgm", l.man)}`,
            `sentence@${l.noun("thepl", l.woman)} ${l.beser.present[5]} ${l.adjective(l.tall, "pl", l.woman)}`,
            `translate@${l.noun("thesg", l.man)} ${l.beser.present[5]} ${l.adjective(l.small, "sg", l.man)}`,
        ],
        [ //to have
            `text@usually just add -s or -es to make something plural`,
            `sentence@${l.plural(l.man)}`,
            "vocab@apple",
            `translate@${l.plural(l.woman)}`,
            "vocab@car",
            "verb@have~present",
            `sentence@${l.she} ${l.have.present[2]} ${l.noun("asg", l.car)}`,
            ((secondLanguage != "fr" || ["fr", "en"].includes(firstLanguage)) ? "text@the verb 'estar' is verb that signifies 'to be' but it is only used for locations and emotions" : ""),
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
        input.value = "[enter] to continue"
        if(content.includes("~")){
            word.textContent = languages[secondLanguage][content.split("~")[0]][content.split("~")[1]][+content.split("~")[2]]
            definition.textContent = languages.en[content.split("~")[0]][content.split("~")[1]][+content.split("~")[2]]
            info.textContent = ""
        }
        else{
            word.textContent = languages[secondLanguage][content]
            definition.textContent = languages.en[content]
            info.textContent = specialDefinition[content] ?? ""
            console.log(content)
            console.log(nounlist.includes(content))
            if(l.gender(l[content]) == "f" && nounlist.includes(content)) info.textContent = "(feminine)"
            else if(l.gender(l[content]) == "m" && nounlist.includes(content)) info.textContent = "(masculine)"
        }
    }
    else if(type == "sentence" || type == "translate"){
        for(block of ["word", "definition", "info", "enter", "input"]) document.getElementById(block).style.display = "block"
        verb.style.display = "none"
        input.value = ""
        input.style.textAlign = "left"
        input.readOnly = false
        word.textContent = type == "sentence" ? content : returnLesson(lessonNumber, partNumber, firstLanguage).split("@")[1]
        definition.textContent = "translate this to " + (type == "sentence" ? "english" : languages[secondLanguage].name)
        info.textContent = ""
    }
    else if(type == "verb"){
        input.value = "[enter] to continue"
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
    if(["vocab", "verb"].includes(type) || input.value.includes("[enter]")){
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
            input.placeholder = "please write here..."
        }
        else{
            input.classList.remove("angryinput")
            input.placeholder = "write here, [enter] to submit"
            input.readOnly = true
            enter.style.display = "none"
            z = input.value.toLowerCase()
            for(y of Object.entries(languages[firstLanguage].contractions)) z = z.replace(`${y[0]}`, `${y[1]}`)
            if(z == returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()){
                input.style.color = "#268bd2"
                input.value = "correct, [enter] to continue"
            }
            else{
                input.style.color = "#dc322f"
                input.value = "incorrect, [enter] to continue"
                definition.textContent = returnLesson(lessonNumber, partNumber, (type == "sentence" ? firstLanguage : secondLanguage)).split("@")[1].toLowerCase()
            }
        }
    }
}
function langSelect(ln){
    document.getElementById(secondLanguage).style.backgroundColor = "#fdf6e3"
    secondLanguage = ln
    document.getElementById(ln).style.backgroundColor = "#d33682"
}
function levelSelect(nm){
    home.style.display = "none"
    lesson.style.display = "block"
    lessonNumber = nm
    partNumber = 0
    render()
}