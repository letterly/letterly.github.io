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
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
}



for(d = 0; d < 59000; d++){

    day = week[d % 7]

    obj = {
        Day: day,
        holidays: [],
    }

    for(l of Object.entries(calendars)){
        n = l[0]
        g = l[1]
        if(g.startDay.dayinmonth == 1 && g.startDay.monthcount == 0){
            yearObject[n] = generateYear(g.startDay.year, n)
        }
        obj[n] = (g.startDay.dayinmonth + " " + yearObject[n].months[g.startDay.monthcount].name + " " + g.startDay.year)

        if(g.startDay.dayinmonth >= yearObject[n].months[g.startDay.monthcount].days){
            g.startDay.dayinmonth = 0
            if(g.startDay.monthcount == yearObject[n].months.length - 1){
                g.startDay.monthcount = 0
                g.startDay.year++
            }
            else{
                g.startDay.monthcount++
                if(yearObject[n].months[g.startDay.monthcount].days == 0){
                    while(yearObject[n].months[g.startDay.monthcount].days == 0){
                        g.startDay.monthcount++
                        if(g.startDay.monthcount >= yearObject[n].months.length - 1){
                            g.startDay.monthcount = 0
                            g.startDay.year++
                        }
                    }
                }
            }
        }
        for(hol of Object.entries(yearObject[n].holidays)){            
            if(n == "Bahá'í" && hol[0].startsWith("Birth") && g.startDay.year >= 172){
                theTwinBirthdays = [
                        ["10 Qudrat", "11 Qudrat"], //172
                        ["18 ʻIlm", "19 ʻIlm"],
                        ["7 ʻIlm", "8 ʻIlm"],
                        ["6 Qudrat", "7 Qudrat"],
                        ["14 ʻIlm", "15 ʻIlm"],
                        ["4 ʻIlm", "5 ʻIlm"],
                        ["4 Qudrat", "5 Qudrat"],
                        ["11 ʻIlm", "12 ʻIlm"],

                        ["1 ʻIlm", "2 ʻIlm"], //180
                        ["19 ʻIlm", "1 Qudrat"],
                        ["8 ʻIlm", "9 ʻIlm"],
                        ["7 Qudrat", "8 Qudrat"],
                        ["15 ʻIlm", "16 ʻIlm"],
                        ["5 ʻIlm", "6 ʻIlm"],
                        ["5 Qudrat", "6 Qudrat"],
                        ["14 ʻIlm", "15 ʻIlm"],
                        ["2 ʻIlm", "3 ʻIlm"],
                        ["2 Qudrat", "3 Qudrat"],

                        ["10 ʻIlm", "11 ʻIlm"], //190
                        ["10 Qudrat", "11 Qudrat"],
                        ["17 ʻIlm", "18 ʻIlm"],
                        ["6 ʻIlm", "7 ʻIlm"],
                        ["6 Qudrat", "7 Qudrat"],
                        ["15 ʻIlm", "16 ʻIlm"],
                        ["4 ʻIlm", "5 ʻIlm"],
                        ["4 Qudrat", "5 Qudrat"],
                        ["12 ʻIlm", "13 ʻIlm"],
                        ["1 ʻIlm", "2 ʻIlm"],

                        ["19 ʻIlm", "1 Qudrat"], //200
                        ["8 ʻIlm", "9 ʻIlm"],
                        ["8 Qudrat", "9 Qudrat"],
                        ["16 ʻIlm", "17 ʻIlm"],
                        ["5 ʻIlm", "6 ʻIlm"],
                        ["5 Qudrat", "6 Qudrat"],
                        ["14 ʻIlm", "15 ʻIlm"],
                        ["3 ʻIlm", "4 ʻIlm"],
                        ["2 Qudrat", "3 Qudrat"],
                        ["10 ʻIlm", "11 ʻIlm"],

                        ["9 Qudrat", "10 Qudrat"], //210
                        ["18 ʻIlm", "19 ʻIlm"],
                        ["6 ʻIlm", "7 ʻIlm"],
                        ["6 Qudrat", "7 Qudrat"],
                        ["15 ʻIlm", "16 ʻIlm"],
                        ["4 ʻIlm", "5 ʻIlm"],
                        ["4 Qudrat", "5 Qudrat"],
                        ["11 ʻIlm", "12 ʻIlm"],
                        ["19 Mas͟híyyat", "1 ʻIlm"], //218
                    ][g.startDay.year - 172]
                if(hol[0] == "Birth of the Báb" && theTwinBirthdays[0] == obj[n].split(" ").slice(0, -1).join(" ") || hol[0] == "Birth of Baháʼu'lláh" && theTwinBirthdays[1] == obj[n].split(" ").slice(0, -1).join(" ")){
                    obj.holidays.push({
                        name: hol[0],
                        day: hol[1].day,
                        link: hol[1].link,
                        religion: n,
                    })
                }
            } //twin birthdays
            else if(obj[n].split(" ").slice(0, -1).join(" ") == hol[1].day){
                obj.holidays.push({
                    name: hol[0],
                    day: hol[1].day,
                    link: hol[1].link,
                    religion: n,
                })
            }
            if(hol[1].length && alltimearray.slice(-1 * hol[1].length + 1).map(x => x[n].split(" ").slice(0, -1).join(" ")).includes(hol[1].day)){ //long holiday
                obj.holidays.push({
                    name: hol[0],
                    link: hol[1].link,
                    religion: n,
                })
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
    themonth.innerHTML = generateYear(theyear.value, calen).months.filter(y => y.days != 0).map(x => `<option value='${calendars[calen].months.map(z=>z.name).indexOf(x.name)}'>${x.name}</select>`).join("")
    themonth.value = 0
    themonth.value = generateYear(theyear.value, calen).months.map(x => x.name).indexOf(thecurrentday[1])
    for(x = 1; x <= generateYear(theyear.value, calen).months[themonth.value].days; x++){
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
        themonth.innerHTML = generateYear(theyear.value, calen).months.filter(y => y.days > 0).map((x, ind) => `<option value='${ind}'>${x.name}</option>`).join("")
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
    for(x = 1; x <= generateYear(theyear.value, calen).months[themonth.value].days; x++){
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
    result = `${theday.value} ${q.months[themonth.value].name} ${theyear.value}`
    thatspecificday = alltimearray.filter(x => x[calen] == result)[0]
    answer.innerHTML = ""
    holidays.innerHTML = ""
    for(ourcalendar of Object.keys(thatspecificday)){
        if(ourcalendar == "holidays"){
            for(h of thatspecificday.holidays){
                holidays.innerHTML += `<h2 class="${h.religion.replace(/\'/, "").replace(/ /g, "_").toLowerCase()}_day">[${h.religion} calendar] <a target="_blank" style="color:inherit" href="${h.link}">${h.name}</a></h2>`
            }
        }
        if(ourcalendar != calen && ourcalendar != "holidays"){
            if(ourcalendar == "Day"){
                answer.innerHTML += "<div class='cal day'>Day of the Week<br>" + thatspecificday[ourcalendar] + `<br>${internationalize(thatspecificday[ourcalendar], ourcalendar)}</div>`
            }
            else if(!"-0".includes((thatspecificday[ourcalendar].split(" ")[2]).charAt(0))){
                answer.innerHTML += "<div class='cal " + ourcalendar.toLowerCase().replace(/ /g, "_").replace(/\'/g, "").replace(/[\(\)]/g, "") + "'><span><a target='_blank' href='" + calendars[ourcalendar].link + "'>" + ourcalendar + "</a><br>" + thatspecificday[ourcalendar] + " " + calendars[ourcalendar].era + "<br>" + internationalize(thatspecificday[ourcalendar], ourcalendar) + "</span></div>"
            }
        }
    }
    answer.innerHTML += "<div class='cal harris'>By <a href='http://harrismowbray.com/' target='_blank'>Harris Mowbray</a><br><a href='calendar-changelog.txt'>Changelog</a><a></a></div>"
}


function internationalize(dy, cl){
    if(cl == "Day"){
        return {"Monday": "Lundi", "Tuesday": "Mardi", "Wednesday": "Mercredi", "Thursday": "Jeudi", "Friday": "Vendredi", "Saturday": "Samedi", "Sunday": "Dimanche"}[dy]
    }
    else if(cl == "Bahá'í" || cl == "Solar Hijri"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "۰۱۲۳۴۵۶۷۸۹"[x])
        }
        dy = dy.split(" ")
        dy = `<span dir="rtl">${dy[0]} ${{"Bahá": "بهاء", "Jalál": "جلال", "Jamál": "جمال", "ʻAẓamat": "عظمة", "Núr": "نور", "Raḥmat": "رحمة", "Kalimát": "كلمات", "Kamál": "كمال", "Asmáʼ": "اسماء", "ʻIzzat": "عزة", "Mas͟híyyat": "مشية", "ʻIlm": "علم", "Qudrat": "قدرة", "Qawl": "قول", "Masáʼil": "مسائل", "S͟haraf": "شرف","Sulṭán": "سلطان","Mulk": "ملك","Ayyám-i-Há": "ايام الهاء","ʻAláʼ": "علاء", "Farvardin": "فروردین", "Ordibehesht": "اردیبهشت", "Khordad": "خرداد", "Tir": "تیر", "Mordad": "مرداد", "Shahrivar": "شهریور", "Mehr": "مهر", "Aban": "آبان", "Azar": "آذر", "Dey": "دی", "Bahman": "بهمن", "Esfand": "اسفند"}[dy.slice(1, -1).join("")]} ${dy[dy.length - 1]}</span>`
        return dy
    }
    else if(cl == "Bengali"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "০১২৩৪৫৬৭৮৯"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Boishakh": "বৈশাখ", "Jyoishţho": "জ্যৈষ্ঠ", "Ashaŗh": "আষাঢ়", "Shrabon": "শ্রাবণ", "Bhadro": "ভাদ্র", "Ashshin": "আশ্বিন", "Kartik": "কার্তিক", "Ôgrohayon": "অগ্রহায়ণ", "Poush": "পৌষ", "Magh": "মাঘ", "Falgun": "ফাল্গুন", "Choitro": "চৈত্র"}[dy.slice(1, -1).join("")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Indian National"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "०१२३४५६७८९"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Chaitra": "चैत्र", "Vaisakha": "वैशाख", "Jyaistha": "ज्येष्ठ", "Asadha": "आषाढ", "Sravana": "श्रावण", "Bhadra": "भाद्रपद", "Asvina": "अश्विन्", "Kartika": "कार्तिक", "Agrahayana": "आग्रहायण", "Pausa": "पौष", "Magha": "माघ", "Phalguna": "फाल्गुन"}[dy.slice(1, -1).join("")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Thai Solar"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "๐๑๒๓๔๕๖๗๘๙"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"January": "มกราคม", "February": "กุมภาพันธ์", "March": "มีนาคม", "April": "เมษายน", "May": "พฤษภาคม", "June": "มิถุนายน", "July": "กรกฎาคม", "August": "สิงหาคม", "September": "กันยายน", "October": "ตุลาคม", "November": "พฤศจิกายน", "December": "ธันวาคม"}[dy.slice(1, -1).join("")]} ${dy[dy.length - 1]}`
        return dy + " พ.ศ."
    }
    else if(cl == "Nanakshahi"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "੧੨੩੪੫੬੭੮੯੦"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Chet": "ਚੇਤ", "Vaisakh": "ਵੈਸਾਖ", "Jeth": "ਜੇਠ", "Harh": "ਹਾੜ", "Sawan": "ਸਾਵਣ", "Bhadon": "ਭਾਦੋਂ", "Assu": "ਅੱਸੂ", "Kattak": "ਕੱਤਕ", "Maghar": "ਮੱਘਰ", "Poh": "ਪੋਹ", "Magh": "ਮਾਘ", "Phaggan": "ਫੱਗਣ"}[dy.slice(1, -1).join("")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Mandaean"){
        dy = dy.split(" ")
        dy = `<span dir="rtl">${dy[0]} ${{"Daula": "ࡃࡀࡅࡋࡀ", "Nuna": "ࡍࡅࡍࡀ", "ʿmbra": "ࡏࡌࡁࡓࡀ", "Taura": "ࡕࡀࡅࡓࡀ", "Ṣilmia": "ࡑࡉࡋࡌࡉࡀ", "Sarṭana": "ࡎࡀࡓࡈࡀࡍࡀ", "Aria": "ࡀࡓࡉࡀ", "Šumbulta": "ࡔࡅࡌࡁࡅࡋࡕࡀ", "Qaina": "ࡒࡀࡉࡍࡀ", "Arqba": "ࡀࡓࡒࡁࡀ", "Hiṭia": "ࡄࡉࡈࡉࡀ", "Gadia": "ࡂࡀࡃࡉࡀ"}[dy.slice(1, -1).join("")]} ${dy[dy.length - 1]}</span>`
        return dy
    }

    else return ""
}




function generateYear(y, n){
    yO = {
        months: {},
        holidays: {},
    }
    yO.months = calendars[n].months
    if(calendars[n].intercalary.type == "day"){
        if(calendars[n].intercalary.method(y)){
            yO.months[calendars[n].intercalary.month].days = interCal[n].split("/")[1]
        }
        else{
            yO.months[calendars[n].intercalary.month].days = interCal[n].split("/")[0]
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
        yO.months[1].days = yy == "c" ? 30 : 29
        yO.months[2].days = yy == "d" ? 29 : 30
        if([3,6,8,11,13,17,0].includes(y % 19)){
            yO.months[5].days = 30
            yO.months[6].days = 29
            yO.months[5].name = "Adar I"
        }
        else{
            yO.months[5].days = 29
            yO.months[6].days = 0
            yO.months[5].name = "Adar"
        }
    }
    /*
    else if(n == "Burmese"){ //FIX
        if([2,5,7,10,13,15,18].includes(y % 19)){
            yO.months[3].name = "Pahtamawahso"
            yO.months[4].days = 30
        }
        else{
            yO.months[3].name = "Wahso"
            yO.months[4].days = 0
        }
        if((((((y * 12 + 4) + Math.floor((y * 12 + 4) * 7 / 228)) * 30 + 14) * 11 + 650) % 703) > ((((((y - 1) * 12 + 4) + Math.floor(((y - 1) * 12 + 4) * 7 / 228)) * 30 + 14) * 11 + 650) % 703)){
            yO.months[2].days = 30
        }
        else{
            yO.months[2].days = 29
        }
        //
    }

    */

    // thai code section
    if(n == "Thai Solar"){
        if(y < 2483){
            gg = {
                months: [
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
                ],
                holidays: {},
            }
        }
        else if(y == 2483){
            gg = {
                months: [
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
                ],
                holidays: {},
            }
        }
        else if(y > 2483){
            gg = {
                months: [
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
                ],
                holidays: {},
            }
        }
    }
    if(n == "Thai Solar"){
        return gg
    }

    //add holidays
    yO.holidays = calendars[n].holidays
    //
    return yO
}


reset()
