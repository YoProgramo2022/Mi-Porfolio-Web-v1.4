function agregarCurso(cursoNuevo){           
  li = document.createElement("li");
  li.textContent = cursoNuevo;
  cursos.appendChild(li);  
  };


const boton=document.getElementById("lapiz");
const cursos=document.querySelector(".cursos");

boton.addEventListener ('click', function(){ 
      const contraseña = prompt("Ingrese la contraseña: ");
      if(contraseña=="patagonias"){
        const cursoNuevo = prompt("Ingresar nuevo Curso o Carrera: "); 
        agregarCurso(cursoNuevo); 
      }       
      else
         alert("Error de Contraseña");       
})

const btnEnvio=document.getElementsByid("enviarcorreo");

btnEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre=document.getElementById('nombre').value  ;
    const apellido=document.getElementById('apellido').value;
    const mensaje=document.getElementById('mensaje').value;
    windows.location.href= `mailto: nicolasrcastellini@gmail.com subject=envioDesdeFormulario&body=nombre%3A${nombre}%0Aapellido%3A${apellido}%0Amensaje%3A${mensaje}`;
})
