import { Home } from '@/components/Home';
import { getConferences } from '@/lib/conferences';

export default async function Layout() {
  const events = await getConferences();

  return <Home events={events} />;
}
