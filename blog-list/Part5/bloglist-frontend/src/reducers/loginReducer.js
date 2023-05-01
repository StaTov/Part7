import {createSlice} from "@reduxjs/toolkit";
import loginService from '../services/logins'
import blogService from "../services/blogs";
import {showError, showNote} from "./notificationReducer";


const userSlice = createSlice({
    name: 'login',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        },
        clearUser() {
            return null
        }

    }
})
export const {setUser, clearUser} = userSlice.actions
export const initializeUser = (signObj) => {
    return async dispatch => {
        try {
            const user = await loginService.login(signObj)

            window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
            blogService.setToken(user.token)

            dispatch(setUser(user))
            dispatch(showNote('login successful'))
        } catch (error) {
            console.error(error.message)
            dispatch(showError('wrong username or password'))
        }
    }
}
export default userSlice.reducer