"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: User | null;
}

export default function UserMenu({ currentUser }: UserMenuProps) {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold cursor-pointer py-3 px-4 rounded-full hover:bg-neutral-100 transition"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl w-[40vw] md:w-3/4 bg-white overflow-hidden shadow-md right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  lebel="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  lebel="My Favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  lebel="My Reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  lebel="My Properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem lebel="Airbnb my home" onClick={rentModal.onOpen} />
                <MenuItem lebel="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem lebel="Login" onClick={loginModal.onOpen} />
                <MenuItem lebel="Sing up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
