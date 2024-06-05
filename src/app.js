const { envs } =require('./config/env')
const { starServer } = require('./server/server')

// console.log('Hola amore desde app.js')

//Funcion Autoconvocada

//(() => {}) ==>Funcion Agnóstica Autoconvocada

const main = () => {
    console.log('Aquí comenzaremos el servidor')
    console.log(envs)
    //INICIANDO SERVIDOR
    starServer({
        port: envs.PORT
    })
}

(async() => {
    main() 
})()