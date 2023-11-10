import { useState, useEffect } from "react";
import { Container, Infos, PostInfos, Resume } from "./styles";
import { useParams } from "react-router-dom";

import { FiArrowLeft, FiClock, FiXCircle } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const [data, setData] = useState({});

  const { user } = useAuth();
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : userNullAvatar;

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNotes();
  }, [])


  return (
    <Container>
      <Header />

      <main>
        <Infos>
          <div className="buttons">
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
            <Button
              icon={FiXCircle}
              title="Excluir filme"
            />
          </div>

          <div className="title-rating">
            <h2>{data.title}</h2>
            <Rating rate={data.rating} />
          </div>

          <PostInfos>
            <img
              src={avatarUrl}
              alt={`Avatar do usuário ${user.name}`}
            />
            <span>{`Escrito por ${user.name}`}</span>

            <FiClock />
            <span>{data.updated_at}</span>
          </PostInfos>
        </Infos>

        {
          data.tags &&
          data.tags.map(tag => (
            <Tag
              key={String(tag.id)}
              title={tag.name}
            />
          ))
        }

        <Resume>
          <p>
            {data.description}
          </p>
        </Resume>
      </main>
    </Container>
  );
}
