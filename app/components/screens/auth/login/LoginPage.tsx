import { useAppDispatch, useAuth } from '@/app/hooks/hooks'
import { login } from '@/app/store/auth/auth.actions'
import { useRouter } from 'next/router'
import cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IAuthForm } from './login.interface'
import styles from './LoginPage.module.scss'
import { getUser, logout } from '@/app/store/auth/auth.slice'

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const { isLoading, user } = useAuth()
    const router = useRouter()
    const {
        register,
        handleSubmit,
    } = useForm<IAuthForm>({
        defaultValues: {
            login: "",
            password: "",
        },
        mode: "onChange",
    })
    useEffect(() => {
        dispatch(getUser())
    }, [user])
    console.log(router.pathname)

    const onSubmit: SubmitHandler<IAuthForm> = async (values) => {
        await dispatch(login(values))
        await router.push('/')


    }
    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
                    <h3>Авторизация</h3>
                    <div className={styles.login__form__input}>
                        <div className={styles.login__form__input__content}>
                            <input  {...register("login", {
                                required: "login required",
                            })} type="text" placeholder='' autoComplete='off' />
                            <label htmlFor="">Логин</label>
                        </div>
                    </div>
                    <div className={styles.login__form__input}>
                        <div className={styles.login__form__input__content}>
                            <input {...register("password", {
                                required: "password required",
                                minLength: {
                                    value: 4,
                                    message: "Пароль должен быть более 4-ех символов",
                                },
                            })} type="password" placeholder='' autoComplete='off' />
                            <label htmlFor="">Пароль</label>
                        </div>
                    </div>

                    <button type='submit' className={styles.login__form__button}>
                        Войти
                    </button>


                </form>
                {/* <button onClick={() => dispatch(logout)}>ЖОЙ</button> */}
            </div >
        </div >
    )
}

export default LoginPage