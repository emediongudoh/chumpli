// Getting data in a client component
// "use client";

// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";

// export default function Home() {
//   const trpc = useTRPC();
//   const greeting = useQuery(trpc.hello.queryOptions({ text: 'world' }));
//   if (!greeting.data) return <div>Loading...</div>;
//   return <div>{greeting.data.greeting}</div>;
// }

// Getting data in a server component
// import { caller } from '@/trpc/server';
// export default async function Home() {
//   const greeting = await caller.hello({ text: "world" });
//   //    ^? { greeting: string }
//   return <div>{greeting.greeting}</div>;
// }

// Leveraging suspense
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: "world" }));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
