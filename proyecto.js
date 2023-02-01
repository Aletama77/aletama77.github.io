
// Utilizo API de datos aleatorios para modificar información al actualizar página  al actualizar la página

const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const domicilio = document.querySelector('#domicilio');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const fecha_nacimiento = document.querySelector('#edad');
const nacionalidad = document.querySelector('#nacionalidad');

// Utilizo fetch recomendada para transferir datos
const generarUsuario = async () => {
  try {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first +" "+datos.name.last;
    domicilio.textContent = datos.location.street.name+" "+datos.location.street.number+", "+datos.location.state;
    telefono.textContent = datos.phone;
    email.textContent = datos.email;
    edad.textContent = datos.dob.age + " años";
    nacionalidad.textContent = datos.location.country;

    
  } catch (error) {
    console.log('error');
  }
}

//Boton de generar usuario

document.addEventListener('DOMContentLoaded', generarUsuario);

//OPCIONAL BOTON PARA GENERAR USUARIO
// boton.addEventListener('click', generarUsuario);