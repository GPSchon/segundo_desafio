"use client";

import Image from "next/image";
import style from "./style.module.css";
import { CiStar } from "react-icons/ci";
import { LuStarOff } from "react-icons/lu";
import { userGitHub } from "@/app/Models/userGitHub";
import { useFavoritos } from "../Uteis/Context";
import { Dispatch, SetStateAction } from "react";
import { modalProps } from "../Uteis/modalDesfavoritar";

type CardProps = {
  user: userGitHub;
  setUser?: Dispatch<SetStateAction<userGitHub | null>>;
  setModal: Dispatch<SetStateAction<modalProps>>;
  setFavorito?: Dispatch<SetStateAction<userGitHub | null>>;
};

export function Card({ user, setUser, setModal }: CardProps) {
  const { favoritos, adicionarFavorito } = useFavoritos();
  const isFavorito = favoritos.some(
    (userContext) => userContext.userName === user.userName
  );
  const modalConfirm: modalProps = {
    mostra: true,
    userName: user.userName,
  };

  function toggleFavorito() {
    if (isFavorito) {
      setModal(modalConfirm);
      return;
    }

    adicionarFavorito(user);

    if (setUser) {
      setUser((userPrev) => {
        if (!userPrev) return null;
        return { ...userPrev, favorite: true };
      });
    }
  }

  return (
    <div className={style.card}>
      <div className={style.conteudo}>
        <div className={style.line}>
          <Image
            className={style.image}
            width={32}
            height={32}
            src={user.image}
            alt="foto de perfil"
          />
          <span className={style.textNome}>{user.nome}</span>
          <span className={style.textUser}>{user.userName}</span>
        </div>
        <div className={style.line}>
          <span className={style.textCargo}>{user.cargo}</span>
        </div>
      </div>
      <div className={style.acao}>
        <button onClick={toggleFavorito}>
          {isFavorito ? <LuStarOff /> : <CiStar />}
          {isFavorito ? "Remover Favorito" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}
