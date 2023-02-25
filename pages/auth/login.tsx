import LoginPage from '@/app/components/screens/auth/login/LoginPage'
import { NextPageAuth } from '@/app/providers/private.route.interface'
import React from 'react'

const Login: NextPageAuth = () => {
    return <LoginPage />
}
Login.isOnlyUser = false
export default Login