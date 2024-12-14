import Link from "next/link";
import Form from "../components/Form";

export default function CreatePage() {
  return (
    <main>
         <div className=" pt-16 px-5">
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-5">Create post</h1>
           <div>
            <Form />
           </div>
        </div>
    </main>
  )
}
