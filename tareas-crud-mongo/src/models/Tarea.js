import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const TareaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true   // '   hello  ' => 'hello'
    },
    descripcion: {
        type: String,
        trim: true
    },
    disponible: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false, // no aparece __v
    timestamps: true // agrega createAt, UpdateAt
})
TareaSchema.plugin(mongoosePaginate);

export default model('Tarea', TareaSchema)