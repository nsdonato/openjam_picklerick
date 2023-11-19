import SaveFavouriteButton from '@/components/SaveFavourite';
import { clerkClient, auth } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';

export const Events = async ({ title = 'Top eventos', events = [] }) => {
  const { userId } = auth();

  let user: User | null;
  if (userId) {
    user = await clerkClient.users.getUser(userId);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center align-middle">
      <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
        {title}
      </h1>
      <ul className="mt-20">
        {events.map((event, index) => (
          <li key={index} className="h-12 flex items-center">
            <span className="text-black mr-2">
              12-11-2020 | Software Crafter Barcelona
            </span>
            {user && (
              <SaveFavouriteButton
                userId={userId as string}
                eventId="123"
                email={user.emailAddresses[0].emailAddress}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
