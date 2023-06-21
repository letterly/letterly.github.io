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
        bounds: [1900, 2118],
        era: "CE",
        link: "https://en.wikipedia.org/wiki/Gregorian_calendar",
        holidays: {
            "Easter": {
                link: "https://en.wikipedia.org/wiki/Easter",
            },
            "Palm Sunday": {
                link: "https://en.wikipedia.org/wiki/Palm_Sunday",
            },
            "Maundy Thursday": {
                link: "https://en.wikipedia.org/wiki/Maundy_Thursday",
            },
            "Feast of the Ascension": {
                link: "https://en.wikipedia.org/wiki/Feast_of_the_Ascension",
            },
            "Pentecost": {
                link: "https://en.wikipedia.org/wiki/Pentecost",
            },
            "Trinity Sunday": {
                link: "https://en.wikipedia.org/wiki/Trinity_Sunday",
            },
            "Epiphany": {
                day: "6 January",
                link: "https://en.wikipedia.org/wiki/Epiphany_(holiday)",
            },
            "Nativity of John the Baptist": {
                day: "24 June",
                link: "https://en.wikipedia.org/wiki/Nativity_of_John_the_Baptist",
            },
            "Assumption of Mary": {
                day: "15 August",
                link: "https://en.wikipedia.org/wiki/Assumption_of_Mary",
            },
            "All Saints' Day": {
                day: "1 November",
                link: "https://en.wikipedia.org/wiki/All_Saints%27_Day"
            },
            "Feast of the Immaculate Conception": {
                day: "8 December",
                link: "https://en.wikipedia.org/wiki/Feast_of_the_Immaculate_Conception",
            },
            "Christmas": {
                day: "25 December",
                link: "https://en.wikipedia.org/wiki/Christmas",
            },
            "Christmas:Armenian": {
                day: "6 January",
                link: "https://en.wikipedia.org/wiki/Observance_of_Christmas_by_country#Armenia",
            },
            "Feast of the Cross": {
                link: "https://en.wikipedia.org/wiki/Feast_of_the_Cross",
                day: "14 September",
            }
        },
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
        holidays: {},
    },
    "Bahá'í": {
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
        holidays: {
            "Naw-Rúz": {
                day: "1 Bahá",
                link: "https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_Naw-R%C3%BAz",
            },
            "1st of Riḍván": {
                day: "13 Jalál",
                link: "https://en.wikipedia.org/wiki/Ridv%C3%A1n",
            },
            "9th of Riḍván": {
                day: "2 Jamál",
                link: "https://en.wikipedia.org/wiki/Ridv%C3%A1n",
            },
            "12th of Riḍván": {
                day: "5 Jamál",
                link: "https://en.wikipedia.org/wiki/Ridv%C3%A1n",
            },
            "Declaration of the Báb": {
                day: "8 ʻAẓamat",
                link: "https://en.wikipedia.org/wiki/B%C3%A1b#Declaration_to_Mull%C3%A1_Husayn",
            },
            "Ascension of Baháʼu'lláh": {
                day: "13 ʻAẓamat",
                link: "https://www.bpl.org/blogs/post/the-origins-and-practices-of-holidays-ascension-of-bahaullah-ascension-of-jesus/",
            },
            "Martyrdom of the Báb": {
                day: "17 Raḥmat",
                link: "https://en.wikipedia.org/wiki/Execution_of_the_B%C3%A1b",
            },
            "Day of the Covenant": {
                day: "4 Qawl",
                link: "https://en.wikipedia.org/wiki/Day_of_the_Covenant_(Bah%C3%A1%CA%BC%C3%AD)",
            },
            "Ascension of ʻAbdu'l-Bahá": {
                day: "6 Qawl",
                link: "https://en.wikipedia.org/wiki/%CA%BBAbdu%27l-Bah%C3%A1#Death_and_funeral",
            },
            "Birth of the Báb": {
                link: "https://en.wikipedia.org/wiki/Twin_Holy_Birthdays",
            },
            "Birth of Baháʼu'lláh": {
                link: "https://en.wikipedia.org/wiki/Birth_of_Bah%C3%A1%CA%BCu%27ll%C3%A1h",
            },
        },
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
            year: 1306,
        },
        bounds: [1306, 1524],
        era: "BS",
        link: "https://en.wikipedia.org/wiki/Bengali_calendars#2018_Revision_of_Bangladesh",
        holidays: {},
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
        bounds: [2851, 3070],
        era: "",
        link: "https://en.wikipedia.org/wiki/Berber_calendar#Current_Julian_calendar",
        holidays: {},
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
        holidays: {},
    },*/
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
                name: "Pi Kogi Enavot",
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
            dayinmonth: 23,
            monthcount: 3,
            year: 1616, //445393
        },
        bounds: [1621, 1835],
        era: "AM",
        link: "https://en.wikipedia.org/wiki/Coptic_calendar",
        holidays: {},
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
        bounds: [1893, 2168],
        era: "",
        link: "https://en.wikipedia.org/wiki/Ethiopian_calendar",
        holidays: {},
    },
    "Fasli (Zoroastrian)": {
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
        bounds: [1269, 1488],
        era: "YZ",
        link: "https://en.wikipedia.org/wiki/Zoroastrian_calendar#Fasli_calendar",
        holidays: {
            "Khordad Sal": {
                day: "6 Farvadin",
                link: "https://en.wikipedia.org/wiki/Khordad_Sal",
            },
            "Zartosht No-Diso": {
                day: "11 Dae",
                link: "Zartosht No-Diso",
            },
        },
    },
    "French Republican": {
        months: [
            {
                name: "Vendémiaire",
                days: 30,
            },
            {
                name: "Brumaire",
                days: 30,
            },
            {
                name: "Frimaire",
                days: 30,
            },
            {
                name: "Nivôse",
                days: 30,
            },
            {
                name: "Pluviôse",
                days: 30,
            },
            {
                name: "Ventôse",
                days: 30,
            },
            {
                name: "Germinal",
                days: 30,
            },
            {
                name: "Floréal",
                days: 30,
            },
            {
                name: "Prairial",
                days: 30,
            },
            {
                name: "Messidor",
                days: 30,
            },
            {
                name: "Thermidor",
                days: 30,
            },
            {
                name: "Fructidor",
                days: 30,
            },
            {
                name: "Sansculottides",
                days: "5/6",
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
        bounds: [108, 300],
        era: "",
        link: "https://en.wikipedia.org/wiki/French_Republican_calendar",
        holidays: {},
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
        holidays: {
            "Rosh Hashanah": {
                day: "1 Tishrei",
                link: "https://en.wikipedia.org/wiki/Rosh_Hashanah",
                length: 2,
            },
            "Yom Kippur": {
                day: "10 Tishrei",
                link: "https://en.wikipedia.org/wiki/Yom_Kippur",
            },
            "Sukkot": {
                day: "15 Tishrei",
                link: "https://en.wikipedia.org/wiki/Sukkot",
                length: 7,
            },
            "Fast of the Firstborn": {
                day: "14 Nisan",
                link: "https://en.wikipedia.org/wiki/Fast_of_the_Firstborn",
                shabbat: {
                    date: "12 Nisan",
                    day: "Wednesday"
                },
            },
            "Pesach": {
                day: "15 Nisan",
                link: "https://en.wikipedia.org/wiki/Passover",
                length: 7,
            },
            "Shemini Atzeret": {
                day: "22 Tishrei",
                link: "https://en.wikipedia.org/wiki/Shemini_Atzeret"
            },
            "Simchat Torah:outside Israel": {
                day: "23 Tishrei",
                link: "https://en.wikipedia.org/wiki/Simchat_Torah",  
            },
            "Tisha B'Av": {
                day: "9 Av",
                link: "https://en.wikipedia.org/wiki/Tisha_B%27Av",
            },
            "Tu B'Av": {
                day: "15 Av",
                link: "https://en.wikipedia.org/wiki/Tu_B%27Av",
            },
            "Purim": {
                day: "14 Adar",
                link: "https://en.wikipedia.org/wiki/Purim",
            },
            "Purim": {
                day: "14 Adar II",
                link: "https://en.wikipedia.org/wiki/Purim",
            },
            "Seventeenth of Tammuz": {
                day: "17 Tammuz",
                link: "https://en.wikipedia.org/wiki/Seventeenth_of_Tammuz",
            },
            "Yom Yerushalayim": {
                day: "28 Iyar",
                link: "https://en.wikipedia.org/wiki/Jerusalem_Day",
            },
            "Tu BiShvat": {
                day: "15 Shvat",
                link: "https://en.wikipedia.org/wiki/Tu_BiShvat",
            },
            "Sigd": {
                day: "29 Cheshvan",
                link: "https://en.wikipedia.org/wiki/Sigd",
            },
            "Lag BaOmer": {
                day: "18 Iyar",
                link: "https://en.wikipedia.org/wiki/Lag_BaOmer",
            },
            "Shavuot": {
                day: "6 Sivan",
                link: "https://en.wikipedia.org/wiki/Shavuot",
            },
            "Hanukkah": {
                day: "25 Kislev",
                link: "https://en.wikipedia.org/wiki/Hanukkah",
                length: 8,
            },
            "Tenth of Tevet": {
                day: "10 Tevet",
                link: "https://en.wikipedia.org/wiki/Tenth_of_Tevet",
            },
            "Fast of Gedalia": {
                day: "3 Tishrei",
                link: "https://en.wikipedia.org/wiki/Fast_of_Gedalia",
                shabbat: {
                    date: "4 Tishrei",
                    day: "Saturday"
                },
            },
            "Fast of Esther": {
                day: "13 Adar",
                link: "https://en.wikipedia.org/wiki/Fast_of_Esther",
                shabbat: {
                    date: "11 Adar",
                    day: "Wednesday"
                },
            },
            "Fast of Esther": {
                day: "13 Adar II",
                link: "https://en.wikipedia.org/wiki/Fast_of_Esther",
                shabbat: {
                    date: "11 Adar II",
                    day: "Wednesday"
                },            
            },
        },
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
        bounds: [1822, 2039],
        era: "SE",
        link: "https://en.wikipedia.org/wiki/Indian_national_calendar",
        holidays: {},
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
        bounds: [1317, 1544],
        era: "AH",
        link: "https://en.wikipedia.org/wiki/Tabular_Islamic_calendar#30-year_cycle",
        holidays: {

            "Day of Arafah": {
                day: "9 Dhu al-Hijjah",
                link: "https://en.wikipedia.org/wiki/Day_of_Arafah",
            },
            "Eid al-Adha": {
                day: "10 Dhu al-Hijjah",
                link: "https://en.wikipedia.org/wiki/Eid_al-Adha",
            },
            "Eid al-Ghadir:Shia": {
                day: "18 Dhu al-Hijjah",
                link: "https://en.wikipedia.org/wiki/Eid_al-Ghadir",
            },
            "Mawlid:Sunni": {
                day: "12 Rabiʽ al-Awwal",
                link: "https://en.wikipedia.org/wiki/Mawlid",
            },
            "Mawlid:Shia": {
                day: "17 Rabiʽ al-Awwal",
                link: "https://en.wikipedia.org/wiki/Mawlid",
            },
            "Eid al-Fitr": {
                day: "1 Shawwal",
                link: "https://en.wikipedia.org/wiki/Eid_al-Fitr",
            },
            "Ashura": {
                day: "10 Muharram",
                link: "https://en.wikipedia.org/wiki/Ashura",
            },

        },
    },
    "Islamic Tabular Tayyibi": {
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
                return ([2,5,8,10,13,16,19,21,24,27,29].includes(x % 30))
            }
        },
        startDay: {
            dayinmonth: 28,
            monthcount: 7,
            year: 1317, //445393
        },
        bounds: [1317, 1544],
        era: "AH",
        link: "https://en.wikipedia.org/wiki/Tabular_Islamic_calendar#30-year_cycle",
        holidays: {},
    },
    Javanese: {
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
        bounds: [1830, 1990],
        era: "AJ",
        link: "https://en.wikipedia.org/wiki/Javanese_calendar",
        holidays: {},
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
        holidays: {},
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
        holidays: {
            "Christmas:Armenian Patriarchate of Jerusalem": {
                link: "https://en.wikipedia.org/wiki/Christmas",
                day: "6 January",
            },
            "Easter": {
                link: "https://en.wikipedia.org/wiki/Easter#Eastern_Christianity_2",
            },
            "Palm Sunday": {
                link: "https://en.wikipedia.org/wiki/Palm_Sunday",
            },
            "Maundy Thursday": {
                link: "https://en.wikipedia.org/wiki/Maundy_Thursday",
            },
            "Feast of the Ascension": {
                link: "https://en.wikipedia.org/wiki/Feast_of_the_Ascension",
            },
            "Pentecost": {
                link: "https://en.wikipedia.org/wiki/Pentecost",
            },
            "Trinity Sunday": {
                link: "https://en.wikipedia.org/wiki/Trinity_Sunday",
            },
            "Epiphany": {
                day: "January 6",
                link: "https://en.wikipedia.org/wiki/Epiphany_(holiday)",
            },
            "Christmas": {
                day: "25 December",
                link: "https://en.wikipedia.org/wiki/Christmas",
            },
            "Feast of the Cross": {
                link: "https://en.wikipedia.org/wiki/Feast_of_the_Cross",
                day: "14 September",
            },
        },
    },
    Kurdish: {
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
        bounds: [2600, 2760],
        era: "",
        link: "https://en.wikipedia.org/wiki/Kurdish_calendar",
        holidays: {},
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
        bounds: [445270, 445487],
        era: "AA",
        link: "https://en.wikipedia.org/wiki/Mandaean_calendar",
        holidays: {
            "Dehwa Daimana":{
                day: "1 Hiṭia",
                link: "https://en.wikipedia.org/wiki/Dehwa_Daimana"
            },
            "Kanshiy u-Zahly": {
                day: "30 Gadia",
                link: "https://en.wikipedia.org/wiki/Dehwa_Rabba#Kanshiy_u-Zahly",
            },
            "Dehwa Rabba": {
                day: "1 Daula",
                link: "https://en.wikipedia.org/wiki/Dehwa_Rabba",
            },
            "Feast of the Great Shishlam": {
                day: "6 Daula",
                link: "https://en.wikipedia.org/wiki/Feast_of_the_Great_Shishlam",
            },
            "Dehwa Hanina": {
                day: "18 Taura",
                link: "https://en.wikipedia.org/wiki/Dehwa_Hanina",
            }
        },
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
        holidays: {},
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
        bounds: [433, 648],
        era: "KE",
        link: "https://en.wikipedia.org/wiki/Nanakshahi_calendar#Mool_Nanakshahi_Calendar",
        holidays: {
            "Sikh New Year": {
                link: "https://en.wikipedia.org/wiki/Punjabi_Culture_Day",
                day: "1 Chet"
            },
            "Hola Mohalla": {
                link: "https://en.wikipedia.org/wiki/Hola_Mohalla",
                day: "2 Chet",
                length: 3,
            },
            "Vaisakhi": {
                link: "https://en.wikipedia.org/wiki/Vaisakhi",
                day: "1 Vaisakh",
                length: 2,
            },
        },
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
        era: "NE",
        link: "https://en.wikipedia.org/wiki/Nepal_Sambat#Solar_Calendar",
        holidays: {},
    },
    "Qadimi": {
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
        bounds: [1269, 1430],
        era: "YZ",
        link: "https://en.wikipedia.org/wiki/Zoroastrian_calendar#Qadimi_calendar",
        holidays: {
            "Khordad Sal": {
                day: "6 Farvadin",
                link: "https://en.wikipedia.org/wiki/Khordad_Sal",
            },
            "Zartosht No-Diso": {
                day: "11 Dae",
                link: "Zartosht No-Diso",
            },
        },
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
        bounds: [1900, 2118],
        era: "AD",
        link: "https://en.wikipedia.org/wiki/Revised_Julian_calendar",
        holidays: {},
    },
    "Shahanshahi": {
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
        bounds: [1269, 1430],
        era: "YZ",
        link: "https://en.wikipedia.org/wiki/Zoroastrian_calendar#Shahanshahi_calendar",
        holidays: {
            "Khordad Sal": {
                day: "6 Farvadin",
                link: "https://en.wikipedia.org/wiki/Khordad_Sal",
            },
            "Zartosht No-Diso": {
                day: "11 Dae",
                link: "Zartosht No-Diso",
            },
        },
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
        bounds: [1279, 1497],
        era: "SH",
        link: "https://en.wikipedia.org/wiki/Solar_Hijri_calendar",
        holidays: {},
    },
    "Tabarian": {
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
                return ([1,5,9,13,17,21,25,30].includes(x % 33))
            }
        },
        startDay: {
            dayinmonth: 11,
            monthcount: 5,
            year: 1411, //445393
        },
        bounds: [1401, 1573],
        era: "SH",
        link: "https://en.wikipedia.org/wiki/Tabarian_calendar",
        holidays: {},
    },
    "Thai Solar": {
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
        holidays: {},
    },
}