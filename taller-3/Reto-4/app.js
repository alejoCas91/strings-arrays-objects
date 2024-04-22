let i = true
const eventList = []
let id = 0;
while (i) {
    const userInput = prompt(`Por favor ingresa una de las siguientes opciones: 
                            \n 1. Crear un evento 
                            \n 2. Ver eventos
                            \n 3. Buscar eventos por nombre
                            \n 4. Actualizar evento
                            \n 5. Eliminar evento
                            \n 6. Salir`);
    switch (userInput) {
        case "1":
            createEvent();
        case "2":
            seeEvents();
        case "3":
            searchEvent();
        case "4":
            updateEvent();
        case "5":
            deleteEvent();
        case "6":
            i = false;
            break;
        default:
            alert("Ingresa un dato valido")
            break;
    }
}

function createEvent (){
    const eventName = prompt("Por favor ingresa el nombre del evento: ");
    const eventDate = prompt("Por favor ingresa la fecha del evento (YYYY-MM-DD): ");
    const eventDescription = prompt("Por favor ingresa la descripcion del evento: ");
    const event = new Object();
    event.eventName = eventName;
    event.eventDate = eventDate;
    event.eventDescription = eventDescription;
    eventList.push(event);
}

function seeEvents (){
    console.log(eventList);
}

function searchEvent (){
}

function updateEvent (){
}

function deleteEvent(){
}