"use client";

import { getGitHub } from "@/app/GitHubService";
import style from "./style.module.css";
import { CiSearch } from "react-icons/ci";
import { Dispatch, SetStateAction } from "react";
import { userGitHub } from "@/app/Models/userGitHub";
import { useFavoritos } from "../Uteis/Context";

type SearchBarProps = {
  setUsuarioGit: Dispatch<SetStateAction<userGitHub | null>>;
};

export function SearchBar({ setUsuarioGit }: SearchBarProps) {
  const { favoritos } = useFavoritos();

  async function handleSearch() {
    const inputSearch = document.getElementById(
      "inputSearch"
    ) as HTMLInputElement;
    if (!inputSearch?.value) return;

    const dados = await getGitHub(inputSearch.value);

    const Favoritado = favoritos.some((u) => u.userName === dados.userName);
    dados.favorite = Favoritado;

    setUsuarioGit(dados);
  }

  return (
    <div className={style.barraSearch}>
      <input
        id="inputSearch"
        className={style.inputSearch}
        type="text"
        placeholder="Buscar Usuários..."
        onBlur={handleSearch}
      />
      <button name={style.buttonSearch} onClick={handleSearch}>
        <CiSearch />
      </button>
    </div>
  );
}
