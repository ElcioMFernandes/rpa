import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface FrameProps {
  children: React.ReactNode;
}

const Frame = (props: FrameProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-700">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full p-8">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Frame;
