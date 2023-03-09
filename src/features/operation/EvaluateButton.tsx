import { useDispatch } from 'react-redux'
import { evaluateOprand } from './operationSlice'

function EvaluateButton() {
    const dispatch = useDispatch()
  return (
    <button className=" col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(evaluateOprand())}>
      =
    </button>
  )
}

export default EvaluateButton
