import DetailDosen from "@/components/detaildosen/DetailDosen";
import dummyDosen from "@/data/dummyDosen"; // Anggap file dummy lu ditaruh sejajar di folder dev ini

export default function DetailDosenPreviewPage() {
  const dosen1 = dummyDosen[0]; // Pak Muhammad Isa Dadi Hasibuan
  const dosen2 = dummyDosen[1];  // Ibu Dr. Nur Aisyah

  return (
    <div className="w-full bg-zinc-100 min-h-screen py-12 px-4 space-y-16">
      
      <div className="mx-auto bg-white overflow-hidden border border-zinc-200">
        
        <DetailDosen member={dosen2} />
      </div>
      
    </div>
  );
}