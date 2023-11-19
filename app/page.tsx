import { SignedIn, auth, clerkClient } from "@clerk/nextjs";
import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
import SaveFavouriteButton from "@/components/SaveFavourite";

export default async function Home() {
  const { userId } = auth();

  let user;
  if (userId) {
    user = await clerkClient.users.getUser(userId);
  }

  return (
    <main className="">
      <Header />
      <SignedIn>
        {user && (
          <SaveFavouriteButton
            userId={userId!}
            eventId="123"
            email={user.emailAddresses[0].emailAddress}
          />
        )}
      </SignedIn>
      <Newsletter />
    </main>
  );
}
