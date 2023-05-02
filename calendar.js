alltimearray = []
day = "Monday"
yearObject = {}
interCal = {}

for(c of Object.entries(calendars)){
    if(c[1].intercalary.type == "day"){
        interCal[c[0]] = c[1].months[c[1].intercalary.month].days
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else if(c[1].intercalary.type == "month"){ //FIX!!
        //interCal[c[0]] = c[1].months[c[1].intercalary.month].days
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else if(c[1].intercalary.type == "thai"){
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else if(c[1].intercalary.type == "none"){
        yearObject[c[0]] = c[1].months
    }
}



for(d = 0; d < 59000; d++){

    day = week[d % 7]

    obj = {
        "Day": day
    }

    for(l of Object.entries(calendars)){
        n = l[0]
        g = l[1]
        if(g.startDay.dayinmonth == 1 && g.startDay.monthcount == 0){
            yearObject[n] = generateYear(g.startDay.year, n)
        }
        obj[n] = (g.startDay.dayinmonth + " " + yearObject[n][g.startDay.monthcount].name + " " + g.startDay.year)

        if(g.startDay.dayinmonth >= yearObject[n][g.startDay.monthcount].days){
            g.startDay.dayinmonth = 0
            if(g.startDay.monthcount == yearObject[n].length - 1){
                g.startDay.monthcount = 0
                g.startDay.year++
            }
            else{
                g.startDay.monthcount++
                if(yearObject[n][g.startDay.monthcount].days == 0){
                    while(yearObject[n][g.startDay.monthcount].days == 0){
                        g.startDay.monthcount++
                        if(g.startDay.monthcount >= yearObject[n].length - 1){
                            g.startDay.monthcount = 0
                            g.startDay.year++
                        }
                    }
                }
            }
        }
        g.startDay.dayinmonth++
    }
    alltimearray.push(obj)
}


function reset(){
    //
    currentDay = ("" + new Date()).split(" ").slice(1, 4)
    calen = thecalendar.value
    abbreviations = {
        Jan: "January",
        Feb: "February",
        Mar: "March",
        Apr: "April",
        May: "May",
        Jun: "June",
        Jul: "July",
        Aug: "August",
        Sep: "September",
        Oct: "October",
        Nov: "November",
        Dec: "December",
    }
    currentDay[1] = +currentDay[1]
    currentDay[0] = abbreviations[currentDay[0]]
    currentDay = `${currentDay[1]} ${currentDay[0]} ${currentDay[2]}`
    thecurrentday = alltimearray.filter(x => x.Gregorian == currentDay)[0][calen].split(" ")
    theyear.value = thecurrentday[2]
    themonth.innerHTML = generateYear(theyear.value, calen).filter(y => y.days != 0).map(x => `<option value='${calendars[calen].months.map(z=>z.name).indexOf(x.name)}'>${x.name}</select>`).join("")
    themonth.value = 0
    themonth.value = generateYear(theyear.value, calen).map(x => x.name).indexOf(thecurrentday[1])
    for(x = 1; x <= generateYear(theyear.value, calen)[themonth.value].days; x++){
        theday.innerHTML += `<option value="${x}">${x}</option>`
    }
    theday.value = thecurrentday[0]
    //
    findany.textContent = `Find any day between ${calendars[calen].bounds[0] + (["Gregorian", "Revised Julian", "Thai Solar", "Juche", "Minguo"].includes(calen) ? 0 : 1)} and ${calendars[calen].bounds[1] - 1} ` + calendars[calen].era
    convert()
}

function openMonth(){
    answer.innerHTML = ""
    tm = themonth.value
    tmname = themonth.options[tm].textContent
    calen = thecalendar.value
    if(!isNaN(theyear.value) && theyear.value >= calendars[calen].bounds[0] && theyear.value <= calendars[calen].bounds[1]){
        themonth.innerHTML = generateYear(theyear.value, calen).filter(y => y.days > 0).map((x, ind) => `<option value='${ind}'>${x.name}</option>`).join("")
        lll = Array.from(themonth.options).map(g => g.textContent).indexOf(tmname)
        themonth.value = lll == -1 ? 0 : lll
        openDay()
    }
}

function openDay(){
    td = theday.value
    answer.innerHTML = ""
    calen = thecalendar.value
    theday.innerHTML = ""
    for(x = 1; x <= generateYear(theyear.value, calen)[themonth.value].days; x++){
        theday.innerHTML += `<option value="${x}">${x}</option>`
    }
    if(td >= theday.options.length){
        theday.value = 1
    }
    else{
        theday.value = td
    }
    convert()
}

function convert(){
    calen = thecalendar.value
    q = generateYear(theyear.value, calen)
    themonth.style.color = "black"
    theday.style.color = "black"
    result = `${theday.value} ${q[themonth.value].name} ${theyear.value}`
    thatspecificday = alltimearray.filter(x => x[calen] == result)[0]
    answer.innerHTML = ""
    for(ourcalendar of Object.keys(thatspecificday)){
        if(ourcalendar != calen){
            if(ourcalendar == "Day"){
                answer.innerHTML += "<div class='cal day'>Day of the Week<br>" + thatspecificday[ourcalendar] + "</div>"
            }
            else if(!"-0".includes((thatspecificday[ourcalendar].split(" ")[2]).charAt(0))){
                answer.innerHTML += "<div class='cal " + ourcalendar.toLowerCase().replace(/ /g, "_").replace(/\'/g, "").replace(/[\(\)]/g, "") + "'><span><a target='_blank' href='" + calendars[ourcalendar].link + "'>" + ourcalendar + "</a><br>" + thatspecificday[ourcalendar] + " " + calendars[ourcalendar].era + "</span></div>"
            }
        }
    }
    answer.innerHTML += "<div class='cal harris'>By <a href='http://harrismowbray.com/' target='_blank'>Harris Mowbray</a><br><a href='calendar-changelog.txt'>Changelog</a><a></a></div>"
}




function generateYear(y, n){
    yO = []
    yO = calendars[n].months
    if(calendars[n].intercalary.type == "day"){
        if(calendars[n].intercalary.method(y)){
            yO[calendars[n].intercalary.month].days = interCal[n].split("/")[1]
        }
        else{
            yO[calendars[n].intercalary.month].days = interCal[n].split("/")[0]
        }
    }
    else if(n == "Hebrew"){ //FIX
        yy = (
            "rcdcrccrdc" + //660
            "drccrdcrcd" + //670
            "rccdrccdrc" + //680
            "drccrdcrcd" + //690
            "crcdrcdrcc" + //700
            "drccdrccrd" + //710
            "crdcrcdcrc" + //720
            "drcdcrcdrc" + //730
            "cdrccrdcrd" + //740
            "crcdcrcdrc" + //750
            "cdrccdrcdr" + //760
            "ccrdcrcdrc" + //770
            "cdrcdcrccr" + //780
            "dcrdccrdcr" + //790
            "cdrcdcrcdr" + //800
            "ccdrccrdcr" + //810
            "dc" //820 [just to 821]
        ).charAt([y - 5660])
        yO[1].days = yy == "c" ? 30 : 29
        yO[2].days = yy == "d" ? 29 : 30
        if([3,6,8,11,13,17,0].includes(y % 19)){
            yO[5].days = 30
            yO[6].days = 29
            yO[5].name = "Adar I"
        }
        else{
            yO[5].days = 29
            yO[6].days = 0
            yO[5].name = "Adar"
        }
    }
    else if(n == "Burmese"){ //FIX
        if([2,5,7,10,13,15,18].includes(y % 19)){
            yO[3].name = "Pahtamawahso"
            yO[4].days = 30
        }
        else{
            yO[3].name = "Wahso"
            yO[4].days = 0
        }
        if((((((y * 12 + 4) + Math.floor((y * 12 + 4) * 7 / 228)) * 30 + 14) * 11 + 650) % 703) > ((((((y - 1) * 12 + 4) + Math.floor(((y - 1) * 12 + 4) * 7 / 228)) * 30 + 14) * 11 + 650) % 703)){
            yO[2].days = 30
        }
        else{
            yO[2].days = 29
        }
        //
    }

    // thai code section
    if(n == "Thai Solar"){
        if(y < 2483){
            gg = [
                {
                    name: "April",
                    days: 30,
                },
                {
                    name: "May",
                    days: 31,
                },
                {
                    name: "June",
                    days: 30,
                },
                {
                    name: "July",
                    days: 31,
                },
                {
                    name: "August",
                    days: 31,
                },
                {
                    name: "September",
                    days: 30,
                },
                {
                    name: "October",
                    days: 31,
                },
                {
                    name: "November",
                    days: 30,
                },
                {
                    name: "December",
                    days: 31,
                },
                {
                    name: "January",
                    days: 31,
                },
                {
                    name: "February",
                    days: ((y - 542) % 4 == 0 && !((y - 542) % 100 == 0 && (y - 542) % 400 != 0)) ? 29 : 28,
                },
                {
                    name: "March",
                    days: 31,
                },
            ]
        }
        else if(y == 2483){
            gg = [
                {
                    name: "April",
                    days: 30,
                },
                {
                    name: "May",
                    days: 31,
                },
                {
                    name: "June",
                    days: 30,
                },
                {
                    name: "July",
                    days: 31,
                },
                {
                    name: "August",
                    days: 31,
                },
                {
                    name: "September",
                    days: 30,
                },
                {
                    name: "October",
                    days: 31,
                },
                {
                    name: "November",
                    days: 30,
                },
                {
                    name: "December",
                    days: 31,
                },
            ]
        }
        else if(y > 2483){
            gg = [
                {
                    name: "January",
                    days: 31,
                },
                {
                    name: "February",
                    days: ((y - 543) % 4 == 0 && !((y - 543) % 100 == 0 && (y - 543) % 400 != 0)) ? 29 : 28,                
                },
                {
                    name: "March",
                    days: 31,
                },
                {
                    name: "April",
                    days: 30,
                },
                {
                    name: "May",
                    days: 31,
                },
                {
                    name: "June",
                    days: 30,
                },
                {
                    name: "July",
                    days: 31,
                },
                {
                    name: "August",
                    days: 31,
                },
                {
                    name: "September",
                    days: 30,
                },
                {
                    name: "October",
                    days: 31,
                },
                {
                    name: "November",
                    days: 30,
                },
                {
                    name: "December",
                    days: 31,
                },
            ]
        }
    }
    if(n == "Thai Solar"){
        return gg
    }
    console.log(yO)
    return yO
}


reset()
