"use client";

import Image from "next/image";
import style from "./style.module.css";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { LuStarOff } from "react-icons/lu";

type CardProps = {
  nome: string;
  userName: string;
  cargo: string;
  favorite: boolean;
};

export function Card({ nome, userName, cargo, favorite = false }: CardProps) {
  const [starFavorite, setStar] = useState<boolean>(favorite);

  function handleFavorite() {
    setStar(!starFavorite);
  }
  return (
    <div className={style.card}>
      <div className={style.conteudo}>
        <div className={style.line}>
          <Image
            className={style.image}
            width={32}
            height={32}
            src="/perfil.png"
            alt="foto de perfil"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              overflow: "hidden",
              width: "32px",
              height: "32px",
            }}
          />
          <span className={style.textNome}>{nome}</span>
          <span className={style.textUser}>{userName}</span>
        </div>
        <div className={style.line}>
          <span className={style.textCargo}>{cargo}</span>
        </div>
      </div>
      <div className={style.acao}>
        <button onClick={handleFavorite}>
          {starFavorite ? <CiStar /> : <LuStarOff />}
          {starFavorite ? "Favoritar" : "Remover Favorito"}
        </button>
      </div>
    </div>
  );
}
