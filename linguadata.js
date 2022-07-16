//an = Aragonese | Aragonés
//es = Spanish | Español
//mwl = Mirandese | Mirandés
//ovd = Elfdalian | Övdalską
//pt = Portuguese | Português
//sv = Swedish | Svenska

lessons = {
    "sv=>ovd": [
        [   
            "Introduction",
            "Word = kall|kalln|m = man",
            "Word = ig = jag",
            "Verb = wårå = är",
            "Explanation = To say 'a/an', we use the words 'ie', 'ien', 'įe' for neutral, male, and female nouns respectively.",
            "TranslateH = mannen = kalln",
            "Word = kelingg|kelindję|f = kvinna",
            "TranslateE = Ig ir ien kall = Jag är en man",  
            "Word = kelingg|kelindję|f = kvinna",
            "TranslateE = Du ir įe kelingg = Du är en kvinna",   
            "Word = war = var",
            "Word = jär = här",
            "TranslateE = War ir kalln? = Var är mannen?",   
            "TranslateH = Mannen är här = Kalln ir jär",   
        ],
        [
            "Food",
            "Word = eppel|eppleð|n = äpple",
            "Word = bröð = bröd",
            "Verb = åvå = har",
            "TranslateH = Jag har = Ig ar",
            "Explanation = Drop subjects before verbs if the subject is a plural pronoun.",
            "TranslateE = An ar iet eppel og bröð = Han har ett äpple och bröd",  
            "Word = ą̊ = hon",
            "Word = frukuostn = frukosten",
            "Word = int = inte",
            "TranslateE = Amm frukuostn = Vi har frukosten",    
            "TranslateE = Ą̊ ar int eppleð = Hon har inte äpplet",   
            "TranslateE = Iet eppel ir įe frukt = Ett äpple är en frukt",   
            "TranslateH = Vi har äpplet = Amm eppleð",
        ],
        [
            "Questions",
            "Word = war = var",
            "Word = Swerre = Sverige",
            "TranslateE = War ir skauln? = Var är skolan?",
            "Word = liker = älskar",
            "Word = wiso = varför",
            "TranslateH = Varför är han i Sverige? = Wiso ir an i Swerre?",  
            "Word = ukin = vem" ,
            "TranslateE = Jag älskar Älvdalen = Ig liker Övdaln",
            "TranslateH = Vem är Astrid? = Ukin ir Astrid?",
        ],
        [
            "Places",
            "Word = lärer = lär",
            "TranslateE = Ig lärer mig dalska = Jag lär mig älvdalska",
            "Word = Menn = Min",
            "Explanation = Possessive words like 'menn' come after a noun, not before like in Swedish",
            "Word = Finnland = Finland",
            "Word = dalska = älvdalska",
            "TranslateH = Kvinna ir i Finland = Kelingg ir i Finnland",
            "Word = eld = eller",
            "Word = från = frą̊",
            "Word = faðer = pappa",
            "Word = på = ą̊",
            "TranslateH = Är hon från Finland eller Sverige? = Ir ą̊ frą̊ Finnland eld Swerre?",   
            "Word = swensker = pratar svenska",
            "Word = wet = vet / vet att",
            "TranslateH = Min pappa kan inte älvdalska = Faðer menn kann int dalska",
            "TranslateE = Björn swensker min mig = Björn pratar svenska med mig",   
            "TranslateH = Jag vet att de pratar svenska på Åland = Ig wet dier swensk ą̊ Åland",   
        ],
    ],
    "es=>an": [
        [
            "Introducción",
            "Word = muller = mujer",
            "Word = a = la",
            "TranslateH = la mujer = a muller",
            "Verb = estar = estar/ser",
            "Explanation = no hay distinción entre ser y estar en aragonés, 'estar' tiene los dos significados",
            "TranslateH = estás = yes",
            "TranslateH = soy = soi",
            "Word = o = el",
            "TranslateE = o gato ye aquí = el gato está aquí",
            "TranslateE = él ye con o gato? = ¿él está con el gato?",
        ],
        [
            "Frutas",
            "Verb = tener = tener",
            `Explanation = la palabra "o" se convierte en "l'" antes de un vocal`,
            "Word = hombre = hombre",
            "TranslateE = l'hombre = el hombre",
            "Word = mazana = manzana",
            "TranslateH = la mujer tiene la manzana = a muller tien a mazana",
            "Word = uga = uva",
            "TranslateE = as ugas son en a mía casa = las uvas están en mi casa",
            "Word = ocián = océano",
            "TranslateE = estoy en el océano = soi en l'oceano",
        ],
    ],
    "pt=>mwl": [
        [            
            "Introdução",
            "Word = home = homem",
            "Word = tie = mulher",
            "TranslateE = sou um home = sou um homem",
            "Verb = ser = ser",
            "Word = Pertual = Portugal",
            "TranslateE = semos de Pertual = somos de Portugal",
            `Explanation = "de" torna-se "d'" na frente de uma vogal`,
            "Word = adonde = ónde",
            "TranslateH = De ónde es? = D'adonde sós?",
            "Word = la = a",
            "TranslateE = la tie fala pertués = a mulher fala português",
            "TranslateH = é = ye",
        ],
        [
            "Frutas",
            "Word = = ",
            "Verb = tener = ter",
            "Explanation = 'com' + 'o' è cul",
            "TranslateE = Eilha está cul home = Ela está com o homem",
            "Word = maçana = maçã",
            "Word = burmeilho = vermelho",
            "TranslateE = Tengo ua fruta burmeilha = Tenho uma fruta vermelha",
            "TranslateE = El sabe mirandés ou anglés? = Ele sabe mirandês ou inglês?"
        ],
    ]
}
verbs = {
    an: {
        estar: ["soi", "yes", "ye", "somos", "sotz", "son"],
        tener: ["tiengo", "tiens", "tien", "tenemos", "tenetz", "tienen"],
    },
    mwl: {
        ser: ["sou", "sós", "ye", "somos", "sodes", "son"],
        star: ["stou", "stás", "stá", "stamos", "stais", "stan"],
        tener: ["tengos", "tenes", "ten", "tenemos", "teneis", "ténen"],
    },
    ovd: {
        wårå: ["ir", "ir", "ir", "irum", "irið", "irå"],
        åvå: ["ar", "ar", "ar", "amm", "amið", "åvå"],
    },
}

pronouns = {
    an: ["yo", "tú", "él/ella", "nusatros/as", "vusatros/as", "éls/ellas"],
    mwl: ["you", "tu", "el/eilha", "nós", "bós", "eilhes/as"],
    ovd: ["ig", "du", "an/ą̊", "wįð", "ið", "dier"],
}

autonym = {
    an: "Aragonés",
    mwl: "Mirandés",
    ovd: "Övdalską",
}

summary = {
    an: "Nuestro idioma aragonés ha sobrevivido por muchos siglos, pero ahora está en peligro debido a la asimilación. La situación es difícil, pero ahora usted tiene la oportunidad de aprender la lengua materna de Aragón. ¡Buena suerte!",
    mwl: "Muitas línguas têm orgulho dos seus pergaminhos antigos, da literatura escrita há centenas de anos e de escritores muito famosos, hoje bandeiras dessas línguas. Mas há outras que não podem ter orgulho de nada disso, como é o caso da língua mirandesa. Você é o futuro da nossa língua.",
    ovd: "Our Elfdalian language has survived for a thousand years, but now outside modern influences threaten to assimilate our river valley into the mainstream Swedish language. The situation of Elfdalian is dire compared to most languages in the world, but not all hope is lost! With the use of technology, our new generation can redeem the Elfdalian language and bring it to new heights. Come, learn the tongue of your ancestors, and help preserve it for the future.",
}

submitButtonTranslations = {
    es: "enviar",
    pt: "enviar",
    sv: "överlämna",
}
typeHereTranslations = {
    es: "escribe aquí",
    pt: "escreve aquí",
    sv: "skriv här",
}

continueTranslations = {
    es: "continuar",
    pt: "prosseguir",
    sv: "fortsätta",
}

definitionTranslations = {
    es: "definición",
    pt: "definição",
    sv: "definition",
}
