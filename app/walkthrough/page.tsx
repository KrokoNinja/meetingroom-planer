import { Button } from "@/components/ui/button";

export default function Walkthrough() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <p className="text-2xl mb-4">This is the Walkthrough page.</p>
      <p className="text-xl mb-4 italic">
        This page is currently under construction.
      </p>
      <p className="mb-4">
        In the future there will be walkthroughs of basic functionality of the
        application here for the user to see how things are done.
      </p>
      <Button>Go back Home</Button>
    </div>
  );
}
