import React, { useState } from "react";

function UseStatePage() {
  const [count, setCount] = useState(0);

  const handleCount = (action) => {
    switch (action) {
      case "increase":
        setCount(count + 1);
        break;
      case "decrease":
        setCount(count - 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        console.log("Invalid Action");
    }
  };

  const Button = ({
    label,
    onClick,
    span = "",
    className = "",
    textColor = "",
  }) => {
    return (
      <button
        className={`col-span-${span} flex justify-center items-center text-${textColor} text-2xl ${className} p-2`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="flex justify-center items-center max-w-2xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Nút giảm */}
        <Button label="-" onClick={() => handleCount("decrease")} />

        {/* Hiển thị Count */}
        <h1 className="flex justify-center items-center font-semibold text-2xl">
          {count}
        </h1>
        {/* Nút tăng */}
        <Button label="+" onClick={() => handleCount("increase")} />
        {/* Nút Reset full 3 cột */}
        <Button
          className="col-span-3 text-sm border-2 rounded-full text-white bg-black"
          label="Reset"
          onClick={() => handleCount("reset")}
          span={3}
        />
      </div>
    </div>
  );
}

export default UseStatePage;
