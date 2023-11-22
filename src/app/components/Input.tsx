"use client";
import { ChangeEvent, useState } from "react";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const InputWidth = (): string => {
    if (inputValue.length === 0) {
      return "10px";
    }
    const maxWidth = 200;
    const calculatedWidth = Math.min(inputValue.length * 12, maxWidth);

    return `${calculatedWidth}px`;
  };

  return (
    <div className="flex gap-2">
      <label className="text-green-0">{`"Name":`}</label>
      <div>
        <span className="text-light-0 ">{`"`}</span>
        <input
          style={{ width: InputWidth() }}
          onChange={handleChange}
          className={`bg-transparent outline-none text-light-0 transall max-w-[200px] `}
        />
        <span className="text-light-0 ">{`"`}</span>
      </div>
    </div>
  );
}
