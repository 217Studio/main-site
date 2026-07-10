import type { ApiResponse, Member, Project } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://api.217studio.id.vn/api";

/**
 * Lấy danh sách thành viên active từ backend
 */
export async function fetchMembers(): Promise<Member[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/users`, {
      next: { revalidate: 60 }, // Cache 60 giây cho SSR
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch members: ${res.status}`);
    }

    const json: ApiResponse<Member[]> = await res.json();

    if (!json.success) {
      throw new Error(json.error || "Unknown error");
    }

    // Chỉ trả về thành viên active
    return json.data.filter((m) => m.is_active);
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}

/**
 * Lấy danh sách tất cả dự án từ backend
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.status}`);
    }

    const json: ApiResponse<Project[]> = await res.json();

    if (!json.success) {
      throw new Error(json.error || "Unknown error");
    }

    return json.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/**
 * Lấy chi tiết dự án theo ID (UUID)
 */
export async function fetchProjectById(id: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch project: ${res.status}`);
    }

    const json: ApiResponse<Project> = await res.json();

    if (!json.success) {
      throw new Error(json.error || "Unknown error");
    }

    return json.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
