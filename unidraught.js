
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
    
    for(sol of army) movePlan(sol)
    for(sol of army) attackPlan([{number: sol, kill: "", direction: "", destination: sol}], world)
    
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
    }
}


function movePlan(l){
    multiplier = turn == "white" ? -1 : 1
    if(pieces[turn].indexOf(textOn(l)) == "1" && ((turn == "white" && width * height - width >= l) || (turn == "black" && l >= width))  && textOn(+l - (multiplier * width)) == ""){
        moveplans.push([l, +l - (width * multiplier)])
    }
    if(((turn == "white" && l >= width) || (turn == "black" && width * height - width >= l)) && textOn(+l + (multiplier * width)) == ""){
        moveplans.push([l, +l + (width * multiplier)])
    }
    if(l % width != 0 && textOn(l - 1) == ""){
        moveplans.push([l, l - 1])
    }
    if(width - (l % width) > 1 && textOn(+l + 1) == ""){
        moveplans.push([l, +l + 1])
    }   
}

function attackPlan(lll, w){
    harhar = []
    ll = lll[lll.length - 1].destination
    multiplier = turn == "white" ? -1 : 1
    canattack1 = (turn == "white" && ll >= (width * 2) || (turn == "black" && ll < ((height - 2) * width))) && w[ll + (multiplier * width * 2)] == "" && pieces[opponent].includes(w[ll + (width * multiplier)])
    canattack2 = ll % width > 1 && w[ll - 2] == "" && pieces[opponent].includes(w[ll - 1])
    canattack3 = width - (ll % width) > 2 && w[+ll + 2] == "" && pieces[opponent].includes(w[+ll + 1])
    canattack4 = pieces[turn].indexOf(w[ll]) == "1" && ((turn == "white" && ll < (height - 2) * width) || (turn == "black" && ll >= 2 * width)) && w[ll - (multiplier * width * 2)] == "" && pieces[opponent].includes(w[ll - (multiplier * width)])
    if(!canattack1 && !canattack2 && !canattack3 && !canattack4){
        if(lll.length > 1){
            attackplans.push([...lll])
        }
    }
    else{
        if(canattack1){
            w[ll - width] = ""
            harhar.push({number: ll, direction: "north", kill: ll + (width * multiplier), destination: ll + (multiplier * width * 2)})
        }
        if(canattack2){
            w[ll - 1] = ""
            harhar.push({number: ll, direction: "west", kill: ll - 1, destination: ll - 2})
        }
        if(canattack3){
            w[+ll + 1] = ""
            harhar.push({number: ll, direction: "east", kill: +ll + 1, destination: ll + 2})
        }
        if(canattack4){
            w[+ll + 1] = ""
            harhar.push({number: ll, direction: "south", kill: ll - (width * multiplier), destination: ll - (multiplier * width * 2)})
        }
        for(hhh of harhar) attackPlan([...lll, hhh], w)
    }

}

function textOn(h){
    if(!document.getElementById(h)) console.log('WEIRD REQUEST:' + h)
    return document.getElementById(h).textContent
}

function square(q){
    isARedTile = redtiles.includes(+q)
    if((pieces[turn].includes(textOn(q)) && redtiles.length == 0 || isARedTile) && choice == "Palestinian"){ //appropriate pieces to click
        justMoving = !isNaN(myplans[0][0])
        if(redtiles.includes(+q) && !isNaN(myplans[0][0])){
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
        else if(!isNaN(myplans[0][0])){ //for movers
            myplans = myplans.filter(c => +c[0] == +q)
            redtiles = myplans.map(c => +c[1])
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