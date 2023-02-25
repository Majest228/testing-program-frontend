import Link from 'next/link'
import React from 'react'

import styles from './AdminPage.module.scss'

const AdminPage = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.admin__container}>
                <h3>Админ панель</h3>

                <ul>
                    <Link href="admin/users">Пользователи</Link>
                    <Link href="admin/test">Тесты</Link>
                </ul>
            </div>
        </div>
    )
}

export default AdminPage