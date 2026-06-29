import TendikDetailCard from "@/components/TendikDetailCard";
import dummyTendik from "@/data/dummyTendik";

export default function TendikDetailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <TendikDetailCard member={dummyTendik[0]} />
    </main>
  );
}