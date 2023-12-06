"use client";
import { ArrowPathIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { postContact } from "../services/api";
import JsonBlock from "./JsonBlock";
export default function JsonForm() {
  const [form, setForm] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    Message: "",
  });
  const [serverResp, setResp] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  async function handleSubmit() {
    setLoading(true);
    try {
      const resp = await postContact(form);
      setResp(resp);
      setLoading(false);
      if (!resp.error) {
        setForm({
          Name: "",
          PhoneNumber: "",
          Email: "",
          Message: "",
        });
      }
    } catch (err: any) {
      setResp(err);
      setLoading(false);
      console.error(err);
    }
  }
  function handleReset() {
    setResp("");
  }
  return (
    <div className="flex flex-col gap-3 overflow-x-auto">
      {serverResp === "" ? (
        <div className=" bg-dark-3 rounded-md sm:p-10 p-5 min-w-[200px] overflow-auto">
          <span className="text-light-1 select-none">{"{"}</span>
          <div className="sm:pl-7 pl-4">
            <Input value={form.Name} onChange={handleChange} label="Name" />
            <Input
              value={form.PhoneNumber}
              onChange={handleChange}
              label="PhoneNumber"
            />
            <Input value={form.Email} onChange={handleChange} label="Email" />
            <Input
              value={form.Message}
              onChange={handleChange}
              long
              label="Message"
            />
          </div>
          <span className="text-light-1 select-none">{"}"}</span>
        </div>
      ) : (
        <JsonBlock wrap code={JSON.stringify(serverResp, null, 5)} />
      )}
      {serverResp === "" ? (
        <Button
          onClick={handleSubmit}
          className="flex gap-3 justify-center items-center"
        >
          <span className="flex transall">
            Send
            <AnimatePresence mode="wait">
              {loading && (
                <motion.span
                  className="overflow-hidden block"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 1 }}
                >
                  ing...
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          <PaperAirplaneIcon className="w-5 h-5" />
        </Button>
      ) : (
        <Button
          onClick={handleReset}
          className="flex gap-3 justify-center items-center"
        >
          <span>Reset</span>
          <ArrowPathIcon className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
