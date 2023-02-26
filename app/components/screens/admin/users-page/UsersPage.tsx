import apiAxios from '@/app/api/api'
import Close from '@/app/components/ui/svg/close'
import UserPageModal from '@/app/components/ui/user-page-modal/UserPageModal'
import { UserService } from '@/app/services/user.service'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import styles from '../AdminPage.module.scss'
import cookie from 'js-cookie'

const UsersPage = () => {
    const { data: response, isLoading, refetch } = useQuery('get all users', UserService.getAll)
    const [isShow, setIsShow] = useState(false)

    const { mutateAsync: deleteUser } = useMutation('delete user', (id: number) => UserService.deleteUser(id), {
        onSuccess: () => {
            {
                console.log("upload")
                refetch()
            }
        }
    })


    return (
        <div className={styles.admin__user}>
            <div className={styles.admin__container}>
                <h3 className={styles.admin__user__title}>Кол-во пользователей - {response?.data.length}</h3>
                <div className={styles.admin__user__content}>{response?.data.map(item => (<div className={styles.admin__user__content__item}>
                    <p className={styles.admin__user__content__item__login}>{item.login}</p> <button onClick={() => deleteUser(item.id)} className={styles.admin__user__content__item__delete}>
                        <Close />
                    </button>
                </div>))}</div>
                <button className={styles.admin__user__create} onClick={() => setIsShow(!isShow)}>Создать пользователя</button>
                <UserPageModal isShow={isShow} setIsShow={setIsShow} />
            </div>
        </div>
    )
}

export default UsersPage