import { SignedIn } from '@clerk/nextjs'
import { Header } from '@/components/Nav/Header'
import { Home } from '@/components/Home/Home'

export default async function Layout() {
  return (
    <main className="mx-auto bg-indigo-50">
      <Header />
      <SignedIn>
        <Home />
      </SignedIn>
    </main>
  )
}
