"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Target, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Rocket, title: "Đổi mới sáng tạo", description: "Luôn tìm kiếm ý tưởng mới, áp dụng công nghệ tiên tiến để tạo ra sản phẩm đột phá.", gradient: "from-[var(--primary)] to-cyan-400" },
  { icon: Target, title: "Chất lượng hàng đầu", description: "Cam kết mang đến sản phẩm chất lượng cao, tối ưu hiệu năng và trải nghiệm người dùng.", gradient: "from-[var(--secondary)] to-purple-400" },
  { icon: Users, title: "Tinh thần đồng đội", description: "Hợp tác chặt chẽ, chia sẻ kiến thức và cùng nhau phát triển để đạt được mục tiêu chung.", gradient: "from-[var(--accent)] to-emerald-400" },
  { icon: Sparkles, title: "Đam mê không ngừng", description: "Mỗi thành viên đều mang trong mình ngọn lửa đam mê với công nghệ và sáng tạo.", gradient: "from-amber-400 to-orange-400" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding noise-overlay">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-40" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] font-medium mb-4 block">Về chúng tôi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Chúng tôi là </span>
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">217 Studio</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            217 Studio là một nhóm phát triển trẻ, năng động với mục tiêu tạo ra những sản phẩm game và phần mềm chất lượng cao. Chúng tôi tin rằng công nghệ có thể thay đổi thế giới, và mỗi sản phẩm chúng tôi tạo ra đều mang trong mình sự tâm huyết và sáng tạo.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="glass rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--primary)] to-transparent opacity-5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Sứ mệnh của chúng tôi</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              Tạo ra những sản phẩm game hấp dẫn và phần mềm hữu ích, góp phần xây dựng cộng đồng công nghệ Việt Nam. Chúng tôi không chỉ viết code — chúng tôi kiến tạo trải nghiệm, kể câu chuyện, và giải quyết vấn đề thực tế thông qua công nghệ.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }} className="group glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
