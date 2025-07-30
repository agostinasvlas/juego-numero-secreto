let numeroSecreto;
let intentos;
let listaNumerosSorteados = []; //almacenar para no volver a jugar el mismo numero
let numeroMax = 10;

function asignarTextoAElemento(tag,texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}
function generarNumeroSecreto() {
    let num = Math.floor(Math.random()*numeroMax)+1;
    if(listaNumerosSorteados.length() == numeroMax) {
        asignarTextoAElemento('p',"Ya se sortearon todos los numeros");
    } else {
        if(listaNumerosSorteados.includes(num)) {
            return generarNumeroSecreto(); //recursividad
        } else {
            listaNumerosSorteados.push(num);
            return num;
        }
    }
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // agregar .value para acceder al valor del input
    if(numeroDeUsuario == numeroSecreto) {
        asignarTextoAElemento('p',`Acertaste! Luego de ${intentos} ${intentos==1? "intento" : "intentos"}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        //EL user no acierta
        if(numeroDeUsuario>numeroSecreto) {
            asignarTextoAElemento('p',"El numero es menor");
        } else {
            asignarTextoAElemento('p',"El numero es mayor");
        }
        limpiarInput();
        intentos++;
    }
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = ''; //vacio
}

function condicionesIniciales() {
    asignarTextoAElemento('h1',"Juego del numero secreto");
    asignarTextoAElemento('p',`Ingresar un numero del 1 al ${numeroMax}:`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos=1;
}
function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();    
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
