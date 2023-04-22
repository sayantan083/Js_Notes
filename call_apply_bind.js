const name1 = {
    firstName: "Sayantan",
    lastName: "Panda"
}

const name2 = {
    firstName: "Kiara",
    lastName: "Advani"
}

const name3 = {
    firstName: "Rashmika",
    lastName: "Mandana"
}

function printName(city,state){
    console.log(this.firstName+" "+this.lastName+" "+city)
}

printName.call(name1,"Delhi")
printName.apply(name2,["Mumbai"])
const printFirstName = printName.bind(name3,"Virajpet")
printFirstName()