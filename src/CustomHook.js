import { useState } from "react";

function useInputChange(initialState) {
  const [inputs, setInputs] = useState(initialState);

  function handleInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  return {
    inputs,
    handleInput,
  };
}

export default useInputChange;
