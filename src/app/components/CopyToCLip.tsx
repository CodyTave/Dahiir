"use client";
import { useState } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
export default function CopyToCLip({ text }: { text: string }) {
  const [Copied, setCopied] = useState(false);
  const CopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button className="flex items-center gap-5" onClick={CopyToClipboard}>
      <AnimatePresence mode="wait">
        {Copied && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm flex items-center text-green-0"
          >
            Copied
          </motion.span>
        )}
      </AnimatePresence>
      <ClipboardDocumentIcon
        className={`h-5 w-5 transall ${
          Copied ? "text-green-0" : "text-dark-0"
        }`}
      />
    </button>
  );
}
