// MemoryList — 1️⃣ receives memory array 2️⃣ renders list 3️⃣ stateless & side‑effect free

import { Memory } from "@/components/features/memory";
import { Card } from "@/components/ui";

export default function MemoryList({ memories }: { memories: Memory[] }) {
  if (!memories.length) return <p className="italic">No memories yet…</p>;

  return (
    <ul className="space-y-2">
      {memories.map((m) => (
        <Card as="li" key={m.id}>
          <p className="font-medium">{m.content}</p>
          <small className="text-xs text-gray-500">{m.createdAt}</small>
        </Card>
      ))}
    </ul>
  );
}
