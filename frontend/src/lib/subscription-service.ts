import api from "./api";
import type { ApiResponse, Subscription, CreateSubscriptionPayload } from "@/types";

export const subscriptionService = {
  getAll: () =>
    api.get<ApiResponse<Subscription[]>>("/subscriptions"),

  getById: (id: string) =>
    api.get<ApiResponse<Subscription>>(`/subscriptions/${id}`),

  create: (data: CreateSubscriptionPayload) =>
    api.post<ApiResponse<Subscription>>("/subscriptions", data),

  update: (id: string, data: Partial<CreateSubscriptionPayload>) =>
    api.put<ApiResponse<Subscription>>(`/subscriptions/${id}`, data),

  delete: (id: string) =>
    api.delete<ApiResponse>(`/subscriptions/${id}`),

  cancel: (id: string) =>
    api.put<ApiResponse<Subscription>>(`/subscriptions/${id}/cancel`, {}),

  getUpcoming: () =>
    api.get<ApiResponse<Subscription[]>>("/subscriptions/upcoming-renewals"),
};
