// memory index — 1️⃣ exports Memory type 2️⃣ re‑exports MemoryInput & MemoryList
export type Memory = {
  id: string;
  content: string;
  createdAt: string;
};

export { default as MemoryInput } from "./MemoryInput";
export { default as MemoryList } from "./MemoryList";
