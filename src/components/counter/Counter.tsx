import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import IncrementByAmount from "./IncrementByAmount";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const onIncrement = () => setCount((count) => count + step);
  const onDecrement = () => setCount((count) => count - step);

  return (
    <div className="bg-slate-100 border p-2 rounded-md max-w-sm w-full mx-auto">
      <div className="flex justify-between">
        <IncrementButton onClick={onIncrement} />
        <p className="text-3xl font-semibold my-2">{count}</p>
        <DecrementButton onClick={onDecrement} />
      </div>
      <IncrementByAmount setStep={setStep} />
    </div>
  );
};

export default Counter;
