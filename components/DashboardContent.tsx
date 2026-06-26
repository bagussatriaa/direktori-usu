import {  Plus } from 'lucide-react';

interface DashboardContentProps {
    title: string;
    description: string;
    imageSrc: string;
    isReverse?: boolean;
};

export default function DashboardContent({ title, description, imageSrc, isReverse = false }: DashboardContentProps) {
    return (
    <div className=
    {`flex flex-col md:flex-row items-center gap-12 my-16 
    ${isReverse ? 'md:flex-row-reverse' : ''}`
    }>
      {/* Kolom Teks */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-[#007C38] mb-4">{title}</h2>
        <p className="text-black mb-6 text-justify">{description}</p>
        <a href="#">
          {/* box-shadow: 0px 1px 2px 0px rgba(40, 40, 40, 0.06);

box-shadow: 0px 1px 3px 0px rgba(40, 40, 40, 0.1); */}

        <div className="bg-white border-2 border-[#FEC500] p-4 rounded-3xl inline-block hover:bg-[#FEC500] hover:text-white transition-colors duration-300">
          <div className="flex gap-1 ">
              {/* <span className="font-bold text-xl text-black-500">{totCount}</span> */}
              <p className="mt-0.5 text-[#007C38]">Cari {title}</p>
          </div>
          <div className="flex pt-2">
                <img src="/dosen-konten.png" alt="Logo USU" className="w-6 h-6 rounded-full border-2 border-[#FEC500]"/>
                <img src="/dosen-konten2.png" alt="Logo USU" className="w-6 h-6 ml-2 rounded-full border-2 border-[#FEC500]"/>
                <img src="/dosen-konten3.png" alt="Logo USU" className="w-6 h-6 ml-2 rounded-full border-2 border-[#FEC500]"/>
                <div className="bg-[#007C38] ml-1 flex items-center justify-center rounded-full w-3 h-3">
                  <Plus className="w-6 h-6 text-white"/>
                </div>
          </div>
        </div>
        </a>
      </div>
      
      {/* Kolom Gambar */}
      <div className="md:w-1/2">
        <img src={imageSrc} alt={title}/>
      </div>
    </div>
  );
};