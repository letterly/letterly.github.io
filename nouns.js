function decline(){
    singular = enternoun.value.toLowerCase()

    irregularnouns = {
        "alga": "algae",
        "alumna": "alumnae",
        "alumnus": "alumni",
        "antenna": "antennae",
        "aorta": "aortae/aorta",
        "aurora": "aurorae/auroras",
        "buffalo": "buffalo/buffaloes",
        "bus": "bus/busses",
        "calf": "calves",
        "child": "children",
        "clitoris": "clitorises/clitorides",
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
        "index": "indices/indexes",
        "larva": "larvae",
        "leaf": "leaves",
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
        "tooth": "teeth",
        "tomato": "tomatoes",
        "volcano": "volcanoes/volcanos",
        "zero": "zeroes/zeros",
    }

    noplural = ["fish", "deer", "sheep", "elk", "bison", "salmon", "trout", "cod", "moose", "squid", "pike"]

    if(singular.trim() == ""){
        englishnoun.innerHTML = ""
        return 0
    }
    else if(Object.keys(irregularnouns).includes(singular)){
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
    else if(singular.endsWith("fe")){
        plural = singular.slice(0, -2) + "ves"
    }
    else if(singular.endsWith("ex") || singular.endsWith("ix")){
        plural = singular.slice(0, -2) + "ices"
    }
    else if(singular.endsWith("ax")){
        plural = singular.slice(0, -2) + "aces/" + singular + "es" 
    }
    /*else if(singular.endsWith("us") && singular.length > 3){
        plural = singular.slice(0, -2) + "i/" + singular + "es"
    }*/
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

decline()