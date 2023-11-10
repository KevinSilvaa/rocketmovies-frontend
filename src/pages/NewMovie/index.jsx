import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck, FiXCircle } from "react-icons/fi";

import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function NewMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

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

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme");
    }  
    
    if (!rating) {
      return alert("Digite a nota do filme");
    }
    
    if (newTag) {
      return alert("Você deixou uma tag sem adicionar no campo, clique para adicioná-la ou deixe o campo vazio");
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Filme adicionado com sucesso");
    navigate("/");
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
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Digite sua nota (de 0 a 5)"
              type="text"
              onChange={e => setRating(e.target.value)}
            />

            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
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
              onClick={handleNewMovie}
            />
          </div>
        </Section>


      </main>
    </Container>
  );
}
