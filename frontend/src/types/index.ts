export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Subscription {
  _id: string;
  name: string;
  price: number;
  currency: Currency;
  frequency: Frequency;
  category: Category;
  paymentMethod: string;
  status: SubscriptionStatus;
  startDate: string;
  renewalDate: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export type Currency = "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY";
export type Frequency = "daily" | "weekly" | "monthly" | "yearly";
export type Category = "entertainment" | "education" | "productivity" | "health" | "other";
export type SubscriptionStatus = "active" | "cancelled" | "expired";

export interface CreateSubscriptionPayload {
  name: string;
  price: number;
  currency: Currency;
  frequency: Frequency;
  category: Category;
  paymentMethod: string;
  startDate: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface AuthTokens {
  token: string;
}

export const CURRENCIES: { value: Currency; label: string }[] = [
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR (€)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "INR", label: "INR (₹)" },
  { value: "JPY", label: "JPY (¥)" },
  { value: "CNY", label: "CNY (¥)" },
];

export const FREQUENCIES: { value: Frequency; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "entertainment", label: "Entertainment" },
  { value: "education", label: "Education" },
  { value: "productivity", label: "Productivity" },
  { value: "health", label: "Health" },
  { value: "other", label: "Other" },
];

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  JPY: "¥",
  CNY: "¥",
};
