import { Component, FC, PropsWithChildren } from "react"
import { TypeComponentAuthFields } from "./private.route.interface"
import { useRouter } from "next/router"
import { useAuth } from "../hooks/hooks"
import HomePage from "../components/screens/home/HomePage"

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    children,
    Component: { isOnlyUser, IsNotUser },
}) => {

    const { user, isLoading } = useAuth()
    const router = useRouter()
    let isUsed = false
    const Children = () => <>{children}</>

    if (user && isOnlyUser && isUsed == false) {
        isUsed = true
        return <Children />
    }
    else if (user && isOnlyUser == false && isUsed == false) {
        router.replace('/')
    }
    else {
        router.pathname !== '/auth/login' && router.replace("/auth/login")
        return <Children />
    }

    return null
}

export default CheckRole
