Array.prototype.myMap = function (func) {
    const newArray = [...this]
    for (let i = 0; i < newArray.length; i++)
        newArray[i] = func(newArray[i])
    return newArray
}

const array = [1, 2, 3, 4, 5]

const newArray = array.myMap(ele => ele + 100)
console.log(newArray)