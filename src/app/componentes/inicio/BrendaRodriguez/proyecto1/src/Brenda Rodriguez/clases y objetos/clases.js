class Persona{
    constructor(nombre,apellido,anionac,dni,cuil,direccion){
    this.nombre = nombre
    this.apellido = apellido
    this.anionac = anionac
    this.dni = dni
    this.cuil = cuil
    this.direccion = direccion
    }
    edad(){
        return 2022-this.anionac
    }
    datos(){
        return "Datos de la persona"+this.nombre+" "+this.apellido+" de "+this.edad()+" años " 
    }
}

class Circulo{
    constructor(diametro){
        this.diametro = diametro
    }
    area(){
        return Math.PI*(this.diametro*this.diametro)/4
    }
    perimetro(){
        return Math.PI*this.diametro
    }
}
