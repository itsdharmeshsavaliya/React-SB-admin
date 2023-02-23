import { createSlice } from "@reduxjs/toolkit";

const technology = createSlice({
    name:'technology',
    initialState: [{
        title:'',
        logo:''
    }],
    reducers: {
        getTechnologySlice: (state,action) => {
            state = action.payload
            return state
        }
    }
})
export const {setTechnologySlice} = technology.actions
export default technology.reducer