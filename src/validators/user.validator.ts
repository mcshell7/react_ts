import Joi from "joi";

export const userValidator = Joi.object().keys({
    username: Joi.string()
        .required()
        .pattern(/\w{3,7}/)
        .messages({
        "string.pattern.base" : "you don't match the pattern",
        "any.required": "field is required"
    }),
    password: Joi.string().min(3).max(8).messages({
        "string.min": "Password must be at least 3 character",
        "string.max": "Password must be no longer 8 character"
    }),
    age: Joi.number().min(0).max(121).messages({
        "number.min": "Age must be at least 0",
        "number.max" : "Age must be no more than 121"
    })

});