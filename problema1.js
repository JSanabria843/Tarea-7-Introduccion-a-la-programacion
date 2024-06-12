
function moverPunto(punto, dx, dy) {
    this.dx= dx;
    this.dy=dy;
    this.punto=punto;
    cambiarCoordenadas.call(punto, dx, dy);
  }
  
  
  let punto = {
    dx: 2,
    dy: 3,
    mover: function(dx, dy) {
      moverPunto(this, dx, dy);
    }
  };
  

  console.log(`Posición inicial: (${punto.dx}, ${punto.dy})`); 
  
