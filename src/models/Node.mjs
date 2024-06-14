
export default class Node {
    lugar 
    next

    constructor(lugar) {
        this.lugar = lugar
        this.next = null
    }
    getLugar () {
        return this.lugar
    }
}

