const express = require("express");
const app = express();
const puerto = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hola mundo de Node.js. Adios Apache");
})

app.listen(puerto,()=>{
    console.log("Servidor node.js con express en el puerto",puerto);
})