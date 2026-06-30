import type { UserRole } from "@/types/auth";

export type AuthActionResult = {
  success: boolean;
  error?: string;
  message?: string;
};

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  created_at: string;
};

export type SignUpInput = {
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
};

export type LoginInput = {
  email: string;
  password: string;
};
