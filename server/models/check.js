import { Schema, model } from "mongoose";

const CheckSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio.']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria.']
    },
    filmer_name: {
        type: String,
        required: [true, 'El nombre del filmer es requerido.']
    },
    contacto: {
        type: String,
        required: [true, 'El contacto es obligatorio.']
    },
    img_filmer: {
        type: String,
        required: [true, 'La url de la imagen de perfil es requerida.']
    },
    url_video: {
        type: String,
        required: [true, 'La url del video es requerida.']
    },
    creadoEn: {
        type: Date,
        default: Date.now()
    },
    actualizadoEn: {
        type: Date,
        default: Date.now()
    },
    estado:{
        type: Boolean,
        default: true
    }
});

//Cambiamos el id y ocultamos valores al response
CheckSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

export default model('Check', CheckSchema);