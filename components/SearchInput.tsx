import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  error?: string;
};

export default function SearchInput({
  value,
  onChange,
  onSearch,
  error,
}: SearchInputProps)  {
  return (
    <div
        className={`
            flex
            items-center
            justify-between
            w-full
            rounded-full
            bg-white
            px-5
            py-1
            shadow-md
            border
            gap-6
            ${
            error
                ? "border-red-700"
                : "border-transparent"
            }
        `}
        >
            
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        placeholder="Nama/NIP/NIDN/NIM"
        className="
          w-full
          outline-none
          placeholder:text-gray-500
          text-gray-900
        "
      />

      <Search
        size={18}
        onClick={onSearch}
        className="
        cursor-pointer
        text-gray-500
        "
      />
    </div>
  );
}