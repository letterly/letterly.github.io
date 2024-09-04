polls = {
    "Georgia": {
        parties: {
            "GD-PP":{
                vote: 32.4
            },
            "Unity": {
                vote: 17.3,
            },
            "Coalition for Change": {
                vote: 9.9,
            },
            "For Georgia": {
                vote: 11.2,
            },
            "Strong Georgia": {
                vote: 12.8,
            },
            "European Georgia": {
                vote: 1.9,
            },
            "APG-CM/Alt Info": {
                vote: 2.6,
            },
            "Girchi": {
                vote: 5.2,
            },
            "Citizens": {
                vote: 2.2,
            },
            "SLP": {
                vote: 3.3,
            },
            "smaller parties": {
                vote: 1.2,
            }
        },
        threshold: 5,
        seats: 150,
    },
    "Israel": {
        parties: {
            "Likud": { "vote": 23.41 },
            "Yesh Atid": { "vote": 17.79 },
            "Religious Zionism-Otzma Yehudit": { "vote": 10.84 },
            "National Unity": { "vote": 9.08 },
            "Shas": { "vote": 8.25 },
            "United Torah Judaism": { "vote": 5.88 },
            "Yisrael Beiteinu": { "vote": 4.48 },
            "United Arab List": { "vote": 4.07 },
            "Hadash-Ta'al": { "vote": 3.75 },
            "Labor": { "vote": 3.69 },
            "Meretz": { "vote": 3.16 },
            "Balad": { "vote": 2.91 },
            "smaller parties": { "vote": 2.69 }
        },
        threshold: 3.25,
        seats: 120,
    },
    "East Timor": {
        parties: {
            "Revolutionary Front for an Independent East Timor": {
                vote: 41.63
            },
            "National Congress for Timorese Reconstruction": {
                vote: 25.75
            },
            "Democratic Party": {
                vote: 9.49
            },
            "KHUNTO": {
                vote: 7.77
            },
            "People's Liberation Party": {vote: 5.88},
            "Green Party of Timor": {vote: 3.63},
            "United Party for Development and Democracy": {vote: 3.13},
            "smaller parties": {vote: 3.15},
            /*
            "Democratic Development Forum": {
                votes: 3.91
            },
            "Others": {
                votes: 11.45
            }
            */
        },
        threshold: 4,
        seats: 65,
    },
}


function changeElectoralSystem(country){
    electioninputs.innerHTML = Object.entries(polls[country].parties).map((a,b)=> `<p>${a[0]}: <input id="e${b}" name="${a[0]}" onchange="electoralize()" value="${a[1].vote}" /> %</p>`).join("")
    electoralize()
}

function electoralize(){
    PP = polls[electoralsystem.value]

    parties = {}
    for(pr = 0; pr < Math.floor(Array.from(electioninputs.childNodes).length); pr++){
        prt = document.getElementById("e" + pr)
        parties[prt.name] = prt.value
    }
    
    sum = Object.values(parties).reduce((g, h) => +g + +h, 0);
    
    if(sum > 100){
        threshold.textContent = "Error: Total votes are above 100%"
        for(b of ["electioncalculations", "electionremainders", "totalvotes", "electionresult"]) document.getElementById(b).innerHTML = ""
        return 0
    }
    else if(sum < 100){
        document.getElementsByName("smaller parties")[0].value = Math.round(+document.getElementsByName("smaller parties")[0].value + (100 - sum) * 10) / 10
    }

    inparties = {}
    outparties = []
    electionresults = {}
    
    for(part of Object.entries(parties)){
        if(part[1] >= sum * polls[electoralsystem.value].threshold / 100 && part[0] != "smaller parties"){
            inparties[part[0]] = part[1]
        }
        else{
            outparties.push(part[0])
        }
    }
    outparties = outparties.map(x => `<b>${x}</b>`)
    
    if(outparties.length > 1){
        outparties[outparties.length - 2] = outparties[outparties.length - 2] + " and " + outparties[outparties.length - 1]
        outparties.pop()
        outparties = outparties.join(", ")
    }
    
    if(outparties.length > 0) threshold.innerHTML = outparties + ` do not pass the ${polls[electoralsystem.value].threshold}% electoral threshold`
    
    
    newsum = Object.values(inparties).reduce((a, b) => +a + +b, 0);
    newsum = Math.round(newsum * 10000) / 10000
    
    totalvotes.innerHTML = "Total Votes After Electoral Threshold: " + newsum + "%"
    electioncalculations.innerHTML = ""
    for(inpart of Object.entries(inparties)){
        electioncalculations.innerHTML += `<p>${inpart[0]}: ${inpart[1]} × ${PP.seats} ÷ ${newsum} = <b>${Math.floor(inpart[1] * PP.seats / newsum)}</b>${(inpart[1] * PP.seats / newsum) % 1 == 0 ? "" : ("." + ("" + (inpart[1] * PP.seats / newsum)).split(".")[1])}</p>` 
        electionresults[inpart[0]] = Math.floor(inpart[1] * PP.seats / newsum)
    }
    
    seatsmissing = PP.seats - Object.values(electionresults).reduce((a, b) => +a + +b, 0);
    
    electionresults = Object.entries(electionresults)
    electionresults = electionresults.sort((a, b) => b[1] - a[1])
    electionremainders.innerHTML = ""
    for(hrs = 0; hrs < seatsmissing; hrs++){
        electionremainders.innerHTML += electionresults[hrs][0]
        if(hrs == seatsmissing - 2) electionremainders.innerHTML += " and "
        else if(hrs < seatsmissing - 2) electionremainders.innerHTML += ", "
        electionresults[hrs][1]++ 
    }
    electionremainders.innerHTML += " received the most votes and therefore get +<b>1</b> of the remaining seats"
    
    
    electionresult.innerHTML = "Election results:"
    for(elres of electionresults){
        electionresult.innerHTML += " | <b>" + elres[0] + "</b> wins <b>" + elres[1] + "</b> seats"
    }
    
}

changeElectoralSystem("Georgia")



/*
DONE
-Georgia

POTENTIAL
-Armenia (more research must be done on how leveling seats are awarded)
-European Union (most)
-Israel
-Netherlands (d'hondt i think)
-Slovakia (droop quota)

CANNOT
Constitutency based
-Albania
-Algeria
-Andorra
-Azerbaijan
-Belarus
-Belgium
-Bosnia
-Botswana
-Bulgaria
-Estonia
-Croatia
-Czechia
-Jordan
-Luxembourg
-UK

*/