import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type ParamsType = {
  params: Promise<{ id: string }>;
};

export default async function ViewPage({ params }: ParamsType) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt((await params).id),
    },
  });

  if (!post) notFound();

  return (
    <main>
      <div className="my-20 px-7">
        <h1 className="text-4xl md:text-5xl md:w-2/3 mx-auto font-semibold m-7">
          {post.title}
        </h1>
        <p className="md:w-2/3 mx-auto">{post.description}</p>
      </div>
    </main>
  );
}
