import Image from "next/image";
import Logo from "./Components/Logo";
import Name from "./Components/Name";
import SearchBar from "./Components/SearchBar";
import Link from "next/link";
import DominantColor from "./Components/DetailViewComponents/DominantColor";

export default function Home() {
  return (
   <main className="flex flex-col w-full h-screen items-center justify-center space-y-[5rem] p-5">
    
    <div className="flex flex-col w-full justify-center items-center">
    <Logo />
     <Name />
     </div> 
     <SearchBar />
     <Link href={'/ListView'} >View All</Link>
   </main>
  );
}
