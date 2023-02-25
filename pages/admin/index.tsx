import AdminPage from '@/app/components/screens/admin/AdminPage'
import { NextPageAuth } from '@/app/providers/private.route.interface'
import React from 'react'


const Admin: NextPageAuth = () => {
    return (
        <AdminPage />
    )
}

Admin.isOnlyAdmin = true


export default Admin