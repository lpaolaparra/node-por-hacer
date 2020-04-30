const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{
    //convierte un objeto a un json
    let data = JSON.stringify(listadoPorHacer);

    const datos = new Uint8Array(Buffer.from(data));
        fs.writeFile(`database/data.json`, datos, (err) => {
        if (err) throw new Error('No se pudo grabar',err);
        console.log('Se creo el archivo .json');
        
        });
}

const cargarDB = () =>{

    try {

        listadoPorHacer = require('../database/data.json');

    } catch (error) {
        listadoPorHacer=[];
    }
    
}

const crear = (descripcion) =>{

    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () =>{

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion,completado = true) =>{

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    console.log(index);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    
    if(listadoPorHacer.length === nuevoListado.length) {
        return console.log('Esa tarea no existe');
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}