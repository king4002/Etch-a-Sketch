const container = document.getElementById('container');
let rows = document.getElementByClassName('gridRow');
let columns = document.getElementByClassName('cell');

// create a default grid size 16 x 16

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}

// take rows and columns input and make grid

function makeRows(rowNum){

    // create rows
    for (r = 0; r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
