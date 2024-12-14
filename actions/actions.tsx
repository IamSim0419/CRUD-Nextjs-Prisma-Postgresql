"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PostSchema } from "@/lib/schema";

//! CREATE
export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  // Create data
  await prisma.post.create({
    data: {
      title,
      description,
    },
  });

  // Revalidate the path
  revalidatePath("/posts");
  // redirect("/");
}

//! UPDATE
export async function updatePost(
  id: number,
  prevState: any,
  formData: FormData
) {
  const validatedFields = PostSchema.safeParse(
    // Get all formData form form (alternative)
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title: validatedFields.data.title,
        description: validatedFields.data.description,
      },
    });
  } catch (error) {
    return { message: "Failed to update" };
  }

  // Revalidate the path
  revalidatePath("/posts");
  redirect("/posts");
}

//! DELETE
export async function deletePost(id: number) {
  try {
      const deleteUser = await prisma.post.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return { message: "Failed to delete post"}
  }
  

  revalidatePath("/posts");
}
