import { Button } from "../ui/button";

export default function Home() {
    return (
        <section className="flex flex-col justify-center text-center gap-6">
            <h1 className="text-4xl font-bold">Learning shadcn</h1>
            <p className="text-2xl">Improving my styling with shadcn & themes</p>
            <div className="flex flex-row gap-2 justify-center">
            <Button variant={"secondary"}>Learn with me</Button>
            <Button>Learn for yourself</Button>
            </div>
        </section>
    );
}