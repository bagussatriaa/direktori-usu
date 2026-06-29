import type { LecturerStaffMember } from "@/types/directory.types";
import EmploymentStatusBadge from "./EmploymentStatusBadge";

interface TendikDetailCardProps {
  member: LecturerStaffMember;
}

function TendikDetailCard({
  member,
}: TendikDetailCardProps) {
  return (
    <article
      className="
        flex
        w-81
        flex-col
        overflow-hidden
        rounded-3xl
        border-2
        border-[#f0f0f0]
        bg-white
        p-4
        shadow-[0px_2px_4px_-2px_rgba(40,40,40,0.06),0px_4px_8px_-2px_rgba(40,40,40,0.10)]
      "
    >
      <img
        src={member.photo}
        alt={member.full_name}
        className="
          h-77
          w-full
          rounded-2xl
          border-2
          border-[#f0f0f0]
          object-cover
        "
      />

      <div
        className="
          mt-3
          grid
          grid-cols-[75px_1fr]
          gap-x-2
          gap-y-2
          px-2
        "
      >
        <span className="text-sm leading-5 text-zinc-800">
          Nama
        </span>
        <span className="text-sm leading-5 text-zinc-500">
          {member.full_name}
        </span>

        <span className="text-sm leading-5 text-zinc-800">
          NIP
        </span>
        <span className="text-sm leading-5 text-zinc-500">
          {member.nip}
        </span>

        <span className="text-sm leading-5 text-zinc-800">
          E-mail
        </span>
        <span className="text-sm leading-5 text-zinc-500">
          {member.email}
        </span>

        <span 
            className="
            text-sm 
            leading-5
            text-zinc-800
            "
        >
          Unit Kerja
        </span>

        <span
            className="
            text-sm 
            leading-5 
            w-full
            text-zinc-500
            "
        >
          {member.work_unit_name}
        </span>

        <span className="text-sm leading-5 text-zinc-800">
          Status
        </span>

        <EmploymentStatusBadge
        status={member.status}
        />
      </div>

      <div className="mt-1 flex justify-end">
        <button
          className="
            cursor-pointer
            rounded-2xl
            border
            border-[#C8E6C9]
            bg-[#008D43]
            px-4
            py-2
            text-white
            transition-colors
            hover:bg-[#00763A]
          "
        >
          Tutup
        </button>
      </div>
    </article>
  );
}

export default TendikDetailCard;