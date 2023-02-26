import apiAxios from '@/app/api/api'
import { TestsService } from '@/app/services/tests.service'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import cookie from 'js-cookie'
import styles from './TestPage.module.scss'

const TestsPage = () => {
    const { data: response, isLoading, refetch } = useQuery('get all tests', TestsService.getAll)
    const inputRef = useRef(null)
    const [testUrl, setTestUrl] = useState("")
    const [name, setName] = useState("")
    const [data, setData] = useState({})

    // const { mutateAsync: createTestMutation } = useMutation('create test', (data: any) => TestsService.createTest(data), {
    //     onSuccess: () => {
    //         {
    //             refetch()
    //         }
    //     }
    // })

    const { mutateAsync: createTestQuestionsMutation } = useMutation('create questions', (data: any) => TestsService.createQuestions(data), {
        onSuccess: () => {
            {
                refetch()
            }
        }
    })
    const saveFile = async () => {
        await apiAxios.post("test", data, {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
        })
    }

    const generateQuestions = async (id: number) => {
        await createTestQuestionsMutation(id)
    }



    const handleChangeFile = async (e: any) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0]
            formData.append("file", file)
            await apiAxios
                .post("files", formData, {
                    headers: {
                        Authorization: `Bearer ${cookie.get("accessToken")}`,
                    },
                })
                .then((res) => setData({ ...data, testLink: res.data.data.filename }))
        } catch (e) { }
    }


    return (
        <div className={styles.test}>
            <div className={styles.test__container}>
                <h3 className={styles.test__title}>Кол-во тестов - {response?.data.length}</h3>
                <div className={styles.test__content}>{response?.data.map(item => (<div className={styles.test__content__item}>
                    <h3 className={styles.test__content__item__name}>{item.name}</h3>
                    <h3 className={styles.test__content__item__link}>{item.testLink}</h3>
                    <button className={styles.test__content__item__generated} onClick={() => generateQuestions(item.id)}>Сгенерировать вопросы</button>
                </div>))}</div>
                <form
                    className={styles.test__content__item__form}
                    onSubmit={(e) => {
                        e.preventDefault()
                        saveFile()
                        refetch()
                    }}>

                    <div
                        className={styles.test__content__item__upload}
                        onClick={() => inputRef.current.click()}
                    >
                        Загрузить тест
                        <input

                            ref={inputRef}
                            type='file'
                            hidden
                            onChange={handleChangeFile}
                        />

                    </div>
                    <input className={styles.test__content__item__upload__name} type="text" placeholder='name test' onChange={(e) => setData({ ...data, name: e.target.value })} />
                    <p>{testUrl}</p>
                    <button className={styles.test__content__item__upload__save} type='submit'>Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default TestsPage