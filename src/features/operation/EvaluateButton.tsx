import { useDispatch } from 'react-redux'
import { evaluate_operand } from './operationSlice'

function EvaluateButton() {
    const dispatch = useDispatch()
  return (
    <button className=" col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(evaluate_operand())}>
      =
    </button>
  )
}

export default EvaluateButton
