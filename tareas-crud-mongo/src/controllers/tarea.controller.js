import Tarea from "../models/Tarea";
import {getPagination} from "../libs/getPagination";
export const getAllTareas = async ( page,size, titulo) => {
    const {limit, offset} = getPagination(page, size);
    const codicion = titulo? {
        titulo:{
            $regex: new RegExp(titulo), $options:"i"
        }
    }:{};
    return await Tarea.paginate(codicion, {offset, limit })
}

export const saveTarea = async (tarea) => {
    const tareaNew = new Tarea(tarea);
    return await tareaNew.save();
}

export const getByIdTarea = async (id) => {
    const tareaH = await Tarea.findById(id);
    return tareaH;
}

export const getTareasCompletadas = async () => {
    return await Tarea.find({ disponible: true })
}

export const getTareasIncompletas = async () => {
    return await Tarea.find({ disponible: false })
}

export const deleteTarea = async (id) => {
    const tareaH = await Tarea.findByIdAndDelete(id);
    if (tareaH) {
        return true;
    }
    return false;
}

export const updateTarea = async (id, tarea) => {
    const tareaH = await Tarea.findByIdAndUpdate(id, tarea);
    if (tareaH) {
        return await Tarea.findById(id);;
    }
    return false;
}