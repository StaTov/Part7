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
        },
        noteInfo: (state, action) => {
            state.text = action.payload
            state.style = 'info'
        }
    }
})
export const {noteSuccess, noteUnsuccess, noteInfo} = noteSlice.actions

export const showNote = text => {
    return async dispatch => {
        dispatch(noteSuccess(text))
        setTimeout(() => {
            dispatch(noteSuccess(null))
        }, 4000)
    }
}
export const showInfo = text => {
    return async dispatch => {
        dispatch(noteInfo(text))
        setTimeout(() => {
            dispatch(noteInfo(null))
        }, 4000)
    }
}
export const showError = text => {
    return async dispatch => {
        dispatch(noteUnsuccess(text))
        setTimeout(() => {
            dispatch(noteUnsuccess(null))
        }, 4000)
    }
}
export default noteSlice.reducer