
let punto1 = {
    x: 10,
    y: 20,
    // Agregamos el método sumar
    sumar: function(otroPunto) {
        this.x += otroPunto.x;
        this.y += otroPunto.y;
    }
};

let punto2 = {
    x: 30,
    y: 40
};

// Definimos una función externa para sumar propiedades
function sumarPropiedadesDeOtro(objeto) {
    this.x += objeto.x;
    this.y += objeto.y;
}

// Demostración del uso de la función externa
sumarPropiedadesDeOtro.apply(punto1, [punto2]);
console.log(punto1); // Imprime { x: 40, y: 60 }
console.log(punto2); // Imprime { x: 30, y: 40 }

// Resetear valores de punto1 para demostrar el uso del método
punto1.x = 10;
punto1.y = 20;

// Demostración del uso del método sumar
punto1.sumar(punto2);
console.log(punto1); // Imprime { x: 40, y: 60 }
console.log(punto2); // Imprime { x: 30, y: 40 }
