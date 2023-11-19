import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center py-24 bg-indigo-50">
      <SignUp />
      <h1 className="text-black">Usuario</h1>
    </div>
  )
}
