import Pelicula from '../models/Pelicula.js'

export const crearPelicula = async (req,res) => {
    try {
        const {titulo} = req.body;
        const nuevaPelicula = await Pelicula.create({
            titulo: titulo
        })
        res.json({mensaje: "Pelicula creada exitosamente", nuevaPelicula})
    } catch (err) {
        res.status(500).json({
            mensaje:"Algo salió mal al crear una nueva película",
            errores: err
        })
    }
}