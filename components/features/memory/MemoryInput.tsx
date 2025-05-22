// MemoryInput — 1️⃣ displays input via ref 2️⃣ Save/Clear buttons trigger callbacks 3️⃣ stateless presentational component
"use client";

import { RefObject } from "react";
import { Button, Input } from "@/components/ui";

interface Props {
  draftRef: RefObject<HTMLInputElement>;
  onSave: () => void;
  onClear: () => void;
}

export default function MemoryInput({ draftRef, onSave, onClear }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      <Input ref={draftRef} placeholder="Type a memory…" />
      <Button onClick={onSave}>Save</Button>
      <Button variant="secondary" onClick={onClear}>
        Clear All
      </Button>
    </div>
  );
}
