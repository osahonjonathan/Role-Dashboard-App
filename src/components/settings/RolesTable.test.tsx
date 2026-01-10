import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RolesTable } from "./RolesTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


vi.mock("@/lib/api", () => ({
  fetchRoles: vi.fn(),
}));

import { fetchRoles } from "@/lib/api";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

describe("RolesTable", () => {
  it("renders loading state", () => {
    (fetchRoles as any).mockReturnValue(new Promise(() => {})); // Never resolves

    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <RolesTable />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading roles...")).toBeInTheDocument();
  });

  it("renders error state", async () => {
    (fetchRoles as any).mockRejectedValue(new Error("API Error"));

    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <RolesTable />
      </QueryClientProvider>
    );

    expect(await screen.findByText("Failed to load roles")).toBeInTheDocument();
    expect(screen.getByText("API Error")).toBeInTheDocument();
  });

  it("renders data when fetch is successful", async () => {
    const mockRoles = [
      {
        name: "Superadmin",
        type: "DEFAULT",
        date: "2023-01-01T00:00:00.000Z",
        status: "Active",
        users: [1, 2],
      },
    ];
    (fetchRoles as any).mockResolvedValue(mockRoles);

    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <RolesTable />
      </QueryClientProvider>
    );

    expect(await screen.findByText("Superadmin")).toBeInTheDocument();
    expect(screen.getByText("Jan 1, 2023")).toBeInTheDocument();
  });
});
