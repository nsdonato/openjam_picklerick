import { Home } from '@/components/Home';

export default async function Layout() {
  const events = [
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
    {
      date: '2018-11-01',
      name: 'Pulpocon',
      urls: [
        {
          type: 'Pulpocon',
          url: 'https://www.meetup.com/Meetup-Group/events/123456789/',
        },
      ],
    },
  ];

  return <Home events={events} />;
}
