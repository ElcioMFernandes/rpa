import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

interface WindowProps {
  children?: ReactNode;
}

export const Window = (props: WindowProps) => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <main className="flex flex-grow overflow-y-auto p-4 shadow-inner">
        <div className="w-full">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
};
