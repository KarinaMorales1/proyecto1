televisores.push(televisor)
let div = document.getElementById("demo")
let p= document.createElement("p")
p.textContent= televisor.datosTelevisor()
dispatchEvent.appendChild(p)
}
function mostrarTelevisores(){
    let ul = document.getElementById("ul")
    if(ul.value !==""){
        ul.innerHTML = ""
        for(const item of televisores){
            let ul = document.getElementById("ul")
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }else{
        for(const item of televisores){
            let ul = document.getElementById("ul")
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }
}