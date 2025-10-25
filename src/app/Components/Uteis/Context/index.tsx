import { createContext, useContext, useState } from "react";
import { userGitHub } from "@/app/Models/userGitHub";

type FavoritosContextType = {
  favoritos: userGitHub[];
  setFavoritos: React.Dispatch<React.SetStateAction<userGitHub[]>>;
  adicionarFavorito: (user: userGitHub) => void;
  removerFavorito: (userName: string) => void;
};

const FavoritosContext = createContext<FavoritosContextType | null>(null);

export function FavoritosProvider({ children }: { children: React.ReactNode }) {
  const [favoritos, setFavoritos] = useState<userGitHub[]>([]);

  function adicionarFavorito(user: userGitHub) {
    setFavoritos((prev) => {
      if (prev.some((u) => u.userName === user.userName)) return prev;
      return [...prev, user];
    });
  }

  function removerFavorito(userName: string) {
    setFavoritos((prev) => prev.filter((u) => u.userName !== userName));
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, setFavoritos, adicionarFavorito, removerFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context)
    throw new Error("useFavoritos must be used within FavoritosProvider");
  return context;
}
