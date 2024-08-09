function changelangtoinflect(ourlang){
    enteradjective.value = {
        "eo": "ruĝa",
        "es": "amarillo",
        "en": "smart",
        "scn": "scafazzatu",
    }[ourlang]
    inflect()
}


function inflect(){
    ourlang = langtoinflect.value
    adj = enteradjective.value.toLowerCase()
    if(adj.trim() == ""){
        spanishadjective.innerHTML = ""
        return 0
    }
    if(ourlang == "es"){
        singularmale = adj
        if(adj.endsWith("o")){
            singularfemale = adj.slice(0, -1) + "a"
        }
        else{
            singularfemale = adj
        }
        if(adj.endsWith("z")){ //-Z+CES
            pluralmale = pluralfemale = singularmale.slice(0,-1) + "ces"
        }
        else if(adj.endsWith("ín")){//-ÓN+ONES
            pluralmale = pluralfemale = singularmale.slice(0,-2) + "ines"
        }
        else if(adj.endsWith("ón")){//-ÓN+ONES
            pluralmale = pluralfemale = singularmale.slice(0,-2) + "ones"
        }
        else if(adj.endsWith("és")){//-ÉS+ESES
            singularfemale = singularmale.slice(0,-2) + "esa"
            pluralmale = pluralfemale = singularmale.slice(0,-2) + "eses"
        }
        else if(adj.endsWith("amen")){//-AMEN+ÁMENES
            pluralmale = pluralfemale = singularmale.slice(0,-4) + "ámenes"
        }
        else if(adj.endsWith("oven")){//-OVEN+ÓVENES
            pluralmale = pluralfemale = singularmale.slice(0,-4) + "óvenes"
        }
        else if(adj.endsWith("imen")){//-IMEN+ÍMENES
            pluralmale = pluralfemale = singularmale.slice(0,-4) + "ímenes"
        }
        else if( //-
            "sx".includes(adj.slice(-1)) ||
            ["st", "zt"].includes(adj.slice(-2)) ||
            ("lrndzj".includes(adj.slice(-1)) &&
            adj.length >= 7 &&
            ("áéíóú".includes(x.slice(-7, -6)) || "áéíóú".includes(x.slice(-6, -5))))
        ){
            pluralmale = pluralfemale = adj
        }
        else if( //+ES
            "dhjlnr".includes(adj.slice(-1)) || 
            "sz".includes(adj.slice(-1)) && adj.length == 3 ||
            ["sí", "no", "club", "álbum", "espécimen"].includes(adj)
        ){
            pluralmale = pluralfemale = singularmale + "es"
        }
        else if( //+ES/+S
            "íú".includes(adj.slice(-1)) ||
            adj == "yo"
        ){
            pluralmale = pluralfemale = singularmale + "es/" + singularmale + "s"
        }
        else{ //+S
            pluralmale = singularmale + "s"
            pluralfemale = singularfemale + "s"
        }

        if(singularmale == "bueno"){
            singularmalecomparative = singularfemalecomparative = "mejor"
            pluralmalecomparative = pluralfemalecomparative = "mejores"
        }
        else if(singularmale == "malo"){
            singularmalecomparative = singularfemalecomparative = "peor"
            pluralmalecomparative = pluralfemalecomparative = "peores"
        }
        else if(["viejo", "grande"].includes(singularmale)){
            singularmalecomparative = singularfemalecomparative = "mayor"
            pluralmalecomparative = pluralfemalecomparative = "mayores"
        }
        else if(["joven", "pequeño"].includes(singularmale)){
            singularmalecomparative = singularfemalecomparative = "menor"
            pluralmalecomparative = pluralfemalecomparative = "menores"
        }
        else{
            singularmalecomparative = "más " + singularmale
            singularfemalecomparative = "más " + singularfemale 
            pluralmalecomparative = "más " + pluralmale
            pluralfemalecomparative = "más " + pluralfemale
        }

        if(singularmale.endsWith("go")){
            superlativebase = singularmale.slice(0, -1) + "uísim"
        }
        else if(singularmale.endsWith("n")){
            superlativebase = singularmale + "císim"
        }
        else if(singularmale.endsWith("és")){
            superlativebase = singularmale.slice(0, -2) + "esísim"
        }
        else if(singularmale.endsWith("re")){
            superlativebase = singularmale.replace("é", "e").slice(0, -2) + "érrim"
        }
        else if(singularmale.endsWith("co")){
            superlativebase = singularmale.replace("á", "a").slice(0, -2) + "quísim"
        }
        else if(singularmale.endsWith("ero")){
            superlativebase = singularmale.replace("é", "e").slice(0, -3) + "érrim"
        }
        else if(singularmale.endsWith("cro")){
            superlativebase = singularmale.slice(0, -3) + "quérrim"
        }
        else if(singularmale.endsWith("gro")){
            superlativebase = singularmale.replace("í", "i").slice(0, -2) + "érrim"
        }
        else if(singularmale.endsWith("e") || singularmale.endsWith("o") || singularmale.endsWith("a")){
            superlativebase = singularmale.slice(0, -1) + "ísim"
        }
        else{
            superlativebase = singularmale + "ísim"
        }
        singularmalesuperlative = superlativebase + "o"
        singularfemalesuperlative = superlativebase + "a"
        pluralmalesuperlative = superlativebase + "os"
        pluralfemalesuperlative = superlativebase + "as"
        //irregular
        if(singularmale == "pobre"){
            singularmalesuperlative = "pobrísimo/paupérrimo"
            singularfemalesuperlative = "pobrísima/paupérrima"
            pluralmalesuperlative = "pobrísimos/paupérrimos"
            pluralfemalesuperlative = "pobrísimas/paupérrimas"
        }
        else if(singularmale == "malo"){
            singularmalesuperlative = "malísimo/pésimo"
            singularfemalesuperlative = "malísima/pésima"
            pluralmalesuperlative = "malísimos/pésimos"
            pluralfemalesuperlative = "malísimas/pésimas"
        }


        spanishadjective.innerHTML =
        `<thead>
            <tr>
                <th></th>
                <th>Regular</th>
                <th>Comparative</th>
                <th>Superlative</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Masculine Singular</th>
                <td>${singularmale}</td>
                <td>${singularmalecomparative}</td>
                <td>${singularmalesuperlative}</td>
            </tr>
            <tr>
                <th>Feminine Singular</th>
                <td>${singularfemale}</td>
                <td>${singularfemalecomparative}</td>
                <td>${singularfemalesuperlative}</td>
            </tr>
            <tr>
                <th>Masculine Plural</th>
                <td>${pluralmale}</td>
                <td>${pluralmalecomparative}</td>
                <td>${pluralmalesuperlative}</td>
            </tr>
            <tr>
                <th>Feminine Plural</th>
                <td>${pluralfemale}</td>
                <td>${pluralfemalecomparative}</td>
                <td>${pluralfemalesuperlative}</td>
            </tr>
        </tbody>`
    }
    else if(ourlang == "eo"){
        spanishadjective.innerHTML =
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
            <td>${adj}</td>
            <td>${adj}j</td>
        </tr>
        <tr>
            <th>Accusative</th>
            <td>${adj}n</td>
            <td>${adj}jn</td>
        </tr>
    </tbody>`
    }
    else if(ourlang == "en"){

        irregulars = {
            "good": ["better", "best"],
            "old": ["older/elder", "oldest/eldest"],
            "far": ["farther/further", "farthest/furthest"],
            "bad": ["worse", "worst"],
            "late": ["later/latter", "latest/last"],
            "little": ["littler/less", "littlest/least"],
        }
        if(irregulars[adj] != undefined){
            comp = irregulars[adj][0]
            superl = irregulars[adj][1]
        }
        if(adj.length > 4 && adj.endsWith("e")){
            comp = `more ${adj}/${adj}r`
            superl = `most ${adj}/${adj}st`
        }
        else if(adj.length > 7 || adj.endsWith("ed") || adj.endsWith("wn") || adj.endsWith("id")){
            comp = `more ${adj}`
            superl = `most ${adj}`
        }
        else if(adj.endsWith("e")){
            comp = `${adj}r`
            superl = `${adj}st`
        }
        else if(adj.endsWith("y")){
            if(["icy", "dry"].includes(adj)){
                comp = `${adj.slice(0,1)}ier}`
                superl = `${adj.slice(0,1)}iest}`
            }
            else{
                comp = `${adj.slice(0,-1)}ier/${adj}er`
                superl = `${adj.slice(0,-1)}iest/${adj}est`
            }

        }
        else if([6,7].includes(adj.length) || adj.length == 5 && "aeiou".includes(adj[0])){
            comp = `more ${adj}/${adj}er`
            superl = `most ${adj}/${adj}est`
        }
        else if(adj.length < 6 && "glmnpt".includes(adj.slice(-1)) && "aeiou".includes(adj[adj.length - 2])){
            comp = adj + adj.slice(-1) + "er"
            superl = adj + adj.slice(-1) + "est"
        }
        else{
            comp = adj + "er"
            superl = adj + "est"
        }



    spanishadjective.innerHTML =
        `<thead>
            <tr>
                <th>Default</th>
                <th>Comparitive</th>
                <th>Superlative</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${adj}</td>
                <td>${comp}</td>
                <td>${superl}</td>
            </tr>
        </tbody>`
    }
    else if(ourlang == "scn"){
        if(adj.endsWith("i")){
            femadj = mpl = fempl = adj
        }
        else{
            femadj = adj.slice(0, -1) + "a"
            mpl = adj.slice(0, -1) + "i"
            if(adj[adj.length - 2] == "c"){
                fempl = adj.slice(0, -1) + "hi"
            }
            else fempl = mpl
        }
        
        spanishadjective.innerHTML =
        `<thead>
            <tr>
                <th></th>
                <th>Masculine</th>
                <th>Feminine</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Singular</th>
                <td>${adj}</td>
                <td>${femadj}</td>
            </tr>
            <tr>
                <th>Plural</th>
                <td>${fempl}</td>
                <td>${mpl}</td>
            </tr>
        </tbody>`
    }
}

changelangtoinflect(langtoinflect.value)