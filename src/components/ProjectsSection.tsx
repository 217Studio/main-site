"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Monitor, Smartphone, Clock } from "lucide-react";

const projects = [
  { title: "Dungeon Quest", type: "Game", description: "Game nhập vai hành động 2D với hệ thống chiến đấu phong phú, dungeon ngẫu nhiên và câu chuyện hấp dẫn.", tags: ["Unity", "C#", "2D RPG"], status: "Đang phát triển", icon: Gamepad2, gradient: "from-[var(--primary)] to-cyan-400", progress: 45 },
  { title: "TaskFlow Pro", type: "Phần mềm", description: "Ứng dụng quản lý dự án thông minh dành cho team nhỏ, với tính năng Kanban board, tracking và báo cáo.", tags: ["Next.js", "TypeScript", "PostgreSQL"], status: "Đang phát triển", icon: Monitor, gradient: "from-[var(--secondary)] to-purple-400", progress: 30 },
  { title: "Pixel Warriors", type: "Game", description: "Game đối kháng multiplayer với phong cách pixel art retro. Hỗ trợ online PvP và giải đấu.", tags: ["Godot", "GDScript", "Multiplayer"], status: "Lên kế hoạch", icon: Gamepad2, gradient: "from-[var(--accent)] to-emerald-400", progress: 10 },
  { title: "StudyBuddy", type: "Phần mềm", description: "Ứng dụng hỗ trợ học tập với AI, flashcard thông minh, lập lịch ôn tập và theo dõi tiến độ.", tags: ["React Native", "AI/ML", "Firebase"], status: "Lên kế hoạch", icon: Smartphone, gradient: "from-amber-400 to-orange-400", progress: 5 },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative section-padding noise-overlay">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-4 block">Dự án</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Sản phẩm </span>
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">sắp ra mắt</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Những dự án chúng tôi đang ấp ủ và phát triển. Mỗi sản phẩm đều được đầu tư kỹ lưỡng từ ý tưởng đến thực thi.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="group glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-2xl" style={{ backgroundImage: `linear-gradient(to bottom left, var(--primary), var(--secondary))` }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-500 font-medium">{project.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-gray-400 uppercase tracking-wider">{project.type}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-lg glass-light text-gray-400">{tag}</span>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Tiến độ</span>
                    <span className="text-[var(--primary)]">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${project.progress}%` } : {}} transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }} className={`h-full rounded-full bg-gradient-to-r ${project.gradient}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
