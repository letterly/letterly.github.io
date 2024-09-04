//Lang2numeralize = langtonumeralize.value
function numbergenerate(Lang2numeralize, context){
    numberlanguages = {
        "en": {
            numbers: [
                ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
                ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
                ['one hundred', "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"],  
            ],
            scale: ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion"],
            scale1: ["thousand", "million", "milliard", "billion", "billiard", "trillion", "trilliard", "quadrillion"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? "-" : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                if(W.trim() != W) alert("TRIM ERROR")
                if(W.endsWith("one")) return W.slice(0,-3) + "first"
                else if(W.endsWith("two")) return W.slice(0,-3) + "second"
                else if(W.endsWith("three")) return W.slice(0,-3) + "ird"
                else if(W.endsWith("eight")) return W + "h"
                else if(W.endsWith("nine")) return W.slice(0,-1) + "th"
                else if(W.endsWith("ve")) return W.slice(0,-2) + "fth"
                else if(W.endsWith("y")) return W.slice(0,-1) + "ieth"
                else return W + "th"
            }
        },
        be: {
            numbers: [
                ["нуль", "адзін", "два", "тры", "чатыры", "пяць", "шэсць", "сем", "восем", "дзевяць", "дзесяць", "адзінаццаць", "дванаццаць", "трынаццаць", "чатырнаццаць", "пятнаццаць", "шаснаццаць", "семнаццаць", "васемнаццаць", "дзевятнаццаць"],
                ["дваццаць", "трыццаць", "сорок", "пяцьдзесят", "шэсцьдзесят", "семдзесят", "восемдзесят", "дзевяноста"],
                ["сто", "дзвесце", "трыста", "чатырыста", "пяцьсот", "шэсцьсот", "семсот", "восемсот", "дзевяцьсот"]
            ],
            scale: ["тысяча/тысяч/тысячы", "мільён/мільёнаў/мільёны", "мільярд/мільярдаў/мільярды", "більён/більёнаў/більёны", "більярд/більярдаў/більярды", "трыльён/трыльёнаў/трыльёны", "квадрыльён/квадрыльёнаў/квадрыльёны"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " " : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                W = W.split(" ")
                W[W.length - 1] = {
                    "адзін": "першы",
                    "два": "другі",
                    "тры": "трэці",
                    "чатыры": "чацвёрты",
                    "пяць": "пяты",
                    "шэсць": "шосты",
                    "сем": "сёмы",
                    "восем": "восьмы",
                    "дзевяць": "дзевяты",
                    "дзесяць": "дзясяты",
                    "адзінаццаць": "адзінаццаты",
                    "дванаццаць": "дванаццаты",
                    "трынаццаць": "трынаццаты",
                    "чатырнаццаць": "чатырнаццаты",
                    "пятнаццаць": "пятнаццаты",
                    "шаснаццаць": "шаснаццаты",
                    "сямнаццаць": "сямнаццаты",
                    "васемнаццаць": "васемнаццаты",
                    "дзевятнаццаць": "дзевятнаццаты",
                    "дваццаць": "дваццаць першы",
                    "трыццаць": "трыццаты",
                    "сорак": "соракавы",
                    "пяцьдзесят": "пяцідзесяты",
                    "шэсцьдзесят": "шасцідзесяты",
                    "семдзесят": "сямідзесяты",
                    "восемдзесят": "васьмідзесяты",
                    "дзевяноста": "дзевяносты",
                    "сто": "соты",
                    "дзвесце": "двухсоты",
                    "трыста": "трохсоты",
                    "чатырыста": "чатырохсоты",
                    "пяцьсот": "пяцісоты",
                    "шэсцьсот": "шасцісоты",
                    "семсот": "сямісоты",
                    "восемсот": "васьмісоты",
                    "дзевяцьсот": "дзевяцісоты",
                }[W[W.length - 1]]
                return W.join(" ")
            },
            cardinalLimit: 1000,
        },
        "fo": {
            "numbers": [
                ["null", "ein", "tvey", "trý", "fýra", "fimm", "seks", "sjey", "átta", "níggju", "tíggju", "ellivu", "tólv", "trettan", "fjúrtan", "fimtan", "sekstan", "seytjan", "átjan", "nítjan"],
                ["tjúgu", "tríati", "fjøruti", "fimmti", "seksti", "sjeyti", "áttati", "níti"],
                ["hundrað", "tveyhundrað", "trýhundrað", "fýrahundrað", "fimmhundrað", "sekshundrað", "sjeyhundrað", "áttahundrað", "níggjuhundrað"]
            ],
            "scale": ["túsund", "millión"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""}${H && (O || T) ? " og " : ""}${O ?? ""}${T && O ? " og " : ""}${T ?? ""}`
            },
        },
        "eo": {
            numbers: [
                ['nul', 'unu', 'du', 'tri', 'kvar', 'kvin', 'ses', 'sep', 'ok', 'naŭ'],
                ['dek', "dudek", "tridek", "kvardek", "kvindek", "sesdek", "sepdek", "okdek", "naŭdek"],
                ['cent', "ducent", "tricent", "kvarcent", "kvincent", "sescent", "sepcent", "okcent", "naŭcent"],  
            ],
            scale: ["mil", "miliono/milionoj", "miliardo/miliardoj", "duiliono/duilionoj", "duiliardo/duiliardoj", "triiliono/triilionoj", "triiliardo/triiliardoj", "kvariliono/kvarilionoj", "kvariliardo/kvariliardoj"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""} ${O ?? ""}`
            },
            toCardinal: W => `${W.replace(/ /g, "-")}a`.replace(/\-\-/g, "\-"),
        },
        "eo2": {
            numbers: [
                ['nul', 'unu', 'du', 'tri', 'kvar', 'kvin', 'ses', 'sep', 'ok', 'naŭ'],
                ['dek', "dudek", "tridek", "kvardek", "kvindek", "sesdek", "sepdek", "okdek", "naŭdek"],
                ['cent', "ducent", "tricent", "kvarcent", "kvincent", "sescent", "sepcent", "okcent", "naŭcent"],  
            ],
            scale: ["mil", "miliono/milionoj", "biliono/bilionoj", "triliono/trilionoj", "kvadriliono/kvadrilionoj", "kvintiliono/kvintilionoj", "sekstiliono/sekstilionoj", "septiliono/septilionoj", "oktiliono/oktilionoj"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""} ${O ?? ""}`
            },
            toCardinal: W => `${W.replace(/ /g, "-")}a`.replace(/\-\-/g, "\-"),
        },
        "eo3": {
            numbers: [
                ['nul', 'unu', 'du', 'tri', 'kvar', 'kvin', 'ses', 'sep', 'ok', 'naŭ'],
                ['dek', "dudek", "tridek", "kvardek", "kvindek", "sesdek", "sepdek", "okdek", "naŭdek"],
                ['cent', "ducent", "tricent", "kvarcent", "kvincent", "sescent", "sepcent", "okcent", "naŭcent"],  
            ],
            scale: ["mil", "miliono/milionoj", "miliardo/miliardoj", "biliono/bilionoj", "biliardo/biliardoj", "triliono/trilionoj", "triliardo/triliardoj", "kvadriliono/kvadrilionoj", "kvadriliardo/kvadriliardoj"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""} ${O ?? ""}`
            },
            toCardinal: W => `${W.replace(/ /g, "-")}a`.replace(/\-\-/g, "\-"),
        },
        "es": {
            specialnumber: {
                100: "cien",
            },
            numbers: [
                ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidos', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'],
                ["treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"],
                ['ciento', "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"],  
            ],
            scale: ["mil", "un millón/millones", "un millardo/millardos", "un billón/billones", "un billardo/billardos", "un trillón/trillones", "un trillardo/trillardos"],
            scale2: ["mil", "un millón/millones", "un billón/billones", "un trillón/trillones", "un cuatrillón/cuatrillones", "un quintillón/quintillones", "un sextillón/sextillones"],
            scale3: ["mil", "un millón/millones", "mil millones", "un billón/billones", "mil billones", "un trillón/trillones", "mil trillones"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " y " : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                W = W.replace(/ y/g, "").split(" ")
                lower = {
                    "uno": "primero",
                    "dos": "segundo",
                    "tres": "tercero",
                    "cuatro": "cuarto",
                    "cinco": "quinto",
                    "seis": "sexto",
                    "siete": "séptimo",
                    "ocho": "octavo",
                    "nueve": "noveno",
                    "diez": "décimo",
                    "once": "undécimo",
                    "doce": "duodécimo",
                    "trece": "decimotercero",
                    "catorce": "decimocuarto",
                    "quince": "decimoquinto",
                    "dieciséis": "decimosexto", 
                    "diecisiete": "decimoséptimo",
                    "dieciocho": "decimoctavo",
                    "diecinueve": "decimonoveno",
                    "veinte": "vigésimo",
                    "veintiuno": "vigesimoprimero",
                    "veintidos": "vigesimosegundo",
                    "veintitrés": "vigesimotercero",
                    "veinticuatro": "vigesimocuarto",
                    "veinticinco": "vigesimoquinto",
                    "veintiséis": "vigesimosexto",
                    "veintisiete": "vigesimoséptimo",
                    "veintiocho": "vigesimoctavo",
                    "veintinueve": "vigesimonoveno",
                    "treinta": "trigésimo",
                    "cuarenta": "cuadragésimo",
                    "cincuenta": "quincuagésimo",
                    "sesenta": "sexagésimo",
                    "setenta": "septuagésimo",
                    "ochenta": "octogésimo",
                    "noventa": "nonagésimo",
                    "cien": "centésimo",
                    "ciento": "centésimo",
                    "doscientos": "ducentésimo",
                    "trescientos": "tricentésimo",
                    "cuatrocientos": "cuadringentésimo",
                    "quinientos": "quingentésimo",
                    "seiscientos": "sexcentésimo",
                    "setecientos": "septingentésimo",
                    "ochocientos": "octingentésimo",
                    "novecientos": "noningentésimo",
                    "mil": "milésimo",
                }
                higher = {
                    "un": "un",
                    "millón": "millonésimo",
                    "millones": "millonésimo",
                    "millardo": "millardésimo",
                    "millardos": "millardésimo",
                    "billón": "billonésimo",
                    "billones": "billonésimo",
                    "billardo": "billardésimo",
                    "billardos": "billardésimo",
                    "trillón": "trillonésimo",
                    "trillones": "trillonésimo",
                    "trillardo": "trillardésimo",
                    "trillardos": "trillardésimo",
                    "cuatrillón": "cuatrillonésimo",
                    "cuatrillones": "cuatrillonésimo",
                    "quintillón": "quintillonésimo",
                    "quintillones": "quintillonésimo",
                    "sextillón": "sextillonésimo",
                    "sextillones": "sextillonésimo",
                }
                newW = []
                higherOrdinal = false
                for(V = 0; V < W.length; V++){
                    WW = W[W.length - (V + 1)]
                    if(lower[WW] != undefined){
                        if(higherOrdinal) newW.unshift(WW)
                        else{
                            if(WW.includes("il")) higherOrdinal = true
                            newW.unshift(lower[WW])
                        }
                    }
                    else if(higher[WW] != undefined){
                        newW.unshift(higher[WW])
                        higherOrdinal = true
                    }
                }
                
                return newW.join(" ")
            }
        },
        "ext": {
            specialnumber: {
                100: "cien",
            },
            numbers: [
                ['ceru', 'unu', 'dos', 'tres', 'quatru', 'cincu', 'seis', 'sieti', 'ochu', 'nuevi', 'dies', 'onzi', 'dozi', 'trezi', 'catorzi', 'quinzi', 'dezisseis', 'dezissieti', 'deziochu', 'dezinuevi', 'venti', 'ventiunu', 'ventidós', 'ventitrés', 'ventiquatru', 'venticincu', 'ventisseis', 'ventissieti', 'ventiochu', 'ventinuevi'],
                ["trenta", "quarenta", "cinqüenta", "sessenta", "setenta", "ochenta", "noventa"],
                ['cientu', "dozientus", "trezientus", "quatrucientus", "quiñentus", "seicientus", "setecientus", "ochocientus", "nuevecientus"],  
            ],
            scale: ["mil", "un millón/millonis"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? "-i-" : ""}${O ?? ""}`
            },
            cardinalLimit: 1000000000,
            
            toCardinal: function(W){
                return {
                    "unu": "primero",
                    "dos": "segundu",
                    "tres": "terceru",
                    "quatru": "quatru",
                    "cincu": "quintu",
                    "seis": "sestu",
                    "sieti": "sétimu",
                    "ochu": "otavu",
                    "nuevi": "nonu",
                    "dies": "dezenu",
                    "onzi": "onzenu",
                    "dozi": "dozenu",
                    "trezi": "trezenu",
                    "catorzi": "catorzenu",
                    "quinzi": "quinzenu",
                    "dezisseis": "sezenu",
                    "veinte": "venteñu",
                    "treinta": "trenteñu",
                    "quarenta": "quarenteñu",
                    "cinqüenta": "cinqüenteñu",
                    "sessenta": "sessenteñu",
                    "setenta": "setenteñu",
                    "ochenta": "ochenteñu",
                    "noventa": "noventeñu",
                    "cien": "centenariu",
                }[W] ?? ""
            }
            
        },
        "an": {
            specialnumber: {
                100: "cient",
            },
            numbers: [
                ['zero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siet', 'ueito', 'nueu', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'deciseis', 'decisiet', 'deciueito', 'decinueu', 'vinte', 'vintiun', 'vintidós', 'vintitrés', 'vinticuatro', 'vinticinco', 'vintiseis', 'vintisiet', 'vintiueito', 'vintinueu'],
                ["trenta", "cuaranta", "cincuanta", "sixanta", "setanta", "uitanta", "novanta"],
                ['ciento', "docientos", "trecientos", "cuatrocientos", "cincocientos", "seicientos", "sietecientos", "ueitocientos", "nueucientos"],  
            ],
            scale: ["mil", "millón/millons", "billón/billons"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " y " : ""}${O ?? ""}`
            },
        },
        "it": {
            "numbers": [
                ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"],
                ["venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"],
                ["cento", "duecento", "trecento", "quattrocento", "cinquecento", "seicento", "settecento", "ottocento", "novecento"]
            ],
            "scale": ["mille/mila", "milione/milioni", "miliardo/miliardi", "bilione/bilioni", "biliardo/biliardi", "trilione/trilioni", "triliardo/triliardi"],
            silentone: true,
            numconnector: function(H, T, O){
                if(T != undefined && O == "tre") O = "tré"
                if(T != undefined && ["uno", "otto"].includes(O)) T = T.slice(0, -1)
                return `${H ?? ""}${T ?? ""}${O ?? ""}`
            },
            thousandconnector: function(W){
                return W.split(" ").join("")
            },
            toCardinal: function(W){
                return {
                    "uno": "primo",
                    "due": "secondo",
                    "tre": "terzo",
                    "quattro": "quarto",
                    "cinque": "quinto",
                    "sei": "sesto",
                    "sette": "settimo",
                    "otto": "ottavo",
                    "nove": "nono",
                    "diece": "decimo",
                }[W] ?? W.slice(0, -1) + "esimo"

            }
        },
        "scn":  {
            "numbers": [
                ["zeru", "unu", "dui", "tri", "quattru", "cincu", "sei", "setti", "ottu", "novi", "deci", "ùnnici", "dùdici", "trìdici", "quattòrdici", "quìnnici", "sìdici", "dicissetti", "dicidottu", "dicinnovi"],
                ["vinti", "trenta", "quaranta", "cinquanta", "sissanta", "sittanta", "uttanta", "novanta"],
                ["centu", "ducentu", "tricentu", "quattrucentu", "cinquecentu", "seicentua", "settecentu", "ottocentu", "novecentu"]
            ],
            "scale": ["milli/mila", "miliuni/miliuna", "miliardu/miliardi"],
            silentone: true,
            numconnector: function(H, T, O){
                if(T != undefined && O == "ottu") T = T.slice(0,-1)
                return `${H ?? ""}${T ?? ""}${O ?? ""}`
            },
            thousandconnector: function(W){
                W = W.split(" ")
                if(W[0] == "dui") W[0] = "du"
                return W.join("")
            },
            toCardinal: function(W){
                
                lowcardinal = {
                    "unu": "primu",
                    "dui": "sicunnu",
                    "tri": "terzu",
                    "quattru": "quartu",
                    "cincu": "quintu",
                    "sei": "sestu",
                    "setti": "sèttimu",
                    "ottu": "uttavu",
                    "novi": "nonu",
                    "deci": "dècimu",
                }
                if(lowcardinal[W] != undefined) return lowcardinal[W]
                else{
                    W = W.slice(0, -1)
                    if(W.endsWith("c")) W += "h"
                    W += "èsimu"
                }
                return W

            }
        },
        osa: {
            numbers: [
                ['Zero does not exist in Osage', '𐓏𐒻́͘𐓐𐓊𐒻', '𐓏𐒷𐓍𐓂̋͘𐓄𐒰', '𐓏𐒷́𐓍𐒰̄𐒴𐒻͘', '𐓈𐓂̋𐓄𐒰', '𐓆𐒰́𐓉𐒰͘', '𐓇𐒰́𐓅𐒷', '𐓅𐒷̋𐓍𐓂̄͘𐓄𐒰', '𐒽𐒻𐒷𐓈𐓂̋𐓄𐒰', '𐒿𐒷́𐒴𐒰͘ 𐓋𐒷 𐓏𐒻̋͘𐒼𐒷'],
                ["𐒿𐒷́𐒴𐒰͘", "𐒿𐒷́𐒴𐒰͘ 𐓍𐓂̄͘𐓄𐒰́", "𐒿𐒷́𐒴𐒰͘ 𐓍𐒰̋𐒴𐒻͘", "𐒿𐒷́𐒴𐒰͘ 𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐓆𐒰́𐓉𐒰͘", "𐒿𐒷́𐒴𐒰͘ 𐓇𐒰́𐓅𐒷", "𐒿𐒷́𐒴𐒰͘ 𐓅𐒷́𐓍𐓂̄͘𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒽𐒻𐒷𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒿𐒷́𐒴𐒰͘ 𐓋𐒷 𐓏𐒻̋͘𐒼𐒷"],
                ['𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘', "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓍𐓂̄͘𐓄𐒰́", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓍𐒰̋𐒴𐒻͘", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓆𐒰́𐓉𐒰͘", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓇𐒰́𐓅𐒷", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐓅𐒷́𐓍𐓂̄͘𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐒽𐒻𐒷𐓈𐓂̋𐓄𐒰", "𐒿𐒷́𐒴𐒰͘ 𐒹𐓎̄𐓓𐒻́͘ 𐒿𐒷́𐒴𐒰͘ 𐓋𐒷 𐓏𐒻̋͘𐒼𐒷"],  
            ],
            scale: ["𐓓𐒰̋͘𐒽𐓂𐒼𐒷", "𐓏𐒰𐓍𐒰̋𐓏𐒰 𐓉𐒰́͘𐒼𐒷"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""}${T || O ? " 𐒰́𐒿𐒻̄͘ " : ""}${T ?? ""}${T && O ? " 𐒰́𐒿𐒻̄͘ " : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                return {
                    "𐓏𐒻́͘𐓐𐓊𐒻": "𐓅𐒰𐒹𐒰́͘𐒿𐒷",
                    "𐓏𐒷𐓍𐓂̋͘𐓄𐒰": "",
                    "𐓏𐒷́𐓍𐒰̄𐒴𐒻͘": "",
                    "𐓈𐓂̋𐓄𐒰": "𐓏𐒷́𐓈𐓂̄𐓄𐒰",
                    "𐓆𐒰́𐓉𐒰͘": "𐓏𐒷𐓆𐒰́𐓉𐒰͘",
                    "𐓇𐒰́𐓅𐒷": "𐓏𐒷𐓇𐒰́𐓅𐒷",
                }[W]
            },
            cardinalLimit: 7,
        },
        mk: {
            "numbers": [
                ["нула", "еден", "два", "три", "четири", "пет", "шест", "седум", "осум", "девет", "десет", "единаесет", "дванаесет", "тринаесет", "четиринаесет", "петнаесет", "шеснаесет", "седумнаесет", "осумнаесет", "деветнаесет"],
                ["дваесет", "триесет", "четириесет", "педесет", "шеесет", "седумдесет", "осумдесет", "деведесет"],
                ["сто", "двеста", "триста", "четиристотини", "петстотини", "шестстотини", "седумстотини", "осумстотини", "деветстотини"]
            ],
            "scale": ["илјада/илјади", "милион/милиони", "милијарда/милијарди", "трилион/трилиони", "квадрилион/квадрилиони", "квинтилион/квинтилиони", "секстилион/секстилиони"],
            silentone: true,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " и " : ""}${O ?? ""}`
            },
            thousandconnector: function(W){
                W = W.split(" ")
                if(W[W.length - 2] == "еден") W[W.length - 2] = "една"
                else if(W[W.length - 2] == "два") W[W.length - 2] = "две"
                return W.join(" ")
            },
            toCardinal: function(W){
                if(W.endsWith("еден")) return W.slice(0, -4) + "прв"
                else if(W.endsWith("два")) return W.slice(0, -3) + "втор"
                else if(W.endsWith("три")) return W.slice(0, -1) + "ет"
                else if(W.endsWith("четири")) return W.slice(0, -3) + "врт"
                else if(W.endsWith("шест")) return W + "и"
                else if(W.endsWith("ум")) return W.slice(0, -2) + "ми"
                else if(W.endsWith("т")) return W + "ти"
            },
            cardinalLimit: 100,
        },
        kk: {
            "numbers": [
                ["nöl", "bir", "eki", "üş", "tört", "bes", "altı", "jetı", "segız", "toğız"],
                ["on", "jırma", "otız", "qyrıq", "elw", "altmıs", "jetpıs", "sexsen", "toqsan"],
                ["bir jüz", "ekı jüz", "üş jüz", "tört jüz", "bes jüz", "altı jüz", "jetı jüz", "segız jüz", "toğız jüz"]
            ],
            "scale": ["mıñ", "million", "milliard", "trillion", "kvadrillion", "kvintillion", "sekstillion"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " " : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                if(W.slice(-2, -1) == "ı") return W + "ınşı"
                else if(W.endsWith("i")) return W + "nşi"
                else if(W.endsWith("ı") || W.endsWith("a")) return W + "nşı"
                else return W + "inşi"
            },
        },
        tk: {
            "numbers": [
                ["nol", "bir", "iki", "üç", "dört", "bäş", "alty", "ýedi", "sekiz", "dokuz", "on", "on bir", "on iki", "on üç", "on dört", "on bäş", "on alty", "on ýedi", "on sekiz", "on dokuz"],
                ["ýigrimi", "otuz", "kyrk", "elli", "altmyş", "ýetmiş", "seksen", "togsan"],
                ["ýüz", "iki ýüz", "üç ýüz", "dört ýüz", "bäş ýüz", "alty ýüz", "ýedi ýüz", "sekiz ýüz", "dokuz ýüz"]
            ],
            "scale": ["müň", "million", "milliard", "trillion", "kwadrillion", "kwintillion", "sekstillion"],
            silentone: false,
            numconnector: function(H, T, O){
                return `${H ?? ""} ${T ?? ""}${T && O ? " " : ""}${O ?? ""}`
            },
            toCardinal: function(W){
                if(W.slice(-2, -1) == "ü" || W.endsWith("d")) return W + "ünji"
                else if(W.endsWith("y")) return W + "njy"
                else return W + "ynjy"
            },
        },
        
    }
    N = numberlanguages[Lang2numeralize.split(".")[0]]
    eo = N.numbers[0]
    eo2 = N.numbers[1]
    eo3 = N.numbers[2]
    wrdnmbr = enterdigits.value
    if(wrdnmbr.trim() === "" || (isNaN(wrdnmbr))){
        generatednumber.innerHTML = "Enter a number"
        return 0
    }
    else if(+wrdnmbr === 0){
        newwrdnmbr= generatednumber.innerHTML = eo[0]
        return 0
    }
    function smallesperantoloop(wordnumber, cunt){
        if(Lang2numeralize.includes(".")){
            scall = N["scale" + Lang2numeralize.split(".")[1]][cunt - 1]
        }
        else{
            scall = N.scale[cunt - 1]
        }
        special = N.specialnumber
        newwordnumber = ""
        if(special?.[wordnumber] ?? false) newwordnumber = " " + special[wordnumber]
        else if(wordnumber == 0){
            return "" 
        }
        else if(wordnumber == 0 && arraywrdnmbr[cunt - 1] == 0 && cunt > 1){
            console.log(cunt)
            //figure this out idk
            switch(scall.split("/")){
                case 1:
                    bignum = scall
                    break
                case 2:
                    bignum = scall.split("/")[1]
                    break
                case 3:
                    bignum = scall.split("/")[2]
                    break
            }
            return " " + bignum
        }
        else if(wordnumber == 0){
            return ""
        }
        else if(cunt > 0 && wordnumber == 1 && N.silentone) newwordnumber = ""
        else if(wordnumber < eo.length){
            newwordnumber = eo[wordnumber]
        }
        else if(wordnumber <= 99){
            if(wordnumber % 10 == 0) newwordnumber = eo2[Math.floor(wordnumber / 10) - (eo.length / 10)]
            else newwordnumber = N.numconnector("", eo2[Math.floor(wordnumber / 10) - (eo.length / 10)], eo[wordnumber % 10])
        }
        else if(wordnumber <= 999){ //456, 405, 400, 450
            if(wordnumber % 100 == 0) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] //400
            else if(wordnumber % 100 < eo.length) newwordnumber = N.numconnector(eo3[Math.floor(wordnumber / 100) - 1], "", eo[Math.floor(wordnumber % 100)]) //405
            else if(wordnumber % 10 == 0) newwordnumber = eo3[Math.floor(wordnumber / 100) - 1] + " " + eo2[Math.floor(wordnumber % 100) / 10 - (eo.length / 10)] // 450
            else newwordnumber = N.numconnector(eo3[Math.floor(wordnumber / 100) - 1], eo2[Math.floor(wordnumber % 100 / 10) - (eo.length / 10)],eo[wordnumber % 10])//456
        }
        if(cunt > 0){
         
            scalar = " " + scall
            if(!scalar.includes("/")) newwordnumber += " " + scalar
            else if(wordnumber > 1){
                //slavic
                console.log(wordnumber)
                if(scalar.split("/").length == 3 && wordnumber % 10 >= 2 && wordnumber % 10 <= 4 && (wordnumber % 100 <= 4 || wordnumber % 100 >= 22)){
                    newwordnumber += " " + scalar.split("/")[2]
                }
                else{ //normal
                    newwordnumber += " " + scalar.split("/")[1]
                    if(N.thousandconnector != undefined && cunt == 1) newwordnumber = N.thousandconnector(newwordnumber)
                }

            }
            else newwordnumber += " " + scalar.split("/")[0]
        }
        return newwordnumber
    }


    arraywrdnmbr = []
    if(wrdnmbr.length < 4){
        arraywrdnmbr = [wrdnmbr]
    }
    else{
        wrdnmbr = wrdnmbr.split("")

        if(wrdnmbr.length % 3 == 1){
            arraywrdnmbr = [wrdnmbr[0]]
        }
        else if(wrdnmbr.length % 3 == 2){
            arraywrdnmbr = [`${wrdnmbr[0]}${wrdnmbr[1]}`]
        }
        for(xx = wrdnmbr.length % 3; xx < wrdnmbr.length; xx += 3){
            arraywrdnmbr.unshift(`${wrdnmbr[xx]}${wrdnmbr[xx + 1]}${wrdnmbr[xx + 2]}`)
        }
    }

    if(wrdnmbr.length > (N.scale.length + 1) * 3){
        generatednumber.innerHTML = "Too long...sorry"
    }
    else{
        newwrdnmbr = ""
        for([cnt, arrwnm] of arraywrdnmbr.entries()){
            SEL = smallesperantoloop(+arrwnm, cnt).trim()
            if(!(SEL.endsWith("mille") || SEL.endsWith("mila"))) SEL = SEL + " " 
            newwrdnmbr = SEL + newwrdnmbr
        }
        newwrdnmbr = newwrdnmbr.trim()

        if(Lang2numeralize == "es.3"){
            if(newwrdnmbr.includes("millón") && newwrdnmbr.includes("millones")){
                newwrdnmbr = newwrdnmbr.replace("millones ", "").replace("millón", "millones")
            }
            else if(newwrdnmbr.split("millones").length == 3){
                newwrdnmbr = newwrdnmbr.replace("millones ", "")
            }
            if(newwrdnmbr.includes("billón") && newwrdnmbr.includes("billones")){
                newwrdnmbr = newwrdnmbr.replace("billones ", "").replace("billón", "billones")
            }
            else if(newwrdnmbr.split("billones").length == 3){
                newwrdnmbr = newwrdnmbr.replace("billones ", "")
            }
            if(newwrdnmbr.includes("trillón") && newwrdnmbr.includes("trillones")){
                newwrdnmbr = newwrdnmbr.replace("trillones ", "").replace("trillón", "trillones")
            }
            else if(newwrdnmbr.split("trillones").length == 3){
                newwrdnmbr = newwrdnmbr.replace("trillones ", "")
            }
        }

        //ADD CAPTION TO DIFF WORDS FOR CONTEXT
        if(context != undefined){
            generatednumber.innerHTML += "<h3>" + context + "</h3>"
        }
        if(N.toCardinal != undefined && (N.cardinalLimit == undefined || N.cardinalLimit > +enterdigits.value)){
            generatednumber.innerHTML += "<small>ordinal</small>: " + newwrdnmbr
            generatednumber.innerHTML += N.toCardinal(newwrdnmbr) != "" ? "<br><small>cardinal</small>: " +  N.toCardinal(newwrdnmbr) : ""
        }
        else{
            generatednumber.innerHTML += newwrdnmbr
        }
    }
    generatednumber.innerHTML += "<br><br>"
}

function metanumbergenerate(Lang2numeralize){
    enterdigits.value = enterdigits.value.replace(/[-\.\,]/g, "")
    generatednumber.innerHTML = ""
    switch(Lang2numeralize){
        case "eo":
            if(enterdigits.value >= 10**12){
                numbergenerate("eo", "Esperantist System")
                numbergenerate("eo2", "Short Scale")
                numbergenerate("eo3", "Long Scale")
            }
            else if(enterdigits.value >= 10**9){
                numbergenerate("eo", "Esperantist System")
                numbergenerate("eo3", "Long Scale")
            }
            else{
                numbergenerate("eo")
            }
            break
        case "es": 
            if(enterdigits.value >= 10**9){
                numbergenerate("es.3", "Common Form")
                numbergenerate("es", "Economics")
                numbergenerate("es.2", "United States")
            }
            else{
                numbergenerate("es.3")
            }
            break
        case "en": 
            if(enterdigits.value >= 10**9){
                numbergenerate("en", "Short Scale")
                numbergenerate("en.1", "Long Scale")
            }
            else{
                numbergenerate("en")
            }
            break
        default:
            numbergenerate(Lang2numeralize)
            break
    }
}

metanumbergenerate(langtonumeralize.value)