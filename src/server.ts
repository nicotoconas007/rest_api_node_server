import express from "express"

const server = express()

//Routing
server.get("/", (req, res) => {

    const datos = [
        {id: 1, nombre: "Nico"},
        {id: 2, nombre: "Sofi"}
    ]
    res.send(datos)
})

export default server