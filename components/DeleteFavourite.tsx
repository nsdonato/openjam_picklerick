'use client';
import { useTransition, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { saveFavourite } from '@/lib/favourites';

type DeleteFavouriteButtonProps = {
  userId: string;
  eventId: string;
  email: string;
};

export default function DeleteFavouriteButton({
  userId,
  eventId,
  email,
}: DeleteFavouriteButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [undo, setUndo] = useState(true);

  return (
    <button
      type="button"
      disabled={isPending}
      className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-indigo-600 disabled:hover:shadow-none disabled:focus-visible:ring-2 disabled:focus-visible:ring-offset-2 disabled:focus-visible:ring-indigo-600"
      onClick={() =>
        startTransition(async () => {
          await saveFavourite({ userId, eventId, email, undo });
          setUndo((prev) => !prev);
        })
      }
    >
      <StarIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      {isPending ? 'Undoing...' : 'Undo'}
    </button>
  );
}
