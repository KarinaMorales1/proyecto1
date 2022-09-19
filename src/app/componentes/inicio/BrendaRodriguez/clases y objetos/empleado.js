class Persona{
    constructor(nombre,apellido,dni,anioAlta,diasvacaciones){
        this.nombre=nombre;
        this.apellido=apellido
        this.dni=dni;
        this.anioAlta=anioAlta;
        this.diasvacaciones=diasvacaciones
    }
    nombrecompleto(){
        return this.nombre+" "+this.apellido
    }
    cuil(){
        return 23+"-"+this.dni+"-"+1
    }
    vacaciones(x){
        this.diasvacaciones=this.diasvacaciones - x
    }
    antiguedad(){
        let fecha = new Date()
        return fecha.getFullYear()-this.anioAlta
    }
}
let Empleados=[]
do{
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let dni = prompt("Ingrese el DNI")
    let anioAlta = prompt("Ingrese el año de alta")
    let diasvacaciones = prompt("Ingrese los dias de vacaciones") 
}
