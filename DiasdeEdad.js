function DIASdeEDAD(){

    const nacimiento =document.getElementById("FECHA").value;
    const edad = new Date(nacimiento);
    const dia = 1000 * 60 *60 *24 ;
    const diferencia = Math.abs(hoy - edad);
    var almanaque= Math.floor(diferencia / dia);
    MOSTRAR.innerHTML = `Usted Tiene  ${almanaque} días de Edad`
} 

const hoy = new Date();


var MOSTRAR = document.getElementById("MOSTRAR");
const BOTON = document.getElementById("boton");
BOTON.addEventListener("click", DIASdeEDAD);
