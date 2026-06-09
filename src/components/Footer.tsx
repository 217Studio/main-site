"use client";

import { Code, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center font-bold text-white text-xs">
              217
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Studio
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#home" className="hover:text-[var(--primary)] transition-colors">Trang chủ</a>
            <a href="#about" className="hover:text-[var(--primary)] transition-colors">Giới thiệu</a>
            <a href="#team" className="hover:text-[var(--primary)] transition-colors">Thành viên</a>
            <a href="#projects" className="hover:text-[var(--primary)] transition-colors">Dự án</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-gray-500 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-300">
              <Code size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} 217 Studio. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500" /> by 217 Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
