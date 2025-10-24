import { Card } from "../Components/Card";
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

export default function Home() {
  return (
    <main>
      <Navbar linkSub="Home" />
      <div className="conteudo">
        <SearchBar />
        <Card
          nome="Gabriel P. Schon"
          userName="GPSchon"
          cargo="Developer"
          favorite={true}
        />
      </div>
    </main>
  );
}
