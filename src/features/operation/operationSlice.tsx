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
            if(action.payload === "0" && state.currentOperand === "0") return state;
            if(action.payload === "." && state.currentOperand.includes(".")) return state;
            state.currentOperand = `${state.currentOperand || ""}${action.payload}`
        },
        choose_operation: (state, action: PayloadAction<string>)=>{
            if (state.currentOperand == "" && state.previousOperand == "") return state;
            if (state.previousOperand == "") {
                state.operation = action.payload;
                state.previousOperand = state.currentOperand;
                state.currentOperand = "" ;
            }
        },
        clear: (state) => {
            state.currentOperand = "";
            state.operation = "";
            state.previousOperand = "";
        },
        // return{}
    }
})

export const getOperand=(state: RootState) => state.operation; 
export const {add_digit, clear, choose_operation} = operationSlice.actions;
export default operationSlice.reducer;