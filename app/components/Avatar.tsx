"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      width={30}
      height={30}
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
    />
  );
}
