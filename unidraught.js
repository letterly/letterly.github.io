
//

ren(choice)
function findMoves(){
    army = []
    world = []
    for(g = 0; g < width * height; g++){ //KINGING
        if(g < width && document.getElementById(g).textContent == "○"){
            document.getElementById(g).textContent = "◎"
        }
        else if(g >= width * (height - 1) && document.getElementById(g).textContent == "●") document.getElementById(g).textContent = "◉"
        world.push(document.getElementById(g).textContent)
        if(pieces[turn].includes(world[g])){
            army.push(g)
        }
    }
    
    for(sol of army) movePlan(sol, world)
    for(sol of army) attackPlan([{number: sol, mypiece: textOn(sol), kill: "", direction: "", destination: sol}], world)
    
    if(attackplans.length == 0){
        myplans = moveplans
    }
    else{
        myplans = attackplans.filter(z => z.length == Math.max(...attackplans.map(z => z.length)))
    }
    //
    //
    //
    //
    //VERY IMPORTANT VARIABLE HERE
    console.log("MY PLANS")
    console.log(myplans)
    if(myplans.length == 0){
        if(turn == "black") alert("white wins")
        else alert("black wins")
        ren(choice)
    }
}


function movePlan(l, wrld){


    /*

    ::Palestinian::
    
    =Men

    Move:
    (single)
    -Forward
    -Side

    Attack:
    (single)
    -Forward
    -Sideways

    =King

    Move:
    (single)
    -Forward
    -Sideway
    -Backward

    Attack:
    (single)
    -Forward
    -Sideway
    -Backward



    ::Turkish::

    =Men

    Move:
    (single)
    -Forward
    -Side

    Attack:
    (single)
    -Forward
    -Sideways

    =King

    Move:
    (fly)
    -Forward
    -Sideway
    -Backward

    Attack:
    (fly)
    -Forward
    -Sideway
    -Backward




    */




    //

    pieceType = pieces[turn].indexOf(textOn(l)) == 1 ? "king" : "man"
    multiplier = turn == "white" ? -1 : 1



    forwardArr = []
    leftArr = []
    rightArr = []
    backwardArr = []
    directionList = {
        forward: {
            keynum: turn == "white" ? Math.floor(l / width) : Math.floor((width * height - 1 - l) / width),
        },
        backward: {
            keynum: turn == "black" ? Math.floor(l / width) : Math.floor((width * height - 1 - l) / width),
        },
        leftward: {
            keynum: l % width,
        },
        rightward: {
            keynum: width - (l % width) - 1,
        },
    }




    for(g of Object.entries(directionList)){
        dir = g[0]
        m = []
        yy = g[1].keynum
        while(yy > 0){
            if(dir == "rightward"){
                m.push([wrld[+l + yy], +l + yy])
            }
            else if(dir == "leftward"){
                m.push([wrld[+l - yy], +l - yy])
            }
            else if(dir == "forward"){
                m.push([wrld[+l + yy * width * multiplier], +l + yy * width * multiplier])
            }
            else if(dir == "backward"){
                if(pieceType == "king"){
                    m.push([wrld[l - yy * width * multiplier], l - yy * width * multiplier])
                }
            }
            yy--
        }

        m = m.reverse()

        if(m.length > 0 && m[0][0] == ""){
            if(dir == "leftward"){
                moveplans.push([l, +l - 1])
            }
            else if(dir == "rightward"){
                moveplans.push([l, +l + 1])
            }
            else if(dir == "forward"){
                moveplans.push([l, +l + width * multiplier])
            }
            else if(dir == "backward" && pieces[turn][1] == textOn(l)){
                console.log("!!!")
                moveplans.push([l, +l - width * multiplier])
            }
        }
    }
}

function attackPlan(lll, w){
    harhar = []
    ll = lll[lll.length - 1].destination
    pp = lll[lll.length - 1].mypiece

    
    multiplier = turn == "white" ? -1 : 1
    canattack1 = (turn == "white" && ll >= (width * 2) || (turn == "black" && ll < ((height - 2) * width))) && w[ll + (multiplier * width * 2)] == "" && pieces[opponent].includes(w[ll + (width * multiplier)])
    canattack2 = ll % width > 1 && w[ll - 2] == "" && pieces[opponent].includes(w[ll - 1])
    canattack3 = width - (ll % width) > 2 && w[+ll + 2] == "" && pieces[opponent].includes(w[+ll + 1])
    canattack4 = pieces[turn].indexOf(pp) == "1" && ((turn == "white" && ll < (height - 2) * width) || (turn == "black" && ll >= 2 * width)) && w[ll - (multiplier * width * 2)] == "" && pieces[opponent].includes(w[ll - (multiplier * width)])

    //fix?

    if(!canattack1 && !canattack2 && !canattack3 && !canattack4){
        if(lll.length > 1){
            attackplans.push([...lll])
        }
    }
    else{
        if(canattack1){
            w[ll] = ""
            w[ll + width * multiplier] = ""
            w[ll + width * 2 * multiplier] = pp
            harhar.push({number: ll, mypiece: pp, direction: "north", kill: ll + (width * multiplier), destination: ll + (multiplier * width * 2)})
        }
        if(canattack2){
            w[ll] = ""
            w[ll - 1] = ""
            w[ll - 2] = pp
            harhar.push({number: ll, mypiece: pp, direction: "west", kill: ll - 1, destination: ll - 2})
        }
        if(canattack3){
            w[ll] = ""
            w[+ll + 1] = ""
            w[+ll + 2] = pp
            harhar.push({number: ll, mypiece: pp, direction: "east", kill: +ll + 1, destination: ll + 2})
        }
        if(canattack4){
            w[ll] = ""
            w[+ll - width * multiplier] = ""
            w[+ll - (multiplier * 2 * width)] = pp
            harhar.push({number: ll, mypiece: pp, direction: "south", kill: ll - (width * multiplier), destination: ll - (multiplier * width * 2)})
        }
        for(hhh of harhar){
            attackPlan([...lll, hhh], w)
        }
    }

}

function textOn(h){
    if(!document.getElementById(h)) console.log('WEIRD REQUEST:' + h)
    return document.getElementById(h).textContent
}

function square(q){
    isARedTile = redtiles.includes(+q)
    if((pieces[turn].includes(textOn(q)) && redtiles.length == 0 || isARedTile) && workingVariants.includes(choice)){ //appropriate pieces to click
        justMoving = !isNaN(myplans[0][0])
        if(redtiles.includes(+q) && justMoving){
            document.getElementById(q).textContent = textOn(myplans[0][0])
            document.getElementById(myplans[0][0]).textContent = ""
            turn = turn == "white" ? "black" : "white"
            opponent = opponent == "white" ? "black" : "white"
            for(r of redtiles) document.getElementById(r).style.backgroundColor = playoncolor
            redtiles = []
            attackplans = []
            moveplans = []
            myplans = []
            findMoves()
        }
        else if(redtiles.includes(+q)){
            myplans = myplans.filter(c => c[0].destination == q)
            document.getElementById(myplans[0][0].kill).textContent = ""
            document.getElementById(myplans[0][0].destination).textContent = textOn(myplans[0][0].number)
            document.getElementById(myplans[0][0].number).textContent = ""
            for(r of redtiles) document.getElementById(r).style.backgroundColor = playoncolor
            myplans = myplans.map(c => c.slice(1))
            if(myplans[0].length == 0){
                turn = turn == "white" ? "black" : "white"
                opponent = opponent == "white" ? "black" : "white"
                redtiles = []
                attackplans = []
                moveplans = []
                myplans = []
                findMoves()
            }
            else{
                redtiles = myplans.map(c => +c[0].destination)
                for(r of redtiles) document.getElementById(r).style.backgroundColor = "red"
            }
            
        }
        else if(justMoving && myplans.map(c => +c[0]).includes(+q)){ //for movers
            myplans = myplans.filter(c => +c[0] == +q)
            redtiles = myplans.map(c => +c[1])
            console.log(myplans)
            for(r of redtiles) document.getElementById(r).style.backgroundColor = "red"
        }
        else if(myplans.map(c => c[0].number).includes(+q)){
            myplans = myplans.map(c => c.slice(1))
            myplans = myplans.filter(c => c[0].number == q)
           // myplans = myplans.map(c => c.slice(1))
            redtiles = myplans.map(c => +c[0].destination)
            for(r of redtiles) document.getElementById(r).style.backgroundColor = "red"
        }
        else if(textOn(q) == ""){
            alert('you are literally clicking on a blank tile')
        }
        else{
            alert('nope pick something else')
        }
    }
}