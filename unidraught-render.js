function ren(type){
    choice = type
    board.innerHTML = ""
    infobox.innerHTML = ""
    d = draughtVariants[type]
    playoncolor = (d.type == "orthogonal" || type == "Spanish") ? "white" : "grey"
    //make the infobox
    infobox.innerHTML += `<h2>${type} Checkers</h2>`
    infobox.innerHTML += `<p>${{
        "white": "The white team always goes first in this variant",
        "black": "The black team always goes first in this variant",
        "either": "Either team can start in this variant",
    }[d.firstteam]}<p>`   
    infobox.innerHTML += `<p>${{
        "forward": "Men move and attack diagonally forward",
        "forward/backward": "Men move forward diagonally but can capture forward AND backward diagonally",
        "armenian": "Men can capture/move forward and side-to-side but can only move diagonally",
        "orthogonal": "Men can capture and move forward and side-to-side",
    }[d.men]}<p>`   
    infobox.innerHTML += `<p>${{
        "jumper": "The king can move both forwards and backwards",
        "flyer": "The king can fly past any number of squares in any direction",
    }[d.king]}<p>`
    infobox.innerHTML += `<p>${{
        "quantity": "When you have a choice of different capturing moves, it's mandatory to do the path which captures the most pieces",
        "none": "Your choice of path doesn't matter as long as you capture all pieces on that path",
        "czechoslovak": "If the king can capture, it has to (instead of a man capturing)",
        "iberian": "When you have a choice of different capturing moves, it's mandatory to do the path which captures the most pieces. If there is still a tie, choose the option that captures more kings",
    }[d.precedence]}<p>`
    if(!d.removeafter) infobox.innerHTML += `<p>Pieces are removed during capture</p>`
    if(d.huffing) infobox.innerHTML += `<p>If a piece is supposed to capture but doesn't, the opponent has the option to remove it (sometimes called 'huffing')</p>`       
    //the rest
    width = +(d.dimensions.split("x")[0])
    height = +(d.dimensions.split("x")[1])
    board.style.width = 60 * width
    board.style.height = 60 * height
    if(d.type == "orthogonal"){
        for(x = 0; x < width * height; x++){
            if(x >= width && x < width * 3){
                board.innerHTML += `<div onclick='square(this.id)' id='${x}' class='white'>${pieces.black[0]}</div>`
            }
            else if(x >= width * 5 && x < width * 7){
                board.innerHTML += `<div onclick='square(this.id)' id='${x}' class='white'>${pieces.white[0]}</div>`
            }
            else{
                board.innerHTML += `<div onclick='square(this.id)' id='${x}' class='white'></div>`
            }
        }
    }
    else{
        dim = +(d.dimensions.split("x")[0])
        for(row = 1; row <= dim; row++){
            for(q = 1; q <= dim; q++){
                x = (row - 1) * width + q
                if(
                    (q % 2 == 1 && row % 2 == 1 || q % 2 == 0 && row % 2 == 0) && (d.leftcorner == "black" && type != "Spanish") ||
                    (q % 2 == 0 && row % 2 == 1 || q % 2 == 1 && row % 2 == 0) && (d.leftcorner == "white" || type == "Spanish")
                ){
                    board.innerHTML += `<div onclick='square(this.id)' id=${row + "," + q} class='${playoncolor == "white" ? "grey" : "white"}'></div>`
                }
                else if(row <= d.rows){
                    board.innerHTML += `<div onclick='square(this.id)' id=${row + "," + q} class='${playoncolor}'>${pieces.black[0]}</div>`
                }
                else if(dim - row < d.rows){
                    board.innerHTML += `<div onclick='square(this.id)' id=${row + "," + q} class='${playoncolor}'>${pieces.white[0]}</div>`
                }
                else{
                    board.innerHTML += `<div onclick='square(this.id)'id=${row + "," + q} class='${playoncolor}'></div>`
                }
            }
        }
    }
    if(d.firstteam == "either") turn = "white"
    else turn = d.firstteam

    /*

    //code for testing
    document.getElementById("27").textContent = ""
    document.getElementById("22").textContent = "○"
    document.getElementById("14").textContent = ""
    document.getElementById("12").textContent = ""
    document.getElementById("10").textContent = ""
    document.getElementById("17").textContent = "●"


    //turn = "black"
    //opponent = "white"

    */


    //NECESSARY FUNCTION DONT DELETE :)
    if(choice == "Palestinian") findMoves()
}

