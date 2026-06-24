import {  Plus } from 'lucide-react';

interface DashboardContentProps {
    title: string;
    description: string;
    totCount: string;
    imageSrc: string;
    isReverse?: boolean;
};

export default function DashboardContent({ title, description, totCount, imageSrc, isReverse = false }: DashboardContentProps) {
    return (
    <div className={`flex flex-col md:flex-row items-center gap-12 my-16 ${isReverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Kolom Teks */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-black-900 mb-4">{title}</h2>
        <p className="text-black mb-6 text-justify">{description}</p>
        <a href="#">
        <div className="bg-[#192123] p-4 rounded-3xl inline-block hover:bg-[#2c393d] hover:text-white transition-colors duration-300">
          <div className="flex gap-1">
              {/* <span className="font-bold text-xl text-black-500">{totCount}</span> */}
              <p className="mt-0.5 text-white">Cari {title}</p>
          </div>
          <div className="flex pt-2">
                <img src="/dosen-konten.png" alt="Logo USU" className="w-6 h-6"/>
                <img src="/dosen-konten2.png" alt="Logo USU" className="w-6 h-6 ml-2"/>
                <img src="/dosen-konten3.png" alt="Logo USU" className="w-6 h-6 ml-2"/>
                <div className="bg-white ml-1 flex items-center justify-center rounded-full w-3 h-3">
                  <Plus className="w-6 h-6"/>
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