// Metodo
function validarEntrada(mensaje) {
  let valor;
  let input; 
  do {
    input = prompt(mensaje);
    valor = parseFloat(input);
  } while (isNaN(valor) || input.trim() === '');
  return valor;
}

const numPersonas = parseInt(prompt("Por favor, ingresa cuántas personas quieres consultar:"));
const personas = [];//Array

for (let i = 0; i < numPersonas; i++) {
  const nombre = prompt(`Persona ${i + 1}: Por favor, ingresa tu nombre:`);
  const edad = validarEntrada(`Persona ${i + 1}: Por favor, ingresa tu edad:`);
  const pesoKg = validarEntrada(`Persona ${i + 1}: Por favor, ingresa tu peso en kilogramos:`);
  const estaturaMetros = validarEntrada(`Persona ${i + 1}: Por favor, ingresa tu estatura en metros:`);

  const imc = (pesoKg / (estaturaMetros * estaturaMetros)).toFixed(2);

  //objeto
  const persona = {
    nombre,
    edad,
    pesoKg,
    estaturaMetros,
    imc
  };

  personas.push(persona);
}

console.log(personas);

let mensaje = "Información de las personas ingresadas:\n";

for (let i = 0; i < personas.length; i++) {
  mensaje += `\nPersona ${i + 1}:
  Nombre: ${personas[i].nombre}
  Edad: ${personas[i].edad}
  Peso (kg): ${personas[i].pesoKg}
  Estatura (metros): ${personas[i].estaturaMetros}
  IMC: ${personas[i].imc}\n`;
}

console.log(mensaje)
alert(mensaje);

//Orden Superior Map
const nombres = personas.map((persona) => persona.nombre);
console.log("Nombres de las personas:", nombres);


//Orden Superior filter
const personasMayores = personas.filter((persona) => persona.edad >= 18);
console.log("Personas mayores de edad:", personasMayores);