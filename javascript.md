A scripting language: A programming language designed specifically for acting on an existing entity or system.

Ecma International: An organization that creates standards for technologies.
ECMA-262: This is a standard published by Ecma International. It contains the specification for a general purpose scripting language.
ECMAScript: The specification defined in ECMA-262 for creating a general purpose scripting language

JavaScript: A general purpose scripting language that conforms to the ECMAScript specification.

include javascipt in head section and use async/defer to control execution

async: Browser downloads JavaScript in parallel while HTML renders. When JavaScript is fully loaded, rendering stops while JavaScript is executed.

<script src="JS/script.js" async></script>

defer: Browser downloades javascript while html renders, then defers execution of JavaScript until HTML rendering is complete.

<script src="JS/script.js" defer></script>


<script src="JS/script.js" type="module"></script>       // by default modules are defer type


--> Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
--> Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
--> Arrow functions cannot use yield within their body and cannot be created as generator functions.


For getting the first element that matches the element name,class name or id:

document.querySelector("div"), document.querySelector("div ul")
document.querySelector(".className")
document.querySelector("#idName")

For getting all the elements as an array that matches the element name,class name or id

document.querySelectorAll("div")

To modify class name of any element:

document.querySelector("main li:first-child").classList.add("new_class")
document.querySelector("main li:first-child").classList.remove("new_class")
document.querySelector("main li:first-child").classList.toggle("new_class")
document.querySelector("main li:first-child").classList.replace("old_class","new_class")

var:

--> Global or functional scope
--> Can redeclare
--> Can declare after we have used it

let:

--> Global ,functional or block scope
--> Can not be redeclared
--> Can not use before declaring


a**b is a to the power b


A function declaration defines a function with the specified parameters starting with the function keyword. A function expression expresses a function inside a variable by assigning the function to the variable.

An event listener can be appended to the window object.

Event Bubling

The bubbling principle is as following:

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

Almost all events bubble. The key word in this phrase is “almost”. For instance, a focus event does not bubble. But still it’s an exception, rather than a rule, most events do bubble.

Any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is event.stopPropagation()

If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

