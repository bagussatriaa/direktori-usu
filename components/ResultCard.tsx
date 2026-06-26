import type { DirectoryMember } from "@/types/directory.types";

interface ResultCardProps {
  member: DirectoryMember;
}

function ResultCard({ member }: ResultCardProps) {
  const isStudent = "nim" in member;

  const name = isStudent
    ? member.name
    : member.full_name;

  const identifier = isStudent
    ? member.nim
    : member.nip;

  const badge = isStudent
    ? member.faculty_name
    : member.work_unit_name;

  return (
    <article
      className="
        flex
        h-full
        w-full
        flex-col
        gap-4
        overflow-hidden
        rounded-3xl
        border-2
        border-[#f0f0f0]
        bg-white
        p-4
        shadow-[0px_2px_4px_-2px_rgba(40,40,40,0.06),0px_4px_8px_-2px_rgba(40,40,40,0.10)]
        transition-shadow
        hover:shadow-md
      "
    >
      <img
        src={member.photo}
        alt={name}
        className="
          h-77
          w-full
          rounded-2xl
          border-2
          border-[#f0f0f0]
          object-cover
        "
      />

      <div className="flex flex-col gap-2 px-4 pb-2">
        <div className="flex flex-col">
          <h3
            className="
              line-clamp-2
              text-lg
              font-medium
              leading-6
              text-zinc-800
            "
          >
            {name}
          </h3>

          <p
            className="
              text-sm
              leading-5
              text-zinc-500
            "
          >
            {identifier}
          </p>
        </div>

        <div
          className="
            inline-flex
            w-fit
            items-center
            rounded-full
            border-2
            border-[#008D19]
            opacity-70
            px-2
            py-0.5
          "
        >
          <span
            className="
              max-w-55
              truncate
              text-xs
              leading-4
              text-[#008D19]
            "
            title={badge}
          >
            {badge}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ResultCard;