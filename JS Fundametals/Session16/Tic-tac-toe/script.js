var end = false; 
var n = +prompt("Board Size"); 
var count = 0;
var turn = "X";
next.textContent = "Player: " + turn;

var click = function (e) {
    if (!end) {
        e.currentTarget.textContent = turn;

        if (horizontal(turn) || vertical(turn) || diagonal(turn)) {
        end = !end;
        next.textContent = "Winner: " + turn;
        reset.hidden = false;
        return;
        }
        count++;
        turn = turn == "X" ? "O" : "X";
        next.textContent = "Player: " + turn;
    }

    if (count == n**2) {
        end = !end;
        next.textContent = "Draw!";
        reset.hidden = false;
    }               
};

function createRow() {
    var tr = document.createElement("tr");

    for (var i = 0; i < n; i++) {
        var td = document.createElement("td");
        td.addEventListener("click", click, { once: true });
        tr.append(td);
    }

    return tr;
}

function createBoard() {
    var fr = new DocumentFragment();

    for (var i = 0; i < n; i++) {
        fr.append(createRow());
    }

    return fr;
}

board.append(createBoard());

function horizontal(turn) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n-4; j++){
            if (
                board.rows[i].cells[j].textContent == turn &&
                board.rows[i].cells[j+1].textContent == turn &&
                board.rows[i].cells[j+2].textContent == turn &&
                board.rows[i].cells[j+3].textContent == turn &&
                board.rows[i].cells[j+4].textContent == turn
            ) {
            return true;
            }
        }
        
    }

    return false;
}

function vertical() {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n-4; j++){
            if (
                board.rows[j].cells[i].textContent == turn &&
                board.rows[j+1].cells[i].textContent == turn &&
                board.rows[j+2].cells[i].textContent == turn &&
                board.rows[j+3].cells[i].textContent == turn &&
                board.rows[j+4].cells[i].textContent == turn 
                ) {
                return true;
                }
        }
        
    }

    return false;
}

function diagonal() {
    for (var i = 0; i < n-4; i++){
        for (var j = 0; j < n-4; j++){
            if (
                board.rows[i].cells[j].textContent == turn &&
                board.rows[i+1].cells[j+1].textContent == turn &&
                board.rows[i+2].cells[j+2].textContent == turn &&
                board.rows[i+3].cells[j+3].textContent == turn &&
                board.rows[i+4].cells[j+4].textContent == turn
            ) {
                return true;
            }

            if (
                board.rows[i].cells[n-j-1].textContent == turn &&
                board.rows[i+1].cells[n-j-2].textContent == turn &&
                board.rows[i+2].cells[n-j-3].textContent == turn &&
                board.rows[i+3].cells[n-j-4].textContent == turn &&
                board.rows[i+4].cells[n-j-5].textContent == turn
            ) {
                return true;
            }
        
        }
        
    }
    

    return false;
}

reset.addEventListener("click", function () {
board.innerHTML = "";
board.append(createBoard());
end = !end;
count = 0;
turn = "X";
next.textContent = "Player: " + turn;
this.hidden = true;
});

