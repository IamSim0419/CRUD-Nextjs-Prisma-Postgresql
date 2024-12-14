import prisma from "@/lib/db";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  // Fetch data from the database
  const posts = await prisma.post.findMany();

  return (
    <main>
      <div className="my-20">
        <h1 className="text-center text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-t from-blue-500 to-teal-500 bg-clip-text text-transparent p-2">
          Blog
        </h1>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <Image
                    src="https://images.unsplash.com/photo-1726828531711-a5798ee28b08?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={post.title}
                    width={500}
                    height={500}
                    className="bg-cover w-full h-full lg:h-44 rounded-md"
                  />
                </CardHeader>

                <CardContent>
                  <CardTitle className="text-lg md:text-xl hover:underline hover:underline-offset-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-4">
                    {post.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  );
}
