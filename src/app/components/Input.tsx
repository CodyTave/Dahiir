"use client";
import { ChangeEvent, useRef, useState } from "react";
import { InputWidth } from "../Utils/functions";

export default function Input({
  label,
  onChange,
  value,
  long,
}: {
  label: string;
  long?: boolean;
  value: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event);
  };
  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div onClick={focus} className="flex flex-wrap gap-2">
      <label className="text-green-0 select-none">{`"${label}"` + ": "}</label>
      <div>
        <span className="text-light-0 select-none  ">{`"`}</span>
        <input
          value={value}
          ref={inputRef}
          name={label}
          style={{ width: InputWidth(value, long) }}
          onChange={handleChange}
          className={`bg-transparent outline-none text-light-0 transall xs:max-w-[350px] max-w-[100px] `}
        />
        <span className="text-light-0  select-none">{`"`}</span>
      </div>
    </div>
  );
}
