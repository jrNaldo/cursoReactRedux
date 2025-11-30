import mongoose from "mongoose";


const TarefasSchema = new mongoose.Schema({
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Tarefas', TarefasSchema)