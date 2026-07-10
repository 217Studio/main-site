"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, ExternalLink, Globe, Loader2 } from "lucide-react";
import type { Member } from "@/lib/types";

// Gradient palette cho các thành viên
const MEMBER_GRADIENTS = [
  "from-[var(--primary)] to-cyan-400",
  "from-[var(--secondary)] to-purple-400",
  "from-[var(--accent)] to-emerald-400",
  "from-amber-400 to-orange-400",
  "from-rose-400 to-pink-500",
  "from-teal-400 to-cyan-400",
  "from-indigo-400 to-blue-500",
  "from-lime-400 to-green-500",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

// Skeleton loading card
function MemberSkeleton() {
  return (
    <div className="glass rounded-2xl p-8 animate-pulse">
      <div className="w-16 h-16 rounded-2xl bg-white/10 mb-6" />
      <div className="h-5 w-32 bg-white/10 rounded mb-2" />
      <div className="h-4 w-24 bg-white/5 rounded mb-4" />
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full bg-white/5 rounded" />
        <div className="h-3 w-3/4 bg-white/5 rounded" />
      </div>
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/5" />
        <div className="w-9 h-9 rounded-lg bg-white/5" />
      </div>
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL || "https://api.217studio.id.vn/api";

    fetch(`${API_BASE_URL}/users`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setMembers(json.data.filter((m: Member) => m.is_active));
        }
      })
      .catch((err) => console.error("Error fetching members:", err))
      .finally(() => setLoading(false));
  }, []);

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

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <MemberSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && members.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Loader2 size={32} className="text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">Đang cập nhật thông tin đội ngũ...</p>
          </motion.div>
        )}

        {/* Members grid */}
        {!loading && members.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => {
              const gradient = MEMBER_GRADIENTS[index % MEMBER_GRADIENTS.length];
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group relative glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.03), rgba(124,58,237,0.03))" }} />
                  <div className="relative z-10">
                    {/* Avatar */}
                    {member.avatar_url ? (
                      <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ring-2 ring-white/10">
                        <img
                          src={member.avatar_url}
                          alt={member.full_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 text-white font-bold text-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {getInitials(member.full_name)}
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-1">{member.full_name}</h3>
                    <p className="text-sm text-[var(--primary)] font-medium mb-4">{member.team_role}</p>
                    {member.bio && (
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">{member.bio}</p>
                    )}
                    <div className="flex gap-3">
                      {member.github_url && (
                        <a
                          href={member.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-gray-500 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-300"
                        >
                          <Code size={16} />
                        </a>
                      )}
                      {member.linkedin_url && (
                        <a
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-gray-500 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
