import DetailMahasiswa from "@/components/DetailMahasiswa";
import dummyMahasiswa from "@/data/dummyMahasiswa";

export default function DetailMahasiswaPreviewPage() {
  const mahasiswa = dummyMahasiswa[0]; // Pak Muhammad Isa Dadi Hasibuan
  const mahasiswa2 = dummyMahasiswa[1];  // Ibu Dr. Nur Aisyah

  return (
    <div className="w-full bg-zinc-100 min-h-screen py-12 px-4 space-y-16">
      
      <div className="mx-auto overflow-hidden">
        
        <DetailMahasiswa member={mahasiswa} />
      </div>
      
    </div>
  );
}