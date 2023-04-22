/* In JavaScript, a closure is a feature that allows a function to retain access to variables in its
outer scope even after the outer function has returned. In other words, a closure is created when a
function "closes over" variables from its outer scope, and these variables remain accessible to the
inner function, even when the outer function has completed execution. */

function outer() {

    const message = "This is a message"

    function inner(){
        console.log(message)
    }

    return inner
}

const closure = outer()

closure()
