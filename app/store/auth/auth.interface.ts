export interface AuthInterface {
    user: {
        id: number
        login: string
    } | null
    accessToken: string
}
