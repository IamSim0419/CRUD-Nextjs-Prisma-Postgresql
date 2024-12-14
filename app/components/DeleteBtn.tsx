"use client"

import { deletePost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

type DeleteBtnType = { id: number }

export default function DeleteBtn({ id }: DeleteBtnType) {
  const deletePostWithId = deletePost.bind(null, id);
  const [state, formAction] = useActionState(deletePostWithId, null);

  return (
    <div>
      <form action={formAction}>
        <Button variant="destructive">Delete</Button>
        {state?.message}
      </form>
    </div>
  );
}
