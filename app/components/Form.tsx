"use client"

import { createPost } from "@/actions/actions";
import { useFormStatus } from "react-dom";

export default function Form() {
  const { pending } = useFormStatus();
  
  return (
    <section>
      <form
        action={createPost}
        className="flex flex-col max-w-7xl gap-2 my-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-3 h-10"
          required
        />
        <textarea
          name="description"
          placeholder="Content for new post"
          className="border rounded w-full px-3 py-2"
          rows={12}
          required
        />
        <div className="md:text-right">
           <button className="h-10 bg-teal-500 px-5 w-full rounded text-white md:w-fit hover:opacity-85">
            {pending ? "Loading..." : "Submit"}
        </button>
        </div>
       
      </form>
    </section>
  );
}
