import { MdClose } from "react-icons/md";
import style from "./style.module.css";
import { Dispatch, SetStateAction } from "react";
import { userGitHub } from "@/app/Models/userGitHub";
import { useFavoritos } from "../Context";

export type modalProps = {
  mostra: boolean;
  userName: string;
};

type ModalDesfavoriteProps = {
  userName: string;
  setMostrarModal: Dispatch<SetStateAction<modalProps>>;
  setFavorito: Dispatch<SetStateAction<userGitHub | null>>;
};

export function ModalDesfavorite({
  userName,
  setMostrarModal,
  setFavorito,
}: ModalDesfavoriteProps) {
  const { removerFavorito } = useFavoritos();

  function fecharModal() {
    setMostrarModal({ mostra: false, userName: "" });
  }

  function confirmarRemocao() {
    removerFavorito(userName);
    setFavorito((prev) => (prev ? { ...prev, favorite: false } : null));
    fecharModal();
  }

  return (
    <div className={style.modal}>
      <div className={style.closeRow}>
        <button className="close" onClick={fecharModal}>
          <MdClose />
        </button>
      </div>
      <div className={style.modalRow} style={{ flex: 1 }}>
        <div className={style.modalRow}>
          <span className={style.modalTitle}>Remover dos favoritos</span>
        </div>
        <div className={style.modalRow}>
          <span className={style.textMessage}>
            Tem certeza que deseja remover este usuário dos seus favoritos?
          </span>
        </div>
        <div className={style.btmRow}>
          <button className={style.btmVoltar} onClick={fecharModal}>
            Voltar
          </button>
          <button className={style.btmConfirmar} onClick={confirmarRemocao}>
            Confirmar Ação
          </button>
        </div>
      </div>
    </div>
  );
}
