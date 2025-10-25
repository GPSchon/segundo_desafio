"use client";

import { useState } from "react";
import { Card } from "../Components/Card";
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { userGitHub } from "../Models/userGitHub";
import {
  ModalDesfavorite,
  modalProps,
} from "../Components/Uteis/modalDesfavoritar";

export default function Home() {
  const modalOculta: modalProps = {
    mostra: false,
    userName: "",
  };
  const [usuarioGit, setUsuarioGit] = useState<userGitHub | null>(null);
  const [mostraModel, setMostrarModal] = useState<modalProps>(modalOculta);
  return (
    <main>
      <Navbar linkSub="Home" />
      <div className="conteudo">
        <SearchBar setUsuarioGit={setUsuarioGit} />
        {usuarioGit && (
          <>
            <Card
              user={usuarioGit}
              setUser={setUsuarioGit}
              setModal={setMostrarModal}
            />
            {mostraModel.mostra && (
              <div className="overlay">
                <ModalDesfavorite
                  userName={mostraModel.userName}
                  setMostrarModal={setMostrarModal}
                  setFavorito={setUsuarioGit}
                />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
