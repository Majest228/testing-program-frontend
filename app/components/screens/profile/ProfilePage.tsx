import { UserService } from '@/app/services/user.service';
import React from 'react'
import { useQuery } from 'react-query';


const ProfilePage = () => {
    const {
        data: response,
        error,
        isLoading,
    } = useQuery("get profile", () => UserService.getProfile());
    console.log("profile", response?.data)
    return (
        <div>
            <h3>{isLoading ? {} : response?.data.login}</h3>
            <div>{isLoading ? {} : response?.data.testRes.map(item => (<div>
                <p>{item.test.name}</p>
                <p>{item.res}</p>
            </div>))}</div>
        </div>
    )
}

export default ProfilePage