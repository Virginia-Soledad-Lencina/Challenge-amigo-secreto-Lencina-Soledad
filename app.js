
let amigos= [];

function agregarAmigo() {
    const inputAmigo = document.getElementById ("amigo");
    const nombre = inputAmigo.value.trim ();
    
    if (nombre === "") {
        alert ("Por favor, ingrese un nombre");
        return;
    }
    amigos.push(nombre);
    actualizarLista ();
    inputAmigo.value = "";
}

function actualizarLista () {
    const listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach (nombre =>{
        const listaNueva = document.createElement ("li");
        listaNueva.textContent = nombre;
        listaAmigos.appendChild (listaNueva);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("No hay más nombres en la lista para sortear");
        return;
    }
   
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos.splice(indiceAleatorio, 1)[0]; 

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es ${amigoSeleccionado}</li>`;
    
    }
