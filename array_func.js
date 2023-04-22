const array = [1, 2, 3, 4, 5];

const first = array.shift();
console.log(first,array);

const newLength = array.unshift(7);
console.log(newLength,array);

window.prop = "window property";
// IIFE (Immediately Invoked Function Expression)
(()=>{
    console.log("IIFE arrow function: "+ this.prop);
})();

function thisTesting(){
    console.log("normal function: "+ this.prop);
}
thisTesting()

const myObj = {
    prop: "myObj property",
    func: function(){
        console.log("func of myObj :"+this.prop);
        (function(){
            console.log("IIFE inside func of myObj :"+this.prop)
        })();
        (()=>{
            console.log("IIFE arrow function inside func of myObj :"+ this.prop);
        })();
    },
    arrow: () =>{
        console.log("arrow function of myObj :" + this.prop);
    }
}
myObj.func();
myObj.arrow();