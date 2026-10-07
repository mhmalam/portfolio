import Link from "next/link";
import React from "react";

type LinkWithIconProps = {
  href: string;
  icon?: React.ReactNode;
  position: "left" | "right";
  text?: string;
  className?: string;
};

export default function LinkWithIcon({
  href,
  icon,
  position,
  text,
  className,
}: LinkWithIconProps) {
  return (
    <Link href={href} className={`link flex items-center gap-1.5 font-medium transition-colors ${className || ''}`}>
      {position === "left" && icon}
      <span>{text}</span>
      {position === "right" && icon}
    </Link>
  );
}
