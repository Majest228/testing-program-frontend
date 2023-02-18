import Link from 'next/link'
import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__content}>
                    <div className={styles.header__content__left}>
                        <Link href='/'>LOGO</Link>
                    </div>
                    <div className={styles.header__content__right}>
                        <button>Выйти</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header