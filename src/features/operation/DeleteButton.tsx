import { useDispatch } from 'react-redux'
import { deleteOperand } from './operationSlice'


function DeleteButton() {
    const dispatch = useDispatch()
  return (
    <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(deleteOperand())}>
      DEL
    </button>
  )
}

export default DeleteButton;
