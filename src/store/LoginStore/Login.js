import { createSlice } from "@reduxjs/toolkit"
const nameSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userId: '',
        userName: '',
        userPassword: ''
    },

    reducers:{
        setUserId(state, action){
            state.userId = action.payload;
        },
        setUserName(state, action){
            state.userName = action.payload
        },
        setUserPassword(state, action){
            state.userPassword = action.payload
        } 
    }
})

export const {setUserId, setUserName, setUserPassword } = nameSlice.actions;
export default nameSlice.reducer;