const nav = document.createElement("nav")
const ul = document.createElement("ul")
ul.style.display = "flex"
ul.style.backgroundColor="black"
ul.style.listStyleType="none"
nav.append(ul)

const navItems = ["Home","Contact","About us","Operations","Branches"]

navItems.forEach(item=>{
    const li = document.createElement("li")
    li.innerText = item
    li.style.color = "white"
    li.style.marginRight = "10px"
    ul.appendChild(li)
})

const body = document.querySelector("body")

body.append(nav)