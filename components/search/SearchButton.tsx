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
        bg-[#ffffff]
        px-5
        py-1
        text-black
        text-center
        font-medium
        shadow-md
        hover:bg-[#bdbdbd]
        hover:text-black
        hover:text-bold
        transition-colors
      "
    >
      Cari
    </button>
  );
}