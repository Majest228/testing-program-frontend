import { IAuthForm } from "@/app/components/screens/auth/login/login.interface"
import { AuthService } from "@/app/services/auth.service"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AuthInterface } from "./auth.interface"

export const login: any = createAsyncThunk<AuthInterface, IAuthForm>(
    "auth/login",
    async ({ login, password }, thunkAPI) => {
        try {
            const response = await AuthService.login(login, password)
            console.log("res true")
            return response.data
        } catch (e) {
            console.log("res false")
            return thunkAPI.rejectWithValue(e)

        }
    }
)