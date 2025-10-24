"use client";

import Image from "next/image";
import style from "./style.module.css";
import { useState } from "react";

type CardProps = {
  nome: string;
  userName: string;
  cargo: string;
  favorite: boolean;
};

export function Card(props: CardProps) {
  const [starFavorite, setStar] = useState<boolean>(true);
  return (
    <div className={style.card}>
      <div className="conteudo">
        <Image
          className={style.image}
          width={32}
          height={32}
          src="/funcionario.png"
          alt="foto de perfil"
        />
      </div>
      <div className="acao">
        <button></button>
      </div>
    </div>
  );
}
