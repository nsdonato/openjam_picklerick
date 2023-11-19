import { Home } from '@/components/Home';
import { SignedIn, auth, clerkClient } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';

export default async function Page() {
  // const { userId } = auth();

  // let user: User | null;
  // if (userId) {
  //   user = await clerkClient.users.getUser(userId);
  // }
  const myEvents = [
    {
      date: ['2018-01-01', '2018-01-02'],
      name: 'Open Source Jam',
      urls: [
        {
          type: 'Meetup',
          url: 'https://www.meetup.com/Meetup-Group/events/123456789/',
        },
        {
          type: 'Eventbrite',
          url: 'https://www.eventbrite.com/e/event-name-123456789',
        },
      ],
    },
  ];

  return (
    <SignedIn>
      <Home events={myEvents} title="Mis eventos" />
    </SignedIn>
  );
}
