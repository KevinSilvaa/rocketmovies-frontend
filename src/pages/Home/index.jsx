import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import { api } from "../../services/api";

import { Container, Content, AddMovie } from "./styles";

import { Movie } from "../../components/Movie";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }
  
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
                onClick={() => handleDetails(movieNote.id)}
              />
            ))
          }

        </Content>
      </main>
    </Container>
  );
}
