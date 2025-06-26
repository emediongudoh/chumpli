import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="-mt-16 flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold">Superblog</h1>
      <ol className="list-inside list-decimal">
        {users.map(user => (
          <li
            key={user.id}
            className="mb-2"
          >
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
