import { Home } from '@/components/Home';
import { getFavourites } from '@/lib/favourites';
import { SignedIn, auth, clerkClient } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';

export default async function Page() {
  const { userId } = auth();

  let user: User | null;
  if (userId) {
    user = await clerkClient.users.getUser(userId);
  }

  const myEvents = await getFavourites(userId as string);

  return (
    <SignedIn>
      <Home events={myEvents} title="Mis eventos" isDelete={true} />
    </SignedIn>
  );
}
