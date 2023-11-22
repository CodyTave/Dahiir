"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import Input from "./Input";
export default function JsonForm() {
  function handleSubmit() {}
  return (
    <div className="flex flex-col gap-3">
      <div className=" bg-dark-3 rounded-md p-10">
        <span className="text-light-1">{"{"}</span>
        <div className="pl-7">
          <Input label="Name" name="name" />
          <Input label="PhoneNumber" name="phoneNumber" />
          <Input label="Email" name="email" />
          <Input long label="Message" name="message" />
        </div>
        <span className="text-light-1">{"}"}</span>
      </div>
      <Button
        onClick={handleSubmit}
        className="flex gap-3 justify-center items-center"
      >
        <span>Send</span>
        <PaperAirplaneIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
