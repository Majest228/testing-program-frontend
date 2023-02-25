import { UserService } from '@/app/services/user.service'
import React from 'react'
import { useQuery } from 'react-query'


const UsersPage = () => {
    const { data: response, isLoading } = useQuery('get all users', UserService.getAll)
    console.log(response?.data)
    return (
        <div>
            <h3>Кол-во пользователей - {response?.data.length}</h3>
            <div>{response?.data.map(item => (<div>
                <h3>{item.login}</h3>
            </div>))}</div>
        </div>
    )
}

export default UsersPage