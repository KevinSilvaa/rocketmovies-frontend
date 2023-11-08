import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

export function Header() {

  const { user } = useAuth();

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
          <strong>{user.name}</strong>
          <span>Sair</span>
        </div>

        <img
          src="https://github.com/KevinSilvaa.png"
          alt={`${user.name} avatar`}
        />
      </Profile>
    </Container>
  );
}
