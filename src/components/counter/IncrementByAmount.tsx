interface IncrementByAmountProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const IncrementByAmount = ({ setStep }: IncrementByAmountProps) => {
  return (
    <input
      type="number"
      className="block mt-4 p-2 rounded-md border text-xl w-full"
      onChange={(e) => setStep(+e.target.value || 1)}
      min={1}
    />
  );
};

export default IncrementByAmount;
