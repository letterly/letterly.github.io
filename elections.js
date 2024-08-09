polls = {
    "Georgia": {
        "GD-PP": 32.4,
        "Unity": 17.3,
        "Coalition for Change": 9.9,
        "For Georgia": 11.2,
        "Strong Georgia": 12.8,
        "European Georgia": 1.9,
        "APG-CM/Alt Info": 2.6,
        "Girchi": 5.2,
        "Citizens": 2.2,
        "SLP": 3.3,
        "smaller parties": 1.2,
    },
    "Montenegro": {

    }
}


function changeElectoralSystem(country){
    electioninputs.innerHTML = Object.entries(polls[country]).map((a,b)=> `<p>${a[0]}: <input id="e${b}" name="${a[0]}" onchange="electoralize()" value="${a[1]}" /> %</p>`).join("")
    electoralize()
}

function electoralize(){

    parties = {}
    for(pr = 0; pr < Math.floor(Array.from(electioninputs.childNodes).length); pr++){
        prt = document.getElementById("e" + pr)
        parties[prt.name] = prt.value
    }
    
    sum = Object.values(parties).reduce((g, h) => +g + +h, 0);
    
    if(sum > 100){
        threshold.textContent = "Error: Total votes are above 100%"
        for(b of ["electioncalculations", "electionremainders", "totalvote", "electionresult"]) document.getElementById(b).innerHTML = ""
        return 0
    }
    else if(sum < 100){
        document.getElementsByName("smaller parties")[0].value = Math.round(+document.getElementsByName("smaller parties")[0].value + (100 - sum) * 10) / 10
    }

    inparties = {}
    outparties = []
    electionresults = {}
    
    for(part of Object.entries(parties)){
        if(part[1] >= sum * 0.05 && part[0] != "smaller parties"){
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
    
    if(outparties.length > 0) threshold.innerHTML = outparties + " do not pass the 5% electoral threshold"
    
    
    newsum = Object.values(inparties).reduce((a, b) => +a + +b, 0);
    
    totalvotes.innerHTML = "Total Votes After Electoral Threshold: " + newsum + "%"
    electioncalculations.innerHTML = ""
    for(inpart of Object.entries(inparties)){
        electioncalculations.innerHTML += `<p>${inpart[0]}: ${inpart[1]} × 150 ÷ ${newsum} = <b>${Math.floor(inpart[1] * 150 / newsum)}</b>.${("" + (inpart[1] * 150 / newsum)).split(".")[1]}</p>` 
        electionresults[inpart[0]] = Math.floor(inpart[1] * 150 / newsum)
    }
    
    seatsmissing = 150 - Object.values(electionresults).reduce((a, b) => +a + +b, 0);
    
    electionresults = Object.entries(electionresults)
    electionresults = electionresults.sort((a, b) => b[1] - a[1])
    electionremainders.innerHTML = ""
    for(hrs = 0; hrs < seatsmissing; hrs++){
        console.log(electionresults[hrs][0])
        electionremainders.innerHTML += electionresults[hrs][0]
        if(hrs == seatsmissing - 2) electionremainders.innerHTML += " and "
        else if(hrs < seatsmissing - 2) electionremainders.innerHTML += ", "
        electionresults[hrs][1]++ 
    }
    electionremainders.innerHTML += " received the most votes and therefore get <b>1</b> of the remaining seats each"
    
    
    electionresult.innerHTML = "Election results:"
    for(elres of electionresults){
        electionresult.innerHTML += " | <b>" + elres[0] + "</b> wins <b>" + elres[1] + "</b> seats"
    }
    
}

changeElectoralSystem("Georgia")