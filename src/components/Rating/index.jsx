import { Container } from "./styles";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";

export function Rating({ rate }) {
  let stars = [];

  for (let contador = 1; contador <= 6; contador++) {
    if (contador <= rate) {
      stars.push(<VscStarFull key={contador} />);
    } else {
      stars.push(<VscStarEmpty key={contador} />)
    }
  }

  return (
    <Container data={rate}>
      {stars}
    </Container>
  );
}
