import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Code, ExternalLink, Globe, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchProjectById } from "@/lib/api";

// Gradient palette mặc định
const GRADIENTS = [
  "from-[var(--primary)] to-cyan-400",
  "from-[var(--secondary)] to-purple-400",
  "from-[var(--accent)] to-emerald-400",
  "from-amber-400 to-orange-400",
];

function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    ongoing: "Đang phát triển",
    completed: "Đã hoàn thành",
    archived: "Lưu trữ",
    planning: "Lên kế hoạch",
  };
  return map[status] || status;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = await fetchProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const gradient = GRADIENTS[0];

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex-grow-0 flex-shrink-0">
        {project.thumbnail_url ? (
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${project.thumbnail_url})` }}
          />
        ) : (
          <div className={`absolute inset-0 z-0 bg-gradient-to-br ${gradient} opacity-20`} />
        )}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-[var(--background)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Quay lại dự án
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-black/50`}>
              <Code size={32} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{getStatusLabel(project.status)}</span>
              </div>
              <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/10 text-white uppercase tracking-wider backdrop-blur-md border border-white/10">
                {project.status}
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {project.title}
          </h1>
          
          {project.short_description && (
            <p className="text-xl text-gray-300 max-w-3xl mb-6">{project.short_description}</p>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Globe size={18} />
                Xem Demo
              </a>
            )}
            {project.repo_url && (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Code size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {project.content && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Tổng quan dự án</h2>
                <div
                  className="text-gray-300 text-lg leading-relaxed prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </section>
            )}

            {/* Team Members */}
            {project.members && project.members.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <Users size={28} className="text-[var(--primary)]" />
                  Thành viên dự án
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.members.map((member, idx) => {
                    const memberGradient = GRADIENTS[idx % GRADIENTS.length];
                    return (
                      <div key={member.member_id} className="glass p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
                        {member.avatar_url ? (
                          <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/10 shrink-0">
                            <img src={member.avatar_url} alt={member.full_name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${memberGradient} flex items-center justify-center shrink-0 text-white font-bold text-sm`}>
                            {member.full_name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <h4 className="text-white font-semibold">{member.full_name}</h4>
                          <p className="text-sm text-[var(--primary)]">{member.project_role}</p>
                          {member.contribution_desc && (
                            <p className="text-xs text-gray-400 mt-1">{member.contribution_desc}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Thông tin chi tiết</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Tình trạng</span>
                  <span className="text-white font-medium">{getStatusLabel(project.status)}</span>
                </div>
                {project.launch_date && (
                  <div>
                    <span className="block text-gray-500 text-sm mb-1">Ngày ra mắt</span>
                    <span className="text-white font-medium">
                      {new Date(project.launch_date).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}
                {project.members && project.members.length > 0 && (
                  <div>
                    <span className="block text-gray-500 text-sm mb-1">Thành viên</span>
                    <span className="text-white font-medium">{project.members.length} người</span>
                  </div>
                )}
              </div>
              
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full mt-8 py-4 rounded-xl font-bold text-white text-center transition-all duration-300 bg-gradient-to-r ${gradient} hover:opacity-90 hover:scale-[1.02] shadow-lg`}
                >
                  Xem Demo trực tiếp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
