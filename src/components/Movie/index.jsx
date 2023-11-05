import { Container } from "./styles";
import { Tag } from "../Tag";
import { FiStar } from "react-icons/fi"

export function Movie({ data, ...rest }) {

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>

      <p>{data.resume}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}
