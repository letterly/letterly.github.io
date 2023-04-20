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
        bounds: [1900, 2061],
        era: "CE",
        link: "https://en.wikipedia.org/wiki/Gregorian_calendar",
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
        bounds: [1350, 1511],
        era: "",
        link: "https://en.wikipedia.org/wiki/Armenian_calendar",
    },
    Badi: {
        months: [
            {
                name: "Bahá",
                days: 19,
            },
            {
                name: "Jalál",
                days: 19,
            },
            {
                name: "Jamál",
                days: 19,
            },
            {
                name: "ʻAẓamat",
                days: 19,
            },
            {
                name: "Núr",
                days: 19,
            },
            {
                name: "Raḥmat",
                days: 19,
            },
            {
                name: "Kalimát",
                days: 19,
            },
            {
                name: "Kamál",
                days: 19,
            },
            {
                name: "Asmáʼ",
                days: 19,
            },
            {
                name: "ʻIzzat",
                days: 19,
            },
            {
                name: "Mas͟híyyat",
                days: 19,
            },
            {
                name: "ʻIlm",
                days: 19,
            },
            {
                name: "Qudrat",
                days: 19,
            },
            {
                name: "Qawl",
                days: 19,
            },
            {
                name: "Masáʼil",
                days: 19,
            },
            {
                name: "S͟haraf",
                days: 19,
            },
            {
                name: "Sulṭán",
                days: 19,
            },
            {
                name: "Mulk",
                days: 19,
            },
            {
                name: "Ayyám-i-Há",
                days: "4/5",
            },
            {
                name: "ʻAláʼ",
                days: 19,
            },
        ],
        intercalary: {
            type: "day",
            month: 18,
            method: function(x){
                if(x <= 168 && x > 56) return x % 4 == 0
                else return [174, 178, 182, 187, 191, 195, 199, 203, 207, 211, 216, 220].includes(x)
            },
        },
        startDay: {
            dayinmonth: 2,
            monthcount: 15,
            year: 56, //445393
        },
        bounds: [56, 218],
        era: "BE",
        link: "https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_calendar",
    },
    Bengali: {
        months: [
            {
                name: "Boishakh",
                days: 31,
            },
            {
                name: "Jyoishţho",
                days: 31,
            },
            {
                name: "Ashaŗh",
                days: 31,
            },
            {
                name: "Shrabon",
                days: 31,
            },
            {
                name: "Bhadro",
                days: 31,
            },
            {
                name: "Ashshin",
                days: 30,
            },
            {
                name: "Kartik",
                days: 30,
            },
            {
                name: "Ôgrohayon",
                days: 30,
            },
            {
                name: "Poush",
                days: 30,
            },
            {
                name: "Magh",
                days: 30,
            },
            {
                name: "Falgun",
                days: "30/31",
            },
            {
                name: "Choitro",
                days: 30,
            },
        ],
        intercalary: {
            type: "day",
            month: 10,
            method: function(x){
                x = x - 1
                return (x % 4 == 0 && !(x % 100 == 0 && x % 400 != 0))
            }
        },
        startDay: {
            dayinmonth: 19,
            monthcount: 8,
            year: 1307,
        },
        bounds: [1307, 1600],
        era: "BS",
        link: "https://en.wikipedia.org/wiki/Bengali_calendars#2018_Revision_of_Bangladesh",
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
        bounds: [2851, 3012],
        era: "",
        link: "https://en.wikipedia.org/wiki/Berber_calendar#Current_Julian_calendar",
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
        bounds: [1621, 1777],
        era: "AM",
        link: "https://en.wikipedia.org/wiki/Coptic_calendar",
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
        bounds: [1893, 2165],
        era: "",
        link: "https://en.wikipedia.org/wiki/Ethiopian_calendar",
    },
    Hebrew: {
        months: [
            {
                name: "Tishrei",
                days: 30,
            },
            {
                name: "Cheshvan",
                days: 29,
            },
            {
                name: "Kislev",
                days: 30,
            },
            {
                name: "Tevet",
                days: 29,
            },
            {
                name: "Shvat",
                days: 30,
            },
            {
                name: "Adar",
                days: 29,
            },
            {
                name: "Adar II",
                days: 29,
            },
            {
                name: "Nisan",
                days: 30,
            },
            {
                name: "Iyar",
                days: 29,
            },
            {
                name: "Sivan",
                days: 30,
            },
            {
                name: "Tammuz",
                days: 29,
            },
            {
                name: "Av",
                days: 30,
            },
            {
                name: "Elul",
                days: 29,
            },
        ],
        intercalary: {
            type: "month",
            method: function(x){
                return x % 3 == 0
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 4,
            year: 5660,
        },
        bounds: [5660, 5821],
        era: "AM",
        link: "https://en.wikipedia.org/wiki/Hebrew_calendar",
    },
    "Indian National": {
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
        bounds: [1822, 2095],
        era: "",
        link: "https://en.wikipedia.org/wiki/Indian_national_calendar",
    },
    "Islamic Tabular": {
        months: [
            {
                name: "Muharram",
                days: 30,
            },
            {
                name: "Safar",
                days: 29,
            },
            {
                name: "Rabiʽ al-Awwal",
                days: 30,
            },
            {
                name: "Rabiʽ al-Thani",
                days: 29,
            },
            {
                name: "Jumada al-Awwal",
                days: 30,
            },
            {
                name: "Jumada al-Thani",
                days: 29,
            },
            {
                name: "Rajab",
                days: 30,
            },
            {
                name: "Sha'ban",
                days: 29,
            },
            {
                name: "Ramadan",
                days: 30,
            },
            {
                name: "Shawwal",
                days: 29,
            },
            {
                name: "Dhu al-Qadah",
                days: 30,
            },
            {
                name: "Dhu al-Hijjah",
                days: "29/30",
            },
        ],
        intercalary: {
            type: "day",
            month: 11,
            method: function(x){
                return ([2,5,7,10,13,16,18,21,24,26,29].includes(x % 30))
            }
        },
        startDay: {
            dayinmonth: 28,
            monthcount: 7,
            year: 1317, //445393
        },
        bounds: [1317, 1484],
        era: "AH",
        link: "https://en.wikipedia.org/wiki/Tabular_Islamic_calendar#30-year_cycle",
    },
    Juche: {
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
                x = x + 1911
                return (x % 4 == 0 && !(x % 100 == 0 && x % 400 != 0))
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 0,
            year: -11,
        },
        bounds: [1, 150],
        era: "",
        link: "https://en.wikipedia.org/wiki/Juche_calendar",
    },
    Julian: {
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
                return (x % 4 == 0)
            }
        },
        startDay: {
            dayinmonth: 20,
            monthcount: 11,
            year: 1899,
        },
        bounds: [1899, 2061],
        era: "AD",
        link: "https://en.wikipedia.org/wiki/Julian_calendar",
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
        bounds: [445270, 445542],
        era: "",
        link: "https://en.wikipedia.org/wiki/Mandaean_calendar",
    },
    Minguo: {
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
                x = x + 1911
                return (x % 4 == 0 && !(x % 100 == 0 && x % 400 != 0))
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 0,
            year: -11,
        },
        bounds: [1, 150],
        era: "ROC",
        link: "https://en.wikipedia.org/wiki/Republic_of_China_calendar",
    },
    Nanakshahi: {
        months: [
            {
                name: "Chet",
                days: 31,
            },
            {
                name: "Vaisakh",
                days: 31,
            },
            {
                name: "Jeth",
                days: 31,
            },
            {
                name: "Harh",
                days: 31,
            },
            {
                name: "Sawan",
                days: 31,
            },
            {
                name: "Bhadon",
                days: 30,
            },
            {
                name: "Assu",
                days: 31,
            },
            {
                name: "Kattak",
                days: 31,
            },
            {
                name: "Maghar",
                days: 31,
            },
            {
                name: "Poh",
                days: 31,
            },
            {
                name: "Magh",
                days: 31,
            },
            {
                name: "Phaggan",
                days: "30/31",
            },
        ],
        intercalary: {
            type: "day",
            month: 11,
            method: function(x){
                return (x % 4 == 0)
            }
        },
        startDay: {
            dayinmonth: 19,
            monthcount: 4,
            year: 433,
        },
        bounds: [433, 703],
        era: "",
        link: "https://en.wikipedia.org/wiki/Nanakshahi_calendar#Mool_Nanakshahi_Calendar",
    },
    "Nepal Sambat Solar": {
        months: [
            {
                name: "Kachhalā",
                days: 30,
            },
            {
                name: "Thinlā",
                days: 30,
            },
            {
                name: "Pwanhelā",
                days: 30,
            },
            {
                name: "Silā",
                days: 30,
            },
            {
                name: "Chilā",
                days: 30,
            },
            {
                name: "Chaulā",
                days: "29/30",
            },
            {
                name: "Bachhalā",
                days: 31,
            },
            {
                name: "Tachhalā",
                days: 31,
            },
            {
                name: "Dilā",
                days: 31,
            },
            {
                name: "Gunlā",
                days: 31,
            },
            {
                name: "Yanlā",
                days: 31,
            },
            {
                name: "Kaulā",
                days: 31,
            },
        ],
        intercalary: {
            type: "day",
            month: 5,
            method: function(x){
                return (x % 4 == 0 && x % 900 != 200 && x % 900 != 600)
            }
        },
        startDay: {
            dayinmonth: 15,
            monthcount: 2,
            year: 1020,
        },
        bounds: [1023, 1181],
        era: "",
        link: "https://en.wikipedia.org/wiki/Nepal_Sambat#Solar_Calendar",
    },
    "Revised Julian": {
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
                return (x % 4 == 0 && (x % 100 != 0 || x % 900 == 200 || x % 900 == 600))
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 0,
            year: 1900,
        },
        bounds: [1899, 2061],
        era: "AD",
        link: "https://en.wikipedia.org/wiki/Revised_Julian_calendar",
    },
    "Solar Hijri": {
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
        bounds: [1279, 1551],
        era: "SH",
        link: "https://en.wikipedia.org/wiki/Solar_Hijri_calendar",
    },
    "Thai Solar": {
        months: [
            {
                name: "Abbbbril",
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
                days: 28,
            },
            {
                name: "March",
                days: 31,
            },
        ],
        intercalary: {
            type: "thai",
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 9,
            year: 2442,
        },
        bounds: [2443, 2604],
        era: "BE",
        link: "https://en.wikipedia.org/wiki/Thai_solar_calendar",
    },
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
    else if(c[1].intercalary.type == "month"){ //FIX!!
        //interCal[c[0]] = c[1].months[c[1].intercalary.month].days
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
    }
    else if(c[1].intercalary.type == "thai"){
        yearObject[c[0]] = generateYear(c[1].startDay.year, c[0])
        console.log(yearObject[c[0]])
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
        "Jan": "January",
        "Feb": "February",
        "Mar": "March",
        "Apr": "April",
        "May": "May",
        "Jun": "June",
        "Jul": "July",
        "Aug": "August",
        "Sep": "September",
        "Oct": "October",
        "Nov": "November",
        "Dec": "December",
    }
    currentDay[0] = abbreviations[currentDay[0]]
    currentDay = `${currentDay[1]} ${currentDay[0]} ${currentDay[2]}`
    thecurrentday = alltimearray.filter(x => x.Gregorian == currentDay)[0][calen].split(" ")
    theyear.value = thecurrentday[2]
    themonth.innerHTML = generateYear(theyear.value, calen).filter(y => y.days != 0).map((x, ind) => `<option value='${ind}'>${x.name}</select>`).join("")
    themonth.value = 0
    themonth.value = generateYear(theyear.value, calen).map(x => x.name).indexOf(thecurrentday[1])
    console.log(generateYear(theyear.value, calen))
    console.log(themonth.value)
    console.log(generateYear(theyear.value, calen)[themonth.value])
    console.log(generateYear(theyear.value, calen)[themonth.value].days)
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
    calen = thecalendar.value
    if(!isNaN(theyear.value) && theyear.value >= calendars[calen].bounds[0] && theyear.value <= calendars[calen].bounds[1]){
        console.log(generateYear(theyear.value, calen))
        themonth.innerHTML = generateYear(theyear.value, calen).map((x, ind) => `<option value='${ind}'>${x.name}</select>`).join("")
        themonth.value = 0
        openDay()
    }
}

function openDay(){
    answer.innerHTML = ""
    calen = thecalendar.value
    theday.innerHTML = ""
    for(x = 1; x <= generateYear(theyear.value, calen)[themonth.value].days; x++){
        theday.innerHTML += `<option value="${x}">${x}</option>`
    }
    theday.value = 1
    convert()
}

function convert(){
    calen = thecalendar.value
    q = generateYear(theyear.value, calen)
    themonth.style.color = "black"
    theday.style.color = "black"
    result = `${theday.value} ${q[themonth.value].name} ${theyear.value}`
    z = alltimearray.filter(x => x[calen] == result)[0]
    answer.innerHTML = ""
    for(zz of Object.keys(z)){
        if(zz != calen){
            if(zz == "Day"){
                answer.innerHTML += "<div class = 'cal'>" + z[zz] + "</div>"
            }
            else if(!"-0".includes((z[zz].split(" ")[2]).charAt(0))){
                answer.innerHTML += "<div class='cal " + zz.toLowerCase().replace(/ /g, "_") + "'><span><a target='_blank' href='" + calendars[zz].link + "'>" + zz + "</a>: " + z[zz] + " " + calendars[zz].era + "</span></div>"
            }
        }
    }
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
        }
        else{
            yO[5].days = 29
            yO[6].days = 0
        }
    }

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
    return yO
}


reset()
