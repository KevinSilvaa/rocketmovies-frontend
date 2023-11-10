import { useState, useEffect } from "react";
import { Container, Content, AddMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setMovieNotes(response.data);
    }

    fetchMovieNotes();
  }, [search]);


  return (
    <Container>
      <Header>
        <Input
          icon={FiSearch}
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <Content>
          <div>
            <h2>Meus Filmes</h2>
            <AddMovie to="/NewMovie">
              <FiPlus />
              Adicionar filme
            </AddMovie>
          </div>

          {
            movieNotes.map(movieNote => (
              <Movie 
                key={String(movieNote.id)}
                data={movieNote}
              />
            ))
          }

        </Content>
      </main>
    </Container>
  );
}
