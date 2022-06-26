import { Router } from "express";
import * as tareaController from "../controllers/tarea.controller"
const router = Router();

router.get('/', async (req, res) => {
    try{
        const {page, size, titulo}= req.query;

        res.json(await tareaController.getAllTareas(page,size, titulo))
    }catch(error){
        res.status(500).json({
            msg:error.message || 'Ocurrio un error'
        })
    }
});

router.get('/completa', async (req, res) => {
    try{
        res.json(await tareaController.getTareasCompletadas())
    }catch(error){
        res.status(500).json({
            msg:error.message || 'Ocurrio un error'
        })
    }
});

router.get('/incompleta', async (req, res) => {
    try{
        res.json(await tareaController.getTareasIncompletas())
    }catch(error){
        res.status(500).json({
            msg:error.message || 'Ocurrio un error'
        })
    }
});

router.get('/:id', async (req, res) => {
    const tarea = await tareaController.getByIdTarea(req.params.id)
    if (tarea) {
        res.json(tarea)
    } else {
        res.status(404).json({ msg: 'Tarea no encontrada' })
    }
})

router.post('/', async (req, res) => {
    try{
        res.json(await tareaController.saveTarea(req.body))
    }catch(error){
        res.status(500).json({
            msg:error.message || 'Ocurrio un error'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try{
        if (await tareaController.deleteTarea(req.params.id)) {
            res.json({ msg: 'Tarea eliminada' })
        } else {
            res.status(404).json({ msg: 'Tarea no encontrada' })
        }
    }catch(error){
        res.status(500).json({
            msg:error.message || 'Ocurrio un error'
        })
    }
})

router.put('/:id', async (req, res) => {
    try{
        const tarea = await tareaController.updateTarea(req.params.id, req.body)
        if (tarea) {
            res.json(tarea);
        } else {
            res.status(404).json({ msg: 'Tarea no encontrada' })
        }
    }catch(error){
        res.status(500).json({
            msg:error.message || 'Ocurrio un error'
        })
    }
})

export default router;