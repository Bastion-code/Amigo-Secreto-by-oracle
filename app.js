// El principal objetivo de este desafio es fortalecer tus habilidades en logica de programacion. 
// Aqui deberas desarrollar la logica para resolver el problema.

///Crea un arraylist para almacenar el nombre de los amigos.
let listaAmigos = []; 

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y fin

    if (nombre === "") {
        alert("Porfavor, ingrese un nombre valido");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Nombre ya ingresado, vuelva a ingresar otro..");
        return;
    }

    listaAmigos.push(nombre); // Agregar nombre al array
    actualizarLista(); // Actualizar la lista en la interfaz
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        // Boton para eliminar nombres de la lista
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    listaAmigos.splice(index, 1); // Eliminar nombre del array
    actualizarLista(); // Actualizar la lista en la interfaz
}

// Funcion para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}

// Funcion para mostrar el resultado en pantalla
function mostrarResultado(nombre) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombre}</strong> </li>`;
}
