"use client";

import { userGitHub } from "@/app/Models/userGitHub";
import { createContext, useContext, useState } from "react";

type FavoritosContextType = {
  favoritos: userGitHub[];
  adicionarFavorito: (user: userGitHub) => void;
  removerFavorito: (userName: string) => void;
};

const FavoritosContext = createContext<FavoritosContextType>({
  favoritos: [],
  adicionarFavorito: () => {},
  removerFavorito: () => {},
});

export function FavoritosProvider({ children }: { children: React.ReactNode }) {
  const [favoritos, setFavoritos] = useState<userGitHub[]>([]);

  function adicionarFavorito(user: userGitHub) {
    setFavoritos((prev) => {
      const exist = prev.some((u) => u.userName === user.userName);
      return exist ? prev : [...prev, user];
    });
  }

  function removerFavorito(userName: string) {
    setFavoritos((prev) => prev.filter((u) => u.userName !== userName));
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export const useFavoritos = () => useContext(FavoritosContext);
