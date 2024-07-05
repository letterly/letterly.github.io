function inflect(){
    adj = enteradjective.value.toLowerCase()
    if(adj.trim() == ""){
        spanishadjective.innerHTML = ""
        return 0
    }
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
        pluralmale = pluralfemale = singularmale.slice(0,-2) + "eses"
    }
    else if(adj.endsWith("amen")){//-AMEN+ÁMENES
        pluralmale = pluralfemale = singularmale.slice(0,-2) + "ámenes"
    }
    else if(adj.endsWith("oven")){//-OVEN+ÓVENES
        pluralmale = pluralfemale = singularmale.slice(0,-2) + "óvenes"
    }
    else if(adj.endsWith("imen")){//-IMEN+ÍMENES
        pluralmale = pluralfemale = singularmale.slice(0,-2) + "ímenes"
    }
    else if( //-
        "sx".includes(adj.slice(-1)) ||
        ["st", "zt"].includes(adj.slice(-2)) ||
        ("lrndzj".includes(adj.slice(-1)) &&
        adj.length >= 7 &&
        "áéíóú".includes(x.slice(-7, -6)) || "áéíóú".includes(x.slice(-6, -5)))
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


    spanishadjective.innerHTML =
`<thead>
    <tr>
        <th>Singular</th>
        <th>Plural</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th>Masculine</th>
        <td>${singularmale}</td>
        <td>${pluralmale}</td>
    </tr>
    <tr>
        <th>Feminine</th>
        <td>${singularfemale}</td>
        <td>${pluralfemale}</td>
    </tr>
</tbody>`
}