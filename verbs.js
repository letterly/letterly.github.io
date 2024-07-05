
function conjugate(){
    infinitive = enterverb.value.toLowerCase()
    if(infinitive.trim() == ""){
        dutchverb.innerHTML = ""
        recognizedverb.textContent = ""
        return 0
    }
    verblist = ["zijn", "dichten", "spreken", "barbecueën", "cijferen", "aanvaarden", "bedoelen"]
    recognizedverb.innerHTML = verblist.includes(infinitive) ? "recognized verb ✅" : "verb not recognized ❌"
    dutchverbs = ["zijn", "spreken", "dichten"]
    //present1
    if(infinitive == "zijn") present1 = "ben"
    else if(infinitive == "spreken") present1 = "spreek"
    else present1 = infinitive.slice(0, -2)
    //present2
    if(infinitive == "zijn") present2= "bent"
    else{
        present2 = present1.endsWith("t") ? present1 : present1 + "t"
    }
    //present3
    if(infinitive == "zijn") present3 = "is"
    else{
        present3 = present1.endsWith("t") ? present1 : present1 + "t"
    }    
    //present4
    if(infinitive == "zijn") present4 = "zijt"
    else{
        present4 = present1.endsWith("t") ? present1 : present1 + "t"
    }    
    //present5
    if(infinitive == "zijn") present5 = "is"
    else{
        present5 = present1.endsWith("t") ? present1 : present1 + "t"
    }    
    //past1
    if(infinitive == "zijn") past1 = "was"
    else if(infinitive == "spreken") past1 = "sprak"
    else{
        if("aelr".includes(infinitive.charAt(infinitive.length - 3))) past1 = infinitive.slice(0, -2) + "de"
        else past1 = infinitive.slice(0, -2) + "te"
    }
    //past2
    if(infinitive == "zijn") past2 = "waart"
    else if(infinitive == "spreken") past2 = "spraakt"
    else{
        if("aelr".includes(infinitive.charAt(infinitive.length - 3))) past2 = infinitive.slice(0, -2) + "de"
        else past2 = infinitive.slice(0, -2) + "te"
    }
    //past3
    if(infinitive == "zijn") past3 = "waren"
    else if(infinitive == "spreken") past3 = "spraken"
    else past3 = past1 + "n"
    //subj1
    subj1 = infinitive.slice(0, -1)
    //subj2
    if(infinitive == "zijn") subj2 = "ware"
    else if(infinitive == "spreken") subj2 = "sprake"
    else{
        if("aelr".includes(infinitive.charAt(infinitive.length - 3))) subj2 = infinitive.slice(0, -2) + "de"
        else subj2 = infinitive.slice(0, -2) + "te"
    }
    //subj3
    if(infinitive == "zijn") subj3 = "waren"
    else if(infinitive == "spreken") subj3 = "spraken"
    else subj3 = subj2 + "n"
    //imp1
    if(infinitive == "zijn") imp1 = "wees"
    else imp1 = present1
    //imp2
    if(imp1.endsWith("t")) imp2 = imp1
    else imp2 = imp1 + "t"
    //participle1
    participle1 = infinitive + "d"
    //participle2
    if(infinitive == "zijn") participle2 = "geweest"
    else if(infinitive == "spreken") participle2 = "gesproken"
    else{
        if(present1.endsWith("t")) participle2 = "ge" + present1
        else if(present1.startsWith("aa") || present1.startsWith("b")) participle2 = present1
        else participle2 = "ge" + present1 + "d"
    }
    dutchverb.innerHTML = 
`<thead>
    <tr>
        <td style="border:none"></td>
        <th>1st p. sing.</th>
        <th>2nd p. sing. (jij)</th>
        <th>2nd p. sing. (u)</th>
        <th>2nd p. sing. (gij)</th>
        <th>3rd p. sing.</th>
        <th>Plural</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th>Present</th>
        <td>${present1}</td>
        <td>${present2}</td>
        <td>${present3}</td>
        <td>${present4}</td>
        <td>${present5}</td>
        <td>${infinitive}</td>
    </tr>
    <tr>
        <th>Past</th>
        <td>${past1}</td>
        <td>${past1}</td>
        <td>${past1}</td>
        <td>${past2}</td>
        <td>${past1}</td>
        <td>${past3}</td>
    </tr>
    <tr>
        <th>Subjunctive Present</th>
        <td colspan="5">${subj1}</td>
        <td>${infinitive}</td>
    </tr>
    <tr>
        <th>Subjunctive Past</th>
        <td colspan="5">${subj2}</td>
        <td>${subj3}</td>
    </tr>
    <tr>
        <th>Imperative</th>
        <td colspan="5">${imp1}</td>
        <td>${imp2}</td>
    </tr>
    <tr>
        <th>Present Participle</th>
        <td colspan="6">${participle1}</td>
    </tr>
    <tr>
        <th>Past Participle</th>
        <td colspan="6">${participle2}</td>
    </tr>
</tbody>`
}
conjugate()