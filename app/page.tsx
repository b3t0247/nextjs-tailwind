import { ModeToggle } from "@/components/theme-toggle";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-end pt-5 pr-5">
        <ModeToggle />
      </div>
    </>
  );
}
