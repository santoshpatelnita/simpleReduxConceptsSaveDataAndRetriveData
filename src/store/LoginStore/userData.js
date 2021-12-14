import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'userData',
    initialState: {
        name:''
    },

    reducers:{
        setName(state, action){
            state.name = action.payload;
        },
    }
})

export const {setName} = userSlice.actions;

export default userSlice.reducer;