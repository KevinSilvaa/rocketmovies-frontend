import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {

  return (
    <Container>
      <header>
        <ButtonText to="/"
          icon={FiArrowLeft}
          title="Voltar"
        />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/KevinSilvaa.png"
            alt="User photo"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
        />
        <Input
          icon={FiMail}
          placeholder="Email"
          type="text"
        />

        <Input
          icon={FiLock}
          placeholder="Senha atual"
          type="password"
        />
        <Input 
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
