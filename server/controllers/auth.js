import { response } from "express";
import bcryptjs from 'bcryptjs';

import Usuario from '../models/usuario.js';

const login = async(req, res=response) => {

    const { email, password } = req.body;

    //Validar si el email existe
    const usuario = await Usuario.findOne({email});
    if( !usuario ){
        return res.status(400).json({
            msg: 'Email inválido'
        });
    }

    //Validamos si el usuario está activo
    if( !usuario.estado ){
        return res.status(400).json({
            msg: 'No se encuentra habilitado'
        });
    }

    //Verificamos la contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if( !validPassword ){
        return res.status(400).json({
            msg: 'Contraseña inválida'
        });
    }

    res.status(200).json({
        msg: 'Logueado papss'
    })

}

export {
    login
}