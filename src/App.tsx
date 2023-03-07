import './App.css';
import { useSelector} from 'react-redux';
import { getOperand } from './features/operation/operationSlice';
import DigitButton from './features/operation/DigitButton';

function App() {
  const operand = useSelector(getOperand)


  return (
    <div className="grid grid-template">
      <div className="col-span-full bg-black bg-opacity-75 flex flex-col justify-around items-end p-3 break-all">
        <div className="text-white text-opacity-75">{operand.previousOperand} {operand.operation}</div>
        <div className="text-white text-xl">{operand.currentOperand}</div>
      </div>
      <button className="col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus">AC</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">DEL</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">÷</button>
      <DigitButton digit="1"/>
      <DigitButton digit="2"/>
      <DigitButton digit="3"/>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">*</button>
      <DigitButton digit="4"/>
      <DigitButton digit="5"/>
      <DigitButton digit="6"/>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">+</button>
      <DigitButton digit="7"/>
      <DigitButton digit="8"/>
      <DigitButton digit="9"/>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">-</button>
      <DigitButton digit="."/>
      <DigitButton digit="0"/>
      <button className="col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus">=</button>
    </div>
  );
}

export default App;
