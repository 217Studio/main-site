"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, ExternalLink, Globe } from "lucide-react";

const teamMembers = [
  { name: "Thành viên 1", role: "Team Leader / Full-stack Developer", bio: "Đam mê xây dựng sản phẩm từ ý tưởng đến hiện thực. Chuyên về kiến trúc phần mềm và game design.", avatar: "TL", color: "from-[var(--primary)] to-cyan-400", socials: { github: "#", linkedin: "#" } },
  { name: "Thành viên 2", role: "Game Developer", bio: "Chuyên gia về Unity/Unreal Engine. Có kinh nghiệm phát triển gameplay mechanics và AI systems.", avatar: "GD", color: "from-[var(--secondary)] to-purple-400", socials: { github: "#", linkedin: "#" } },
  { name: "Thành viên 3", role: "Frontend Developer", bio: "Tạo ra giao diện đẹp mắt và trải nghiệm người dùng mượt mà. Chuyên React, Next.js và modern CSS.", avatar: "FE", color: "from-[var(--accent)] to-emerald-400", socials: { github: "#", linkedin: "#" } },
  { name: "Thành viên 4", role: "Backend Developer", bio: "Xây dựng hệ thống backend mạnh mẽ, scalable. Chuyên về API design, databases và cloud services.", avatar: "BE", color: "from-amber-400 to-orange-400", socials: { github: "#", linkedin: "#" } },
  { name: "Thành viên 5", role: "UI/UX Designer", bio: "Thiết kế trải nghiệm người dùng trực quan, đẹp mắt. Kết hợp nghệ thuật và công nghệ.", avatar: "UX", color: "from-rose-400 to-pink-500", socials: { github: "#", linkedin: "#" } },
  { name: "Thành viên 6", role: "DevOps / QA Engineer", bio: "Đảm bảo chất lượng sản phẩm và quy trình phát triển hiệu quả. CI/CD và testing automation.", avatar: "QA", color: "from-teal-400 to-cyan-400", socials: { github: "#", linkedin: "#" } },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative section-padding">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent opacity-40" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--secondary)] font-medium mb-4 block">Đội ngũ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Những con người </span>
            <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">tài năng</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Mỗi thành viên đều mang đến kỹ năng và góc nhìn độc đáo, cùng nhau tạo nên sức mạnh của 217 Studio.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="group relative glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.03), rgba(124,58,237,0.03))" }} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 text-white font-bold text-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-[var(--primary)] font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-3">
                  {member.socials.github && (
                    <a href={member.socials.github} className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-gray-500 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-300">
                      <Code size={16} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-gray-500 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-300">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a href="#" className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-gray-500 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-300">
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
