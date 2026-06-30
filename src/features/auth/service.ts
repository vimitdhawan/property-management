import {
  signUp as repoSignUp,
  signIn as repoSignIn,
  signOut as repoSignOut,
  getUser as repoGetUser,
  getProfile as repoGetProfile,
} from "./repository";
import type {
  SignUpInput,
  LoginInput,
  AuthActionResult,
  Profile,
} from "./types";

function mapAuthError(message: string): string {
  if (message.includes("Invalid login credentials")) {
    return "Invalid email or password";
  }
  if (message.includes("User already registered")) {
    return "An account with this email already exists";
  }
  if (message.includes("Email not confirmed")) {
    return "Please confirm your email address";
  }
  return message;
}

export async function signup(input: SignUpInput): Promise<AuthActionResult> {
  const { data, error } = await repoSignUp(input);
  if (error) {
    return { success: false, error: mapAuthError(error.message) };
  }

  if (!data.session) {
    return {
      success: true,
      message: "Check your email to confirm your account before signing in.",
    };
  }

  return { success: true };
}

export async function login(input: LoginInput): Promise<AuthActionResult> {
  const { error } = await repoSignIn(input.email, input.password);
  if (error) {
    return { success: false, error: mapAuthError(error.message) };
  }
  return { success: true };
}

export async function logout(): Promise<AuthActionResult> {
  const { error } = await repoSignOut();
  if (error) {
    console.error("Logout failed:", error.message);
    return { success: false, error: mapAuthError(error.message) };
  }
  return { success: true };
}

export async function getCurrentUser() {
  const { user, error } = await repoGetUser();
  if (error || !user) return { user: null, profile: null };

  const { profile } = await repoGetProfile(user.id);
  return { user, profile: profile as Profile | null };
}
