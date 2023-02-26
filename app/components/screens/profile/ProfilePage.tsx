import { UserService } from '@/app/services/user.service';
import React from 'react'
import { useQuery } from 'react-query';
import styles from './ProfilePage.module.scss'

const ProfilePage = () => {
    const {
        data: response,
        error,
        isLoading,
    } = useQuery("get profile", () => UserService.getProfile());
    console.log("profile", response?.data)
    return (
        <div className={styles.profile}>
            <div className={styles.profile__container}>
                <h3 className={styles.profile__title}>Профиль</h3>
                <div className={styles.profile__name}>
                    <p className={styles.profile__login}>Ваш логин - <span>{isLoading ? "" : response?.data.login}</span></p>
                </div>
                <h3 className={styles.profile__title}>Результаты</h3>
                <div>{isLoading ? "" : response?.data.testRes.map(item => (<div className={styles.profile__res}>
                    <p className={styles.profile__res__name}>{item.test.name} - {item.res} </p>
                </div>))}</div>
            </div>
        </div >
    )
}

export default ProfilePage