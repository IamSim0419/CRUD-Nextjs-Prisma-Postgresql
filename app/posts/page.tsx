import Link from "next/link";
import { Suspense } from "react";
import PostList from "@/app/components/PostList";
import { Button } from "@/components/ui/button";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  // Auth check
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <main>
      <div className="text-center pt-16 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

        <div className="space-x-2">
          <Button variant="ghost" className="bg-teal-500 hover:bg-teal-400">
            <Link
              href="/create-post"
              className="text-white"
            >
              Create a post
            </Link>
          </Button>

          <Button variant="outline">
            {user && <LogoutLink>Logout</LogoutLink>}
          </Button>
        </div>

        <Suspense fallback="Loading...">
          <PostList />
        </Suspense>
      </div>
    </main>
  );
}
