import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex-grow-0 flex-shrink-0">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.backgroundImage})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-[var(--background)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Quay lại dự án
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-black/50`}>
              <project.icon size={32} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{project.status}</span>
              </div>
              <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/10 text-white uppercase tracking-wider backdrop-blur-md border border-white/10">
                {project.type}
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 text-sm rounded-xl glass-light border border-white/10 text-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Tổng quan dự án</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Tính năng nổi bật</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="glass p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
                    <CheckCircle2 className="text-[var(--primary)] shrink-0 mt-0.5" size={24} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Thông tin chi tiết</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Loại</span>
                  <span className="text-white font-medium">{project.type}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Tình trạng</span>
                  <span className="text-white font-medium">{project.status}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-2">Tiến độ</span>
                  <div className="flex items-center gap-4">
                    <div className="flex-grow h-2 rounded-full bg-white/5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${project.gradient}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-white font-bold">{project.progress}%</span>
                  </div>
                </div>
              </div>
              
              <button className={`w-full mt-8 py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${project.gradient} hover:opacity-90 hover:scale-[1.02] shadow-lg`}>
                {project.status === "Đang phát triển" ? "Đăng ký nhận tin" : "Xem lộ trình"}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
