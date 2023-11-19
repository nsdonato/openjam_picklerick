import SaveFavouriteButton from '@/components/SaveFavourite'
import { clerkClient, auth } from '@clerk/nextjs'

export const Home = async () => {
  const { userId } = auth()

  let user
  if (userId) {
    user = await clerkClient.users.getUser(userId)
  }

  return (
    <>
      {user && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Top eventos
          </h1>
          <ul className="mt-20">
            <li className="h-12 flex align-baseline">
              <span className="text-black">
                12-11-2020 - Software Crafter Barcelona
              </span>
              <SaveFavouriteButton
                userId={userId!}
                eventId="123"
                email={user.emailAddresses[0].emailAddress}
              />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )}
    </>
  )
}
