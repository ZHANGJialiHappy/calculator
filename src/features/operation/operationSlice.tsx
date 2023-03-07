import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store"

export type OperandState = {
    currentOperand: string, 
    previousOperand: string, 
    operation: string,
}
const initialState = {
    currentOperand: "", 
    previousOperand: "", 
    operation: "",
};

export const operationSlice = createSlice({
    name: 'operation',
    initialState,
    reducers: {
        add_digit: (state, action: PayloadAction<string>) => {
            state.currentOperand = `${state.currentOperand || ""}${action.payload}`
        }
        // choose_operation: 
    }

})

export const getOperand=(state: RootState) => state.operation; 
// operation ?
export const {add_digit} = operationSlice.actions
export default operationSlice.reducer