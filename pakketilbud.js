
var myObj =
  // "pakketilbud" :
  {
    'overskrift': "Baristakurs",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/baristakurs.jpg", "Baristakurs"]},
  // "pakketilbud" :
  {
    'overskrift': "Byvandring",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/byvandring.jpg", "Byvandring"]},
  // "pakketilbud" :
  {
    'overskrift': "Fotosafari",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/fotosafari.jpg", "Fotosafari"]},
  // "pakketilbud" :
  {
    'overskrift': "Hyttetur",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/hyttetur.jpg", "Hyttetur"]},
  // "pakketilbud" :
  {
    'overskrift': "Nidarosdomen",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/nidarosdomen.jpg", "Nidarosdomen"]}

for (x in myObj){
  let wrapper = document.createElement("div")
  let img = document.createElement("img")
  img.setAttribute("class","imgpakketilbud")
  img.setAttribute("src",myObj.bildet[0])
  img.setAttribute("alt",myObj.bildet[1])
  let div = document.createElement("div")
  div.setAttribute("class", "contentpakke")
  let h2 = document.createElement("h2")
  h2.setAttribute("class", "headerpakke")
  let p = document.createElement("p")

  div.appendChild(h2)
  div.appendChild(p)
  wrapper.appendChild(img)
  wrapper.appendChild(div)
  document.body.appendChild(wrapper)


  h2.innerHTML = myObj[x].overskrift
  p.innerHTML = myObj[x].kontekst


}
