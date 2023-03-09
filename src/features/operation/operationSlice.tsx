import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store"

export type OperandState = {
    currentOperand: string,
    previousOperand: string,
    operation: string,
    overwrite: boolean,
}
const initialState = {
    currentOperand: "",
    previousOperand: "",
    operation: "",
    overwrite: false,
};

const evaluate = (operand: OperandState) => {
    const { currentOperand, previousOperand, operation } = operand;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return ""
    let computation:number | string = ""
    switch (operation) {
        case "÷":
            computation = prev / current
            break
        case "*":
            computation = prev * current
            break
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
    }
    return computation.toString()
};


export const operationSlice = createSlice({
    name: 'operation',
    initialState,
    reducers: {
        add_digit: (state, action: PayloadAction<string>) => {
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: action.payload,
                    overwrite: false,
                }
            }
            else if (action.payload === "0" && state.currentOperand === "0") {
                return state;
            } else if (action.payload === "." && state.currentOperand.includes(".")) {
                return state;
            } else {
                return {
                    ...state,
                    currentOperand: `${state.currentOperand || ""}${action.payload}`
                }
            }
        },
        choose_operation: (state, action: PayloadAction<string>) => {
            if (state.currentOperand === "" && state.previousOperand === "") {
                return state;
            } else if (state.currentOperand === "") {
                return {
                    ...state,
                    operation: action.payload
                };
            } else if (state.previousOperand === "") {
                return {
                    ...state,
                    operation: action.payload,
                    previousOperand: state.currentOperand,
                    currentOperand: "",                    
                };
            } 
            else {
                return{
                    ...state,
                    previousOperand: evaluate(state),
                    operation: action.payload,
                    currentOperand: "",
    
                };
            }
        },
        evaluate_operand: (state) => {
            if(state.operation === "" || state.operation === "" || state.previousOperand === "" ) {
                return state;
            } else {
                return {
                    ...state,
                    overwrite: true,
                    previousOperand: "",
                    operation: "",
                    currentOperand: evaluate(state),
                }
            }
        },
        clear: () => {
            return {...initialState};
        },
        delete_digit: (state) => {
            if(state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: "",
                }; 
            } else if (state.currentOperand === "") {
                return state;
            } else if (state.currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: "",
                }; 
            } else {
                return {
                    ...state,
                    currentOperand: state.currentOperand.slice(0,-1),
                }
            }
        }
    }
})

export const getOperand = (state: RootState) => state.operation;
export const { add_digit, choose_operation, evaluate_operand, delete_digit, clear } = operationSlice.actions;
export default operationSlice.reducer;