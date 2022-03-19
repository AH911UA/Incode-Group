import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ws from '../../ws';

export const asyncStock = createAsyncThunk(
    'stock/asyncStock',
    async (data) => data
)

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        data: [{
            ticker: "",
            exchange: "",
            price: null,
            change: null,
            change_percent: null,
            dividend: null,
            yield: null,
            last_trade_time: null
        }]
    },
    reducers: {
        setStock: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: {
        [asyncStock.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setStock } = stockSlice.actions

export default stockSlice.reducer