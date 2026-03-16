export const PLAN_LIMITS = {
  free: {
    servers: 3,
    toolsPerServer: 10,
    callsPerMonth: 100,
    historyDays: 7,
  },
  pro: {
    servers: 25,
    toolsPerServer: 100,
    callsPerMonth: 10_000,
    historyDays: 90,
  },
  team: {
    servers: 100,
    toolsPerServer: Infinity,
    callsPerMonth: 100_000,
    historyDays: 365,
  },
} as const;

export type PlanName = keyof typeof PLAN_LIMITS;
export type UserRole = "owner" | "admin" | "member" | "viewer";
export type ServerStatus = "draft" | "active" | "error" | "archived";
export type TransportType = "stdio" | "sse" | "streamable-http";
