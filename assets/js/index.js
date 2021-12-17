import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/tipoDeAnimal.js'

let animales = [];

let btnRegistrar = document.getElementById('btnRegistrar');

btnRegistrar.addEventListener('click', () => {

    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let comentarios = document.getElementById('comentarios').value;
    let previewElement = document.getElementById('preview').value;

    if((nombre == '') || (edad == '') || (previewElement == '') || (comentarios == '')){
        alert('Faltan datos por llenar.')
    }
    else {
        let nuevoAnimal;

       
        if( nombre === 'Leon'){
            nuevoAnimal = new Leon(nombre, edad, previewElement, comentarios, 'ruge')
        }
        else if ( nombre === 'Lobo'){
            nuevoAnimal = new Lobo(nombre, edad, previewElement, comentarios, 'aulla')
        }
        else if ( nombre === 'Oso'){
            nuevoAnimal = new Oso(nombre, edad, previewElement, comentarios, 'gruñe')
        }
        else if ( nombre === 'Serpiente'){
            nuevoAnimal = new Serpiente(nombre, edad, previewElement, comentarios, 'sisea')
        }
        else if ( nombre === 'Aguila'){
            nuevoAnimal = new Aguila(nombre, edad, previewElement, comentarios, 'chilla')
        }

       
        animales.push(nuevoAnimal);
        reloadTable();

        
        document.getElementById('animal').value = 'inicial';
        document.getElementById('edad').value = 'inicial';
        document.getElementById('preview').innerHTML = '';
        document.getElementById('comentarios').value = '';
    }

});


const reloadTable = () => {
    const animalesTemplate = document.getElementById('Animales');
    animalesTemplate.innerHTML = '';
    animales.forEach((e) => {
        let sound;
        if (e.getSonido() === 'ruge') {
            sound = e.Ruge();
        }
        else if (e.getSonido() === 'aulla') {
            sound = e.Aulla();
        }
        else if (e.getSonido() === 'gruñe') {
            sound = e.Gruñe();
        }
        else if (e.getSonido() === 'sisea') {
            sound = e.Sisea();
        }
        else if (e.getSonido() === 'chilla') {
            sound = e.Chilla();
        }

        animalesTemplate.innerHTML += `
        
    <div class='card m-1'>
    <img 
        src = '${e.getImg()}' class= 'card-img-top'/>
        <div class='card-body'>
            <h4 class='cart-title'>${e.getNombre()}</h4>
            <hr class='w-50 mx-auto'>
            <h6 class='card-text'>Edad: ${e.getEdad()}</h6>
            <h6 class='card-text'>Comentarios: ${e.getComentarios()}</h6>
            ${sound}
        </div>
    </div>`;


    })
}