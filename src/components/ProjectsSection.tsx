"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, ChevronLeft, ChevronRight, Loader2, FolderOpen } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { Project } from "@/lib/types";

// Gradient palette mặc định cho các dự án
const PROJECT_GRADIENTS = [
  "from-[var(--primary)] to-cyan-400",
  "from-[var(--secondary)] to-purple-400",
  "from-[var(--accent)] to-emerald-400",
  "from-amber-400 to-orange-400",
  "from-rose-400 to-pink-500",
  "from-teal-400 to-cyan-400",
];

// Map status từ DB sang tiếng Việt
function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    ongoing: "Đang phát triển",
    completed: "Đã hoàn thành",
    archived: "Lưu trữ",
    planning: "Lên kế hoạch",
  };
  return map[status] || status;
}

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL || "https://api.217studio.id.vn/api";

    fetch(`${API_BASE_URL}/projects`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data.length > 0) {
          setProjects(json.data);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  // Auto-slide timer
  useEffect(() => {
    if (projects.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, projects.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="relative flex flex-col bg-black min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 size={48} className="text-[var(--primary)] animate-spin mx-auto mb-6" />
          <p className="text-gray-400 text-lg">Đang tải dự án...</p>
        </motion.div>
      </section>
    );
  }

  // Empty state
  if (projects.length === 0) {
    return (
      <section id="projects" className="relative flex flex-col bg-black min-h-[60vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
            <FolderOpen size={40} className="text-gray-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Chưa có dự án nào</h3>
          <p className="text-gray-400 max-w-md mx-auto">Các dự án sẽ sớm được cập nhật tại đây. Hãy quay lại sau!</p>
        </motion.div>
      </section>
    );
  }

  const project = projects[currentIndex];
  const gradient = PROJECT_GRADIENTS[currentIndex % PROJECT_GRADIENTS.length];

  return (
    <section id="projects" className="relative flex flex-col bg-black min-h-screen">
      {/* Title Area */}
      <div className="absolute top-0 left-0 right-0 py-20 relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-4 block drop-shadow-md">Dự án</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Sản phẩm </span>
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">nổi bật</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex-grow flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Background Image */}
            {project.thumbnail_url ? (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${project.thumbnail_url})` }}
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
            )}
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-black/50`}>
                    <FolderOpen size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{getStatusLabel(project.status)}</span>
                    </div>
                    <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-white/10 text-white uppercase tracking-wider backdrop-blur-md border border-white/10">
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
                  {project.short_description || "Chưa có mô tả"}
                </p>

                {/* Members badges */}
                {project.members && project.members.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.members.map((m) => (
                      <span key={m.member_id} className="px-4 py-2 text-sm rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-gray-200">
                        {m.full_name} — {m.project_role}
                      </span>
                    ))}
                  </div>
                )}

                <Link href={`/projects/${project.id}`}>
                  <button className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:scale-105">
                    Xem chi tiết
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        {projects.length > 1 && (
          <div className="absolute right-6 md:right-12 bottom-20 z-20 flex gap-4">
            <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110">
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Progress Bar & Indicators */}
        {projects.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-8 flex gap-4">
              {projects.map((p, idx) => {
                const g = PROJECT_GRADIENTS[idx % PROJECT_GRADIENTS.length];
                return (
                  <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex-1 h-1.5 rounded-full overflow-hidden relative ${idx === currentIndex ? "bg-white/20" : "bg-white/5 hover:bg-white/10"} transition-colors`}
                  >
                    {idx === currentIndex && (
                      <motion.div
                        key={`progress-${currentIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 10, ease: "linear" }}
                        className={`absolute top-0 left-0 bottom-0 bg-gradient-to-r ${g}`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
