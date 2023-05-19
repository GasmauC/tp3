const fs = require('fs');
let leerArchivo= function(){
    let tareas = fs.readFileSync('./datos/tareas.json','utf-8')
    return JSON.parse(tareas);
}
const escribirJSON = (tareas) =>{
    const tareasString = JSON.stringify(tareas,null,3)
    fs.writeFileSync('./datos/tareas.json',tareasString,'utf-8');
}
const listar = function(tareas){
    tareas.forEach((tarea,i) => {
        console.log(`${i +1}.- ${tarea.titulo} - ${tarea.estado}`); 

    });
}

module.exports = {
    leerArchivo: function(){
        let tareas = fs.readFileSync('./datos/tareas.json','utf-8')
        return JSON.parse(tareas);
    },
    
    listar: function(tareas){
        tareas.forEach((tarea,i) => {
            console.log(`${i +1}.- ${tarea.titulo} - ${tarea.estado}`.yellow); 

        });
    },
   
    guardarTarea:(nuevasTareas) => {
        const tareas = leerArchivo()
        tareas.push(nuevasTareas)
        return escribirJSON(tareas)
    },
    filtarPorEstado: (criterio) =>{
        let estadoFil = leerArchivo()
        return estadoFil.filter((tarea) => tarea.estado === criterio)
    }
};