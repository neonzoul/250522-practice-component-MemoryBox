import { useState, useRef, useCallback } from "react";
import { Memory } from "@/components/features/memory";
import { nowISO } from "@/utils/datetime";

export default function useMemory() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const draftRef = useRef<HTMLInputElement>(null);

  const saveMemory = useCallback(() => {
    const content = draftRef.current?.value.trim();
    if (!content) return;

    setMemories((prev) => [
      ...prev,
      { id: crypto.randomUUID(), content, createdAt: nowISO() },
    ]);
    if (draftRef.current) draftRef.current.value = "";
  }, []);

  const clearAll = useCallback(() => setMemories([]), []);

  return { draftRef, memories, saveMemory, clearAll };
}
