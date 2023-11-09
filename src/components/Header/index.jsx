import { Avatar, Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

export function Header() {

  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        type="search"
      />

      <Profile>
        <div>
          <strong>Kevin</strong>
          <button onClick={signOut}>Sair</button>
        </div>
        <Avatar to="/profile">
          <img
            src="https://github.com/KevinSilvaa.png"
            alt= "Kevin photo"
          />
        </Avatar>
      </Profile>
    </Container>
  );
}
