import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export interface Role {
  name: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  date: string;
  status: "Active" | "In Active";
  users: number[];
}

export const fetchRoles = async (): Promise<Role[]> => {
  const response = await api.get<{ data: Role[] }>("/roles");
  return response.data.data;
};

export default api;
