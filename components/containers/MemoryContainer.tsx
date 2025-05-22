//Container = glue code -> แค่ “ประกบ” hook → presentational เท่านั้น ไม่มี logic ปน
"use client";
import useMemory from "@/hooks/useMemory";
import { MemoryInput, MemoryList } from "@/components/features/memory";

export default function MemoryContainer() {
  const { draftRef, memories, saveMemory, clearAll } = useMemory();

  return (
    <>
      <MemoryInput draftRef={draftRef} onSave={saveMemory} onClear={clearAll} />
      <MemoryList memories={memories} />
    </>
  );
}
