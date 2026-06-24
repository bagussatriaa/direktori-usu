type ResultCardProps = {
  nama: string;
  kategori: string;
  fakultas: string;
};

export default function ResultCard({
  nama,
  kategori,
  fakultas,
}: ResultCardProps) {
  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-5
        shadow-md
      "
    >
      <h3
        className="
          text-lg
          font-semibold
          text-gray-900
        "
      >
        {nama}
      </h3>

      <p className="text-gray-600">
        {kategori}
      </p>

      <p className="text-gray-600">
        {fakultas}
      </p>
    </div>
  );
}