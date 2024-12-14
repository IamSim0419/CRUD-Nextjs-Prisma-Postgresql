"use client";

import { updatePost } from "@/actions/actions";
import type { Post } from "@prisma/client";
import { useActionState } from "react";

type UpdateFormType = {
  post: Post;
};

export default function UpdateForm({ post }: UpdateFormType) {
  const updatePostWithId = updatePost.bind(null, post.id);
  const [state, formAction] = useActionState(updatePostWithId, null);

  return (
    <section>
      <div>
        <form
          action={formAction}
          className="flex flex-col max-w-7xl mx-auto gap-2 my-10"
        >
          <div>
            <label htmlFor="title" className="text-sm block">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Update title"
              className="border rounded px-3 h-10 w-full"
              defaultValue={post.title}
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-red-500 text-sm">{state?.Error?.title}</p>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="text-sm block">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Update your description"
              className="border rounded px-3 py-2 w-full"
              rows={12}
              defaultValue={post.description}
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-red-500 text-sm">{state?.Error?.description}</p>
            </div>
          </div>

          <button className="h-10 w-fit bg-primary px-5 rounded text-white hover:opacity-85">
              Update
          </button>
        </form>
      </div>
    </section>
  );
}
