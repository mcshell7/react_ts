import Joi from "joi";

export const userValidator = Joi.object().keys({

    title: Joi.string().min(5).max(100).messages({
        "string.min": "Title must be at least 100 character",
        "string.max": "Title must be no longer 100 character"
    }),
    body: Joi.string().min(30).max(240).messages({
        "number.min" : "Text must be at least 30 characters",
        "number.max" : "Text must be no more than 240 characters"
    })
});