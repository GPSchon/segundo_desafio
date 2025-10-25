"use client";

import { getGitHub } from "@/app/GitHubService";
import style from "./style.module.css";
import { CiSearch } from "react-icons/ci";

export function SearchBar() {
  function handleSearch() {
    const inputSearch = document.getElementById(
      "inputSearch"
    ) as HTMLInputElement;
    const perfilGit = getGitHub(inputSearch.value);
    console.log(perfilGit);
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
