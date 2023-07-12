`use strict`
// Creo le variabili
const boxSelect = document.querySelector("[name='boxCounts']")
const btnClick = document.getElementById("btn-play");
const btnReset = document.getElementById("btn-reset")
const gridContainer = document.querySelector(".grid-container")


// creo il pulsante per giocare
btnClick.addEventListener("click", onClick)
btnReset.addEventListener("click", outClick)


// creo la funzione del pulsante
function onClick() {
    
    const gameOver = false
    //const bombLocation = getBombPositio(gridList,)
    const boxCounts = parseInt(boxSelect.value)
    const bombCount = 16

    const gridList = gridBox(boxCounts)

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

//Creo la funzione per creare una singola cella 
function singleBox(boxContent, boxRadRow) {
    const box = document.createElement("div")
    box.classList.add("grid-box")
    box.textContent = boxContent

    const boxRad = radCountBox(boxRadRow)
    //const boxForRow = Math.sqrt(boxRad) 
    box.style.flexBasis = `calc(100% / ${boxRad})`

    box.addEventListener("click", boxClick)


    //creo una funzione per rendere interagibili i box creati in precedenza

    return box

}
function boxClick() {

    this.classList.toggle("bg-info")
    if (this.classList.contains("bg-info")) {
        console.log(this.innerHTML)

    } else {
        console.log(`deselezione della cella ${this.innerHTML}`)
    }

}

//Creo la funzione per calcolarmi la radice quadrata della larghezza delle box
function radCountBox(boxRow) {
    const boxForRow = Math.sqrt(boxRow)

    return boxForRow
}


// Creo la grigli dove inserire le box create con la funzione singleBox
function gridBox(numberCell) {

    const grid = []

    for (let i = 1; i < numberCell; i++) {
        
        const newBox = singleBox(i, numberCell)
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


function randomBomb() {
    let bombLeft = bombCount;

    while (bombLeft > 0) {
        let gridBomb = Math.floor(Math.random() * radCountBox())
    }
}



// if (bombGenerator.indexOf(i) >= 0) {
//     boxFlowers.classList.toggle("bg-danger");
//     console.log("Hai perso")
//     alert("Hai Perso!")
// }




// function RandomBomb(numberBomb) {

//     const gridBomb = []

//     for (let i = 1; i <= numberBomb; i++) {
//         const newBomb = singleBomb(i, numberBomb)
//         gridBomb.push(newBomb)

//         console.log("ciao")
//     }

//     console.log(gridBomb)
//     return gridBomb

// }

// function sigleBomb(bombContent,) {

//     const box = document.createElement("div")
//     box.classList.add("grid-box")
//     box.textContent = boxContent

//     const boxRad = radCountBox(boxRadRow)
//     box.style.flexBasis = `calc(100% / ${boxRad})`


//     const bomb = document.createElement("div")
//     bomb.classList.add("grid-bomb")
//     bomb.textContent = bombContent
//     const bombRand = Math.floor(Math.random() * 16)
//     bomb.style.flexBasis = `calc(100% / ${boxRad})`

//     bomb
// }