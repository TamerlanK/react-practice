import { useState } from "react";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      <h1 style={{ display: isOpen ? "block" : "none" }}>Toggle Component</h1>
    </div>
  );
};

export default Toggle;
