import { useDispatch } from 'react-redux'
import { clear } from './operationSlice'


function ACButton() {
    const dispatch = useDispatch()
  return (
    <button className="col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(clear())}>
      AC
    </button>
  )
}

export default ACButton;
