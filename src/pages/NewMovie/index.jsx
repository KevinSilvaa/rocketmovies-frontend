import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheck, FiXCircle } from "react-icons/fi";

import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function NewMovie() {

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    if (tags.length >= 5) {
      setNewTag("");
      console.log(tags);
      return alert("Você não pode adicionar mais marcadores");
    }
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

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
            {
              tags.map((tag, index) => (
                <MovieItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            
            <MovieItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
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
