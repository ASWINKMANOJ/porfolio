import Main from "@/components/MainContent";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-evenly">
      <NavBar />
      <Main />
    </div>
  );
}
