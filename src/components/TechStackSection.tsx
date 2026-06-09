"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    name: "Game Development",
    color: "var(--primary)",
    techs: [
      { name: "Unity", icon: "🎮" },
      { name: "Godot", icon: "🕹️" },
      { name: "C#", icon: "⚡" },
      { name: "Blender", icon: "🎨" },
    ],
  },
  {
    name: "Web Development",
    color: "var(--secondary)",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Node.js", icon: "🟢" },
    ],
  },
  {
    name: "Mobile & Cloud",
    color: "var(--accent)",
    techs: [
      { name: "React Native", icon: "📱" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    name: "Tools & Design",
    color: "#f59e0b",
    techs: [
      { name: "Figma", icon: "🖌️" },
      { name: "Git", icon: "🔀" },
      { name: "VS Code", icon: "💻" },
      { name: "Photoshop", icon: "🎭" },
    ],
  },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="relative section-padding">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-medium mb-4 block">Công nghệ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Tech Stack </span>
            <span className="bg-gradient-to-r from-amber-400 to-[var(--primary)] bg-clip-text text-transparent">của chúng tôi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Chúng tôi sử dụng những công nghệ hiện đại nhất để xây dựng sản phẩm chất lượng.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div key={category.name} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }} className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider" style={{ color: category.color }}>{category.name}</h3>
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.div key={tech.name} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 + techIndex * 0.05 }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 group cursor-default">
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
