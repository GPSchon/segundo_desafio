import axios from "axios";

export async function getGitHub(usuario: string) {
  const response = await axios.get(`https://api.github.com/users/${usuario}`);
  console.log(response.data);
  return response.data;
}
