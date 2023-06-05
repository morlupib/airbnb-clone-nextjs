"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      width="100"
      height="100"
      alt="Logo"
    />
  );
}
