import {  LecturerStaffMember } from "@/types/directory.types";
import { Download } from 'lucide-react';
import { ChevronRight  } from "lucide-react";
import DosenFilter from "./DosenFilter";

interface DetailDosenProps {
    member: LecturerStaffMember;
}

export default function DetailDosen({ member }: DetailDosenProps) {


  return (
    <div className="w-full flex flex-col items-center bg-gray-50">
      
      {/* Header Section */}
      <div className="w-full p-9 bg-white border-b border-gray-100 flex justify-center">
            <div className="w-full max-w-6xl p-6 bg-zinc-100 rounded-t-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start gap-1">
            
            <h1 className="leading-tight max-w-3xl">
                {member.front_degree && (
                <span className="block text-zinc-600 text-2xl md:text-lg font-medium mb-1">
                    {member.front_degree}
                </span>   
                )}
                
                <span className="block text-zinc-800 text-4xl md:text-2xl font-bold">
                {member.full_name}
                </span>
                
                {member.behind_degree && (
                <span className="block text-zinc-600 text-2xl md:text-lg font-medium mt-1">
                    {member.behind_degree}
                </span>
                )}
            </h1>

            </div>
      </div>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Sidebar section */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-300 p-6 space-y-6">
                    <div className="w-full h-72 rounded-lg overflow-hidden flex justify-center items-center">
                        <img src={member.photo} alt="detail dosen picture" className="w-full h-full" />
                    </div>
                    
                    <div className="space-y-0.5">
                    <p className="text-sm font-black">{member.front_degree} {member.full_name} {member.behind_degree}</p>
                    <p className="text-sm">{member.work_unit_name}</p>
                    </div>

                    <div className="space-y-0.5"> 
                        <p className="text-zinc-600 text-sm font-medium">NIP</p>
                        <p className=" text-sm font-medium">{member.nip}</p>
                    </div>

                    <div className="space-y-0.5">
                        <p className="text-zinc-600 text-sm font-medium">NIDN</p>
                        <p className="text-sm font-medium">{member.nidn}</p>
                    </div>

                    <div className="space-y-0.5 ">
                        <p className="text-zinc-600 text-sm font-medium">Program Studi</p>
                        <div className="flex bg-gray-200 rounded-full p-1 px-1.5 w-fit">
                            <p className="text-sm font-medium p-1">{member.study_program}</p>
                        </div>
                    </div>

                    <div className="space-y-0.5 ">
                        <p className="text-zinc-600 text-sm font-medium">Bidang Keilmuan</p>
                        <div className="flex flex-wrap gap-2">
                            {member.scientific_fields?.map((field, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 rounded-full px-3 py-1 w-fit"
                            >
                                <p className="text-sm font-medium">{field}</p>
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-0.5 ">
                        <p className="text-zinc-600 text-sm font-medium">Jabatan</p>
                        <div className="flex bg-gray-200 rounded-full p-1 px-1.5 w-fit">
                            <p className="text-sm font-medium p-1">{member.study_program}</p>
                        </div>
                    </div>

                    <div className="space-y-0.5 ">
                        <p className="text-zinc-600 text-sm font-medium">Media Penelitian</p>
                        <div className="flex flex-wrap gap-2">
                            {member.research_media?.map((media, index) => (
                            <div
                                key={index}
                                className=" py-1 w-fit"
                            >
                                <img src={media} alt={`media-${index}`} className="w-6 h-6" />   
                            </div>
                            ))}
                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-2xl border border-gray-300 p-6 space-y-6 mt-5">
                    
                    <div className="space-y-0.5"> 
                        <p className="text-zinc-600 text-sm font-medium">E-mail</p>
                        <p className=" text-sm font-medium">{member.email}</p>
                        <p className=" text-sm font-medium">{member.email_usu}</p>
                    </div>

                    <div className="space-y-0.5">
                        <p className="text-zinc-600 text-sm font-medium">Alamat Kantor</p>
                        <p className="text-sm font-medium">{member.address.street}</p>
                    </div>

                    <div className="space-y-0.5">
                        <p className="text-zinc-600 text-sm font-medium">Curiculum Vitae</p>
                        <a href="#" className="flex items-center gap-2 text-black-500 hover:text-grey">
                            <Download className="w-4 h-4" />
                        </a>
                    </div>
                                      

                </div>
            </div>
            
            {/* Content Section --  */}
            <div className="lg:col-span-2 ">
                <div className="bg-white rounded-2xl border border-gray-300 p-6 space-y-6">
                    
                    <div className="space-y-0.5">
                        <p className="text-sm font-bold">Profil</p>
                        <p className="text-sm">{member.profile}</p>
                    </div>
                    
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
                                <p className="text-black text-sm font-medium">{member.publications?.national?.[0]?.title || 'Tidak ada publikasi nasional'}</p>
                                <p className="text-black text-sm font-medium italic">{member.publications?.national?.[0]?.authors || 'Tidak ada penulis'}</p>
                            </div>

                            <div className="space-y-0.5">
                                <p className="text-zinc-600 text-sm font-medium">Publikasi Internasional</p>
                                <p className="text-black text-sm font-medium">{member.publications?.international?.[0]?.title || 'Tidak ada publikasi internasional'}</p>
                                <p className="text-black text-sm font-medium italic">{member.publications?.international?.[0]?.authors || 'Tidak ada penulis'}</p>
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

                    <div className="space-y-0.5">
                        <div className="flex justify-between items-center w-full">
                            <p className="text-sm font-bold">Mata Kuliah yang Diampu</p>
                            
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                {/* dropdown tahun ajaran  */} {/* dropdown semester  */}
                                {/* tabel daftar mata kuliah  */}
                                <div>
                                <DosenFilter courses={member.courses ? member.courses : []} />
                                </div>
                            </div>  
                        </div>
                    </div>

                </div>
            </div>        
        </div>    
    </div>
  );
}