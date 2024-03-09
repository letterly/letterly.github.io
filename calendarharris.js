startDays = {
    "Gregorian": [1, "January", 1900],
    "Mayan": "12.14.5.6.18",
    "Armenian": [14, "Kʿałocʿ", 1349],
    "Julian": [20, "December", 1899],
    "Revised Julian": [1, "January", 1900],
    "Bahá'í": [2, "S͟haraf", 56],
    "Hebrew": [1, "Shvat", 5660],
    "Islamic Tabular": [28, "Sha'ban", 1317],
    "Bengali": [18, "Poush", 1306],
    "Mandaean": [19, "Ṣilmia", 445269],
}

hebrewCons = (/*660*/"rcdcrccrdc|drccrdcrcd|rccdrccdrc|drccrdcrcd|crcdrcdrcc|drccdrccrd|crdcrcdcrc|drcdcrcdrc|cdrccrdcrd|crcdcrcdrc|cdrccdrcdr|ccrdcrcdrc|cdrcdcrccr|dcrdccrdcr|cdrcdcrcdr|ccdrccrdcr|dc"/*to 821*/).replace(/\|/g,"")


function toHarrisDate(date, cal){
    lenum = cal == "Japanese" ? -2 : -1
    leDay = date.split(" ")[0]
    leMonth = date.split(" ").slice(1, lenum).join(" ")
    leYear = date.split(" ").slice(lenum).join(" ")
    total = 0
    
    //if 0 year diff just day in between then return
    if(leYear == startDays[cal][2]){
        total = dayWithinYear(date, cal).split("/")[0] - dayWithinYear(startDays[cal].join(" "), cal).split("/")[0]
    }
    else if(leYear == startDays[cal][2] + 1){
        //console.log(dayWithinYear(startDays[cal].join(" "), cal))
        fd1 = +dayWithinYear(startDays[cal].join(" "), cal).split("/")[1]
        fd2 = +dayWithinYear(startDays[cal].join(" "), cal).split("/")[0]
        firstDays = fd1 - fd2
       // console.log(firstDays)
        finalDays = dayWithinYear(date, cal).split("/")[0]
       // console.log(finalDays)
        total = firstDays + +finalDays
       // console.log(total)
    }
    else{
        firstDays = dayWithinYear(startDays[cal].join(" "), cal).split("/")[1] - dayWithinYear(startDays[cal].join(" "), cal).split("/")[0] + 1
        intermediateYears = 0
        for(x = startDays[cal][2] + 1; x < leYear; x++){
            intermediateYears += daysWithinYear(getYear(x, cal))
        }
        finalDays = dayWithinYear(date, cal).split("/")[0]
        total = firstDays + +intermediateYears + +finalDays
    }


    //else find firstDays
    

    //if over 1 year diff find the intermediateYears
    
    
    //find and add finalDays
    
    return total
}



function fromHarrisDate(harrisDate, targetCal){

}

function dayWithinYear(date, cal){
    lenum = cal == "Japanese" ? -2 : -1
    leDay = date.split(" ")[0]
    leMonth = date.split(" ").slice(1, lenum).join(" ")
    leYear = date.split(" ").slice(lenum).join(" ")
    harYear = getYear(leYear, cal)
    harCount = 0
    for(hr of harYear){
        if(hr.startsWith(leMonth)){
            harCount += +leDay
            return harCount + "/" + daysInYear(harYear)
        }
        else{
            harCount += +hr.split(":")[1]
        }
    }
    //console.log(harCount)
    return harCount
}

function daysInYear(calArray){
    return calArray.map(x => x.split(":")[1]).reduce((a, b) => +a + +b, 0)
}
console.log(toHarrisDate("2 January 1900", "Gregorian"))
console.log(toHarrisDate("2 February 1901", "Gregorian"))

function getYear(year, cal){
    /*
    DONE
    -Armenian
    -Bahai
    -Bengali
    -Gregorian
    -Julian
    -Revised Julian
    -Hebrew
    -Islamic Tabular
    */
    /*
    TODO

    -Berber
    -Coptic
    -Dilami
    -Ethiopian
    -Fasli
    -French Republican
    -Indian National
    -ITT
    -Japanese
    -Javanese
    -Juche
    -Kurdish
    -Mandaean
    -Mayan
    -Minguo
    -Nanashaki
    -Nepal
    -Qadimi
    -Solar Hijri
    -Shahanshahi
    -Tabarian
    -Thai
    */
    calendar = {
        "Armenian": [
            "Nawasard:30",
            "Hoṙi:30",
            "Sahmi:30",
            "Trē:30",
            "Kʿałocʿ:30",
            "Aracʿ:30",
            "Mehekan:30",
            "Areg:30",
            "Ahekan:30",
            "Mareri:30",
            "Margacʿ:30",
            "Hroticʿ:30",
            "Aweleacʿ:5",
        ],
        "Bahá'í": [
            "Bahá:19",
            "Jalál:19",
            "Jamál:19",
            "ʻAẓamat:19",
            "Núr:19",
            "Raḥmat:19",
            "Kalimát:19",
            "Kamál:19",
            "Asmáʼ:19",
            "ʻIzzat:19",
            "Mas͟híyyat:19",
            "ʻIlm:19",
            "Qudrat:19",
            "Qawl:19",
            "Masáʼil:19",
            "S͟haraf:19",
            "Sulṭán:19",
            "Mulk:19",
            `Ayyám-i-Há:${((year <= 168 && year > 56 && year % 4 == 0) || ([174, 178, 182, 187, 191, 195, 199, 203, 207, 211, 216, 220].includes(year))) ? "5" : "4"}`,
            "ʻAláʼ:19",
        ],
        "Bengali": [
            "Boishakh:31",
            "Jyoishţho:31",
            "Ashaŗh:31",
            "Shrabon:31",
            "Bhadro:31",
            "Ashshin:30",
            "Kartik:30",
            "Ôgrohayon:30",
            "Poush:30",
            "Magh:30",
            `Falgun:${(year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0) ) ? "31": "30"}`,
            "Choitro:30",

        ],
        "Gregorian": [
            "January:31",
            `February:${(year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0) ) ? "29": "28"}`,
            "March:31",
            "April:30",
            "May:31",
            "June:30",
            "July:31",
            "August:31",
            "September:30",
            "October:31",
            "November:30",
            "December:31",
        ],
        "Julian": [
            "January:31",
            `February:${(year % 4 == 0 ? "29": "28")}`,
            "March:31",
            "April:30",
            "May:31",
            "June:30",
            "July:31",
            "August:31",
            "September:30",
            "October:31",
            "November:30",
            "December:31",
        ],
        "Revised Julian": [
            "January:31",
            `February:${(year % 4 == 0 && !(year % 100 == 0 && year % 900 != 200 && year % 900 != 600) ) ? "29": "28"}`,
            "March:31",
            "April:30",
            "May:31",
            "June:30",
            "July:31",
            "August:31",
            "September:30",
            "October:31",
            "November:30",
            "December:31",
        ],
        "Hebrew": [
            "Tishrei:30",
            `Cheshvan:${hebrewCons.charAt([year - 5660]) != "c" ? 29 : 30}`,
            `Kislev:${hebrewCons.charAt([year - 5660]) != "d" ? 30 : 29}`,
            "Tevet:29",
            "Shvat:30",
            ([3,6,8,11,13,17,0].includes(year % 19) ? "Adar I:30" : "Adar:29"),
            ([3,6,8,11,13,17,0].includes(year % 19) ? "Adar II:29" : ""),
            "Nisan:30",
            "Iyar:29",
            "Sivan:30",
            "Tammuz:29",
            "Av:30",
            "Elul:29",
        ],
        "Islamic Tabular": [
            "Muharram:30",
            "Safar:29",
            "Rabiʽ al-Awwal:30",
            "Rabiʽ al-Thani:29",
            "Jumada al-Awwal:30",
            "Jumada al-Thani:29",
            "Rajab:30",
            "Sha'ban:29",
            "Ramadan:30",
            "Shawwal:29",
            "Dhu al-Qadah:30",
            `Dhu al-Hijjah:${![2,5,7,10,13,16,18,21,24,26,29].includes(year % 30) ? "29" : "30"}`,
        ],
        "Islamic Tabular Tayyibi": [
            "Muharram:30",
            "Safar:29",
            "Rabiʽ al-Awwal:30",
            "Rabiʽ al-Thani:29",
            "Jumada al-Awwal:30",
            "Jumada al-Thani:29",
            "Rajab:30",
            "Sha'ban:29",
            "Ramadan:30",
            "Shawwal:29",
            "Dhu al-Qadah:30",
            `Dhu al-Hijjah:${![2,5,8,10,13,16,19,21,24,27,29].includes(year % 30) ? "29" : "30"}`,
        ],
        "Mandaean": [
            "Daula:30",
            "Nuna:30",
            "ʿmbra:30",
            "Taura:30",
            "Ṣilmia:30",
            "Sarṭana:30",
            "Aria:30",
            "Šumbulta:30",
            "Parwanaya:5",
            "Qaina:30",
            "Arqba:30",
            "Hiṭia:30",
            "Gadia:30",
        ],
    }
    return calendar[cal].filter(x => x)
}

