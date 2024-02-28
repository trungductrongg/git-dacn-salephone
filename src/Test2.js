import React, { useState } from "react";

const Test2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Chọn một lựa chọn:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="">-- Chọn --</option>
        <option value="option1">Lựa chọn 1</option>
        <option value="option2">Lựa chọn 2</option>
        <option value="option3">Lựa chọn 3</option>
      </select>

      <p>Bạn đã chọn: {selectedOption}</p>
    </div>
  );
};

export default Test2;
