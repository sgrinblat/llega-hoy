elementoUno = document.getElementById("serviciosPostales")
elementoDos = document.getElementById("serviciosEncomiendas")
elementoTres = document.getElementById("serviciosAdicionales")

const mostrarPostales = () => {
    elementoUno.style.display='block';
    elementoDos.style.display='none';
    elementoTres.style.display='none';
} 

const mostrarEncomiendas = () => {
    elementoUno.style.display='none';
    elementoDos.style.display='block';
    elementoTres.style.display='none';
} 

const mostrarAdicionales = () => {
    elementoUno.style.display='none';
    elementoDos.style.display='none';
    elementoTres.style.display='block';
} 


