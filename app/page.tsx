import NavBar from "@/components/NavBar";
import Image from "next/image";
import Dashboard from "@/components/DashboardContent";

export default function Home() {
  return (
    <>
      <NavBar />
      <Dashboard 
        title="Dosen"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        totcount={100}
        imageSrc="/logousu.png"
      />
      <Dashboard 
        title="Mahasiswa"
        description="Selamat datang di Direktori USU"
        totcount={100}
        imageSrc="/logousu.png"
      />
    </>
    
  );
}