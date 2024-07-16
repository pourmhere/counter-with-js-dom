let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let increment = document.getElementById("increment")
let counter = document.getElementById("counter")



increment.addEventListener("click", function () {
    counter.textContent = parseInt(counter.textContent) + 1
})

decrement.addEventListener("click", function () {
    counter.textContent = parseInt(counter.textContent) - 1
})
reset.addEventListener("click", function () {
    counter.textContent = counter.textContent = 0
})