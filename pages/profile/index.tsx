import { NextPageAuth } from '@/app/providers/private.route.interface'
import React from 'react'
import ProfielPage from '../../app/components/screens/profile/ProfilePage'

const Profile: NextPageAuth = () => {
    return (
        <ProfielPage />
    )
}
Profile.isOnlyUser = true

export default Profile