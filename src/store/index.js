import {configureStore} from "@reduxjs/toolkit"
import languageReducer from './languageStore/languageSlice'

export default configureStore({
    reducer:{
        language: languageReducer,
    }
})