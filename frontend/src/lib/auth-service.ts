import api from "./api";
import type { ApiResponse, User } from "@/types";

export const authService = {
  signUp: (data: { name: string; email: string; password: string }) =>
    api.post<ApiResponse<{ token: string; user: User }>>("/auth/sign-up", data),

  signIn: (data: { email: string; password: string }) =>
    api.post<ApiResponse<{ token: string; user: User }>>("/auth/sign-in", data),

  getProfile: () =>
    api.get<ApiResponse<User>>("/users/me"),
};
