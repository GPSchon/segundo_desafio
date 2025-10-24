import { Navbar } from "../Components/Navbar";
import { Card } from "../Components/Card";
import style from "./style.module.css";

export default function Favoritos() {
  const favoriteUsers = [
    {
      id: "1",
      nome: "João Silva",
      userName: "@joaosilva",
      cargo: "Desenvolvedor",
      favorite: true,
    },
    {
      id: "2",
      nome: "Maria Santos",
      userName: "@mariasantos",
      cargo: "Designer",
      favorite: true,
    },
    {
      id: "3",
      nome: "Pedro Oliveira",
      userName: "@pedrooliveira",
      cargo: "Gerente",
      favorite: true,
    },
    {
      id: "4",
      nome: "Ana Costa",
      userName: "@anacosta",
      cargo: "Analista",
      favorite: true,
    },
  ];

  return (
    <main>
      <Navbar linkSub="Favorits" />
      <section className={style.favoritesSection}>
        <div className={style.headerSection}>
          <h1>Meus Favoritos</h1>
          <p>Total de favoritos: {favoriteUsers.length}</p>
        </div>

        <div className={style.cardsContainer}>
          {favoriteUsers.map((user) => (
            <Card
              key={user.id}
              nome={user.nome}
              userName={user.userName}
              cargo={user.cargo}
              favorite={user.favorite}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
