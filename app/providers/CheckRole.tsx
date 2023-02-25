import { Component, FC, PropsWithChildren } from "react"
import { TypeComponentAuthFields } from "./private.route.interface"
import { useRouter } from "next/router"
import { useAuth } from "../hooks/hooks"
import HomePage from "../components/screens/home/HomePage"

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    children,
    Component: { isOnlyUser, isOnlyAdmin, IsNotUser },
}) => {

    const { user, isLoading } = useAuth()
    const router = useRouter()
    let isUsed = false
    const Children = () => <>{children}</>
    const isUser = user && !user.isAdmin

    // if (!user && !isOnlyUser) {
    //     router.pathname !== '/auth/login' && router.replace("/auth/login")
    //     return null
    // }
    // else if (isUser && isOnlyUser) {
    //     return <Children />
    // }
    // else if (!user && IsNotUser) {
    //     router.pathname !== '/' && router.replace("/")
    // }

    // if (user?.isAdmin) {
    //     return <Children />
    // }

    // if (isOnlyAdmin) {
    //     router.pathname !== "/404" && router.replace("/404")
    //     return null
    // }

    // else {
    //     router.pathname !== '/' && router.replace("/")

    // }



    // if (!user && !isOnlyUser) {
    //     router.pathname !== '/auth/login' && router.replace("/auth/login")
    //     return null
    // }
    // else {
    //     return <Children />
    // }

    // if (isUser && isOnlyUser) {
    //     return <Children />
    // }
    // else if (isUser && isOnlyUser) {
    //     return router.pathname !== '/' && router.replace('/')
    // }
    // else {
    //     router.pathname !== '/auth/login' && router.replace("/auth/login")
    //     return null
    // }

    // if (user?.isAdmin) {
    //     return <Children />
    // }
    // if (isOnlyAdmin) {
    //     router.pathname !== "/404" && router.replace("/404")
    //     return null
    // }

    if (user && isOnlyUser && isUsed == false) {
        isUsed = true
        return <Children />
    }
    else if (user && isOnlyUser == false && isUsed == false) {
        router.replace('/')
    }
    else if (user?.isAdmin) return <Children />
    else {
        router.pathname !== '/auth/login' && router.replace("/auth/login")
        return <Children />
    }

    return null

}

export default CheckRole
