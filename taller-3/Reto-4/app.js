let eventos = [];

while (true) {
    const opcion = prompt(`Seleccione una opción:
    1. Crear evento
    2. Visualizar eventos
    3. Buscar evento
    4. Actualizar evento
    5. Eliminar evento
    6. Salir`);

    switch (opcion) {
        case '1':
            crearEvento();
            break;
        case '2':
            visualizarEventos();
            break;
        case '3':
            buscarEvento();
            break;
        case '4':
            actualizarEvento();
            break;
        case '5':
            eliminarEvento();
            break;
        case '6':
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción inválida, por favor seleccione una opción válida.");
            break;
    }

    if (opcion === '6') {
        break;
    }
}


function crearEvento() {
    const titulo = prompt("Ingrese el título del evento:");
    const fecha = prompt("Ingrese la fecha del evento:");
    const descripcion = prompt("Ingrese la descripción del evento:");

    const evento = {
        titulo: titulo.trim(),
        fecha: fecha.trim(),
        descripcion: descripcion.trim()
    };

    eventos.push(evento);
    alert("Evento creado con éxito!");
}

function visualizarEventos() {
    const eventosList = Object.values(eventos);
    let eventosString = "";

    for (let i = 0; i < eventosList.length; i++) {
        eventosString += `Evento ${i + 1}: ${eventosList[i].titulo} - ${eventosList[i].fecha} - ${eventosList[i].descripcion}\n`;
    }

    alert(eventosString);
}

function buscarEvento() {
    const buscar = prompt("Ingrese el título del evento a buscar:");
    const eventosList = Object.values(eventos);
    let encontrado = false;

    for (let i = 0; i < eventosList.length; i++) {
        if (eventosList[i].titulo.toLowerCase().includes(buscar.toLowerCase())) {
            alert(`Evento encontrado: ${eventosList[i].titulo} - ${eventosList[i].fecha} - ${eventosList[i].descripcion}`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Evento no encontrado");
    }
}

function actualizarEvento() {
    const idEvento = prompt("Ingrese el identificador del evento a actualizar:");
    const evento = eventos[idEvento - 1];

    if (evento) {
        const titulo = prompt("Ingrese el nuevo título del evento:");
        const fecha = prompt("Ingrese la nueva fecha del evento:");
        const descripcion = prompt("Ingrese la nueva descripción del evento:");

        Object.assign(evento, {
            titulo: titulo.trim(),
            fecha: fecha.trim(),
            descripcion: descripcion.trim()
        });

        alert("Evento actualizado con éxito!");
    } else {
        alert("Evento no encontrado");
    }
}

function eliminarEvento() {
    const idEvento = prompt("Ingrese el identificador del evento a eliminar:");
    const eventosList = Object.values(eventos);

    for (let i = 0; i < eventosList.length; i++) {
        if (i + 1 === idEvento) {
            eventos = eventos.filter((evento, index) => index !== i);
            alert("Evento eliminado con éxito!");
            return;
        }
    }

    alert("Evento no encontrado");
}