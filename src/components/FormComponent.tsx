import React from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";
import axios from "axios";

type FormProps = {
    title: string,
    body: string
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid,
        }
    } = useForm<FormProps>({mode: 'all', resolver:joiResolver(userValidator)});

    const customHandler = async (data: FormProps) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
            console.log("Response from jsonplaceholder:", response.data);
        }
        catch (error){
            console.error("Error while posting:" + error);
        }
    };

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label>
                <input type="text" placeholder={'title'} {...register('title')} />
                {errors.title && <div> {errors.title?.message} </div>}
            </label>
            <label>
                <textarea placeholder={'body'} {...register('body')} />
                {errors.body && <div> {errors.body?.message} </div>}
            </label>
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default FormComponent;