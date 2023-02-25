import apiAxios from '@/app/api/api'
import { TestsService } from '@/app/services/tests.service'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import cookie from 'js-cookie'


const TestsPage = () => {
    const { data: response, isLoading, refetch } = useQuery('get all tests', TestsService.getAll)
    const inputRef = useRef(null)
    const [testUrl, setTestUrl] = useState("")
    const [name, setName] = useState("")

    const { mutateAsync: createTestMutation } = useMutation('create test', (data: any) => TestsService.createTest(data), {
        onSuccess: () => {
            {
                console.log("upload")
                refetch()
            }
        }
    })

    const { mutateAsync: createTestQuestionsMutation } = useMutation('create questions', (data: any) => TestsService.createQuestions(data), {
        onSuccess: () => {
            {
                console.log("upload")
                refetch()
            }
        }
    })
    const saveFile = async () => {
        await createTestMutation(testUrl)

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
                .then((res) => setTestUrl(`${res.data.data.filename}`))
        } catch (e) { }
    }


    return (
        <div>
            <h3>Кол-во тестов - {response?.data.length}</h3>
            <div>{response?.data.map(item => (<div>
                <h3>{item.name}</h3>
                <h3>{item.testLink}</h3>
                <button onClick={() => generateQuestions(item.id)}>Сгенерировать вопросы</button>
            </div>))}</div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    saveFile()
                    refetch()
                }}>

                <h3>Загрузить тест</h3>
                <div
                    onClick={() => inputRef.current.click()}
                >
                    Загрузить
                    <input
                        ref={inputRef}
                        type='file'
                        hidden
                        onChange={handleChangeFile}
                    />

                </div>
                <input type="text" placeholder='name test' onChange={(e) => setName(e.target.value)} />
                <p>{testUrl}</p>
                <button type='submit'>Сохранить</button>
            </form>
        </div>
    )
}

export default TestsPage