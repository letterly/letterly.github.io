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
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else if(c[1].intercalary.type == "thai"){
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else if(c[1].intercalary.type == "none"){
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
}



for(d = 0; d < 80000; d++){

    day = week[d % 7]

    obj = {
        Day: day,
        holidays: [],
    }

    for(l of Object.entries(calendars)){
        n = l[0]
        g = l[1]
        if(g.startDay.year <= g.bounds[1]){
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
                leday = obj[n].split(" ").slice(0, -1).join(" ")           
                if(n == "Bahá'í" && hol[0].startsWith("Birth") && g.startDay.year >= 172 && g.startDay.year <= 217){
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
                    if(hol[0] == "Birth of the Báb" && theTwinBirthdays[0] == leday || hol[0] == "Birth of Baháʼu'lláh" && theTwinBirthdays[1] == leday){
                        obj.holidays.push({
                            name: hol[0],
                            link: hol[1].link,
                            religion: n,
                        })
                    }
                } //twin birthdays
                else if(n == "Gregorian" && ["Easter", "Palm Sunday", "Maundy Thursday", "Feast of the Ascension", "Pentecost", "Trinity Sunday"].includes(hol[0])){
                    eY = g.startDay.year
                    eA = eY % 19
                    eB = Math.floor(eY / 100)
                    eC = eY % 100
                    eD = Math.floor(eB / 4)
                    eE = eB % 4
                    eG = Math.floor((8 * eB + 13) / 25)
                    eH = (19 * eA + eB - eD - eG + 15) % 30
                    eI = Math.floor(eC / 4)
                    eK = eC % 4
                    eL = (32 + 2 * eE + 2 * eI - eH - eK) % 7
                    eM = Math.floor((eA + 11 * eH + 19 * eL) / 433)
                    eN = Math.floor((eH + eL - 7 * eM + 90) / 25)
                    eP = (eH + eL - 7 * eM + 33 * eN + 19) % 32
                    newv = eH + eL - 7 * eM + 33 * eN + 19
                    if(hol[0] == "Palm Sunday") newv -= 7
                    else if(hol[0] == "Maundy Thursday") newv -= 3
                    else if(hol[0] == "Feast of the Ascension"){
                        if(newv <= 127){
                            newv += 33
                        }
                        newv += 39
                    }
                    else if(hol[0] == "Pentecost"){
                        if(newv <= 127){
                            newv += 33
                        }
                        newv += 49
                    }
                    else if(hol[0] == "Trinity Sunday"){
                        if(newv <= 127){
                            newv += 33
                        }
                        newv += 56
                    }
                    if(g.startDay.year == 2018){
                        console.log(hol[0] + " " + newv)
                    }
                    if(newv >= 222) easterDay = (newv - 221) + " June"
                    else if(newv >= 191) easterDay = (newv - 190) + " May"
                    else if(newv >= 161) easterDay = (newv - 160) + " April"
                    else if(newv <= 160 && newv >= 127) newv -= 33
                    if(newv <= 127) easterDay = (newv - 96) + " March"
                    if(leday == easterDay){
                        obj.holidays.push({
                            name: hol[0],
                            link: hol[1].link,
                            religion: n,
                        })
                    }
                }
                else if(n == "Julian" && ["Easter", "Palm Sunday", "Maundy Thursday", "Feast of the Ascension", "Pentecost"].includes(hol[0])){
                    eY = g.startDay.year
                    eA = eY % 4
                    eB = eY % 7
                    eC = eY % 19
                    eD = (19 * eC + 15) % 30
                    eE = (2 * eA + 4 * eB - eD + 34) % 7
                    finalE = eD + eE + 114
                    if(hol[0] == "Palm Sunday") finalE -= 7
                    else if(hol[0] == "Maundy Thursday") finalE -= 3
                    if(hol[0] == "Feast of the Ascension"){
                        finalE += 39
                        if(finalE >= 185) easterDay = (finalE - 184) + " June"
                        else if(finalE >= 154) easterDay = (finalE - 153) + " May"
                    }
                    else if(hol[0] == "Pentecost"){
                        finalE += 49
                        if(finalE >= 185) easterDay = (finalE - 184) + " June"
                        else if(finalE >= 154) easterDay = (finalE - 153) + " May"
                    }
                    else if(hol[0] == "Trinity Sunday"){
                        finalE += 56
                        if(finalE >= 185) easterDay = (finalE - 184) + " June"
                        else if(finalE >= 154) easterDay = (finalE - 153) + " May"
                    }
                    else{
                        if(finalE <= 123) easterDay = (finalE - 92) + " March"
                        else easterDay = (finalE - 123) + " April"
                    }
                    if(leday == easterDay){
                        obj.holidays.push({
                            name: hol[0],
                            link: hol[1].link,
                            religion: n,
                        })
                    }
                }
                else if(leday == hol[1].day && (hol[1].shabbat == undefined || alltimearray.slice(-1)[0].Day != "Friday")){
                    obj.holidays.push({
                        name: hol[0],
                        link: hol[1].link,
                        religion: n,
                    })
                }
                else if((alltimearray.length > 0 && hol[1].shabbat != undefined && hol[1].shabbat.day == alltimearray.slice(-1)[0].Day) && leday == hol[1].shabbat.date){
                    obj.holidays.push({
                        name: hol[0],
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
    theyear.value = thecurrentday.slice(-1)[0]
    themonth.innerHTML = generateYear(theyear.value, calen).months.filter(y => y.days != 0).map(x => `<option value='${calendars[calen].months.map(z=>z.name).indexOf(x.name)}'>${x.name}</select>`).join("")
    themonth.value = 0
    themonth.value = generateYear(theyear.value, calen).months.map(x => x.name).indexOf(thecurrentday.slice(1, -1).join(" "))
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
        themonth.innerHTML = generateYear(theyear.value, calen).months.map((x, ind) => x.days > 0 ? `<option value='${ind}'>${x.name}</option>`: ``).join("")
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
    result = `${theday.value} ${themonth.options[themonth.selectedIndex].text} ${theyear.value}`
    thatspecificday = alltimearray.filter(x => x[calen] == result)[0]
    answer.innerHTML = ""
    holidays.innerHTML = ""
    for(ourcalendar of Object.keys(thatspecificday)){
        if(ourcalendar == "holidays"){
            for(h of thatspecificday.holidays){
                holidays.innerHTML += `<h2 class="${h.religion.replace(/\'/, "").replace(/ /g, "_").toLowerCase()}"><a style="color:inherit;text-decoration:dotted underline" href="${calendars[h.religion].link}" target="_blank">${h.religion}</a>: <a target="_blank" style="color:inherit;font-weight:700;text-decoration:underline" href="${h.link}">${h.name.split(":")[0]}</a>${h.name.includes(":") ? ` <a target="_blank" class='sect' href="${{"outside Israel": "https://en.wikipedia.org/wiki/Yom_tov_sheni_shel_galuyot", "Sunni": "https://en.wikipedia.org/wiki/Sunni_Islam", "Shia": "https://en.wikipedia.org/wiki/Shia_Islam", "Armenian": "https://en.wikipedia.org/wiki/Armenian_Apostolic_Church", "Armenian Patriarchate of Jerusalem": "https://en.wikipedia.org/wiki/Armenian_Patriarchate_of_Jerusalem",}[h.name.split(":")[1]]}">(${h.name.split(":")[1]})</a>` : ``}</h2>`
            }
        }
        if(ourcalendar != calen && ourcalendar != "holidays"){
            if(ourcalendar == "Day"){
                days = {
                    "Monday": {
                        es: "Lunes",
                        fr: "Lundi",
                        ru: "Понедельник",
                        zh: "星期一",
                        ar: "الاثنين",
                    },
                    "Tuesday": {
                        es: "Martes",
                        fr: "Mardi",
                        ru: "Вторник",
                        zh: "星期二",
                        ar: "الثلاثاء",
                    },
                    "Wednesday": {
                        es: "Miércoles",
                        fr: "Mercredi",
                        ru: "Среда",
                        zh: "星期三",
                        ar: "الأربعاء",
                    },
                    "Thursday": {
                        es: "Jueves",
                        fr: "Jeudi",
                        ru: "Четверг",
                        zh: "星期四",
                        ar: "الخميس",
                    },
                    "Friday": {
                        es: "Viernes",
                        fr: "Vendredi",
                        ru: "Пятница",
                        zh: "星期五",
                        ar: "الجمعة",
                    },
                    "Saturday": {
                        es: "Sábado",
                        fr: "Samedi",
                        ru: "Суббота",
                        zh: "星期六",
                        ar: "السبت",
                    },
                    "Sunday": {
                        es: "Domingo",
                        fr: "Dimanche",
                        ru: "Воскрешения",
                        zh: "星期天",
                        ar: "الأحد",
                    },
                }
                dOw = thatspecificday[ourcalendar]
                answer.innerHTML += "<div class='cal day'><b>Day of the Week</b><br>" + dOw + ` ${days[dOw].es} ${days[dOw].fr}<br>${days[dOw].ru} ${days[dOw].zh} ${days[dOw].ar}</div>`
            }
            else if(+thatspecificday[ourcalendar].split(" ").slice(-1)[0] > 0 && +thatspecificday[ourcalendar].split(" ").slice(-1)[0] <= calendars[ourcalendar].bounds[1]){
                answer.innerHTML += "<div class='cal " + ourcalendar.toLowerCase().replace(/ /g, "_").replace(/\'/g, "").replace(/[\(\)]/g, "") + "'><span><a target='_blank' href='" + calendars[ourcalendar].link + "'>" + ourcalendar + "</a><br>" + thatspecificday[ourcalendar] + " " + calendars[ourcalendar].era + "<br>" + internationalize(thatspecificday[ourcalendar], ourcalendar) + "</span></div>"
            }
        }
    }
    answer.innerHTML += `<div class='cal time'>
    <div class="line">🌕 days start at midnight</div>
    <div class="line">
    🌙 days start at sunset
    </div>
    <div class="line">
    ☀️ days start at sunrise
    </div>
    </div>`
    answer.innerHTML += "<div class='cal harris'>By <a href='http://harrismowbray.com/' target='_blank'>Harris Mowbray</a><br><a href='calendar-changelog.txt'>Changelog</a><br><a href='mailto:harrismowbray@yahoo.com'>Email</a></div>"

}


function internationalize(dy, cl){
    if(cl == "Gregorian" || cl.includes("Julian")){
        dy = dy.split(" ")
        dy[0] = numeralize(dy[0], "Roman")
        dy[1] = {"January": "IANVARIVS", "February": "FEBRUARIVS", "March": "MARTIUS", "April": "APRILIS", "May": "MAIVS", "June": "IVNIVS", "July": "QVINTILIS", "August": "SEXTILIS", "September": "SEPTEMBER", "October": "OCTOBER", "November": "NOVEMBER", "December": "DECEMBER"}[dy[1]]
        dy[2] = numeralize(dy[2], "Roman")
        return dy.join(" ")
    }
    else if(cl == "Armenian"){
        dy = dy.split(" ")
        dy[0] = numeralize(dy[0], "Armenian")
        dy[1] = {"Nawasard": "Նաւասարդ", "Hoṙi": "Հոռի", "Sahmi": "Սահմի", "Trē": "Տրէ", "Kʿałocʿ": "Քաղոց", "Aracʿ": "Արաց", "Mehekan": "Մեհեկան", "Areg": "Արեգ", "Ahekan": "Ահեկան", "Mareri": "Մարերի", "Margacʿ": "Մարգաց", "Hroticʿ": "Հրոտից", "Aweleacʿ": "Աւելեաց"}[dy[1]]
        dy[2] = "<span style='text-decoration: overline'>ԹՎ</span> " + numeralize(dy[2], "Armenian")
        return dy.join(" ")
    }
    else if(cl == "Hebrew"){
        dy = dy.split(" ")
        dy[0] = numeralize(dy[0], "Hebrew")
        dy[1] = {"Tishrei": "תשרי‎", "Cheshvan": "חשון", "Kislev": "כסלו", "Tevet": "טבת", "Shvat": "שבט", "Adar": "אדר", "Adar I": "אדר א׳", "Adar II": "אדר ב׳", "Nisan": "ניסן", "Iyar": "אייר", "Sivan": "סיון", "Tammuz": "תמוז", "Av": "אב‎", "Elul": "אלול"}[dy[1]]
        dy[2] = numeralize(dy[2], "Hebrew")
        return dy.join(" ")
    }
    else if(cl == "Bahá'í" || cl == "Solar Hijri" || cl == "Tabarian"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "۰۱۲۳۴۵۶۷۸۹"[x])
        }
        dy = dy.split(" ")
        dy = `<span dir="rtl">${dy[0]} ${{"Bahá": "بهاء", "Jalál": "جلال", "Jamál": "جمال", "ʻAẓamat": "عظمة", "Núr": "نور", "Raḥmat": "رحمة", "Kalimát": "كلمات", "Kamál": "كمال", "Asmáʼ": "اسماء", "ʻIzzat": "عزة", "Mas͟híyyat": "مشية", "ʻIlm": "علم", "Qudrat": "قدرة", "Qawl": "قول", "Masáʼil": "مسائل", "S͟haraf": "شرف","Sulṭán": "سلطان","Mulk": "ملك","Ayyám-i-Há": "ايام الهاء","ʻAláʼ": "علاء", "Farvardin": "فروردین", "Ordibehesht": "اردیبهشت", "Khordad": "خرداد", "Tir": "تیر", "Mordad": "مرداد", "Shahrivar": "شهریور", "Mehr": "مهر", "Aban": "آبان", "Azar": "آذر", "Dey": "دی", "Bahman": "بهمن", "Esfand": "اسفند", "Fardine Ma": "فردینه ما", "Kerche Ma": "کرچه ما", "Hare Ma": "هر ماه", "Tire Ma": "تیر ماه", "Melare Ma": "ملاره ما", "Shervine Ma": "شروینه ما", "Mire Ma": "میره ما", "Une Ma": "اونه ما", "Shishak": "شیشک", "Pitek": "پیتک", "Arke Ma": "ارکه ما", "De Ma": "دِ ماه", "Vahmane Ma": "وهمنه ما", "Nurze Ma": "نوروز ما"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}${cl == "Bahá'í" ? `` : " هـ ش"}</span>`
        return dy
    }
    else if(cl.startsWith("Islamic") || cl == "Kurdish"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "٠١٢٣٤٥٦٧٨٩"[x])
        }
        dy = dy.split(" ")
        dy = `<span dir="rtl">${dy[0]} ${{"Xakelêwe": "خاکەلێوە", "Gullan": "گوڵان","Zerdan": "زەردان", "Puşperr": "پووشپەڕ","Gelawêj": "گەلاوێژ", "Xermanan": "خەرمانان","Beran": "بەران", "Xezan": "گێزان","Saran": "ﺳﺎﺮﺍﻦ", "Befran": "بەفران","Rêbendan": "ڕێبەندان", "Reşeme": "ڕەشەمە","Muharram": "محرم", "Safar": "صفر", "Rabiʽ al-Awwal": "ربيع الأول", "Rabiʽ al-Thani": "ربيع الآخر", "Jumada al-Awwal": "جمادى الأولى", "Jumada al-Thani": "جمادى الآخرة", "Rajab": "رجب", "Sha'ban": "شعبان", "Ramadan": "رمضان", "Shawwal": "شوال", "Dhu al-Qadah": "ذو القعدة", "Dhu al-Hijjah": "ذو الحجة"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}${cl == "Kurdish" ? "" :  " هـ"}</span>`
        return dy
    }
    else if(cl == "Bengali"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "০১২৩৪৫৬৭৮৯"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Boishakh": "বৈশাখ", "Jyoishţho": "জ্যৈষ্ঠ", "Ashaŗh": "আষাঢ়", "Shrabon": "শ্রাবণ", "Bhadro": "ভাদ্র", "Ashshin": "আশ্বিন", "Kartik": "কার্তিক", "Ôgrohayon": "অগ্রহায়ণ", "Poush": "পৌষ", "Magh": "মাঘ", "Falgun": "ফাল্গুন", "Choitro": "চৈত্র"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Javanese"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Sura": "ꦱꦸꦫ", "Sapar": "ꦱꦥꦂ", "Mulud": "ꦩꦸꦭꦸꦢ꧀", "Bakda Mulud": "ꦧꦏ꧀ꦢꦩꦸꦭꦸꦢ꧀", "Jumadilawal": "ꦗꦸꦩꦢꦶꦭꦮꦭ꧀", "Jumadilakir": "ꦗꦸꦩꦢꦶꦭꦏꦶꦂ", "Rejeb": "ꦉꦗꦼꦧ꧀", "Ruwah": "ꦫꦸꦮꦃ", "Pasa": "ꦥꦱ", "Sawal": "ꦱꦮꦭ꧀", "Sela": "ꦱꦼꦭ", "Besar": "ꦧꦼꦱꦂ"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Indian National" || cl == "Nepal Sambat Solar"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "०१२३४५६७८९"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Chaitra": "चैत्र", "Vaisakha": "वैशाख", "Jyaistha": "ज्येष्ठ", "Asadha": "आषाढ", "Sravana": "श्रावण", "Bhadra": "भाद्रपद", "Asvina": "अश्विन्", "Kartika": "कार्तिक", "Agrahayana": "आग्रहायण", "Pausa": "पौष", "Magha": "माघ", "Phalguna": "फाल्गुन", "Kachhalā": "कछला", "Thinlā": "थिंला", "Pwanhelā": "प्वँहेला", "Silā": "सिला", "Chilā": "चिला", "Chaulā": "चौला", "Bachhalā": "बछला", "Tachhalā": "तछला", "Dilā": "दिला", "Gunlā": "गुंला", "Yanlā": "यंला", "Kaulā": "कौला"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Thai Solar"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "๐๑๒๓๔๕๖๗๘๙"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"January": "มกราคม", "February": "กุมภาพันธ์", "March": "มีนาคม", "April": "เมษายน", "May": "พฤษภาคม", "June": "มิถุนายน", "July": "กรกฎาคม", "August": "สิงหาคม", "September": "กันยายน", "October": "ตุลาคม", "November": "พฤศจิกายน", "December": "ธันวาคม"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy + " พ.ศ."
    }
    else if(cl == "Nanakshahi"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "੦੧੨੩੪੫੬੭੮੯"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Chet": "ਚੇਤ", "Vaisakh": "ਵੈਸਾਖ", "Jeth": "ਜੇਠ", "Harh": "ਹਾੜ", "Sawan": "ਸਾਵਣ", "Bhadon": "ਭਾਦੋਂ", "Assu": "ਅੱਸੂ", "Kattak": "ਕੱਤਕ", "Maghar": "ਮੱਘਰ", "Poh": "ਪੋਹ", "Magh": "ਮਾਘ", "Phaggan": "ਫੱਗਣ"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Mandaean"){
        dy = dy.split(" ")
        dy = `<span dir="rtl">${dy[0]} ${{"Daula": "ࡃࡀࡅࡋࡀ", "Nuna": "ࡍࡅࡍࡀ", "ʿmbra": "ࡏࡌࡁࡓࡀ", "Taura": "ࡕࡀࡅࡓࡀ", "Ṣilmia": "ࡑࡉࡋࡌࡉࡀ", "Sarṭana": "ࡎࡀࡓࡈࡀࡍࡀ", "Aria": "ࡀࡓࡉࡀ", "Šumbulta": "ࡔࡅࡌࡁࡅࡋࡕࡀ", "Qaina": "ࡒࡀࡉࡍࡀ", "Arqba": "ࡀࡓࡒࡁࡀ", "Hiṭia": "ࡄࡉࡈࡉࡀ", "Gadia": "ࡂࡀࡃࡉࡀ"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}</span>`
        return dy
    }
    else if(cl == "Berber"){
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Yennayer": "ⵢⴻⵏⵏⴰⵢⴻⵔ", "Yebrayer": "ⵢⴻⴱⵔⴰⵢⴻⵔ", "Mares": "ⵎⴰⵔⴻⵙ", "Yebrir": "ⵢⴻⴱⵔⵉⵔ", "May": "ⵎⴰⵢ", "Yunyu": "ⵢⵓⵏⵢⵓ", "Yulyuz": "ⵢⵓⵍⵢⵓⵣ", "Ɣuct": "ⵖⵓⵛⵜ", "Cutembir": "ⵛⵓⵜⴻⵎⴱⵉⵔ", "Ktuber": "ⴽⵜⵓⴱⴻⵔ", "Nwambir": "ⵏⵡⴰⵎⴱⵉⵔ", "Dujembir": "ⴷⵓⵊⴻⵎⴱⵉⵔ"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Juche"){
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"January": "일월", "February": "이월", "March": "삼월", "April": "사월", "May": "오월", "June": "유월", "July": "칠월", "August": "팔월", "September": "구월", "October": "시월", "November": "십일월", "December": "십이월"}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Minguo"){
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"January": "一月", "February": "二月", "March": "三月", "April": "四月", "May": "五月", "June": "六月", "July": "七月", "August": "八月", "September": "九月", "October": "十月", "November": "十一月", "December": "十二月"}[dy.slice(1, -1).join(" ")]} 民國${dy[dy.length - 1]}年`
        return dy
    }
    else if(cl == "Coptic"){
        dy = dy.split(" ")
        dy = `${dy[0]} ${{"Thout": "Ⲑⲱⲟⲩⲧ", "Paopi": "Ⲡⲁⲟⲡⲓ", "Hathor": "Ⲁⲑⲱⲣ", "Koiak": "Ⲭⲟⲓⲁⲕ", "Tobi": "Ⲧⲱⲃⲓ", "Meshir": "Ⲙⲉϣⲓⲣ", "Paremhat": "Ⲡⲁⲣⲉⲙϩⲁⲧ", "Parmouti": "Ⲫⲁⲣⲙⲟⲩⲑⲓ", "Pashons": "Ⲡⲁϣⲟⲛⲥ", "Paoni": "Ⲡⲁⲱⲛⲓ", "Epip": "Ⲉⲡⲓⲡ", "Mesori": "Ⲙⲉⲥⲱⲣⲓ", "Pi Kogi Enavot": "Ⲡⲓⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲃⲟⲧ",}[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }
    else if(cl == "Ethiopian"){
        dy = dy.split(" ")
        dy = `${numeralize(dy[0], "Ethiopian")} ${{"Meskerem": "መስከረም", "Tikimt": "ጥቅምት", "Hidar": "ኅዳር", "Tahsas": "ታኅሣሥ", "Tir": "ጥር", "Yakatit": "የካቲት", "Maggabit": "መጋቢት", "Miyazya": "ሚያዝያ", "Ginbot": "ግንቦት", "Sene": "ሰኔ", "Hamle": "ሐምሌ", "Nehasa": "ነሐሴ", "Pagume": "ጳጉሜ",}[dy.slice(1, -1).join(" ")]} ${numeralize(dy[dy.length - 1], "Ethiopian")}`
        return dy
    }
    else if(cl == "Qadimi" || cl == "Fasli (Zoroastrian)" || cl == "Shahanshahi"){
        for(x = 0; x <= 9; x++){
            dy = dy.replace(new RegExp(x, "g"), "૦૧૨૩૪૫૬૭૮૯"[x])
        }
        dy = dy.split(" ")
        dy = `${dy[0]} ${{
            "Farvardin": "ફરવરદીન", 
            "Ardibehesht": "અરદિબેહસ્ત", 
            "Khordad": "ખોરદાદ", 
            "Tir": "તીર",
            "Amardad": "અમરદાદ",
            "Shehrevar": "શહેરેવર",
            "Mehr": "મેહર",
            "Aban": "આબાન", 
            "Azar": "આદર", 
            "Dae": "દએ", 
            "Bahman": "બેહમન", 
            "Asfand": "અસપંદાર", 
            "Ahunavaiti": "અહુનવઇ", 
            "Ushtavaiti": "ઉશતવઇ", 
            "Spentamainyu": "સપેનતોમઇ",
            "Vohuxshathra": "વોહુક્ષથ",
            "Vahishtoishti": "વહિશતોઈશત",
            "Avardad-sal-Gah": "અવરદાદ સાલ ગાહ"
        }[dy.slice(1, -1).join(" ")]} ${dy[dy.length - 1]}`
        return dy
    }

    else return ""
}

function numeralize(number, era){
    finalNum = ""
    if(era == "Roman"){
        romanArray = {
            "MMM": 3000,
            "MM": 2000,
            "M": 1000,
            "CM": 900,
            "DCCC": 800,
            "DCC": 700,
            "DC": 600,
            "D": 500,
            "CD": 400,
            "CCC": 300,
            "CC": 200,
            "C": 100,
            "XC": 90,
            "LXXX": 80,
            "LXX": 70,
            "LX": 60,
            "L": 50,
            "XL": 40,
            "XXX": 30,
            "XX": 20,
            "X": 10,
            "IX": 9,
            "VIII": 8,
            "VII": 7,
            "VI": 6,
            "V": 5,
            "IV": 4,
            "III": 3,
            "II": 2,
            "I": 1,
        }
        for(rA of Object.entries(romanArray)){
            if(number >= rA[1]){
                finalNum += rA[0]
                number = number - rA[1]
            }
        }
        return finalNum
    }
    else if(era == "Armenian"){
        armenianArray = {
            "Ռ": 1000,
            "Ջ": 900,
            "Պ": 800,
            "Չ": 700,
            "Ո": 600,
            "Շ": 500,
            "Ն": 400,
            "Յ": 300,
            "Մ": 200,
            "Ճ": 100,
            "Ղ": 90,
            "Ձ": 80,
            "Հ": 70,
            "Կ": 60,
            "Ծ": 50,
            "Խ": 40,
            "Լ": 30,
            "Ի": 20,
            "Ժ": 10,
            "Թ": 9,
            "Ը": 8,
            "Է": 7,
            "Զ": 6,
            "Ե": 5,
            "Դ": 4,
            "Գ": 3,
            "Բ": 2,
            "Ա": 1,
        }
        for(rA of Object.entries(armenianArray)){
            if(number >= rA[1]){
                finalNum += rA[0]
                number = number - rA[1]
            }
        }
        return finalNum
    }
    else if(era == "Ethiopian"){
        ethiopianArray = {
            "፳፻": 2000,
            "፲፱፻": 1900,
            "፲፰፻": 1800,
            "፺": 90,
            "፹": 80,
            "፸": 70,
            "፷": 60,
            "፶": 50,
            "፵": 40,
            "፴": 30,
            "፳": 20,
            "፲": 10,
            "፱": 9,
            "፰": 8,
            "፯": 7,
            "፮": 6,
            "፭": 5,
            "፬": 4,
            "፫": 3,
            "፪": 2,
            "፩": 1,
        }
        for(rA of Object.entries(ethiopianArray)){
            if(number >= rA[1]){
                finalNum += rA[0]
                number = number - rA[1]
            }
        }
        return finalNum
    }
    else if(era == "Hebrew"){
        hebrewArray = {
            "ה׳": 5000,
            "ד׳": 4000,
            "ג׳": 3000,
            "ב׳": 2000,
            "א׳": 1000,
            "תתק": 900,
            "תת": 800,
            "תש": 700,
            "תר": 600,
            "תק": 500,
            "ת": 400,
            "ש": 300,
            "ר": 200,
            "ק": 100,
            "צ": 90,
            "פ": 80,
            "ע": 70,
            "ס": 60,
            "נ": 50,
            "מ": 40,
            "ל": 30,
            "כ": 20,
            "יט": 19,
            "יח": 18,
            "יז": 17,
            "טז": 16,
            "טו": 15,
            "י": 10,
            "ט": 9,
            "ח": 8,
            "ז": 7,
            "ו": 6,
            "ה": 5,
            "ד": 4,
            "ג": 3,
            "ב": 2,
            "א": 1,
        }
        for(rA of Object.entries(hebrewArray)){
            if(number >= rA[1]){
                finalNum += rA[0]
                number = number - rA[1]
            }
        }
        if(finalNum.length > 1 && !finalNum.endsWith("׳")){
            finalNum = finalNum.slice(0, -1) + "״" + finalNum.slice(-1)
        }
        return finalNum
    }
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
    }*/

    

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
