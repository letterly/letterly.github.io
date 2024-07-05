function trig(){
    Tfunc = trigfunction.value
    Tangle = +trigangle.value
    trigresult.textContent = {
        "sin": Math.sin(Tangle),
        "cos": Math.cos(Tangle),
        "tan": Math.tan(Tangle),
        "sec": 1 / Math.cos(Tangle),
        "csc": 1 / Math.sin(Tangle),
        "cot": 1 / Math.tan(Tangle),

        "asin": Math.asin(Tangle),
        "acos": Math.acos(Tangle),
        "atan": Math.atan(Tangle),
        "asec": Math.acos(1 / Tangle),
        "acsc": Math.asin(1 / Tangle),
        "acot": Math.PI / 2 - Math.atan(Tangle),

        "sinh": Math.sinh(Tangle),
        "cosh": Math.cosh(Tangle),
        "tanh": Math.tanh(Tangle),
        "sech": 1 / Math.cosh(Tangle),
        "csch": 1 / Math.sinh(Tangle),
        "coth": 1 / Math.tanh(Tangle),

        "arsinh": Math.asinh(Tangle),
        "arcosh": Math.acosh(Tangle),
        "artanh": Math.atanh(Tangle),
        "arsech": Math.log(1 / Tangle + Math.sqrt(1 / Tangle + 1) * Math.sqrt(1 / Tangle - 1)),
        "arcsch": Math.log(1 / Tangle + Math.sqrt(1 / Tangle ** 2 + 1)),
        "arcoth": 0.5 * Math.log(1 + 1 / Tangle) - 0.5 * Math.log(1 - 1 / Tangle),

        "versin": 1 - Math.cos(Tangle),
        "vercos": 1 + Math.cos(Tangle),
        "coversin": 1 - Math.sin(Tangle),
        "covercos: ": 1 + Math.sin(Tangle),
        "haversin": (1 - Math.cos(Tangle)) / 2,
        "havercos": (1 + Math.cos(Tangle)) / 2,
        "hacoversin": (1 - Math.sin(Tangle)) / 2,
        "hacovercos": (1 + Math.sin(Tangle)) / 2,

        "arcversin": Math.acos(1 - Tangle),
        "arcvercos": Math.acos(Tangle - 1),
        "arccoversin": Math.asin(1 - Tangle),
        "arccovercos: ": Math.asin(Tangle - 1),
        "archaversin": Math.acos(1 - 2 * Tangle),
        "archavercos": Math.acos(2 * Tangle - 1),
        "archacoversin": Math.asin(1 - 2 * Tangle),
        "archacovercos": Math.asin(2 * Tangle - 1),

        "exsec": 1 / Math.cos(Tangle) - 1,
        "excsc": 1 / Math.sin(Tangle) - 1,
        "arcexsec": Math.acos(1 / (Tangle + 1)),
        "arcexcsc": Math.asin(1 / (Tangle + 1)),

    }[Tfunc]
    if(trigresult.textContent.includes("Infinity") || trigresult.textContent.includes("NaN")) trigresult.textContent = "Undefined"
}