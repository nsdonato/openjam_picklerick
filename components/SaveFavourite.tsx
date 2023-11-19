"use client";
import { useTransition } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { saveFavourite } from "@/lib/favourites";

type SaveFavouriteButtonProps = {
  userId: string;
  eventId: string;
  email: string;
};

export default function SaveFavouriteButton({
  userId,
  eventId,
  email,
}: SaveFavouriteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() =>
        startTransition(() => saveFavourite({ userId, eventId, email }))
      }
    >
      <StarIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      {isPending ? "Saving..." : "Save"}
    </button>
  );
}
