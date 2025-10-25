"use client";

import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Card } from "../Components/Card";
import style from "./style.module.css";
import { useFavoritos } from "../Components/Uteis/Context";
import {
  ModalDesfavorite,
  modalProps,
} from "../Components/Uteis/modalDesfavoritar";

export default function Favoritos() {
  const modalOculta: modalProps = {
    mostra: false,
    userName: "",
  };

  const [mostraModal, setMostrarModal] = useState<modalProps>(modalOculta);
  const { favoritos } = useFavoritos();

  return (
    <main>
      <Navbar linkSub="Favorits" />
      <section className={style.favoritesSection}>
        <div className={style.headerSection}>
          <h1>Meus Favoritos</h1>
          <p>Total de favoritos: {favoritos.length}</p>
        </div>

        <div className={style.cardsContainer}>
          {favoritos.map((user) => (
            <Card
              key={user.userName}
              user={user}
              setUser={() => {}}
              setModal={setMostrarModal}
              setFavorito={() => {}}
            />
          ))}
        </div>

        {mostraModal.mostra && (
          <div className="overlay">
            <ModalDesfavorite
              userName={mostraModal.userName}
              setMostrarModal={setMostrarModal}
              setFavorito={() => {}}
            />
          </div>
        )}
      </section>
    </main>
  );
}
