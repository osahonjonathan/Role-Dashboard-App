import { describe, it, vi, expect } from "vitest";
import axios from "axios";
import { fetchRoles } from "./api";

vi.mock("axios", () => {
  return {
    default: {
      create: vi.fn(() => ({
        get: vi.fn(),
      })),
    },
  };
});

// Mock import.meta.env
vi.stubGlobal("import", {
  meta: {
    env: {
      VITE_API_BASE_URL: "https://test-api.com",
    },
  },
});

describe("api service", () => {
  it("fetchRoles returns data from the API", async () => {
    const mockRoles = [
      {
        name: "Admin",
        type: "DEFAULT",
        date: "2023-01-01",
        status: "Active",
        users: [1],
      },
    ];

    const mockGet = vi.fn().mockResolvedValue({ data: { data: mockRoles } });
    const mockInstance = { get: mockGet };
    (axios.create as any).mockReturnValue(mockInstance);

    const roles = await fetchRoles();
    expect(roles).toEqual(mockRoles);
  });
});
