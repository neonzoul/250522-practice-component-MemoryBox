// MemoryContainer — 1️⃣ holds memory state 2️⃣ handles save/clear logic 3️⃣ passes props to MemoryInput & MemoryList
"use client";

import { useState, useRef } from "react";
import { Memory } from "@/components/features/memory"; // import Memory type จาก memory index
import { MemoryInput, MemoryList } from "@/components/features/memory"; // import MemoryInput & MemoryList จาก memory index

export default function MemoryContainer() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const draftRef = useRef<HTMLInputElement>(null);

  const saveMemory = () => {
    const content = draftRef.current?.value.trim();
    if (!content) return;

    const createdAt = new Date()
      .toLocaleString("sv-SE", { hour12: false }) // yyyy-mm-dd HH:MM:SS
      .replace(" ", " : ");

    setMemories((prev) => [
      ...prev,
      { id: crypto.randomUUID(), content, createdAt },
    ]);
    if (draftRef.current) draftRef.current.value = "";
  };

  const clearAll = () => setMemories([]);

  return (
    <>
      <MemoryInput draftRef={draftRef} onSave={saveMemory} onClear={clearAll} />
      <MemoryList memories={memories} />
    </>
  );
}
