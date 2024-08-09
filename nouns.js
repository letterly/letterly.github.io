function changelangtodecline(ourlang){
    enternoun.value = {
        "en": "crisis",
        "eo": "virino",
        "es": "lápiz",
        "scn": "agugghia",
    }[ourlang]
    decline()
}

function decline(){
    ourlang = langtodecline.value
    singular = enternoun.value.toLowerCase()
    if(singular.trim() == ""){
        englishnoun.innerHTML = ""
        return 0
    }
    if(ourlang == "en"){
        irregularnouns = {
            "alga": "algae",
            "alumna": "alumnae",
            "alumnus": "alumni",
            "antenna": "antennae",
            "aorta": "aortae/aorta",
            "apparatus": "apparatus/apparatusses/appartatus",
            "aurora": "aurorae/auroras",
            "buffalo": "buffalo/buffaloes",
            "bus": "bus/busses",
            "calf": "calves",
            "child": "children",
            "clitoris": "clitorises/clitorides",
            "coccyx": "coccyges",
            "die": "dice",
            "dormouse": "dormice",
            "dwarf": "dwarfs/dwarves",
            "echo": "echoes",
            "elf": "elfs/elves",
            "foot": "feet",
            "formula": "formulae/formulas",
            "goose": "geese",
            "hemiclitoris": "hemiclitorises/hemiclitorides",
            "hero": "heroes",
            "hoof": "hooves/hoofs",
            "impetigo": "impetigos/impetigoes/impetigines",
            "index": "indices/indexes",
            "larva": "larvae",
            "leaf": "leaves",
            "lentigo": "lentigos/lentigines",
            "loch": "lochs",
            "louse": "lice",
            "mouse": "mice",
            "octopus": "octopuses/octopusses/octopodes/octopi",
            "ox": "oxen",
            "person": "people/persons",
            "passerby": "passersby",
            "penny": "pennies/pence",
            "persona non grata": "personae non gratae",
            "phalanx": "phalanxes/phalanges",
            "potato": "potatoes",
            "staff": "staffs/staves",
            "testudo": "testudos/testudoes/testudines",
            "tooth": "teeth",
            "tomato": "tomatoes",
            "volcano": "volcanoes/volcanos",
            "zero": "zeroes/zeros",
        }

        noplural = ["fish", "deer", "sheep", "elk", "bison", "salmon", "trout", "cod", "moose", "squid", "pike"]

        if(Object.keys(irregularnouns).includes(singular)){
            plural = irregularnouns[singular]
        }
        else if(noplural.includes(singular) || singular.endsWith("ies")){
            plural = singular
        }
        else if(singular.endsWith("polis")){
            plural = singular.slice(0, -2) + "eis"
        }
        else if(singular.endsWith("man")){
            plural = singular.slice(0, -3) + "men"
        }
        else if(singular.endsWith("is")){
            plural = singular.slice(0, -2) + "es"
        }
        else if(singular.endsWith("nx")){
            plural = singular.slice(0, -1) + "ges/" + singular + "es"
        }
        else if(singular.endsWith("fe")){
            plural = singular.slice(0, -2) + "ves"
        }
        else if(singular.endsWith("ex") || singular.endsWith("ix")){
            plural = singular.slice(0, -2) + "ices"
        }
        else if(singular.endsWith("ax")){
            plural = singular.slice(0, -2) + "aces/" + singular + "es" 
        }
        else if(singular.endsWith("us") && singular.length > 3){
            plural = singular.slice(0, -2) + "i/" + singular + "es"
        }
        else if(singular.endsWith("um") && singular.length > 3){
            plural = singular.slice(0, -2) + "a/" + singular + "s"
        }
        else if("sxz".includes(singular.slice(-1)) || singular.endsWith("ch") || singular.endsWith("sh")){
            plural = singular + "es"
        }
        else if(singular.endsWith("ay") || singular.endsWith("ey") || singular.endsWith("oy")){
            plural = singular + "s"
        }
        else if("y" == singular.slice(-1)){        
            plural = singular.slice(0, -1) + "ies"
        }
        else{
            plural = singular + "s"
        }

        englishnoun.innerHTML = 
        `<thead>
            <tr>
                <th>Singular</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${singular}</td>
                <td>${plural}</td>
            </tr>
        </tbody>`
    }
    else if(ourlang == "eo"){
        englishnoun.innerHTML = 
        `<thead>
            <tr>
                <th></th>
                <th>Singular</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Nominative</th>
                <td>${singular}</td>
                <td>${singular}j</td>
            </tr>
            <tr>
                <th>Accusative</th>
                <td>${singular}n</td>
                <td>${singular}jn</td>
            </tr>
        </tbody>`
    }
    else if(ourlang == "es"){
        if(singular.endsWith("z")){ //-Z+CES
            plural = singular.slice(0,-1) + "ces"
        }
        else if(singular.endsWith("ín")){//-ÓN+ONES
            plural = singular.slice(0,-2) + "ines"
        }
        else if(singular.endsWith("ón")){//-ÓN+ONES
            plural = singular.slice(0,-2) + "ones"
        }
        else if(singular.endsWith("és")){//-ÉS+ESES
            plural = singular.slice(0,-2) + "eses"
        }
        else if(singular.endsWith("amen")){//-AMEN+ÁMENES
            plural = singular.slice(0,-2) + "ámenes"
        }
        else if(singular.endsWith("oven")){//-OVEN+ÓVENES
            plural = singular.slice(0,-2) + "óvenes"
        }
        else if(singular.endsWith("imen")){//-IMEN+ÍMENES
            plural = singular.slice(0,-2) + "ímenes"
        }
        else if( //-
            "sx".includes(singular.slice(-1)) ||
            ["st", "zt"].includes(singular.slice(-2)) ||
            ("lrndzj".includes(singular.slice(-1)) &&
            singular.length >= 7 &&
            ("áéíóú".includes(x.slice(-7, -6)) || "áéíóú".includes(x.slice(-6, -5))))
        ){
            plural = singular
        }
        else if( //+ES
            "dhjlnr".includes(singular.slice(-1)) || 
            "sz".includes(singular.slice(-1)) && singular.length == 3 ||
            ["sí", "no", "club", "álbum", "espécimen"].includes(singular)
        ){
            plural = singular + "es"
        }
        else if( //+ES/+S
            "íú".includes(singular.slice(-1)) ||
            singular == "yo"
        ){
            plural = singular + "es/" + singular + "s"
        }
        else{ //+S
            plural = singular + "s"
        }
    
    
        englishnoun.innerHTML =
            `<thead>
                <tr>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${singular}</td>
                    <td>${plural}</td>
                </tr>
            </tbody>`
    }
    else if(ourlang == "scn"){
        if(singular.endsWith("iu")) plural = singular.slice(0, -1)
        else if(singular.endsWith("ia")) plural = singular.slice(0, -1)
        else if(singular[singular.length - 2] == "c") plural = singular.slice(0, -1) + "hi"
        else if(singular.endsWith("i") || singular.endsWith("à")) plural = singular
        else plural = singular.slice(0, -1) + "i"
        englishnoun.innerHTML = 
        `<thead>
            <tr>
                <th>Singular</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${singular}</td>
                <td>${plural}</td>
            </tr>
        </tbody>`
    }
}

changelangtodecline(langtodecline.value)