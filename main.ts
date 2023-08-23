/*

Proyecto: Sistema de Gestión de Empleados de una Empresa IT
Descripción del problema:
Una empresa de tecnología de la información (IT) necesita un sistema para gestionar a sus empleados. Los empleados pueden ser de diferentes tipos, como desarrolladores, diseñadores y gerentes. Cada tipo de empleado tiene ciertas propiedades y métodos específicos. El sistema debe permitir agregar, mostrar y gestionar a estos empleados.

Requisitos:
Crea una clase base llamada Empleado que tenga los siguientes atributos y métodos:

Atributos: nombre, apellido, salario_base
Métodos:
calcular_salario(): Un método que calcule el salario total del empleado. El salario total se calcula sumando el salario base a las bonificaciones específicas de cada tipo de empleado.
Crea tres clases derivadas: Desarrollador, Diseñador y Gerente. Cada una de estas clases debe heredar de la clase base Empleado. Define los siguientes atributos y métodos para cada clase:
Calcular_salario(bonificacion) 


Desarrollador:

Atributos adicionales: lenguaje, horas_trabajo
Método adicional: calcular_bonificacion(): Un método que calcula la bonificación para el desarrollador en función de las horas de trabajo. (10USD mas x 1hrs)

Diseñador:
Atributos adicionales: herramienta, proyectos_finalizados
Método adicional: calcular_bonificacion(): Un método que calcula la bonificación para el diseñador en función de la cantidad de proyectos finalizados.

(12USD x proyecto terminado)

Gerente:

Atributos adicionales: equipo, proyectos_gestionados, rendimiento:number
Método adicional: calcular_bonificacion(): Un método que calcula la bonificación para el gerente en función del rendimiento del equipo y la cantidad de proyectos gestionados.
En el programa principal, crea instancias de diferentes tipos de empleados (al menos uno de cada tipo). Establece los valores de sus atributos y muestra la información del empleado, incluido su salario total.

rendimiento (1 al 3) 1 es bueno, 3 es malo. formula : cantProyectos / rendimiento + 10USD

*/

class Empleado {
    nombre: string
    apellido: string
    salarioBase: number
    constructor(nombre:string, apellido:string, salarioBase:number) {
        this.nombre = nombre
        this.apellido = apellido
        this.salarioBase = salarioBase
    }
    calcularSalario(bonificaciones : any){
       // this.salarioBase + bonificaciones
    }
}

class Desarrollador extends Empleado {
    lenguaje:string
    horasTrabajo:number

    constructor(nombre: string, apellido: string, salarioBase: number, lenguaje: string, horasTrabajo:number) {
        super(nombre, apellido, salarioBase)
        this.lenguaje = lenguaje
        this.horasTrabajo = horasTrabajo
    }
    calcularBonificacion():number{
        return this.horasTrabajo*10
    }
}

class Disenador extends Empleado {
    herramienta:string
    proyectosFinalizados:number
    constructor(nombre: string, apellido: string, salarioBase: number, herramienta:string, proyectosFinalizados:number){
        super(nombre, apellido, salarioBase)
        this.herramienta = herramienta
        this.proyectosFinalizados = proyectosFinalizados
    }
    calcularBonificacion():number{
        return this.proyectosFinalizados*12
    }
}

class Gerente extends Empleado {
    equipo:[]
    proyectosGestionados:number
    rendimiento:number
    constructor(nombre: string, apellido: string, salarioBase: number, equipo:[], proyectosGestionados:number, rendimiento:number){
        super(nombre, apellido, salarioBase)
        this.equipo = []
        this.proyectosGestionados = proyectosGestionados
        this.rendimiento = rendimiento
    }
    calcular_bonificacion(){

    }
}

const desarrollador1 : Desarrollador = new Desarrollador("Thomas", "Anderson", 100000, "JS", 40)
const disenador1 : Disenador = new Disenador("Julieta", "Ulanovsky", 100000, "Figma", 10)

//const gerente1 : Gerente = new Gerente ("Morpheus", "Nabucodonosor", 130000, 3, 2 )
//{desarrollador1, disenador1}

//console.log(desarrollador1.salarioBase + desarrollador1.calcularBonificacion())
//console.log(desarrollador1)
console.log(disenador1.salarioBase + disenador1.calcularBonificacion())


/*
Método adicional: calcular_bonificacion(): Un método que calcula la bonificación para el gerente en función del rendimiento del equipo y la cantidad de proyectos gestionados.
En el programa principal, crea instancias de diferentes tipos de empleados (al menos uno de cada tipo). Establece los valores de sus atributos y muestra la información del empleado, incluido su salario total.

rendimiento (1 al 3) 1 es bueno, 3 es malo. formula : cantProyectos / rendimiento + 10USD

*/