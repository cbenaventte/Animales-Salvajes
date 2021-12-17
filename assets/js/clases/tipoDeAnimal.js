import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Ruge(){
        return `<audio src="./assets/sounds/Rugido.mp3" controls></audio>`
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aulla(){
        return `<audio src="./assets/sounds/Aullido.mp3" controls></audio>`
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñe(){
        return `<audio src="./assets/sounds/Gruñido.mp3" controls></audio>`
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisea(){
        return `<audio src="./assets/sounds/Siseo.mp3" controls></audio>`
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Chilla(){
        return `<audio src="./assets/sounds/Chillido.mp3" controls></audio>`
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};