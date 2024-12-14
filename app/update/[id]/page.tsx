import UpdateForm from "@/app/components/UpdateForm";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type ParamsType = {
  params: Promise<{ id: string }>;
};

export default async function EditPage({ params }: ParamsType) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt((await params).id),
    },
  });

  if (!post) notFound();

  return (
    <main>
      <div className="my-20 px-7">
        <h1 className="text-xl md:text-2xl text-center font-semibold m-7">
          Update Post
        </h1>
        
        <UpdateForm post={post} />
      </div>
    </main>
  );
}
