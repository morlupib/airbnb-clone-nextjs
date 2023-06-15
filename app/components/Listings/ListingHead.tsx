"use client";

import Image from "next/image";
import useCountries from "@/app/hooks/useCountries";
import { User } from "@prisma/client";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
}

export default function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region} - ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src={imageSrc}
          alt={title}
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
