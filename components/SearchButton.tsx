type SearchButtonProps = {
  onClick: () => void;
};

export default function SearchButton({
  onClick,
}: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        cursor-pointer
        w-full
        rounded-full
        bg-[#15422D]
        px-6
        py-3
        text-white
        font-medium
        shadow-md
        hover:bg-[#3d7d41]
        transition-colors
      "
    >
      Cari
    </button>
  );
}