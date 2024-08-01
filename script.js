//CRUD: Lo que se puede hacer en la computación
//crear, leer, actualizar y borrar

alert("Hola Mundo! <3");

// tipo variable nombreVariable=ValordelaVariable
//Las palabras en JS van entre comillas
//Se puede modificar el contenido que hay dentro de la variable
//Busca en el documento u elemento por su ID y lo trae, por lo que se tiene que poner ID a lo que se desea que traiga

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamar a una propiedad o una acción del objeto
//Las acciones se distinguen por los paréntesis
//Colocar el ID en el texto que se desea que cambie
typewriter
  .pauseFor(2500)
  //Escrbir una palabra
  .typeString('Andrea Ceja')
  //Pausar
  .pauseFor(300)
  //Borrar e indica cuantos caracteres o si se quiere borrar todo, "deleteall"
  .delleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();