import ResultCard from "@/components/ResultCard";
import dummyResultCard from "@/data/dummyResultCard";

export default function SearchResultPage() {
  return (
    <main>

      <div className="grid grid-cols-4 gap-6">

        {dummyResultCard.map((member) => (

          <ResultCard
            key={member.id}
            member={member}
          />

        ))}

      </div>

    </main>
  );
}