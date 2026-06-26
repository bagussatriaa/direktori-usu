import ResultCard from "@/components/ResultCard";
import dummySearchResults from "@/data/dummySearchResults";

export default function SearchResultPage() {
  return (
    <main className="p-9">
      <div className="grid grid-cols-12 gap-6">
        {dummySearchResults.map((member) => (
          <div
            key={member.id}
            className="col-span-3"
          >
            <ResultCard member={member} />
          </div>
        ))}
      </div>
    </main>
  );
}