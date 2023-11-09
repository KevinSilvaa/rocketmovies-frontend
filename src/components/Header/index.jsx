import { Avatar, Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
          <strong>{user.name}</strong>
          <button onClick={signOut}>Sair</button>
        </div>
        <Avatar to="/profile">
          <img
            src={avatarUrl}
            alt={`Foto do usuário ${user.name}`}
          />
        </Avatar>
      </Profile>
    </Container>
  );
}
