signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
signDescriptors = ["Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.", "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors", "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.", "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room.", "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.", "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.", "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.", "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.", "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.", "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.", "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.", "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs."]
elements = ["Fire", "Earth", "Air", "Water"]
elementDescriptors = ["assertion, drive, willpower", "communication, socialization, conceptualization", "practicality, caution, material world", "emotion, empathy, sensitivity"]
modalities = ["Cardinal", "Fixed", "Mutable"]
modalityDescriptors = ["action, dynamic, initiative, great force", "resistance to change, great willpower, inflexible", "adaptability, flexibility, resourcefulness"]
polarities = ["Positive", "Negative"]
signSymbols = "♈♉♊♋♌♍♎♏♐♑♒♓"
myInfo = {}

function enter(){
    theYear = year.value
    theMonth = month.value
    theDay = day.value
    if(theMonth < 10) theMonth = "0" + theMonth
    if(theDay < 10) theDay = "0" + theDay
    myInfo.sign = getSign(theMonth, theDay)
    myInfo.element = elements[signs.indexOf(myInfo.sign) % 4]
    myInfo.modality = modalities[signs.indexOf(myInfo.sign) % 3]
    myInfo.polarity = polarities[signs.indexOf(myInfo.sign) % 2]
    myInfo.bestSign = getSign(+theMonth + 1 % 12, theDay)
    myInfo.unixBirthTime = new Date(`${theYear}-${theMonth}-${theDay}`).getTime() / 1000
    myInfo.unixBirthTimeWithHour = new Date(`${theYear}-${theMonth}-${theDay}T11:00:00`).getTime() / 1000
    console.log(myInfo)
    //
    console.log(theMonth)
    starSign.textContent = myInfo.sign + " " + signSymbols[+theMonth]
    starSignInfo.textContent = signDescriptors[theMonth]
    element.textContent = myInfo.element
    elementInfo.textContent = "Keywords for this element: " + elementDescriptors[elements.indexOf(myInfo.element)]
    modality.textContent = myInfo.modality
    modalityInfo.textContent = "Keywords for this modality: " + modalityDescriptors[modalities.indexOf(myInfo.modality)]
    polarity.textContent = myInfo.polarity
    compatibleInfo.textContent = myInfo.bestSign + " " + signSymbols[+theMonth + 1 % 12] + " " + "is the best sign for " + myInfo.sign + " " + signSymbols[theMonth] + " :)"
    if(myInfo.starSign == "Libra") compatibleInfo.textContent = "Virgo ♍︎ is the best sign for Libra :)"
    //
    enterDIV.style.display = "none"
    resultDIV.style.display = "block"
}
function getSign(m, d){
    m = +m
    d = +d
    switch(m){
        case 1:
            return d < 20 ? "Capricorn" : "Aquarius"
        case 2:
            return d < 19 ? "Aquarius" : "Pisces"
        case 3: 
            return d < 21 ? "Pisces" : "Aries"
        case 4:
            return d < 20 ? "Aries" : "Taurus"
        case 5:
            return d < 21 ? "Taurus" : "Gemini"
        case 6:
            return d < 22 ? "Gemini" : "Cancer"
        case 7:
            return d < 23 ? "Cancer" : "Leo"
        case 8:
            return d < 23 ? "Leo" : "Virgo"
        case 9:
            return d < 23 ? "Virgo" : "Libra"
        case 10:
            return d < 23 ? "Libra" : "Scorpio"
        case 11:
            return d < 23 ? "Scorpio" : "Sagittarius"
        case 12:
            return d < 22 ? "Sagittarius" : "Capricorn"
    }
}