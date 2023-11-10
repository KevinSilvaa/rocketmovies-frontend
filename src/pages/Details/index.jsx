import { useState, useEffect } from "react";
import { Container, Infos, PostInfos, Resume } from "./styles";
import { useNavigate, useParams } from "react-router-dom";

import { FiArrowLeft, FiClock, FiXCircle } from "react-icons/fi";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const [data, setData] = useState({});

  const { user } = useAuth();
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Tem certeza que deseja remover este filme da lista?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
    
  }

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
            <ButtonText
              icon={FiArrowLeft}
              title="Voltar"
              onClick={handleBack}
            />
            
            <Button
              icon={FiXCircle}
              title="Excluir filme"
              onClick={handleRemove}
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
