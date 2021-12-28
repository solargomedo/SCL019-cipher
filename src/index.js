import cipher from './cipher.js';
window.addEventListener("load",inicio,true);

function inicio(){
    //aca le estamos dando la funcion de poner en mayusculas el mensaje que se esta ingresando
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    //linea 12 y 16 les estamos dando la funcion, para que al escribir el mensaje, se refleje
    //en el espacio de descifrar 
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("mensaje2").value = cipher.cifrar(texto, desplazamiento);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("mensaje2").value = cipher.descifrar(texto, desplazamiento);
    },true);
}

function cifrar (texto, desplazamiento){
if (!texto)
return "";
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
desplazamiento = (desplazamiento % 26 + 26) %26;
return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);

}
function descifrar (texto, desplazamiento){
    if (!texto)
    return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) %26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
}

