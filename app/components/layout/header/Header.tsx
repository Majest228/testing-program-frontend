import { UserService } from '@/app/services/user.service';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import cookie from 'js-cookie'
import styles from './Header.module.scss'
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/app/hooks/hooks';
import { getUser, logout } from '@/app/store/auth/auth.slice';
import { getProfile } from '@/app/store/auth/auth.actions';
import { useAppSelector } from '@/app/store/store';


const Header = () => {
    const [isShow, setIsShow] = useState(false)
    const { user } = useAppSelector(state => state.auth)

    const {
        data: response,
        error,
        refetch,
        isLoading,
    } = useQuery("get profile", () => UserService.getProfile());
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__content}>
                    <div className={styles.header__content__left}>
                        <Link href='/'>LOGO</Link>
                    </div>
                    <div className={styles.header__content__right}>
                        <button onClick={() => setIsShow(!isShow)} className={styles.header__content__right__profile}>
                            {user == null ? "" : user.login}
                        </button>

                        {isShow ? (<div className={styles.header__content__right__profile__modal}>
                            <Link href='/profile'>
                                Профиль
                            </Link>
                            {response?.data.isAdmin ? <Link href='/admin'>Админ панель</Link> : ""}
                            <button onClick={() => {
                                dispatch(logout())
                                refetch()
                            }}>Выйти</button>
                        </div>) : ""}
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header