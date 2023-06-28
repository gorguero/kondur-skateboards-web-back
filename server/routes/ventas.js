import express from "express";
import { createVenta,getVentas } from "../controllers/ventas.js";

const router = express.Router();

//Agregar Venta
router.post('/', createVenta);

//Obtener Ventas
router.get('/', getVentas);

export default router;