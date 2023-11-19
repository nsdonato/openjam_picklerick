import SaveFavouriteButton from '@/components/SaveFavourite';
import { clerkClient, auth } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { Events } from '@/components/types/home.types';
import { DiamondIcon } from '@/components/icons/DiamondIcon';

type HomeProps = {
  title?: string;
  events?: Events[];
};

export const Home = async ({
  title = 'Top eventos',
  events = [],
}: HomeProps) => {
  const { userId } = auth();

  let user: User | null;
  if (userId) {
    user = await clerkClient.users.getUser(userId);
  }

  console.log(events[0].date.length);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center align-middle">
      <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
        {title}
      </h1>
      <ul className="mt-20">
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="h-12 flex mb-4">
              <div className="flex justify-between items-center">
                <span className="text-black mx-2 grow">{event.name}</span>
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current mr-2" />
                <span className="mr-2">
                  {Array.isArray(event.date)
                    ? Array.from(event.date).join(' y ')
                    : event.date}
                </span>
              </div>
              {user && (
                <SaveFavouriteButton
                  userId={userId as string}
                  eventId="123"
                  email={user.emailAddresses[0].emailAddress}
                />
              )}
            </li>
          ))
        ) : (
          <li className="h-12 flex items-center">
            <span className="text-black mr-2">No se registraron eventos</span>
          </li>
        )}
      </ul>
    </div>
  );
};
