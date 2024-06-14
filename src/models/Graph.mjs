import linkedList from "../models/LinkedList.mjs";

export default class Graph {
    #listaAdyacencia = []
    #map = new Map()
    #visited = []

    constructor() {}

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#listaAdyacencia.push(new linkedList())
            this.#map.set(value,this.#listaAdyacencia.length-1)
        }
    }

    addV(value) {
        this.#listaAdyacencia.push(new linkedList())
        this.#map.set(value,this.#listaAdyacencia.length-1)
        return value
    }

    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].push(end,weight)
            this.#listaAdyacencia[this.#map.get(end)].push(start,weight)
            return true
        }
        return false
    }

    dfs(origin, callback) {

        this.#visited[this.#map.get(origin)] = true
        callback(origin)

        let element = this.#listaAdyacencia[this.#map.get(origin)]

        for (let i = 0; i < element.size(); i++) {
            let v = element.getElementAt(i)
            if (this.#visited[this.#map.get(v.lugar.name)] != true) {
                this.#visited[this.#map.get(v.lugar.name)] = true
                this.dfs(v.lugar.name, callback)
            }
        }
    }
}