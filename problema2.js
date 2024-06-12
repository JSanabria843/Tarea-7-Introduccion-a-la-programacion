function extenderPunto(punto) {
    // Método para dibujar el punto
    punto.dibujar = function() {
        console.log(`El punto está en las coordenadas (${this.x}, ${this.y}).`);
    };

    // Método para mover el punto
    punto.mover = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };

    // Método para informar las coordenadas del punto
    punto.informar = function() {
        return `Coordenadas actuales: (${this.x}, ${this.y})`;
    };

    return punto;
}

// Ejemplo de uso
let punto = { x: 2, y: 3 };
punto = extenderPunto(punto);

punto.dibujar();          // Debería imprimir: El punto está en las coordenadas (2, 3).
punto.mover(1, -1);       // Mueve el punto a (3, 2)
console.log(punto.informar()); // Debería imprimir: Coordenadas actuales: (3, 2)

