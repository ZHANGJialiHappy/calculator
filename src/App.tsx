import './App.css';
import { useSelector } from 'react-redux';
import { getOperand } from './features/operation/operationSlice';
import DigitButton from './features/operation/DigitButton';
import ACButton from './features/operation/ACButton';
import OperationButton from './features/operation/OperationButton';
import EvaluateButton from './features/operation/EvaluateButton';
import DeleteButton from './features/operation/DeleteButton';

function App() {
  const operand = useSelector(getOperand)

  const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  })
  // new
  function formatOperand(operand: string) {
    if (operand === "") {
      return "";
    }
    const [integer, decimal] = operand.split("."); 
    if (decimal === undefined) {
      return `${INTEGER_FORMATTER.format(Number(integer))}`;
    }
    return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`;
  }


  return (
    <div className="grid grid-template">
      <div className="col-span-full bg-black bg-opacity-75 flex flex-col justify-around items-end p-3 break-all">
        <div className="text-white text-opacity-75">{formatOperand(operand.previousOperand)} {operand.operation}</div>
        <div className="text-white text-xl">{formatOperand(operand.currentOperand)}</div>
      </div>
      <ACButton />
      <DeleteButton />
      <OperationButton operation="÷" />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton operation="*" />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton operation="+" />
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton operation="-" />
      <DigitButton digit="." />
      <DigitButton digit="0" />
      <EvaluateButton />
    </div>
  );
}

export default App;
