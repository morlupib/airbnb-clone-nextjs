"use client";

interface MenuItemProps {
  onClick: () => void;
  lebel: string;
}

export default function MenuItem({ onClick, lebel }: MenuItemProps) {
  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      onClick={onClick}
    >
      {lebel}
    </div>
  );
}
