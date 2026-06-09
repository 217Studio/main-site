"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative section-padding noise-overlay">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-40" />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] font-medium mb-4 block">Liên hệ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Kết nối </span>
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">với chúng tôi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Bạn có ý tưởng hợp tác? Hãy liên hệ với chúng tôi!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-cyan-400 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Email</h4>
                <p className="text-sm text-gray-400">contact@217studio.dev</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-purple-400 flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Discord</h4>
                <p className="text-sm text-gray-400">discord.gg/217studio</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-emerald-400 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Địa điểm</h4>
                <p className="text-sm text-gray-400">Hà Nội, Việt Nam</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Họ tên</label>
                <input id="name" type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300" placeholder="Tên của bạn" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                <input id="email" type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300" placeholder="email@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Tin nhắn</label>
                <textarea id="message" rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300 resize-none" placeholder="Nội dung tin nhắn..." required />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:scale-[1.02]">
                {submitted ? "Đã gửi! ✓" : <><Send size={16} /> Gửi tin nhắn</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
