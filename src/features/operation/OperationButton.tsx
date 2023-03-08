import { useDispatch } from 'react-redux'
import { choose_operation } from './operationSlice'

type Props ={
    operation: string;
}

function OperationButton({operation}: Props) {
    const dispatch = useDispatch()
  return (
    <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(choose_operation(operation))}>
      {operation}
    </button>
  )
}

export default OperationButton;
