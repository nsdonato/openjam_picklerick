import { Events } from '@/components/Events';
import { SignedIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignedIn>
      <Events title="Mis eventos" />
    </SignedIn>
  );
}
