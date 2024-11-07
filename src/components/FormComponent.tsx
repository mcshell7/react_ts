import React from 'react';
import {useForm} from 'react-hook-form';

type FormProps = {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid,
            dirtyFields,
        }
    } = useForm<FormProps>({mode: 'all'});

    const customHandler = (formData: FormProps) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label>
                <input type="text" placeholder={'username'} {...register('username',{
                    required:{value: true, message: "username is required"},
                })} />
                {errors.username && <div> {errors.username?.message} </div>}
            </label>
            <label>
                <input type="text" placeholder={'password'} {...register('password', {
                    required: {value:true, message: "field is required"},
                    minLength: {value: 3, message: 'too short'},
                    maxLength: {value: 6, message: 'too much'}
                })} />
                {errors.password && <div> {errors.password?.message} </div>}
            </label>

            <input type="number" placeholder={'age'} {...register('age')} />
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default FormComponent;