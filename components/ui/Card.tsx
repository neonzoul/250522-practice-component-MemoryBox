"use client";

import { ElementType } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export default function Card({
  as: Component = "div",
  className = "",
  ...rest
}: Props) {
  return <Component className={`border p-3 rounded ${className}`} {...rest} />;
}
