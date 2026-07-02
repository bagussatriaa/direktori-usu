import {  StudentMember } from "@/types/directory.types";
// import { Download } from 'lucide-react';
import { ChevronRight  } from "lucide-react";

interface DetailMahasiswaProps {
    member: StudentMember;
}

export default function DetailMahasiswa({ member }: DetailMahasiswaProps) {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-start">
        <div className="w-full max-w-6xl bg-red-100 rounded-3xl shadow-sm border border-gray-200 overflow-hidden p-6 flex flex-col gap-6">
        
            {/* Header Section */}
            <div className="w-full p-9 justify-center flex">
                    <div className="w-full bg-[#FEC500] rounded-2xl p-6 shadow-sm">
                    
                    <h1 className="leading-tight">
                    
                        
                        <span className="block text-zinc-800 text-4xl md:text-2xl font-bold">
                        {member.name}
                        </span>

                        <span className="block text-black text-2xl md:text-lg font-medium mt-1">
                            {member.faculty_name}
                        </span>
                    </h1>

                    </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Sidebar section */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-300 p-6 space-y-6">
                        <div className="w-full h-72 rounded-lg overflow-hidden flex justify-center items-center">
                            <img src={member.photo} alt="detail dosen picture" className="w-full h-full" />
                        </div>
                        
                        <div className="space-y-0.5">
                        <p className="text-sm font-black"> {member.name}</p>
                        <p className="text-sm">{member.major_name}</p>
                        </div>

                        <div className="space-y-0.5"> 
                            <p className="text-zinc-600 text-sm font-medium">NIM</p>
                            <p className=" text-sm font-medium">{member.nim}</p>
                        </div>

                        <div className="space-y-0.5 ">
                            <p className="text-zinc-600 text-sm font-medium">E-mail</p>
                                <p className="text-sm font-medium p-1">{member.email}</p>
                        </div>

                        <div className="space-y-0.5 ">
                            <p className="text-zinc-600 text-sm font-medium">Angkatan</p>
                                <p className="text-sm font-medium p-1">{member.entry_year}</p>
                        </div>

                        <div className="space-y-0.5 ">
                            <p className="text-zinc-600 text-sm font-medium">Semester Terdaftar</p>
                                <p className="text-sm font-medium p-1">{member.entry_year}</p>
                        </div>
                        <div className="space-y-0.5 ">
                            <p className="text-zinc-600 text-sm font-medium">Status</p>
                            <div className="flex bg-green-100 rounded-full p-1 px-1.5 w-fit">
                                <p className="text-sm font-medium p-1">{member.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Content Section --  */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl border border-gray-300 p-6 space-y-6">
                        
                        
                        
                        <div className="space-y-0.5">
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm font-bold">Publikasi</p>
                                <a href="" className="flex items-center hover:text-black">
                                    <p className="text-sm text-gray-600 hover:text-black">Publikasi lainnya</p>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
                                <div className="space-y-0.5">
                                    <p className="text-zinc-600 text-sm font-medium">Publikasi Nasional</p>
                                    {/* <p className="text-black text-sm font-medium">{member.publications?.national?.[0]?.title || 'Tidak ada publikasi nasional'}</p>
                                    <p className="text-black text-sm font-medium italic">{member.publications?.national?.[0]?.authors || 'Tidak ada penulis'}</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-0.5">
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm font-bold">Penelitian</p>
                                <a href="" className="flex items-center hover:text-black">
                                    <p className="text-sm text-gray-600 hover:text-black">Penelitian lainnya</p>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-6">
                                <div className="">
                                <p className="text-black text-sm font-bold">Judul</p>
                                <p className="text-zinc-600 text-xs font-medium italic pb-5">Penulis</p>
                                <p className="text-black text-sm font-bold">Judul</p>
                                <p className="text-zinc-600 text-sm font-medium italic mb-3">Penulis</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-0.5">
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm font-bold">Pengabdian Masyarakat</p>
                                <a href="" className="flex items-center hover:text-black">
                                    <p className="text-sm  text-gray-600 hover:text-black">Pengabdian lainnya</p>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
                                <p className="text-black text-sm font-bold">Judul</p>
                                <p className="text-zinc-600 text-sm font-medium italic">lokasi pengabdian - penulis - tahun pengabdian</p>
                            </div>
                        </div>

                        <div className="space-y-0.5">
                            <div className="flex justify-between items-center w-full">
                                <p className="text-sm font-bold">Hak Kekayaan Intelektual</p>
                                <a href="" className="flex items-center hover:text-black">
                                    <p className="text-sm text-gray-600 hover:text-black">Kekayaan Intelektual lainnya</p>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
                                <p className="text-black text-sm font-bold">hak kekayaan intelektual</p>
                                <p className="text-zinc-600 text-sm font-medium italic">penulis</p>
                            </div>
                        </div>
                    
                    </div>
                </div>        
            </div>   
        </div>
     
    </div>
  );
}