import { Container, Content, AddMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Home() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h2>Meus Filmes</h2>
            <AddMovie to="/NewMovie">
              <FiPlus />
              Adicionar filme
            </AddMovie>
          </div>

          <Movie data={{
            title: "Interestellar",
            resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Ação" }
            ]
          }}
          />

          <Movie data={{
            title: "Interestellar",
            resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Ação" }
            ]
          }}
          />

          <Movie data={{
            title: "Interestellar",
            resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Ação" }
            ]
          }}
          />

          <Movie data={{
            title: "Interestellar",
            resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Ação" }
            ]
          }}
          />

          <Movie data={{
            title: "Interestellar",
            resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Ação" }
            ]
          }}
          />
        </Content>
      </main>
    </Container>
  );
}
