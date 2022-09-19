class Producto{
    constructor(nombre,marca,descripcion,tipo,precio,disponibilidad){
        this.nombre = nombre
        this.marca = marca
        this.descripcion = descripcion
        this.tipo = tipo
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
    compra(cantidad){
        this.disponibilidad = this.disponibilidad - cantidad
    }
    datosProducto(){
        return this.nombre+" "+this.marca+"("+this.descripcion+") Precio: $"+this.disponibilidad
    }
}
let productos = []
let producto1 = new Producto("zapatillas","Adidas","zapatillas para correr sobre cemento","calzado",2500,100)
productos.push(producto1)
console.log(producto1)
console.log(productos)
document.write(producto1.datosProducto()+"<br>")
producto1.compra(20)
document.write(producto1.datosProducto())