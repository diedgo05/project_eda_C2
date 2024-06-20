import linkedList from "./LinkedList.mjs";

export default class Graph {
    #listaAdyacencia = []
    #matrizAdyencia = []
    #map = new Map()
    #visited = new Array(this.#listaAdyacencia.length).fill(false);

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
        this.#matrizAdyencia.push([])
        return value
    }
  


    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].push(end,weight)
            this.#listaAdyacencia[this.#map.get(end)].push(start,weight)
            this.#matrizAdyencia[this.#map.get(start)][this.#map.get(end)] = weight
            this.#matrizAdyencia[this.#map.get(end)][this.#map.get(start)] = weight
            return true
        }
        return false;
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

    getVisit(){
        return this.#visited;
    }

    clearVisted(){
        this.#visited.fill(false)
    }

    dijkstra(verticeInit,print){
        //Valores iniciales
        let l = [];
        let lp = [];
        let v = [];
        let d = [];
        let dp = [];
        let v1;

        //console.log(this.#matrizAdyencia[0][0])
        //rellenar
        for (let i = 0; i < this.#matrizAdyencia.length; i++) {
            for (let j = 0; j < this.#matrizAdyencia.length; j++) {
                if (this.#matrizAdyencia[i][j] == undefined) {
                    this.#matrizAdyencia[i][j] = 10000;
                }
            }            
        }
        
        //Agregando elementos a los respectivos arreglos 
        for(let i=0; i<this.#matrizAdyencia.length; i++){
          v[i] = i; // v1 => 0 , v2 => 1, v3 => 3
          lp[i]= v[i]
          d[i] = 10000;
        }
    
        v1 = this.#map.get(verticeInit);
        d[v1] = 0;
        dp = [...d];
    
        while (l.length !== this.#matrizAdyencia.length) {
            let minimo = Math.min(...dp.filter(value => value !== null));
            let indice = dp.indexOf(minimo);
            l.push(minimo);
    
            for (let i = 0; i < d.length; i++) {
                if (this.#matrizAdyencia[indice][i] !== 10000) {
                    let suma = d[indice] + this.#matrizAdyencia[indice][i];
                    if (d[i] > suma) {
                        d[i] = suma;
                    }
                }
            }

            dp[indice] = null;
        }

        console.log(d)
        print(d)
      }
}