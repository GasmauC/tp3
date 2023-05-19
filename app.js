const archivos = require('./datos')
require('colors')
const acciones = process.argv[2];
const titulo = process.argv[3];
const lectura = archivos.leerArchivo();

switch(acciones){

    case "listar":
        console.log(`
        Listado de tareas
        ------------------
        `.blue)
        archivos.listar(lectura)
        
        break;
    case "crear":
        if([titulo].includes(undefined))
            console.log("se precisa el titulo");
         else{
            const nuevaTarea = {
                titulo,
                estado: "pendiente",
            }
            console.log(`
            Nueva Tarea Agregada!
            ---------------------
            `.rainbow);
         
         let tarea = archivos.guardarTarea(nuevaTarea)
        
         } 
        break;
    case "filtrar":
         const estado = process.argv[3];
         if(estado ===undefined){
            console.log("Debes ingresar un estado!!!!".red);
            break;
         }
         if(!["pendiente","en proceso","terminada"].includes(estado)){
            console.log("ERROR: El estado debe ser uno de los sigentes:| pendiente | en proceso | terminada |".red);
            break;
        }
         else{
            const resultado = archivos.filtarPorEstado(estado)

        
            console.log(`
            ************************************
            PRODUCTOS FILTRADOS POR "${estado}"
            ************************************
            `.red)
            resultado.forEach((tarea,i) => {
                console.log(`${i + 1}. ${tarea.titulo}`.green);
            });
        }    
        break;
    case  undefined:
        console.log(`
        Atencion!!!! - Tienes que pasarme una accion
        Las acciones diponibles son: listar
        ---------------------------------------------
        `.red);
        break;
    default:
        console.log(`
        ------------------------------------------------------
        No entiendo!!!, que quieres hacer
        Las acciones disponibles son: listar, crear y filtrar
        ------------------------------------------------------
        `.rainbow);
    }
