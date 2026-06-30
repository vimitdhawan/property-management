"use server";

import { loginSchema, signupSchema } from "./schema";
import { login, signup, logout } from "./service";
import type { AuthActionResult } from "./types";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function extractFirstError(issues: Array<{ message: string }>): string {
  return issues[0]?.message ?? "Invalid input";
}

export async function loginAction(
  _prev: AuthActionResult | null,
  formData: FormData
): Promise<AuthActionResult> {
  const raw = {
    email: (formData.get("email") ?? "") as string,
    password: (formData.get("password") ?? "") as string,
  };

  const parsed = loginSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: extractFirstError(parsed.error.issues) };
  }

  const result = await login(parsed.data);
  if (result.success) {
    redirect("/dashboard");
  }
  return result;
}

export async function signupAction(
  _prev: AuthActionResult | null,
  formData: FormData
): Promise<AuthActionResult> {
  const raw = {
    email: (formData.get("email") ?? "") as string,
    password: (formData.get("password") ?? "") as string,
    confirmPassword: (formData.get("confirmPassword") ?? "") as string,
    fullName: (formData.get("fullName") ?? "") as string,
    role: (formData.get("role") ?? "") as string,
  };

  const parsed = signupSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: extractFirstError(parsed.error.issues) };
  }

  const { email, password, fullName, role } = parsed.data;
  const result = await signup({ email, password, fullName, role });

  if (result.success && !result.message) {
    redirect("/dashboard");
  }

  return result;
}

export async function logoutAction(): Promise<void> {
  const result = await logout();
  if (!result.success) {
    console.error("Logout failed, forcing session clear:", result.error);
    const supabase = await createClient();
    await supabase.auth.signOut({ scope: "local" });
  }
  redirect("/login");
}
