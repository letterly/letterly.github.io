week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

T = 760

calendars = {
    Gregorian: {
        firstDay: "Sunday/Monday",
        dayStart: "Midnight",
        months: [
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [1900, 1900+T],
        era: "CE",
        link: "https://en.wikipedia.org/wiki/Gregorian_calendar",
    },
    Armenian: {
        firstDay: "N/A",
        dayStart: "Midnight",
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
        bounds: [1350, 1350+T],
        era: "",
        link: "https://en.wikipedia.org/wiki/Armenian_calendar",
    },
    "Bahá'í": {
        firstDay: "Saturday",
        dayStart: "Sunset",
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
        firstDay: "Sunday",
        dayStart: "Sunrise",
        months: [
            {
                name: "Boishakh",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Boishakh",
            },
            {
                name: "Jyoishţho",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Joishtho",
            },
            {
                name: "Ashaŗh",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Asharh",
            },
            {
                name: "Shrabon",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Srabon",
            },
            {
                name: "Bhadro",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Bhadro",
            },
            {
                name: "Ashshin",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Ashvin_(month)",
            },
            {
                name: "Kartik",
                days: 30,
                link: "https://en.wikipedia.org/wiki/K%C4%81rtika_(month)",
            },
            {
                name: "Ôgrohayon",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Ogrohayon",
            },
            {
                name: "Poush",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Poush",
            },
            {
                name: "Magh",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Magh_(Bengali_calendar)",
            },
            {
                name: "Falgun",
                days: "30/31",
                link: "https://en.wikipedia.org/wiki/Falgun",
            },
            {
                name: "Choitro",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Choitro",
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
            dayinmonth: 18,
            monthcount: 8,
            year: 1306,
        },
        bounds: [1306, 1306+T],
        era: "BS",
        link: "https://en.wikipedia.org/wiki/Bengali_calendars#2018_Revision_of_Bangladesh",
    },
    Berber: {
        firstDay: "Monday",
        dayStart: "Midnight",
        months: [
            {
                name: "Yennayer",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "Yebrayer",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "Mares",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "Yebrir",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "Yunyu",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "Yulyuz",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "Ɣuct",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "Cutembir",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "Ktuber",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "Nwambir",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "Dujembir",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [2851, 2851+T],
        era: "",
        link: "https://en.wikipedia.org/wiki/Berber_calendar#Current_Julian_calendar",
    },
    /*
    Burmese: {
        months: [
            {
                name: "Dăgu", //1 တန်ခူး
                days: 29,
            },
            {
                name: "Kăhson", //2 ကဆုန်
                days: 29,
            },
            {
                name: "Năyon", //3 နယုန်
                days: 29,
            },
            {
                name: "Wahso", //4 ဝါဆို (ပထမဝါဆို)
                days: 30,
            },
            {
                name: "Dutiyawahso", //4 ဝါဆို (ဒုတိယဝါဆို)
                days: 30,
            },
            {
                name: "Wagaung", //5 ဝါခေါင်
                days: 29,
            },
            {
                name: "Tawdhălin", //6 တော်သလင်း
                days: 30,
            },
            {
                name: "Dhădingyut", //7 သီတင်းကျွတ်
                days: 29,
            },
            {
                name: "Dăzaungmon", //8 တန်ဆောင်မုန်း
                days: 30,
            },
            {
                name: "Nădaw", //9 နတ်တော်
                days: 29,
            },
            {
                name: "Pyadho", //10 ပြာသို
                days: 30,
            },
            {
                name: "Dăbodwè", //11 တပို့တွဲ
                days: 29,
            },
            {
                name: "Dăbaung", //12 တပေါင်း
                days: 30,
            },
        ],
        intercalary: {
            type: "month",
            method: function(x){ //not necessary code
                return x % 3 == 0
            }
        },
        startDay: {
            dayinmonth: 13,
            monthcount: 7,
            year: 1261,
        },
        bounds: [1261, 1420],
        era: "ME",
        link: "https://en.wikipedia.org/wiki/Burmese_calendar",
    },*/
    Coptic: {
        firstDay: "Monday",
        dayStart: "Sunset",
        months: [
            {
                name: "Thout",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Thout",
            },
            {
                name: "Paopi",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Paopi",
            },
            {
                name: "Hathor",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Hathor_(month)",
            },
            {
                name: "Koiak",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Koiak",
            },
            {
                name: "Tobi",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Tobi_(month)",
            },
            {
                name: "Meshir",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Meshir",
            },
            {
                name: "Paremhat",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Paremhat",
            },
            {
                name: "Parmouti",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Parmouti",
            },
            {
                name: "Pashons",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Pashons",
            },
            {
                name: "Paoni",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Paoni",
            },
            {
                name: "Epip",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Epip",
            },
            {
                name: "Mesori",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Mesori",
            },
            {
                name: "Pi Kogi Enavot",
                days: "5/6",
                link: "https://en.wikipedia.org/wiki/Intercalary_month_(Egypt)#Coptic",
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
            dayinmonth: 23,
            monthcount: 3,
            year: 1616, //445393
        },
        bounds: [1621, 1621+T],
        era: "AM",
        link: "https://en.wikipedia.org/wiki/Coptic_calendar",
    },
    Ethiopian: {
        firstDay: "Monday",
        dayStart: "Sunset",
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
        bounds: [1893, 1893+T],
        era: "",
        link: "https://en.wikipedia.org/wiki/Ethiopian_calendar",
    },
    "Fasli (Zoroastrian)": {
        firstDay: "N/A",
        dayStart: "Sunrise",
        months: [
            {
                name: "Farvardin",
                days: 30,
            },
            {
                name: "Ardibehesht",
                days: 30,
            },
            {
                name: "Khordad",
                days: 30,
            },
            {
                name: "Tir",
                days: 30,
            },
            {
                name: "Amardad",
                days: 30,
            },
            {
                name: "Shehrevar",
                days: 30,
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
                name: "Dae",
                days: 30,
            },
            {
                name: "Bahman",
                days: 30,
            },
            {
                name: "Asfand",
                days: 30,
            },
            {
                name: "Ahunavaiti",
                days: 1,
            },
            {
                name: "Ushtavaiti",
                days: 1,
            },
            {
                name: "Spentamainyu",
                days: 1,
            },
            {
                name: "Vohuxshathra",
                days: 1,
            },
            {
                name: "Vahishtoishti",
                days: 1,
            },
            {
                name: "Avardad-sal-Gah",
                days: "0/1",
            },
        ],
        intercalary: {
            type: "day",
            month: 17,
            method: function(x){
                return (x % 4 == 0)
            }
        },
        startDay: {
            dayinmonth: 17,
            monthcount: 9,
            year: 1269,
        },
        bounds: [1269, 1269+T],
        era: "YZ",
        link: "https://en.wikipedia.org/wiki/Zoroastrian_calendar#Fasli_calendar",
    },
    "French Republican": {
        firstDay: "N/A",
        dayStart: "Midnight",
        months: [
            {
                name: "Vendémiaire",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Vend%C3%A9miaire",
            },
            {
                name: "Brumaire",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Brumaire",
            },
            {
                name: "Frimaire",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Frimaire",
            },
            {
                name: "Nivôse",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Niv%C3%B4se",
            },
            {
                name: "Pluviôse",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Pluvi%C3%B4se",
            },
            {
                name: "Ventôse",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Vent%C3%B4se",
            },
            {
                name: "Germinal",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Germinal_(month)",
            },
            {
                name: "Floréal",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Flor%C3%A9al",
            },
            {
                name: "Prairial",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Prairial",
            },
            {
                name: "Messidor",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Messidor",
            },
            {
                name: "Thermidor",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Thermidor",
            },
            {
                name: "Fructidor",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Fructidor",
            },
            {
                name: "Sansculottides",
                days: "5/6",
                link: "https://en.wikipedia.org/wiki/Sansculottides",
            },
        ],
        intercalary: {
            type: "day",
            month: 12,
            method: function(x){
                return (x % 4 == 0 && !(x % 100 == 0 && x % 400 != 0))
            }
        },
        startDay: {
            dayinmonth: 12,
            monthcount: 3,
            year: 108,
        },
        bounds: [108, 108+T],
        era: "",
        link: "https://en.wikipedia.org/wiki/French_Republican_calendar",
    },
    Japanese: {
        firstDay: "Sunday",
        dayStart: "Midnight",
        months: [
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [1900, 2024],
        era: "",
        link: "https://en.wikipedia.org/wiki/Japanese_calendar",
    },
    Hebrew: {
        firstDay: "Sunday",
        dayStart: "Sunset",
        months: [
            {
                name: "Tishrei",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Tishrei",
            },
            {
                name: "Cheshvan",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Cheshvan",
            },
            {
                name: "Kislev",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Kislev",
            },
            {
                name: "Tevet",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Tevet",
            },
            {
                name: "Shvat",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Shevat",
            },
            {
                name: "Adar",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Adar",
            },
            {
                name: "Adar II",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Adar",
            },
            {
                name: "Nisan",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Nisan",
            },
            {
                name: "Iyar",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Iyar",
            },
            {
                name: "Sivan",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Sivan",
            },
            {
                name: "Tammuz",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Tammuz_(Hebrew_month)",
            },
            {
                name: "Av",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Av",
            },
            {
                name: "Elul",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Elul",
            },
        ],
        intercalary: {
            type: "month",
            method: function(x){ //not necessary code
                return x % 3 == 0
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 4,
            year: 5660,
        },
        bounds: [5660, 5879],
        era: "AM",
        link: "https://en.wikipedia.org/wiki/Hebrew_calendar",
    },
    "Indian National": {
        firstDay: "Sunday",
        dayStart: "Midnight",
        months: [
            {
                name: "Chaitra",
                days: "30/31",
                link: "https://en.wikipedia.org/wiki/Chaitra",
            },
            {
                name: "Vaisakha",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Vaisakha",
            },
            {
                name: "Jyaistha",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Jyeshtha_(month)",
            },
            {
                name: "Asadha",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Ashadha",
            },
            {
                name: "Sravana",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Shravana_(month)",
            },
            {
                name: "Bhadra",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Bhadra_(Hindu_calendar)",
            },
            {
                name: "Asvina",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Ashvin_(month)",
            },
            {
                name: "Kartika",
                days: 30,
                link: "https://en.wikipedia.org/wiki/K%C4%81rtika_(month)",
            },
            {
                name: "Agrahayana",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Agrahayana",
            },
            {
                name: "Pausa",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Pausha",
            },
            {
                name: "Magha",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Magha_(month)",
            },
            {
                name: "Phalguna",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Phalguna",
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
        bounds: [1822, 1822+T],
        era: "SE",
        link: "https://en.wikipedia.org/wiki/Indian_national_calendar",
    },
    "Islamic Tabular": {
        firstDay: "Saturday",
        dayStart: "Sunset",
        months: [
            {
                name: "Muharram",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Muharram",
            },
            {
                name: "Safar",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Safar",
            },
            {
                name: "Rabiʽ al-Awwal",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Rabi%27_al-Awwal",
            },
            {
                name: "Rabiʽ al-Thani",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Rabi%27_al-Thani",
            },
            {
                name: "Jumada al-Awwal",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Jumada_al-Awwal",
            },
            {
                name: "Jumada al-Thani",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Jumada_al-Thani",
            },
            {
                name: "Rajab",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Rajab",
            },
            {
                name: "Sha'ban",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Sha%27ban",
            },
            {
                name: "Ramadan",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Ramadan_(calendar_month)",
            },
            {
                name: "Shawwal",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Shawwal",
            },
            {
                name: "Dhu al-Qadah",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Dhu_al-Qadah",
            },
            {
                name: "Dhu al-Hijjah",
                days: "29/30",
                link: "https://en.wikipedia.org/wiki/Dhu_al-Hijja",
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
        bounds: [1317, 1317+T],
        era: "AH",
        link: "https://en.wikipedia.org/wiki/Tabular_Islamic_calendar#30-year_cycle",
    },
    "Islamic Tabular Tayyibi": {
        firstDay: "Saturday",
        dayStart: "Sunset",
        months: [
            {
                name: "Muharram",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Muharram",
            },
            {
                name: "Safar",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Safar",
            },
            {
                name: "Rabiʽ al-Awwal",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Rabi%27_al-Awwal",
            },
            {
                name: "Rabiʽ al-Thani",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Rabi%27_al-Thani",
            },
            {
                name: "Jumada al-Awwal",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Jumada_al-Awwal",
            },
            {
                name: "Jumada al-Thani",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Jumada_al-Thani",
            },
            {
                name: "Rajab",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Rajab",
            },
            {
                name: "Sha'ban",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Sha%27ban",
            },
            {
                name: "Ramadan",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Ramadan_(calendar_month)",
            },
            {
                name: "Shawwal",
                days: 29,
                link: "https://en.wikipedia.org/wiki/Shawwal",
            },
            {
                name: "Dhu al-Qadah",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Dhu_al-Qadah",
            },
            {
                name: "Dhu al-Hijjah",
                days: "29/30",
                link: "https://en.wikipedia.org/wiki/Dhu_al-Hijja",
            },
        ],
        intercalary: {
            type: "day",
            month: 11,
            method: function(x){
                return ([2,5,8,10,13,16,19,21,24,27,29].includes(x % 30))
            }
        },
        startDay: {
            dayinmonth: 28,
            monthcount: 7,
            year: 1317, //445393
        },
        bounds: [1317, 1317+T],
        era: "AH",
        link: "https://en.wikipedia.org/wiki/Tabular_Islamic_calendar#30-year_cycle",
    },
    Javanese: {
        firstDay: "Monday",
        dayStart: "Sunset",
        months: [
            {
                name: "Sura",
                days: 30,
            },
            {
                name: "Sapar",
                days: 29,
            },
            {
                name: "Mulud",
                days: 30,
            },
            {
                name: "Bakda Mulud",
                days: 29,
            },
            {
                name: "Jumadilawal",
                days: 30,
            },
            {
                name: "Jumadilakir",
                days: 29,
            },
            {
                name: "Rejeb",
                days: 30,
            },
            {
                name: "Ruwah",
                days: 29,
            },
            {
                name: "Pasa",
                days: 30,
            },
            {
                name: "Sawal",
                days: 29,
            },
            {
                name: "Sela",
                days: 30,
            },
            {
                name: "Besar",
                days: "29/30",
            },
        ],
        intercalary: {
            type: "day",
            month: 11,
            method: function(x){
                return ([3,5,0].includes(x % 8))
            }
        },
        startDay: {
            dayinmonth: 1,
            monthcount: 8,
            year: 1829, //445393
        },
        bounds: [1830, 1830+T],
        era: "AJ",
        link: "https://en.wikipedia.org/wiki/Javanese_calendar",
    },
    Juche: {
        firstDay: "Sunday",
        dayStart: "Midnight",
        months: [
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [1, T - 11],
        era: "",
        link: "https://en.wikipedia.org/wiki/Juche_calendar",
    },
    Julian: {
        firstDay: "Monday",
        dayStart: "Midnight",
        months: [
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [1899, 1899 + T],
        era: "AD",
        link: "https://en.wikipedia.org/wiki/Julian_calendar",
    },
    Kurdish: {
        firstDay: "Saturday",
        dayStart: "Midnight",
        months: [
            {
                name: "Xakelêwe",
                days: 31,
            },
            {
                name: "Gullan",
                days: 31,
            },
            {
                name: "Zerdan",
                days: 31,
            },
            {
                name: "Puşperr",
                days: 31,
            },
            {
                name: "Gelawêj",
                days: 31,
            },
            {
                name: "Xermanan",
                days: 31,
            },
            {
                name: "Beran",
                days: 30,
            },
            {
                name: "Xezan",
                days: 30,
            },
            {
                name: "Saran",
                days: 30,
            },
            {
                name: "Befran",
                days: 30,
            },
            {
                name: "Rêbendan",
                days: 30,
            },
            {
                name: "Reşeme",
                days: "29/30",
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
            dayinmonth: 12,
            monthcount: 9,
            year: 2599,
        },
        bounds: [2600, 2600 + T],
        era: "",
        link: "https://en.wikipedia.org/wiki/Kurdish_calendar",
    },
    Mandaean: {
        firstDay: "Sunday",
        dayStart: "Sunrise",
        months: [
            {
                name: "Daula",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Daula_(month)",
            },
            {
                name: "Nuna",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Nuna_(month)",
            },
            {
                name: "ʿmbra",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Embra_(month)",
            },
            {
                name: "Taura",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Taura_(month)",
            },
            {
                name: "Ṣilmia",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Silmia",
            },
            {
                name: "Sarṭana",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Sartana_(month)",
            },
            {
                name: "Aria",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Aria_(month)",
            },
            {
                name: "Šumbulta",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Shumbulta",
            },
            {
                name: "Parwanaya",
                days: 5,
                link: "https://en.wikipedia.org/wiki/Parwanaya",
            },
            {
                name: "Qaina",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Qaina",
            },
            {
                name: "Arqba",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Arqba",
            },
            {
                name: "Hiṭia",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Hitia",
            },
            {
                name: "Gadia",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Gadia_(month)",
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
        bounds: [445270, 445270+T],
        era: "AA",
        link: "https://en.wikipedia.org/wiki/Mandaean_calendar",
    },
    Minguo: {
        firstDay: "Sunday",
        dayStart: "Midnight",
        months: [
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [1, T - 11],
        era: "ROC",
        link: "https://en.wikipedia.org/wiki/Republic_of_China_calendar",
    },
    Nanakshahi: {
        firstDay: "Sunday",
        dayStart: "Midnight",
        months: [
            {
                name: "Chet",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Chet_(month)",
            },
            {
                name: "Vaisakh",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Vaisakh",
            },
            {
                name: "Jeth",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Jeth",
            },
            {
                name: "Harh",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Harh",
            },
            {
                name: "Sawan",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Sawan",
            },
            {
                name: "Bhadon",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Bhadon",
            },
            {
                name: "Assu",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Assu",
            },
            {
                name: "Kattak",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Kattak",
            },
            {
                name: "Maghar",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Magghar_(month)",
            },
            {
                name: "Poh",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Poh",
            },
            {
                name: "Magh",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Magh_(Sikh_calendar)",
            },
            {
                name: "Phaggan",
                days: "30/31",
                link: "https://en.wikipedia.org/wiki/Phaggan",
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
        bounds: [433, 433+T],
        era: "KE",
        link: "https://en.wikipedia.org/wiki/Nanakshahi_calendar#Mool_Nanakshahi_Calendar",
    },
    "Nepal Sambat Solar": {
        firstDay: "Sunday",
        dayStart: "Midnight",
        months: [
            {
                name: "Kachhalā",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Kachhala_(month)",
            },
            {
                name: "Thinlā",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Thinla_(month)",
            },
            {
                name: "Pwanhelā",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Pwanhela_(month)",
            },
            {
                name: "Silā",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Sila_(month)",
            },
            {
                name: "Chilā",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Chila_(month)",
            },
            {
                name: "Chaulā",
                days: "29/30",
                link: "https://en.wikipedia.org/wiki/Chaula_(month)",
            },
            {
                name: "Bachhalā",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Bachhala_(month)",
            },
            {
                name: "Tachhalā",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Tachhala_(month)",
            },
            {
                name: "Dilā",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Dila_(month)",
            },
            {
                name: "Gunlā",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Gunla",
            },
            {
                name: "Yanlā",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Yanla_(month)",
            },
            {
                name: "Kaulā",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Kaula_(month)",
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
        bounds: [1023, 1023+T],
        era: "NE",
        link: "https://en.wikipedia.org/wiki/Nepal_Sambat#Solar_Calendar",
    },
    "Qadimi": {
        firstDay: "N/A",
        dayStart: "Sunrise",
        months: [
            {
                name: "Farvardin",
                days: 30,
            },
            {
                name: "Ardibehesht",
                days: 30,
            },
            {
                name: "Khordad",
                days: 30,
            },
            {
                name: "Tir",
                days: 30,
            },
            {
                name: "Amardad",
                days: 30,
            },
            {
                name: "Shehrevar",
                days: 30,
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
                name: "Dae",
                days: 30,
            },
            {
                name: "Bahman",
                days: 30,
            },
            {
                name: "Asfand",
                days: 30,
            },
            {
                name: "Ahunavaiti",
                days: 1,
            },
            {
                name: "Ushtavaiti",
                days: 1,
            },
            {
                name: "Spentamainyu",
                days: 1,
            },
            {
                name: "Vohuxshathra",
                days: 1,
            },
            {
                name: "Vahishtoishti",
                days: 1,
            },
        ],
        intercalary: {
            type: "none",
        },
        startDay: {
            dayinmonth: 19,
            monthcount: 4,
            year: 1269,
        },
        bounds: [1269, 1269+T],
        era: "YZ",
        link: "https://en.wikipedia.org/wiki/Zoroastrian_calendar#Qadimi_calendar",
    },
    "Revised Julian": {
        firstDay: "Monday",
        dayStart: "Midnight",
        months: [
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: "28/29",
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
            },
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
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
        bounds: [1900, 1900+T],
        era: "AD",
        link: "https://en.wikipedia.org/wiki/Revised_Julian_calendar",
    },
    "Shahanshahi": {
        firstDay: "N/A",
        dayStart: "Sunrise",
        months: [
            {
                name: "Farvardin",
                days: 30,
            },
            {
                name: "Ardibehesht",
                days: 30,
            },
            {
                name: "Khordad",
                days: 30,
            },
            {
                name: "Tir",
                days: 30,
            },
            {
                name: "Amardad",
                days: 30,
            },
            {
                name: "Shehrevar",
                days: 30,
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
                name: "Dae",
                days: 30,
            },
            {
                name: "Bahman",
                days: 30,
            },
            {
                name: "Asfand",
                days: 30,
            },
            {
                name: "Ahunavaiti",
                days: 1,
            },
            {
                name: "Ushtavaiti",
                days: 1,
            },
            {
                name: "Spentamainyu",
                days: 1,
            },
            {
                name: "Vohuxshathra",
                days: 1,
            },
            {
                name: "Vahishtoishti",
                days: 1,
            },
        ],
        intercalary: {
            type: "none",
        },
        startDay: {
            dayinmonth: 19,
            monthcount: 3,
            year: 1269,
        },
        bounds: [1269, 1269+T],
        era: "YZ",
        link: "https://en.wikipedia.org/wiki/Zoroastrian_calendar#Shahanshahi_calendar",
    },
    "Solar Hijri": {
        firstDay: "Saturday",
        dayStart: "Midnight",
        months: [
            {
                name: "Farvardin",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Farvardin",
            },
            {
                name: "Ordibehesht",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Ordibehesht",
            },
            {
                name: "Khordad",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Khordad",
            },
            {
                name: "Tir",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Tir_(month)",
            },
            {
                name: "Mordad",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Mordad",
            },
            {
                name: "Shahrivar",
                days: 31,
                link: "https://en.wikipedia.org/wiki/Shahrivar",
            },
            {
                name: "Mehr",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Mehr_(month)",
            },
            {
                name: "Aban",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Aban_(month)",
            },
            {
                name: "Azar",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Azar",
            },
            {
                name: "Dey",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Dey_(month)",
            },
            {
                name: "Bahman",
                days: 30,
                link: "https://en.wikipedia.org/wiki/Bahman",
            },
            {
                name: "Esfand",
                days: "29/30",
                link: "https://en.wikipedia.org/wiki/Esfand",
            },
        ],
        intercalary: {
            type: "day",
            month: 11,
            method: function(x){
                return ([1280, 1284, 1288, 1292, 1296, 1300, 1304, 1308, 1313, 1317, 1321, 1325, 1329, 1333, 1337, 1341, 1346, 1350, 1354, 1358, 1362, 1366, 1370, 1375, 1379, 1383, 1387, 1391, 1395, 1399, 1403].includes(x))
            }
        },
        startDay: {
            dayinmonth: 11,
            monthcount: 9,
            year: 1278, //445393
        },
        bounds: [1279, 1403],
        era: "SH",
        link: "https://en.wikipedia.org/wiki/Solar_Hijri_calendar",
    },
    "Tabarian": {
        firstDay: "Saturday",
        dayStart: "Midnight",
        months: [
            {
                name: "Fardine Ma",
                days: 30,
            },
            {
                name: "Kerche Ma",
                days: 30,
            },
            {
                name: "Hare Ma",
                days: 30,
            },
            {
                name: "Tire Ma",
                days: 30,
            },
            {
                name: "Melare Ma",
                days: 30,
            },
            {
                name: "Shervine Ma",
                days: 30,
            },
            {
                name: "Mire Ma",
                days: 30,
            },
            {
                name: "Une Ma",
                days: 30,
            },
            {
                name: "Shishak",
                days: "0/1",
            },
            {
                name: "Pitek",
                days: 5,
            },
            {
                name: "Arke Ma",
                days: 30,
            },
            {
                name: "De Ma",
                days: 30,
            },
            {
                name: "Vahmane Ma",
                days: 30,
            },
            {
                name: "Nurze Ma",
                days: 30,
            },
        ],
        intercalary: {
            type: "day",
            month: 8,
            method: function(x){
                return ([1280, 1284, 1288, 1292, 1296, 1300, 1304, 1308, 1313, 1317, 1321, 1325, 1329, 1333, 1337, 1341, 1346, 1350, 1354, 1358, 1362, 1366, 1370, 1375, 1379, 1383, 1387, 1391, 1395, 1399, 1403].includes(x - 132))
            }
        },
        startDay: {
            dayinmonth: 11,
            monthcount: 5,
            year: 1411,
        },
        bounds: [1411, 1535],
        era: "SH",
        link: "https://en.wikipedia.org/wiki/Tabarian_calendar",
    },
    "Dilami": {
        firstDay: "Saturday",
        dayStart: "Midnight",
        months: [
            {
                name: "Nowruz Ma",
                days: 30,
            },
            {
                name: "Korch Ma",
                days: 30,
            },
            {
                name: "Aria Ma",
                days: 30,
            },
            {
                name: "Tir Ma",
                days: 30,
            },
            {
                name: "Mordal Ma",
                days: 30,
            },
            {
                name: "Shrir Ma",
                days: 30,
            },
            {
                name: "Amir Ma",
                days: 30,
            },
            {
                name: "Aval Ma",
                days: 30,
            },
            {
                name: "Vishak",
                days: "0/1",
            },
            {
                name: "Panjik",
                days: 5,
            },
            {
                name: "Sia Ma",
                days: 30,
            },
            {
                name: "Dia Ma",
                days: 30,
            },
            {
                name: "Orfne Ma",
                days: 30,
            },
            {
                name: "Esfandar Ma",
                days: 30,
            },
        ],
        intercalary: {
            type: "day",
            month: 8,
            method: function(x){
                return x % 4 == 0
            }
        },
        startDay: {
            dayinmonth: 28,
            monthcount: 4,
            year: 1473, //445393
        },
        bounds: [1473, 1473 +T],
        era: "",
        link: "https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D8%AF%DB%8C%D9%84%D9%85%DB%8C",
    },
    "Thai Solar": {
        firstDay: "Monday",
        dayStart: "Midnight",
        months: [
            {
                name: "April",
                days: 30,
                link: "https://en.wikipedia.org/wiki/April",
            },
            {
                name: "May",
                days: 31,
                link: "https://en.wikipedia.org/wiki/May",
            },
            {
                name: "June",
                days: 30,
                link: "https://en.wikipedia.org/wiki/June",
            },
            {
                name: "July",
                days: 31,
                link: "https://en.wikipedia.org/wiki/July",
            },
            {
                name: "August",
                days: 31,
                link: "https://en.wikipedia.org/wiki/August",
            },
            {
                name: "September",
                days: 30,
                link: "https://en.wikipedia.org/wiki/September",
            },
            {
                name: "October",
                days: 31,
                link: "https://en.wikipedia.org/wiki/October",
            },
            {
                name: "November",
                days: 30,
                link: "https://en.wikipedia.org/wiki/November",
            },
            {
                name: "December",
                days: 31,
                link: "https://en.wikipedia.org/wiki/December",
            },
            {
                name: "January",
                days: 31,
                link: "https://en.wikipedia.org/wiki/January",
            },
            {
                name: "February",
                days: 28,
                link: "https://en.wikipedia.org/wiki/February",
            },
            {
                name: "March",
                days: 31,
                link: "https://en.wikipedia.org/wiki/March",
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
        bounds: [2443, 2443+T],
        era: "BE",
        link: "https://en.wikipedia.org/wiki/Thai_solar_calendar",
    },
}