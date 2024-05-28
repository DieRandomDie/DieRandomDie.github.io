minimum = $("#min")
maximum = $("#max")
range_confirmation = $("#range-confirmation")
guess = $("#guess")
result_confirmation = $("#result-confirmation")
let answer = 0

$("#range-submit").on("click", function () {
    newRange(minimum.val(),maximum.val())
    range_confirmation.text(`Custom range set!`)
    setTimeout(function () {
        range_confirmation.text('')
    },3000)
    return 0
})

$("#submit").on("click", function () {
    return processGuess(parseInt(guess.val()))
})

guess.on('keyup', function (e) {
    if (e.key === 'Enter') {
        return processGuess(parseInt(guess.val()))
    }
})

function newRange(x, y) {
    let min = parseInt(x)
    let max = parseInt(y)
    answer = Math.floor(Math.random() * (max - min + 1)) + min
    result_confirmation.text(`Try guessing a number between ${min} and ${max}!`)
}

function processGuess(x) {
    guess.val('')
    if (x!==answer) {
        result_confirmation.text(`You guessed ${x}, try a ${answer>x ? "higher": "lower"} number.`)
    } else {
        result_confirmation.text("Correct!")
    }
}

window.onload = function () {
    newRange(minimum.val(),maximum.val())
}