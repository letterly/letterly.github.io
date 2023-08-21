startDays = {
    "Gregorian": [1, "January", 1900],
    "Mayan": "12.14.5.6.18",
    "Armenian": [14, "Kʿałocʿ", 1349],
}

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
    else{
        firstDays = dayWithinYear(startDays[cal].join(" "), cal).split("/")[1] - dayWithinYear(startDays[cal].join(" "), cal).split("/")[0] + 1
        intermediateYears = 0
        finalDays = dayWithinYear(date, cal).split("/")[1]
        total = firstDays + intermediateYears + finalDays
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
    return harCount
}

function daysInYear(calArray){
    return calArray.map(x => x.split(":")[1]).reduce((a, b) => +a + +b, 0)
}

console.log(toHarrisDate("1 Nawasard 1350", "Armenian"))

function getYear(year, cal){
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
    }
    return calendar[cal]
}

