import Home from "@/components/pages/Home";
import Nav from "@/components/ui/Nav";

export default function RootPage() {
  return (
    <main className="flex flex-col gap-12 px-12 py-6 md:px-24 lg:px-24 lg:py-12">
      <Home />
    </main>
  );
}
