import {configureStore} from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notificationReducer";
import blogsReducer from "./reducers/blogsReducer";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";


export const store = configureStore({
    reducer: {
        message: notificationReducer,
        blogs: blogsReducer,
        login: loginReducer,
        user: userReducer
    }
})