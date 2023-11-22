"use client";
import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react";
import { InputWidth } from "../Utils/functions";

export default function Input({
  name,
  label,
  onChange,
  long,
}: {
  name: string;
  label: string;
  long?: boolean;
  onChange?: (value: ChangeEventHandler<HTMLInputElement>) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div onClick={focus} className="flex gap-2">
      <label className="text-green-0">{`"${label}"` + ": "}</label>
      <div>
        <span className="text-light-0  ">{`"`}</span>
        <input
          ref={inputRef}
          name={name}
          style={{ width: InputWidth(inputValue, long) }}
          onChange={handleChange}
          className={`bg-transparent outline-none text-light-0 transall xs:max-w-[350px] max-w-[100px] `}
        />
        <span className="text-light-0 ">{`"`}</span>
      </div>
    </div>
  );
}
