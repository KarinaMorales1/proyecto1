class Producto{
    constructor(nombre,marca,categoria,urlimage,precio,stock){
        this.nombre=nombre
        this.marca=marca
        this.categoria=categoria
        this.urlimage=urlimage
        this.precio=precio
        this.stock=stock
    }
    venta(x){
    return this.stock-x
}
nombrecompleto(){
    return this.nombre+"-"+this.marca

}
}
 class Compra {
constructor(cliente,tarjeta){
this.productos=[]
this.cliente=cliente
this.tarjeta=tarjeta
}
agregarProducto(producto){
    this.productos.push(producto)
}

subtotal(){
  let acumulador= 0
  for(let producto of this.productos){
    acumulador=acumulador+producto.precio
  }
  return acumulador
}
total() {
    let precioIva= this.subtotal()*1.21
    let preciofinal= 0
    if(this.tarjeta){
        preciofinal=precioIva*1.15
    }else{
        preciofinal=precioIva
    }
    return preciofinal.toFixed(2)
 }
}
let cliente= prompt("ingrese cliente")
let tarjeta= confirm("¿Desea pagar con tarjeta?")
let compra= new Compra(cliente,tarjeta)

function agregarProducto(){
    let nombre=document.getElementById("producto").value
    let marca=document.getElementById("marca").value
    let categoria=document.getElementById("categoria").value
    let urlimage=document.getElementById("urlimagen").value
    let precio=parseInt(document.getElementById("precio").value)
    let stock=document.getElementById("stock").value
    let producto=new Producto(nombre,marca,categoria,urlimage,precio,stock)
    compra.agregarProducto(producto)
    let div1= document.getElementById("demo")
    let div2= document.createElement("div")
    div2.className += "card"
    let div3= document.createElement("div")
    div3.textContent= producto.nombrecompleto()
    div3.className= "list-group-item m3"
    div2.appendChild(div3)
    div1.appendChild(div2) 
}

function calcularTotal(){
    console.log(compra.productos)
    document.getElementById("subt").innerHTML= compra.subtotal()
    document.getElementById("totalt").innerHTML= compra.total()
}
