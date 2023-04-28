import {createSlice} from "@reduxjs/toolkit";

const initialState = {text: null, style: false}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        noteSuccess: (state, action) => {
            state.text = action.payload
            state.style = 'success'
        },
        noteUnsuccess: (state, action) => {
            state.text = action.payload
            state.style = 'error'
        }
    }
})
export const {noteSuccess, noteUnsuccess} = noteSlice.actions

export default noteSlice.reducer