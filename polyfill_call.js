const name1 = {
    firstName: "Sayantan",
    lastName: "Panda"
}

function printName(state){
    console.log(this.firstName+" "+this.lastName+" "+state)
}

Function.prototype.myCall = function(...args){
    const func = this
    const params = args.slice(1)
    args[0][func.name] = func
    args[0][func.name](...params)
    delete args[0][func.name]
}

printName.myCall(name1,"Delhi")
console.log(name1)