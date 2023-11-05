import { Container, Form } from "./styles";
import { FiArrowLeft, FiCheck, FiDelete, FiXCircle } from "react-icons/fi";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

export function NewMovie() {

  return (
    <Container>
      <Header />

      <main>
        <ButtonText to="/"
          icon={FiArrowLeft}
          title="Voltar"
        />

        <Section title="Novo filme">
          <Form>
            <Input
              placeholder="Título"
              type="text"
            />
            <Input
              placeholder="Digite sua nota (de 0 a 5)"
              type="number"
            />

            <Textarea
              placeholder="Observações"
            />

          </Form>
        </Section>

        <Section title="Marcadores">
          <div className="tags">
            <MovieItem value="Ficção" />
            <MovieItem placeholder="Novo marcador" isNew />
          </div>

          <div className="buttons">
            <Button
              icon={FiXCircle}
              title="Excluir filme"
            />
            <Button 
              icon={FiCheck}
              title="Salvar alterações"
            />
          </div>
        </Section>


      </main>
    </Container>
  );
}
