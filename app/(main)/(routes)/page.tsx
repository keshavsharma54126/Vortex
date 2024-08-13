import { ModeToggle } from "@/app/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const state = true;

export default function Home() {
  return (
    <div>
      <p>this is a not protected route</p>
      <Button className={cn("bg-indigo-400", state && "bg-red-500")}>
        Hello
      </Button>
    </div>
  );
}
