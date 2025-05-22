// Input — 1️⃣ basic text input atom 2️⃣ forwards props & ref 3️⃣ simple styling
"use client";

import { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input(props, ref) {
  return (
    <input ref={ref} className="border rounded px-3 py-2 flex-1" {...props} />
  );
});

export default Input;
