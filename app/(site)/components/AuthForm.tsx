'use client';

import Button from "@/app/components/Button";
import Input from "../../components/inputs/Input"
import AuthSocialButton from "./AuthSocialButton"
import{ useCallback, useState } from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () =>{
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN'){
            setVariant('REGISTER');
        }else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER'){
            axios.post('/api/register', data);
        }
        if(variant === 'LOGIN'){

        }

    }

    const socialAction = (action: string) =>{
        setIsLoading(true);
    }

    return(
        <div
        className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
        "
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:rounded-lg
                    sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input id="name" label="Nome" register={register} errors={errors} disabled={isLoading}/>
                    )}
                    <Input id="email" label="Endereço de Email" type="email" register={register} errors={errors} disabled={isLoading}/>

                    <Input id="password" label="Senha" type="password" register={register} errors={errors} disabled={isLoading}/>

                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant === 'LOGIN' ? 'Entrar' :  'Registrar'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className=" relative">
                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                            "
                        >
                            <div className=" 
                            w-full 
                            border-t
                            border-gray-300"
                            />
                        </div>
                        <div className="
                            relative 
                            flex 
                            justify-center 
                            text-sm
                            "
                        >
                            <span className=" 
                                bg-white 
                                px-2 
                                text-gray-500
                                "
                            >
                                ou continue com isso
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={()=> socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={()=> socialAction('google')}
                        />
                    </div>
                </div>
                <div
                    className="
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-6
                        px-2
                        text-gray-500
                    "
                >
                    <div>
                        {variant === 'LOGIN' ? "Novo no mensagero?" : " Já possui uma conta?"}
                    </div>
                    <div 
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant ==='LOGIN' ? 'Crie sua conta aqui' : 'Faça o login'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;