`use strict`
// Creo le variabili
const boxSelect = document.querySelector("[name='boxCounts']")
const btnClick = document.getElementById("btn-play");
const btnReset = document.getElementById("btn-reset")
const gridContainer = document.querySelector(".grid-container")


let gameOver = false


//////////////////////////////////////// Creo il pulsante per giocare
btnClick.addEventListener("click", onClick)
btnReset.addEventListener("click", outClick)

//////////////////////////////////////// Creo la funzione del pulsante
function onClick() {

    gameOver = false;

    gridContainer.innerHTML = ""

    const boxCounts = parseInt(boxSelect.value)

    const bomb = randomBomb(boxCounts)

    console.log(bomb)

    const gridList = gridBox(boxCounts, bomb)
    //controlBomb(gridList)


    printContainer(gridContainer, gridList)


}

function outClick() {

    window.location.reload()

}


/**
 * 
 * @param {string} boxContent  
 * @returns 
*/

///////////////////////////////////// Creo la funzione per creare una singola cella 
function singleBox(boxContent, boxRadRow, bomb) {
    const box = document.createElement("div")
    box.classList.add("grid-box")
    box.textContent = boxContent

    const boxRad = radCountBox(boxRadRow)
    //const boxForRow = Math.sqrt(boxRad) 
    box.style.flexBasis = `calc(100% / ${boxRad})`

    if (bomb.indexOf(boxContent) >= 0){
        box.dataset.bombs = 0;

    }

        box.addEventListener("click", function () { //////// Grazie Pietro

            if(gameOver === true){
                return
            }

            if (box.dataset.valore !== undefined) {
                return
            }

            this.dataset.valore = this.toString()

            this.classList.add("bg-info")
            if (this.classList.contains("bg-info")) {
                if (box.dataset.bombs === "0") {
                    this.classList.toggle("bg-danger")
                    console.log("Hai perso")
                    alert("Hai Perso!")
                    gameOver = true
                }
                console.log(this.innerHTML)

            } else {
                console.log(`deselezione della cella ${this.innerHTML}`)
            }
        })


    return box

}

///////////////////////////////// Creo la funzione per le bombe
function randomBomb(numberBomb) {

    const listBomb = []

    for (let i = 1; i <= 16; i++) {
        const bomb = Math.floor(Math.random() * numberBomb)

        if (listBomb.indexOf(bomb) >= 0) {

            i--

        }
        else {
            listBomb.push(bomb)

        }

    }
    return listBomb
}

//////////////////////////////// Creo la funzione per calcolarmi la radice quadrata della larghezza delle box
function radCountBox(boxRow) {
    const boxForRow = Math.sqrt(boxRow)

    return boxForRow
}


//////////////////////////////// Creo la grigli dove inserire le box create con la funzione singleBox
function gridBox(numberCell, bomb) {
    const grid = []

    for (let i = 1; i < numberCell; i++) {
        const newBox = singleBox(i, numberCell, bomb)
        newBox.dataset.indice = i.toString()
        grid.push(newBox)

    }
    return grid
}


/**
 * Aggiunge ad un elemento html la griglia dei quadrati
 * @param {HTMLElement} container 
 * @param {HTMLDivElementElement[]} gridBox 
*/
function printContainer(container, gridBox) {
    for (let i = 0; i < gridBox.length; i++) {
        container.append(gridBox[i])
    }

}
