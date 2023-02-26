import Link from 'next/link'
import React from 'react'

import styles from './AdminPage.module.scss'

const AdminPage = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.admin__container}>
                <h3>Админ панель</h3>
                <ul className={styles.admin__content}>
                    <li>
                        <Link href="admin/users">Пользователи</Link>
                    </li>
                    <li>
                        <Link href="admin/test">Тесты</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default AdminPage