import { Button } from "@/components/ui/button";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import Link from "next/link";
import DeleteBtn from "@/app/components/DeleteBtn";

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <section className="overflow-x-clip">
      <Table className="my-12 mx-auto border">
        <TableCaption>List of your recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="text-left">{post.id}</TableCell>
              <TableCell className="text-left">{post.title}</TableCell>
              <TableCell className="text-left">
                <p className="line-clamp-6 lg:line-clamp-4">{post.description}</p>
              </TableCell>

              <TableCell className="align-middle">
                <div className="flex flex-col gap-2 md:flex-row">
                  <Button variant="default">
                    <Link href={`/posts/${post.id}`}>View</Link>
                  </Button>
                  <Button variant="outline">
                    <Link href={`/update/${post.id}`}>Edit</Link>
                  </Button>
                  
                  <DeleteBtn id={post.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
