// Button — 1️⃣ reusable atom 2️⃣ supports primary|secondary variants 3️⃣ forwards native HTML button props
"use client";

export default function Button({
  children,
  variant = "primary",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const base = "px-3 py-1 rounded";
  const styles =
    variant === "secondary"
      ? "border border-gray-300"
      : "bg-blue-600 text-white";

  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  );
}
