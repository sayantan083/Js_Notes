const name1 = {
    firstName: "Rashmika",
    lastName: "Mandana"
}

function printName(city,state){
    console.log(this.firstName+" "+this.lastName+" "+city+" "+state)
}

Function.prototype.myBind = function(...args){
    let obj = this
    const params = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

const printFirstName = printName.myBind(name1,"Virajpet")
printFirstName("Karnataka")
