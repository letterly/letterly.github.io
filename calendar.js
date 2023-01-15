week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

calendars = {
    Gregorian: {
        months: [
            {
                name: "January",
                days: 31,
            },
            {
                name: "February",
                days: "28/29",
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
        intercalary: {
            type: "day",
            month: 1,
            method: function(x){
                return (x % 4 == 0 && !(x % 100 == 0 && x % 400 != 0))
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 0,
            year: 1900,
        },
        bounds: [1900, 2172],
    },
    Armenian: {
        months: [
            {
                name: "Nawasard",
                days: 30,
            },
            {
                name: "Hoṙi",
                days: 30,
            },
            {
                name: "Sahmi",
                days: 30,
            },
            {
                name: "Trē",
                days: 30,
            },
            {
                name: "Kʿałocʿ",
                days: 30,
            },
            {
                name: "Aracʿ",
                days: 30,
            },
            {
                name: "Mehekan",
                days: 30,
            },
            {
                name: "Areg",
                days: 30,
            },
            {
                name: "Ahekan",
                days: 30,
            },
            {
                name: "Mareri",
                days: 30,
            },
            {
                name: "Margacʿ",
                days: 30,
            },
            {
                name: "Hroticʿ",
                days: 30,
            },
            {
                name: "Aweleacʿ",
                days: 5,
            },
        ],
        intercalary: {
            type: "none",
        },
        startDay: {
            dayinmonth: 14,
            monthcount: 4,
            year: 1349, //445393
        },
        bounds: [1350, 1623]
    },
    Berber: {
        months: [
            {
                name: "Yennayer",
                days: 31,
            },
            {
                name: "Yebrayer",
                days: "28/29",
            },
            {
                name: "Mares",
                days: 31,
            },
            {
                name: "Yebrir",
                days: 30,
            },
            {
                name: "May",
                days: 31,
            },
            {
                name: "Yunyu",
                days: 30,
            },
            {
                name: "Yulyuz",
                days: 31,
            },
            {
                name: "Ɣuct",
                days: 31,
            },
            {
                name: "Cutembir",
                days: 30,
            },
            {
                name: "Ktuber",
                days: 31,
            },
            {
                name: "Nwambir",
                days: 30,
            },
            {
                name: "Dujembir",
                days: 31,
            },
        ],
        intercalary: {
            type: "day",
            month: 1,
            method: function(x){
                return (x % 4 == 2)
            }
        },
        startDay: {
            dayinmonth: 19,
            monthcount: 11,
            year: 2850,
        },
        bounds: [2851, 3124],
    },
    Coptic: {
        months: [
            {
                name: "Thout",
                days: 30,
            },
            {
                name: "Paopi",
                days: 30,
            },
            {
                name: "Hathor",
                days: 30,
            },
            {
                name: "Koiak",
                days: 30,
            },
            {
                name: "Tobi",
                days: 30,
            },
            {
                name: "Meshir",
                days: 30,
            },
            {
                name: "Paremhat",
                days: 30,
            },
            {
                name: "Parmouti",
                days: 30,
            },
            {
                name: "Pashons",
                days: 30,
            },
            {
                name: "Paoni",
                days: 30,
            },
            {
                name: "Epip",
                days: 30,
            },
            {
                name: "Mesori",
                days: 30,
            },
            {
                name: "Ipagomenai",
                days: "5/6",
            },
        ],
        intercalary: {
            type: "day",
            month: 12,
            method: function(x){
                return (x % 4 == 0)
            }
        },
        startDay: {
            dayinmonth: 24,
            monthcount: 3,
            year: 1616, //445393
        },
        bounds: [1621, 1880]
    },
    Ethiopian: {
        months: [
            {
                name: "Meskerem",
                days: 30,
            },
            {
                name: "Tikimt",
                days: 30,
            },
            {
                name: "Hidar",
                days: 30,
            },
            {
                name: "Tahsas",
                days: 30,
            },
            {
                name: "Tir",
                days: 30,
            },
            {
                name: "Yakatit",
                days: 30,
            },
            {
                name: "Maggabit",
                days: 30,
            },
            {
                name: "Miyazya",
                days: 30,
            },
            {
                name: "Ginbot",
                days: 30,
            },
            {
                name: "Sene",
                days: 30,
            },
            {
                name: "Hamle",
                days: 30,
            },
            {
                name: "Nehasa",
                days: 30,
            },
            {
                name: "Pagume",
                days: "5/6",
            },
        ],
        intercalary: {
            type: "day",
            month: 12,
            method: function(x){
                return (x % 4 == 0)
            }
        },
        startDay: {
            dayinmonth: 24,
            monthcount: 3,
            year: 1892, //445393
        },
        bounds: [1893, 2165]
    },
    Indian: {
        months: [
            {
                name: "Chaitra",
                days: "30/31",
            },
            {
                name: "Vaisakha",
                days: 31,
            },
            {
                name: "Jyaistha",
                days: 31,
            },
            {
                name: "Asadha",
                days: 31,
            },
            {
                name: "Sravana",
                days: 31,
            },
            {
                name: "Bhadra",
                days: 31,
            },
            {
                name: "Asvina",
                days: 30,
            },
            {
                name: "Kartika",
                days: 30,
            },
            {
                name: "Agrahayana",
                days: 30,
            },
            {
                name: "Pausa",
                days: 30,
            },
            {
                name: "Magha",
                days: 30,
            },
            {
                name: "Phalguna",
                days: 30,
            },
        ],
        intercalary: {
            type: "day",
            month: 0,
            method: function(x){
                x = +x + 78
                return (x % 4 == 0 && !(x % 100 == 0 && x % 400 != 0))
            }
        },
        startDay: {
            dayinmonth: 11,
            monthcount: 9,
            year: 1821,
        },
        bounds: [1822, 2095]
    },
    Iranian: {
        months: [
            {
                name: "Farvardin",
                days: 31,
            },
            {
                name: "Ordibehesht",
                days: 31,
            },
            {
                name: "Khordad",
                days: 31,
            },
            {
                name: "Tir",
                days: 31,
            },
            {
                name: "Mordad",
                days: 31,
            },
            {
                name: "Shahrivar",
                days: 31,
            },
            {
                name: "Mehr",
                days: 30,
            },
            {
                name: "Aban",
                days: 30,
            },
            {
                name: "Azar",
                days: 30,
            },
            {
                name: "Dey",
                days: 30,
            },
            {
                name: "Bahman",
                days: 30,
            },
            {
                name: "Esfand",
                days: "29/30",
            },
        ],
        intercalary: {
            type: "day",
            month: 11,
            method: function(x){
                return ([1,5,9,13,17,21,25,30].includes(x % 33))
            }
        },
        startDay: {
            dayinmonth: 11,
            monthcount: 9,
            year: 1278, //445393
        },
        bounds: [1279, 1551]
    },
    Mandaean: {
        months: [
            {
                name: "Daula",
                days: 30,
            },
            {
                name: "Nuna",
                days: 30,
            },
            {
                name: "ʿmbra",
                days: 30,
            },
            {
                name: "Taura",
                days: 30,
            },
            {
                name: "Ṣilmia",
                days: 30,
            },
            {
                name: "Sarṭana",
                days: 30,
            },
            {
                name: "Aria",
                days: 30,
            },
            {
                name: "Šumbulta",
                days: 30,
            },
            {
                name: "Parwanaya",
                days: 5,
            },
            {
                name: "Qaina",
                days: 30,
            },
            {
                name: "Arqba",
                days: 30,
            },
            {
                name: "Hiṭia",
                days: 30,
            },
            {
                name: "Gadia",
                days: 30,
            },
        ],
        intercalary: {
            type: "none",
        },
        startDay: {
            dayinmonth: 19,
            monthcount: 4,
            year: 445269, //445393
        },
        bounds: [445270, 445542]
    },
    //2 Sharaf 56 Bahai
}


alltimearray = []
day = "Monday"
yearObject = {}
interCal = {}

for(c of Object.entries(calendars)){
    if(c[1].intercalary.type == "day"){
        interCal[c[0]] = c[1].months[c[1].intercalary.month].days
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else{
        yearObject[c[0]] = c[1].months
    }
}



for(d = 0; d < 100000; d++){

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
        obj[n] = (g.startDay.dayinmonth + " " + g.months[g.startDay.monthcount].name + " " + g.startDay.year)

        if(g.startDay.dayinmonth >= yearObject[n][g.startDay.monthcount].days){
            g.startDay.dayinmonth = 0
            if(g.startDay.monthcount == yearObject[n].length - 1){
                g.startDay.monthcount = 0
                g.startDay.year++
            }
            else{
                g.startDay.monthcount++
            }
        }
        g.startDay.dayinmonth++
    }


    alltimearray.push(obj)


}

console.log(alltimearray)

function reset(){
    answer.innerHTML = ""
    themonth.style.color = "gray"
    themonth.innerHTML = ""
    theday.style.color = "gray"
    theday.innerHTML = ""
    theyear.value = ""
}

function openMonth(){
    answer.innerHTML = ""
    calen = thecalendar.value
    themonth.style.color = "gray"
    theday.style.color = "gray"
    theday.innerHTML = ""
    if(!isNaN(theyear.value) && theyear.value >= calendars[calen].bounds[0] && theyear.value <= calendars[calen].bounds[1]){
        themonth.innerHTML = generateYear(theyear.value, calen).map((x, ind) => `<option value='${ind}'>${x.name}</select>`).join("")
    }
}

function openDay(){
    answer.innerHTML = ""
    calen = thecalendar.value
    themonth.style.color = "black"
    theday.style.color = "gray"
    theday.innerHTML = ""
    for(x = 1; x <= generateYear(theyear.value, calen)[themonth.value].days; x++){
        theday.innerHTML += `<option value="${x}">${x}</option>`
    }
}

function convert(){
    calen = thecalendar.value
    q = generateYear(theyear.value, calen)
    theday.style.color = "black"
    result = `${theday.value} ${q[themonth.value].name} ${theyear.value}`
    z = alltimearray.filter(x => x[calen] == result)[0]
    answer.innerHTML = ""
    for(zz of Object.keys(z)){
        if(zz != calen){
            if(zz == "Day"){
                answer.innerHTML += "<p>" + z[zz] + "</p>"
            }
            else{
                answer.innerHTML += "<div class='cal " + zz.toLowerCase() + "'><span>" + zz + ": " + z[zz] + "</span></div>"
            }
        }
    }
}




function generateYear(y, n){
    yO = {}
    yO = calendars[n].months
    if(calendars[n].intercalary.type == "day"){
        if(calendars[n].intercalary.method(y)){
            yO[calendars[n].intercalary.month].days = interCal[n].split("/")[1]
        }
        else{
            yO[calendars[n].intercalary.month].days = interCal[n].split("/")[0]
        }
    }

    return yO
}

