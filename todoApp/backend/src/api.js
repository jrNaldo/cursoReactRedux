import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Tarefas from './Tarefas.js'

dotenv.config()

const app = express()
const port = 5000
// Middleware - Fução que trata informações recebidas
app.use(express.json())


const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado')
    }catch(e){
        console.log(`Erro ${e}`)
    }
}
connectDb()

app.post("/tarefas", async (req, res) => {
    try{
        const novaTarefa = await Tarefas.create(req.body)
    }catch(e){
        res.send({e: e})
    }
})

app.get("/tarefas", async(req,res) => {
    try{
        const tarefas = await Tarefas.find()
        res.json(tarefas)
    }catch(e){
        res.json({e: e})
    }
})

app.put("/tarefas/:id", async(req,res) => {
    try{
        const novaTarefa = await Tarefas.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(novaTarefa)
    }catch(e){
        res.json({e: e})
    }
})

app.delete("/tarefas/:id", async (req,res) => {
    try{
        const excluirTarefa = await Tarefas.findByIdAndDelete(req.params.id)
        res.json(excluirTarefa)
    }catch(e){
        res.json({e: e})
    }
})

app.listen(port, function(){
    console.log('Server rodando na porta '+ port)
})