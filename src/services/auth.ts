import { AxiosError } from "axios";
import { api } from "../api";

export async function login(formData: { email: string; password: string }) {
  try {
    const response = await api.post("/auth/login", formData);
    const data: { message: string; data: string } = response.data;

    return data.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    console.log(error);
  }
}
