interface EmploymentStatusBadgeProps {
  status: string;
}

function EmploymentStatusBadge({
  status,
}: EmploymentStatusBadgeProps) {
  const isActive = status.trim().toLowerCase() === "aktif";

  const badgeClass = isActive
    ? "border-[#CDEFD4] bg-[#EAF7EB] text-[#008D43]"
    : "border-[#F8D7DA] bg-[#FDECEC] text-[#DC3545]";

  return (
    <span
      className={`
        inline-flex
        w-fit
        items-center
        justify-center
        rounded-full
        border
        px-3
        py-1
        text-sm
        font-medium
        leading-none
        ${badgeClass}
      `}
    >
      {status}
    </span>
  );
}

export default EmploymentStatusBadge;