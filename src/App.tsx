import './App.css';

function App() {
  return (
    <div className="grid grid-template">
      <div className="col-span-full bg-black bg-opacity-75 flex flex-col justify-around items-end p-3 break-all">
        <div className="text-white text-opacity-75"></div>
        <div className="text-white text-xl"></div>
      </div>
      <button className="col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus">AC</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">DEL</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">÷</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">1</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">2</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">3</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">*</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">4</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">5</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">6</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">+</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">7</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">8</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">9</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">-</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">.</button>
      <button className=" text-xl border border-white bg-white bg-opacity-50 hover-focus">0</button>
      <button className="col-span-2 text-xl border border-white bg-white bg-opacity-50 hover-focus">=</button>
    </div>
  );
}

export default App;
