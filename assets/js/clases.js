class Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonidos = sonidos
    }
    get nombre () { 
        return this._nombre
    }
    get edad () { 
        return this._edad
    }
    get img () { 
        return this._img
    }
    set comentarios (nuevos_comentarios) { 
        this._comentarios = nuevos_comentarios
    }
    get sonidos () { 
        return this._sonidos
    }
}


export class Leon  extends Animal {
    constructor (nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Oso.jpg', comentarios, 'assetes/sounds/Rugido')
    }
    Rugir () {
        const player = document.getElementById('player')
        player.innerHTML = `<source src='${this.sonidos}' type = 'audio/mpeg'>`
        player.play()
    }
}


export class Lobo  extends Animal {
    constructor (nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Lobo.jpg', comentarios, 'assetes/sounds/Aullido')
    }
    Aullar () {
        const player = document.getElementById('player')
        player.innerHTML = `<source src='${this.sonidos}' type = 'audio/mpeg'>`
        player.play()
    }
}


export class Oso  extends Animal {
    constructor (nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Oso.jpg', comentarios, 'assetes/sounds/Gruñido')
    }
    Gruñir () {
        const player = document.getElementById('player')
        player.innerHTML = `<source src='${this.sonidos}' type = 'audio/mpeg'>`
        player.play()
    }
}


export class Serpiente  extends Animal {
    constructor (nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Serpiente.jpg', comentarios, 'assetes/sounds/Siseo')
    }
    Sisear () {
        const player = document.getElementById('player')
        player.innerHTML = `<source src='${this.sonidos}' type = 'audio/mpeg'>`
        player.play()
    }
}


export class Aguila  extends Animal {
    constructor (nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Aguila.jpg', comentarios, 'assetes/sounds/Chillido')
    }
    Chillar () {
        const player = document.getElementById('player')
        player.innerHTML = `<source src='${this.sonidos}' type = 'audio/mpeg'>`
        player.play()
    }
}