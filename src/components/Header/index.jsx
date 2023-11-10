import { api } from "../../services/api";

import { Container, Avatar, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";

export function Header({ children }) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>
      {children}

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>Sair</button>
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
