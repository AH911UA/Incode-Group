import { createSlice } from '@reduxjs/toolkit'

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
})

export const { setStock } = stockSlice.actions

export default stockSlice.reducer