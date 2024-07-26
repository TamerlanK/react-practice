interface DecrementButtonProps {
  onClick: () => void;
}

const DecrementButton = ({ onClick }: DecrementButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-md bg-slate-900 text-white"
    >
      Decrement
    </button>
  );
};

export default DecrementButton;
