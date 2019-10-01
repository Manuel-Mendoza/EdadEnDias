function DIASdeEDAD(){
 
    function deMesAnumero(numero){
        
    switch (numero) {
        case "Enero":
            return 0
        case "Febrero":
            return 1
        case "Marzo":
            return 2
        case "Abril":
            return 3
        case "Mayo":
            return 4
        case "Junio":
            return 5
        case "Julio":
            return 6
        case "Agosto":
            return 7
        case "Septiembre":
            return 8
        case "Octubre":
            return 9
        case "Noviembre":
            return 10
        case "Diciembre":
            return 11
        }
    }

    const AAAA = document.getElementById("AAAA").value;
    const DD = document.getElementById("DD").value;
    const MM = document.getElementById("MM").value;

    const NUMEROmes = deMesAnumero(MM);

    const edad = new Date(AAAA,NUMEROmes,DD);
    const dia = 1000 * 60 *60 *24 ;
    const diferencia = Math.abs(hoy - edad);
    var almanaque= Math.floor(diferencia / dia);

    MOSTRAR.innerHTML = `Usted Tiene  ${almanaque} días de Edad`;
    MOSTRAR2.innerHTML = `${Math.floor(almanaque / 365) } AÑOS`;

} 

const hoy = new Date();

var MOSTRAR2 = document.getElementById("MOSTRAR2");
var MOSTRAR = document.getElementById("MOSTRAR");
const BOTON = document.getElementById("boton");
BOTON.addEventListener("click", DIASdeEDAD);
