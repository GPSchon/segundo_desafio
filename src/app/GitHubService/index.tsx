import axios from "axios";
import { userGitHub } from "../Models/userGitHub";

export async function getGitHub(usuario: string): Promise<userGitHub> {
  const response = await axios.get(`https://api.github.com/users/${usuario}`);
  const data = response.data;
  const formatado: userGitHub = {
    nome: data.name ?? "Sem nome",
    userName: data.login,
    cargo: data.bio ?? "Sem descrição",
    favorite: false,
    image: data.avatar_url,
  };
  return formatado;
}
