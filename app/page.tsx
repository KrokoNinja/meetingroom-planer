import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-24">
      <Nav />
      <section className="flex flex-col justify-center text-center">
        <h1 className="text-4xl font-bold">Learning shadcn</h1>
        <p className="text-2xl">Improving my styling with shadcn & themes</p>
      </section>
      <div className="flex flex-row gap-2 justify-center">
        <Button variant={"secondary"}>Learn with me</Button>
        <Button>Learn for yourself</Button>
      </div>
    </main>
  );
}
