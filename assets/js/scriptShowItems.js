elementoUno = document.getElementById("serviciosPostales");
elementoDos = document.getElementById("serviciosEncomiendas");
elementoTres = document.getElementById("serviciosAdicionales");
spinner = document.getElementById("spinner"); 

const mostrarPostales = () => {
    spinner.style.display='block';
    elementoDos.style.display='none';
    elementoTres.style.display='none';

    setTimeout(function() {

    spinner.style.display='none';
    elementoUno.style.display='block';
    document.getElementById('precioPostalIDCero').innerHTML= "$ " + postales[0].precio;
    document.getElementById('precioPostalIDUno').innerHTML= "$ " + postales[1].precio;
    document.getElementById('precioPostalIDDos').innerHTML= "$ " + postales[2].precio;
    document.getElementById('precioPostalIDTres').innerHTML= "$ " + postales[3].precio;
    document.getElementById('precioPostalIDCuatro').innerHTML= "$ " + postales[4].precio;
    }, 700);
    
} 

const mostrarEncomiendas = () => {
    spinner.style.display='block';
    elementoUno.style.display='none';
    elementoTres.style.display='none';

    setTimeout(function() {

    spinner.style.display='none';
    elementoDos.style.display='block';
    document.getElementById('precioEncomiendasIDCero').innerHTML= "$ " + encomiendas[0].precio;
    document.getElementById('precioEncomiendasIDUno').innerHTML= "$ " + encomiendas[1].precio;
    document.getElementById('precioEncomiendasIDDos').innerHTML= "$ " + encomiendas[2].precio;
    document.getElementById('precioEncomiendasIDTres').innerHTML= "$ " + encomiendas[3].precio;
    document.getElementById('precioEncomiendasIDCuatro').innerHTML= "$ " + encomiendas[4].precio;
    document.getElementById('precioEncomiendasIDCinco').innerHTML= "$ " + encomiendas[5].precio;
    document.getElementById('precioEncomiendasIDSeis').innerHTML= "$ " + encomiendas[6].precio;
    document.getElementById('precioEncomiendasIDSiete').innerHTML= "$ " + encomiendas[7].precio;
    }, 700);
} 

const mostrarAdicionales = () => {
    spinner.style.display='block';
    elementoUno.style.display='none';
    elementoDos.style.display='none';

    setTimeout(function() {
    
    spinner.style.display='none';
    elementoTres.style.display='block';
    document.getElementById('precioAdicionalesIDCero').innerHTML= "$ " + adicionales[0].precio;
    document.getElementById('precioAdicionalesIDUno').innerHTML= "$ " + adicionales[1].precio;
    document.getElementById('precioAdicionalesIDDos').innerHTML= "$ " + adicionales[2].precio;
    }, 700);
} 


