
console.log("Hei funker jeg")

let header = document.createElement("header")
let div = document.createElement("div")
div.setAttribute("class", "nav")

let toggle = document.createElement("label")
toggle.setAttribute("for","toggle")
let toggletext = document.createTextNode("☰")
toggle.appendChild(toggletext)
let toggle1 = document.createElement("input")
toggle1.setAttribute("type","checkbox")
toggle1.setAttribute("id", "toggle")

let forside = document.createElement("a")
forside.setAttribute("href", "forside.html")   //source: https://www.w3schools.com/jsref/met_element_setattribute.asp
let img = document.createElement("img")

// forside.setAttribute("title", "hjem")


img.setAttribute("id", "logo")
img.setAttribute("src","img/logo.gif")
img.setAttribute("alt", "logo")

forside.appendChild(img) //legget til bildet i link elemente

let menu = document.createElement("div")
menu.setAttribute("class", "menu")

let ul = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let li5 = document.createElement("li")

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)

menu.appendChild(ul)

let pakketilbud = document.createElement("a")
pakketilbud.href = "pakketilbud.html"
let pt = document.createTextNode("Pakketilbud")
pakketilbud.appendChild(pt)
li1.appendChild(pakketilbud)
let bestilling = document.createElement("a")
bestilling.href = "bestilling.html"
let b = document.createTextNode("Bestilling")
bestilling.appendChild(b)
li2.appendChild(bestilling)
let tips = document.createElement("a")
tips.href = "tips.html"
let t = document.createTextNode("Tips")
tips.appendChild(t)
li3.appendChild(tips)
let kontakt = document.createElement("a")
kontakt.href = "om.html"
let k = document.createTextNode("Om oss")
kontakt.appendChild(k)
li4.appendChild(kontakt)
let galleri = document.createElement("a")
galleri.href = "galleri.html"
let g = document.createTextNode("Galleri")
galleri.appendChild(g)
li5.appendChild(galleri)

div.appendChild(toggle)
div.appendChild(toggle1)
div.appendChild(forside)
div.appendChild(menu)
header.appendChild(div)
document.body.prepend(header)
