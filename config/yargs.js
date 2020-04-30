const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
    
}
const completado = {
    default:true,
    alias:'c',
    desc: 'Marca como completado o pendiente la tare'

}
const argv = require('yargs')
            .command('crear','crea un elemento por hacer',{
                descripcion,
            })
            .command('actualizar','Actualiza el estado completado de una tarea',{
                descripcion,
                completado,
            })
            .command('borrar','borrar una tarea',{
                descripcion,
            })
            .help()
            .argv;

module.exports = {
    argv,
}