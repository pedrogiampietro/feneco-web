import { apiClient } from "./api";

export const fetchServers = async () => {
  try {
    const response = await apiClient().get("/server");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar servidores:", error);
    throw error;
  }
};
