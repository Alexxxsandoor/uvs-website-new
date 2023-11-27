import {createSlice} from '@reduxjs/toolkit'

const languageSlice = createSlice({
    name: 'language',
    initialState:{
        language: "eng"
    },
    reducers:{
        toggleLanguage(state, action){       
            state.language= action.payload
        }
    }
})

export const {toggleLanguage}= languageSlice.actions;

export default languageSlice.reducer