function trig(){
    Tfunc = trigfunction.value
    Tangle = trigangle.value
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
        "asec": Math.PI / 2 - Math.asin(Tangle),
        "acsc": Math.PI / 2 - Math.acos(Tangle),
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
        //"arsech": Math.PI / 2 - Math.asinh(Tangle),
        //"arcsch": Math.PI / 2 - Math.acosh(Tangle),
        //"arcoth": Math.PI / 2 - Math.atanh(Tangle),
    }[Tfunc]
    if(trigresult.textContent.includes("Infinity")) trigresult = undefined
}