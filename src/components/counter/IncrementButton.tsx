interface IncrementButtonProps {
  onClick: () => void;
}

const IncrementButton = ({ onClick }: IncrementButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-md bg-slate-900 text-white"
    >
      Increment
    </button>
  );
};

export default IncrementButton;
