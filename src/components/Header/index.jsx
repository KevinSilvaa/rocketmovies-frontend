import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Header() {

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        type="search"
      />

      <Profile to="/profile">
        <div>
          <strong>Kevin Silvaa</strong>
          <span>Sair</span>
        </div>

        <img
          src="https://github.com/KevinSilvaa.png"
          alt="User photo"
        />
      </Profile>
    </Container>
  );
}
