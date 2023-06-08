'use client';
import Card from "@/components/products/Card";
import PageLayout from "./pageLayout";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then(
        (res) => res.json(),
      )
  });

  let content;
  if (isLoading) content = <main className="p-12"><p className="text-center text-base font-bold">Loading...</p></main>
  if (!isLoading && error) content = <main className="p-12"><p className="text-center text-red-600 text-base font-bold">Can't fetch data, something went wrong!</p></main>
  if (!isLoading && !error && !data.length) content = <main className="p-12"><p className="text-center text-base font-bold">No available products</p></main>
  if (!isLoading && !error && data.length) content =
    <main className="grid gap-3 lg:gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 min-h-screen py-10 px-4">
      {
        data.map((productData) => <Card key={productData?.id} data={productData} />)
      }
    </main>

  return (
    <PageLayout>
      {content}
    </PageLayout>
  )
}
