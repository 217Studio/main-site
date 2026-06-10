"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [currentIndex]); // reset timer on manual change

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[currentIndex];

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
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            />
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
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-black/50`}>
                    <project.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{project.status}</span>
                    </div>
                    <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-white/10 text-white uppercase tracking-wider backdrop-blur-md border border-white/10">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  {project.title}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 text-sm rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

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
        <div className="absolute right-6 md:right-12 bottom-20 z-20 flex gap-4">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Bar & Indicators */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-8 flex gap-4">
            {projects.map((p, idx) => (
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
                    className={`absolute top-0 left-0 bottom-0 bg-gradient-to-r ${p.gradient}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
