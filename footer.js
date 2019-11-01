
function footerFunk() {
  let footer = document.createElement("footer")
  footer.setAttribute("id", "footer")
  let divBildet = document.createElement("div")
  divBildet.setAttribute("class", "bildet")
  let img = document.createElement("img")
  img.setAttribute("id", "logofooter")
  img.setAttribute("src", "img/logo.gif")
  img.setAttribute("alt", "logo")
  divBildet.appendChild(img)

  let div1 = document.createElement("div")
  div1.setAttribute("class", "kontakt")
  let tekst1 = document.createTextNode("Kontakt: +47 123 45 678 kontakt@bartebyen.no")

  let div2 = document.createElement("div")
  div2.setAttribute("class", "adresse")
  let tekst2 = document.createTextNode("Adresse: Bartebyen AS Bartebyen 1 7013 Trondheim")
  //document.getElementsByClassName("adresse").innerHTML = "Adresse: <br> Bartebyen AS <br> Bartebyen 1 <br> 7013 Trondheim"

  div1.appendChild(tekst1)
  div2.appendChild(tekst2)
  footer.appendChild(divBildet)
  footer.appendChild(div1)
  footer.appendChild(div2)
  document.body.appendChild(footer)

}

footerFunk();
