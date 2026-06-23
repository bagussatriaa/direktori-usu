interface DashboardContentProps {
    title: string;
    description: string;
    totcount: number;
    imageSrc: string;
    isReverse?: boolean;
};

export default function DashboardContent({ title, description, totcount, imageSrc, isReverse = false }: DashboardContentProps) {
    return (
    // md:flex-row-reverse bakal otomatis nukar posisi kiri-kanan berdasarkan props isReversed!
    <div className={`flex flex-col md:flex-row items-center gap-12 my-16 ${isReverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Kolom Teks */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-green-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6 text-justify">{description}</p>
        <div className="bg-green-50 p-4 rounded-xl inline-block">
          <span className="font-bold text-xl text-green-800">{totcount}</span> {title}
          <div className="flex pt-2">
                <img src="/logousu.png" alt="Logo USU" className="w-6 h-6 ml-2"/>
                <img src="/logousu.png" alt="Logo USU" className="w-6 h-6 ml-2"/>
                <img src="/logousu.png" alt="Logo USU" className="w-6 h-6 ml-2"/>
          </div>
        </div>
      </div>
      
      {/* Kolom Gambar */}
      <div className="md:w-1/2">
        <img src={imageSrc} alt={title}/>
      </div>
    </div>
  );
};