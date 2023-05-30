// Nombrando las Text Areas
let first = document.getElementById("First");
let second = document.getElementById("Second");

// Nombrando los botones
let rojo = document.getElementById("rojo");
let blanco = document.getElementById("blanco");
let azul = document.getElementById("azul");
let verde = document.getElementById("verde");



// Nombres de las variables de almacenamiento de texto
var codificado;
var decodificado;

// Función para cifrar
function cifrar(texto){

    let newTexto = texto.replace(/e/g, "enter");
    newTexto = newTexto.replace(/i/g, "imes");
    newTexto = newTexto.replace(/a/g, "ai");
    newTexto = newTexto.replace(/o/g, "ober");
    newTexto = newTexto.replace(/u/g, "ufat");
    return newTexto;
}

// Función para decifrar
function decifrar(texto){

    let newTexto = texto.replace(/enter/g, "e");
    newTexto = newTexto.replace(/imes/g, "i");
    newTexto = newTexto.replace(/ai/g, "a");
    newTexto = newTexto.replace(/ober/g, "o");
    newTexto = newTexto.replace(/ufat/g, "u");
    return newTexto;
}

// Función para aplicar la cifra
function decodeRight() {
    if (first.value){
        codificado = cifrar(first.value);
        second.value = codificado;
    }
}

// Función para retirar la cifra
function decodeLeft() {
    if(second.value){
        
        decodificado = decifrar(second.value);
        first.value = decodificado;

    }
}

// Función para borrar
function borrar(){
    first.value="";
    second.value="";
}

// Función para texto de ejemplo
function beeMovie(){
    first.value = "De acuerdo con todas las leyes conocidas de la aviacion, no hay forma de que una abeja pueda volar. Sus alas son demasiado pequeñas para que su gordo cuerpecito despegue del suelo. La abeja, por supuesto, vuela de todos modos. Porque a las abejas no les importa lo que los humanos crean que es imposible";
}

// Escuchas para los botones
rojo.addEventListener("click", decodeRight, true);
blanco.addEventListener("click", decodeLeft, true);
azul.addEventListener("click", borrar, true);
verde.addEventListener("click", beeMovie, true)

function copy() {

    second.select();
    second.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(second.value);
    alert("Copied the text: " + second.value);
  }
  
  function copyfirst() {
 
    first.select();
    first.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(first.value);
    alert("Copied the text: " + first.value);
  }

  let purple = document.getElementById("copy");
  purple.addEventListener("click", copy, true);

  let yellow = document.getElementById("copyfirst");
  yellow.addEventListener("click", copyfirst, true);

// Estilo del mouse sobre los botones
rojo.style.cursor = "pointer";
blanco.style.cursor = "pointer";
azul.style.cursor="pointer";
verde.style.cursor="pointer";
yellow.style.cursor="pointer";
purple.style.cursor="pointer";