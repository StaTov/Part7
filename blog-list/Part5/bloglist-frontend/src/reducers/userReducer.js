import {createSlice} from "@reduxjs/toolkit";
import userService from "../services/users"

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUsers(state, action) {
            return action.payload
        }
    }
})

export const {setUsers} = userSlice.actions

export const initializeUser = () => async dispatch => {
    try {
        const result = await userService.getAll()
        dispatch(setUsers(result))
    } catch (err) {
        console.error(err.message)
    }
}
export default userSlice.reducer

