import Animales from './consulta.js'

const selectAnimales = document.getElementById('animal');

selectAnimales.addEventListener('change', async () => {
    
    const { animales } = await Animales.getData();
   
    const anim = document.getElementById('animal').value;

        let previewImagen = document.getElementById('preview');

       animales.forEach((e) => {
        if (e.name == anim){
            previewImagen.innerHTML = `<img width= '200px' height='200px' padding= '20px' src='assets/imgs/${e.imagen}' >`;
        };
    })
});