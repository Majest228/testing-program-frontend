import { useAppDispatch, useOnClickOutside } from '@/app/hooks/hooks'
import { AuthService } from '@/app/services/auth.service'
import { register as registerUser } from '@/app/store/auth/auth.actions'
import React, { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { IAuthForm } from '../../screens/auth/login/login.interface'
import styles from './UserPageModal.module.scss'

const UserPageModal = ({ isShow, setIsShow }: any) => {

    const escape = useRef<HTMLElement>(null)
    const outside = useRef<HTMLElement>(null)
    useOnClickOutside(outside, () => setIsShow(false))
    const dispatch = useAppDispatch()
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm<IAuthForm>({
        defaultValues: {
            login: "",
            password: "",
        },
        mode: "onChange",
    })

    const onSubmit: SubmitHandler<IAuthForm> = async (values) => {
        await dispatch(registerUser(values))
    }
    return (
        <div className={styles.auth__wrapper}>
            {isShow && (
                <div className={styles.auth__modal} ref={escape}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        ref={outside}
                        className={styles.auth__form}>
                        <h3>Создание пользователя</h3>
                        <div className={styles.auth__form__input}>
                            <div className={styles.auth__form__input__content}>
                                <input  {...register("login", {
                                    required: "login required",
                                })} type="text" placeholder='' autoComplete='off' />
                                <label htmlFor="">Логин</label>
                            </div>
                        </div>
                        <div className={styles.auth__form__input}>
                            <div className={styles.auth__form__input__content}>
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

                        <button type='submit' className={styles.auth__form__button}>
                            Создать
                        </button>


                    </form>
                </div>
            )}
        </div>
    )
}

export default UserPageModal