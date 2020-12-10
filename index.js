// Your code here
document.addEventListener("keydown", function(count) {
    if (count.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});


let dodger = document.getElementById('dodger');


function moveDodgerLeft() {
    let currentNumber = dodger.style.left.replace('px', "")
    let moveNumber = parseInt(currentNumber)

    if (moveNumber > 0) {
        dodger.style.left = `${moveNumber - 10}px`
    }
}


document.addEventListener("keydown", function(count) {
    if(count.key === "ArrowRight") {
        moveDodgerRight()
    }
})

function moveDodgerRight() {

    let currentNumber = dodger.style.left.replace('px', '')
    let moveNumber = parseInt(currentNumber)

    if (moveNumber >=0 && moveNumber !== 360) {
        dodger.style.left = `${moveNumber + 10}px`
    }
}
