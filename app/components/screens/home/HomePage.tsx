import { TestsService } from '@/app/services/tests.service'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'
import styles from './HomePage.module.scss'

const HomePage = () => {
    const { isLoading, data: response, error } = useQuery('tests list', () => TestsService.login())
    console.log(response)
    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <div className={styles.home__content}>
                    {
                        isLoading ? <div>Loading</div> : response?.data.map(item => (
                            <Link href={`/testing/${item.id}`}>
                                <h3>{item.name}</h3>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default HomePage