import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ws from '../../ws';

export const asyncStock = createAsyncThunk(
    'stock/asyncStock',
    async (data) => data
)

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        data: [],
        currTicker: ""
    },
    reducers: {
        setStock: (state, action) => {
            state.data.push(action.payload);
        },
        setCurrTicker: (state, action) => {
            state.currTicker = action.payload;
        }
    },
    extraReducers: {
        [asyncStock.fulfilled]: (state, action) => {
            state.data.push(action.payload);
        }
    }
})

export const { setStock, setCurrTicker } = stockSlice.actions

export default stockSlice.reducer