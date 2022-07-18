import { ICreateNotesData } from './../services/notesService';
import Joi from "joi";

const notesSchema = Joi.object<ICreateNotesData>({
    title: Joi.string().max(50).required(),
    annotation: Joi.string().max(1000).required()
});

export default notesSchema;