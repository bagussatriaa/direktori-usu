import Dashboard from "@/components/DashboardContent";
import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <>
        <NavBar />

        <div className="flex flex-col items-center justify-center gap-4 my-8 mx-auto max-w-6xl">
           <Dashboard 
                title="Dosen"
                description="Dosen merupakan tenaga pendidik profesional yang berperan strategis dalam mendukung pelaksanaan Tri Dharma Perguruan Tinggi di Universitas Sumatera Utara, yaitu pendidikan, penelitian, dan pengabdian kepada masyarakat. Selain mengajar, dosen juga membimbing mahasiswa serta berkontribusi dalam pengembangan ilmu pengetahuan dan inovasi yang bermanfaat bagi masyarakat."
                totcount={13000}
                imageSrc="/dosen-dashboard.png"
            />
            <Dashboard 
                isReverse={true}
                title="Mahasiswa"
                description="Mahasiswa merupakan bagian penting dari sivitas akademika Universitas Sumatera Utara yang berperan aktif dalam kegiatan pendidikan, pengembangan ilmu pengetahuan, serta berbagai aktivitas akademik dan kemahasiswaan. Sebagai insan pembelajar, mahasiswa tidak hanya mengikuti proses perkuliahan, tetapi juga mengembangkan potensi, keterampilan, dan kontribusi positif di lingkungan kampus maupun masyarakat."
                totcount={100000}
                imageSrc="/mahasiswa-dashboard.png"
            />            
            <Dashboard 
                title="Tenaga Kependidikan"
                description="Tenaga Kependidikan merupakan unsur penting yang mendukung kelancaran penyelenggaraan pendidikan di Universitas Sumatera Utara melalui layanan administrasi, akademik, dan operasional. Perannya mencakup penyediaan dukungan layanan yang efektif dan terintegrasi guna menunjang aktivitas dosen, mahasiswa, dan seluruh kebutuhan institusi."
                totcount={10000}
                imageSrc="/tendik-dashboard.png"
            />            
        </div>
        </>
    );
}