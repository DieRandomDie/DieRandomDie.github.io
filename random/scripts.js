minimum = $("#min")
maximum = $("#max")
range_confirmation = $("#range-confirmation")
guess = $("#guess")
result_confirmation = $("#result-confirmation")
last_guess = $("#last-guess")
let answer = 0
let tries = 0

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
    tries = 0
    result_confirmation.text(`Try guessing a number between ${min} and ${max}!`)
}

function processGuess(x) {
    guess.val('')
    tries++
    last_guess.text(`Last guess: ${x}`)
    if (x!==answer) {
        result_confirmation.text(`Try a ${answer>x ? "higher": "lower"} number.`)
    } else {
        result_confirmation.text("Correct!")
        $("#history").append(`<p>Game: ${minimum.val()}-${maximum.val()}, guessed ${answer} in ${tries} tries!</p>`)
        tries = 0
        setTimeout(function () {
            newRange(minimum.val(),maximum.val())
            last_guess.text("Last guess:")
        },3000)
    }
}

window.onload = function () {
    newRange(minimum.val(),maximum.val())
}