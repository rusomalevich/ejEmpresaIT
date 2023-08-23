"use strict";
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
/*

Crea una clase base llamada Empleado que tenga los siguientes atributos y métodos:

Atributos: nombre, apellido, salario_base
Métodos:
calcular_salario(): Un método que calcule el salario total del empleado. El salario total se calcula sumando el salario base a las bonificaciones específicas de cada tipo de empleado.
Crea tres clases derivadas: Desarrollador, Diseñador y Gerente. Cada una de estas clases debe heredar de la clase base Empleado. Define los siguientes atributos y métodos para cada clase:
Calcular_salario(bonificacion)

*/
class Empleado {
    constructor(nombre, apellido, salarioBase) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salarioBase = salarioBase;
    }
    calcularSalario(bonificaciones) {
        // this.salarioBase + bonificaciones
    }
}
class Desarrollador extends Empleado {
    constructor(nombre, apellido, salarioBase, lenguaje, horasTrabajo) {
        super(nombre, apellido, salarioBase);
        this.lenguaje = lenguaje;
        this.horasTrabajo = horasTrabajo;
    }
    calcularBonificacion() {
        return this.horasTrabajo * 10;
    }
}
class Disenador extends Empleado {
    constructor(nombre, apellido, salarioBase, herramienta, proyectosFinalizados) {
        super(nombre, apellido, salarioBase);
        this.herramienta = herramienta;
        this.proyectosFinalizados = proyectosFinalizados;
    }
    calcularBonificacion() {
        //const bonificacion:number = this.salarioBase*(1+(this.proyectosFinalizados/100))
        //return Math.round((bonificacion + Number.EPSILON) * 100) / 100
        return this.proyectosFinalizados * 12;
    }
}
const desarrollador1 = new Desarrollador("Ezequiel", "Glikman", 100000, "JS", 40);
const disenador1 = new Disenador("Ezequiel", "Glikman", 100000, "Figma", 10);
//console.log(desarrollador1.salarioBase + desarrollador1.calcularBonificacion())
//console.log(desarrollador1)
console.log(disenador1.salarioBase + disenador1.calcularBonificacion());
/*

Método adicional: calcular_bonificacion(): Un método que calcula la bonificación para el diseñador en función de la cantidad de proyectos finalizados.

(12USD x proyecto terminado)

Gerente:

Atributos adicionales: equipo, proyectos_gestionados, rendimiento:number
Método adicional: calcular_bonificacion(): Un método que calcula la bonificación para el gerente en función del rendimiento del equipo y la cantidad de proyectos gestionados.
En el programa principal, crea instancias de diferentes tipos de empleados (al menos uno de cada tipo). Establece los valores de sus atributos y muestra la información del empleado, incluido su salario total.

rendimiento (1 al 3) 1 es bueno, 3 es malo. formula : cantProyectos / rendimiento + 10USD

*/ 
