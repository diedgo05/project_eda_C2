import   Graph  from '../models/Graph.mjs';

const graph = new Graph();

let btn_addV = document.getElementById('btn-addV')
btn_addV.addEventListener('click', ()=> {
    let vertexName = document.getElementById('vertex-name').value;
    let vertices = vertexName.split('-')
    console.log(vertexName)
    console.log(vertices)

    if (vertices.length == 1) {
        graph.addV(vertices[0].trim())
        addLugarTable(vertices[0].trim())
    } else {
        graph.addVertices(...vertices.map((v)=> v.trim()))
    }
    document.getElementById('vertex-name').value = '';
});

let btn_addC = document.getElementById('btn-addC')
btn_addC.addEventListener('click', ()=> {
    let startVertex = document.getElementById("start-vertex").value.trim();
    let endVertex = document.getElementById("end-vertex").value.trim();

    if (startVertex == '' || endVertex=='') {
        alert('Tiene que llenar los campos')
    } else {
        let weight = parseInt(document.getElementById("insert-conex").value);
        console.log(startVertex,endVertex)
        console.log(graph.addConexion(startVertex,endVertex,weight))

        document.getElementById('start-vertex').value = '';
        document.getElementById('end-vertex').value = '';
        document.getElementById('insert-conex').value = '';
    }
});

let btn_dfs = document.getElementById('btn-dfs')
btn_dfs.addEventListener('click', ()=> {
    let lugarOrigin = document.getElementById('dfs-start').value;
    graph.dfs(lugarOrigin,callback);
});

let body = document.getElementById('dfs-result')
const callback = (nameLug) => {
    console.log(nameLug)
    addTable(nameLug)
};

let addTable = (nameLug) => {
    let tr = document.createElement('tr')
    let td = document.createElement('td')

    td.textContent = nameLug

    tr.appendChild(td)
    body.appendChild(tr)
};
