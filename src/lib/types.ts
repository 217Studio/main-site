// ===== Backend API Response Types =====

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  message?: string;
}

// ===== Member Types =====

export interface Member {
  id: string;
  full_name: string;
  team_role: string;
  bio: string | null;
  avatar_url: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ===== Project Types =====

export interface ProjectMember {
  member_id: string;
  project_role: string;
  full_name: string;
  member_team_role?: string;
  avatar_url?: string | null;
  contribution_desc?: string | null;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  content: string | null;
  thumbnail_url: string | null;
  demo_url: string | null;
  repo_url: string | null;
  status: string;
  launch_date: string | null;
  created_at: string;
  updated_at: string;
  members: ProjectMember[];
}
