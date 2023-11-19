import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
// import { getSubscriptionByEmail } from "@/lib/subscripton";

export default async function Home() {
  // const subscription = await getSubscriptionByEmail(
  //   "EMAIL"
  // );

  return (
    <main className="">
      <Header />
      <Newsletter />
    </main>
  );
}
