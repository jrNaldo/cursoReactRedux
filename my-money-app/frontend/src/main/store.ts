import { configureStore, createSlice} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {value: 100}

const creditSlice = createSlice({
    name: 'credit',
    initialState,
    reducers: {
        addCredit: (state, {payload, type}) => {
            state.value += payload
        }
    }
})

const debtSlice = createSlice({
    name: 'debt',
    initialState,
    reducers: {
        addDebt: (state, {payload, type}) => {
            state.value += payload
        }
    }

})

export const {addCredit} = creditSlice.actions
export const {addDebt} = debtSlice.actions

export const store = configureStore({
    reducer: {
        credit: creditSlice.reducer,
        debt: debtSlice.reducer
    }
})

// type RootState = ReturnType<typeof store.dispatch>
// type Dispatch = typeof store.dispatch

// export const useAppDispatch = useDispatch.withTypes<Dispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()