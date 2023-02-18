import dynamic from "next/dynamic"
import { FC, PropsWithChildren, useEffect } from "react"
import { useAuth } from "../hooks/hooks"
import { TypeComponentAuthFields } from "./private.route.interface"

const DynamicCheckRole = dynamic(() => import("./CheckRole"), {
    ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    Component: { isOnlyUser, IsNotUser },
    children,
}) => {
    const { user } = useAuth()
    // const { checkAuth } = useActions()

    // useEffect(() => {
    //     const accessToken = cookies.get("accessToken")
    //     if (accessToken) checkAuth()
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(() => {
    //   const refreshToken = cookies.get("refreshToken")
    // }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    return !isOnlyUser && IsNotUser ? (
        <>{children}</>
    ) : (
        <DynamicCheckRole Component={{ isOnlyUser, IsNotUser }}>{children}</DynamicCheckRole>
    )
}

export default AuthProvider