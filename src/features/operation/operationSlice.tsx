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
            if(action.payload === "0" && state.currentOperand === "0") return state
            if(action.payload === "." && state.currentOperand.includes(".")) return state
            state.currentOperand = `${state.currentOperand || ""}${action.payload}`
        },
        // choose_operation: 
        clear: (state) => {
            state.currentOperand = "";
            state.operation = "";
            state.previousOperand = "";
        }
        // return{}
    }
})

export const getOperand=(state: RootState) => state.operation; 
export const {add_digit, clear} = operationSlice.actions
export default operationSlice.reducer