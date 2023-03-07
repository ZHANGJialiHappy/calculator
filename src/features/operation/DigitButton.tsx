import { useDispatch } from 'react-redux'
import { add_digit } from './operationSlice'

type Props ={
    digit: string;
}

function DigitButton({digit}: Props) {
    const dispatch = useDispatch()
  return (
    <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus"
    onClick = {()=> dispatch(add_digit(digit))}>
      {digit}
    </button>
  )
}

export default DigitButton
