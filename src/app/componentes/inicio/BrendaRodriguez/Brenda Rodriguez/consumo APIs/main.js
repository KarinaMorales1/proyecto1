let URL= 'https://rickandmortyapi.com/graphql/181'

async function getCharacter(){
    const resultado= await fetch(URL)
    let resultadoJson= await resultado.json()
    let personaje= resultadoJson.name
    console.log(resultadoJson)
    let imagen= resultadoJson.image
    let div= document.getElementById("personajes")
    const div1= document.createElement("div")
    div1.className += "card"
    const p= document.createElement("p")
    p.textContent= personaje
    const img= document.createElement("img")
    img.className += "card-image-top"
    img.src= imagen
    div1.appendChild(p)
    div1.appendChild(img)
    div.appendChild(div1)
}
getCharacter()