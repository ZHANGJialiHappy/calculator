import { useDispatch } from 'react-redux'
import { delete_digit } from './operationSlice'


function DeleteButton() {
    const dispatch = useDispatch()
  return (
    <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(delete_digit())}>
      DEL
    </button>
  )
}

export default DeleteButton;
