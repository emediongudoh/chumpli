"use client";
import { trpc } from "@/trpc/client";
export function ClientGreeting() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Hello world!" });
  return <div>{data.greeting}</div>;
}
