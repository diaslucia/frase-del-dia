// Array de Frases

const frases = [];

frases.push("Deja atrás lo que no te conduce hacia adelante.");
frases.push("Si vas a renunciar a algo, renuncia a ser débil.");
frases.push("El sabio crea, los demás copian.");
frases.push("Los que tiene prisa, tropiezan.");
frases.push("La sonrisa es la mejor respuesta para una mirada.");
frases.push("Habla menos y observa más.");
frases.push("Toma este día para sonreír.");
frases.push("La medida del amor es amar sin medida.");
frases.push("Sé feliz, no aceptes menos.");
frases.push("Las cosas buenas toman tiempo.");

console.log(frases);

//  Agregué un Event Listener para que cuando se haga click, aparezca una frase aleatoria

let boton = document.getElementById("boton");
let contenidoParrafo = document.querySelector(".parrafo");

const respuesta = (e) => {
    console.log("Usted toco el boton");
    boton.innerHTML = 'QUIERO OTRA FRASE';
    let elegido = frases[Math.floor(Math.random()*(frases.length-1))];
    contenidoParrafo.innerHTML = elegido;
}

boton.addEventListener("click", respuesta);

// Evento que cambia de color el botón

const mouseDownEvent = (evento) => {
    boton.style.backgroundColor = "#e8d6c8";
}

const mouseUpEvent = (evento) => {
    boton.style.backgroundColor = "white";
}

boton.addEventListener("mouseup", mouseUpEvent);
boton.addEventListener("mousedown", mouseDownEvent);