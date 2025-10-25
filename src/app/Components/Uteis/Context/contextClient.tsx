"use client";

import { useEffect } from "react";
import { FavoritosProvider, useFavoritos } from "./";

const FAVORITOS_KEY = "meusFavoritos";

export function FavoritosProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FavoritosProvider>
      <FavoritosSync />
      {children}
    </FavoritosProvider>
  );
}

function FavoritosSync() {
  const { favoritos, setFavoritos } = useFavoritos();

  // Carregar favoritos do localStorage
  useEffect(() => {
    const armazenados = localStorage.getItem(FAVORITOS_KEY);
    if (armazenados) {
      try {
        setFavoritos(JSON.parse(armazenados));
      } catch {
        setFavoritos([]);
      }
    }
  }, [setFavoritos]);

  // Salvar favoritos no localStorage
  useEffect(() => {
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
  }, [favoritos]);

  return null;
}
