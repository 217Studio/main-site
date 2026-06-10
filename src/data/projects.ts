import { Gamepad2, Monitor, Smartphone, type LucideIcon } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: string;
  icon: LucideIcon;
  gradient: string;
  progress: number;
  backgroundImage: string;
  features: string[];
}

export const projects: ProjectData[] = [
  {
    id: "dungeon-quest",
    title: "Dungeon Quest",
    type: "Game",
    description: "Game nhập vai hành động 2D với hệ thống chiến đấu phong phú, dungeon ngẫu nhiên và câu chuyện hấp dẫn.",
    longDescription: "Dungeon Quest là một tựa game nhập vai hành động 2D mang đậm chất cổ điển nhưng kết hợp với cơ chế hiện đại. Người chơi sẽ hóa thân thành một dũng sĩ vô danh, khám phá các hầm ngục tối tăm được tạo ngẫu nhiên, đối đầu với hàng tá quái vật hung tợn và giải mã những bí ẩn bị lãng quên. Với hệ thống vũ khí đa dạng và kỹ năng phép thuật phong phú, mỗi lần chơi đều mang lại một trải nghiệm hoàn toàn mới mẻ.",
    tags: ["Unity", "C#", "2D RPG"],
    status: "Đang phát triển",
    icon: Gamepad2,
    gradient: "from-[var(--primary)] to-cyan-400",
    progress: 45,
    backgroundImage: "/projects/dungeon-quest-bg.png",
    features: [
      "Hệ thống Dungeon sinh ngẫu nhiên (Procedural Generation)",
      "Hơn 50 loại quái vật và Boss độc đáo",
      "Hệ thống kỹ năng và trang bị phong phú",
      "Cốt truyện phi tuyến tính với nhiều kết thúc"
    ]
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    type: "Phần mềm",
    description: "Ứng dụng quản lý dự án thông minh dành cho team nhỏ, với tính năng Kanban board, tracking và báo cáo.",
    longDescription: "TaskFlow Pro được sinh ra với sứ mệnh tối ưu hóa quy trình làm việc cho các đội ngũ Agile. Không cồng kềnh như các hệ thống ERP lớn, TaskFlow Pro tập trung vào sự trực quan và tốc độ. Quản lý công việc thông qua bảng Kanban hiện đại, theo dõi thời gian thực và tự động xuất các báo cáo hiệu suất chi tiết.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "Đang phát triển",
    icon: Monitor,
    gradient: "from-[var(--secondary)] to-purple-400",
    progress: 30,
    backgroundImage: "/projects/taskflow-pro-bg.png",
    features: [
      "Bảng Kanban trực quan, kéo thả dễ dàng",
      "Theo dõi tiến độ thời gian thực (Real-time tracking)",
      "Báo cáo tự động (Burn-down chart, Velocity)",
      "Tích hợp GitHub và Slack"
    ]
  },
  {
    id: "pixel-warriors",
    title: "Pixel Warriors",
    type: "Game",
    description: "Game đối kháng multiplayer với phong cách pixel art retro. Hỗ trợ online PvP và giải đấu.",
    longDescription: "Pixel Warriors là một bức thư tình gửi đến kỷ nguyên vàng của game arcade đối kháng. Với phong cách đồ họa pixel nghệ thuật cao, game mang lại những trận chiến nhịp độ nhanh và căng thẳng. Hệ thống netcode rollback giúp trải nghiệm thi đấu online trở nên mượt mà nhất có thể, bất kể bạn đang ở đâu.",
    tags: ["Godot", "GDScript", "Multiplayer"],
    status: "Lên kế hoạch",
    icon: Gamepad2,
    gradient: "from-[var(--accent)] to-emerald-400",
    progress: 10,
    backgroundImage: "/projects/pixel-warriors-bg.png",
    features: [
      "Rollback Netcode cho thi đấu online mượt mà",
      "Hệ thống combo sâu sắc và cơ chế đỡ đòn đặc biệt",
      "Hỗ trợ Cross-play trên nhiều nền tảng",
      "Chế độ giải đấu tự động trong game"
    ]
  },
  {
    id: "studybuddy",
    title: "StudyBuddy",
    type: "Phần mềm",
    description: "Ứng dụng hỗ trợ học tập với AI, flashcard thông minh, lập lịch ôn tập và theo dõi tiến độ.",
    longDescription: "StudyBuddy không chỉ là một ứng dụng ghi chú, nó là một trợ lý học tập cá nhân được hỗ trợ bởi AI. Dựa trên thuật toán lặp lại ngắt quãng (Spaced Repetition), StudyBuddy tối ưu hóa thời gian ôn tập của bạn. AI tích hợp giúp bạn tóm tắt bài giảng, tạo flashcard tự động và giải đáp các thắc mắc ngay lập tức.",
    tags: ["React Native", "AI/ML", "Firebase"],
    status: "Lên kế hoạch",
    icon: Smartphone,
    gradient: "from-amber-400 to-orange-400",
    progress: 5,
    backgroundImage: "/projects/studybuddy-bg.png",
    features: [
      "Tự động tạo Flashcard từ tài liệu bằng AI",
      "Thuật toán ôn tập tối ưu (Spaced Repetition)",
      "Lập lịch học tự động dựa trên mục tiêu",
      "Thống kê hiệu quả học tập chi tiết"
    ]
  }
];
