import { Container } from "./styles";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";

export function Rating({ rate }) {
  let stars = [];

  for (let cont = 1; cont <= 6; cont++) {
    if (cont <= rate) {
      stars.push(<VscStarFull key={String(cont)} />);
    } else {
      stars.push(<VscStarEmpty key={String(cont)} />);
    }
  }

  return(
    <Container>
      {stars}
    </Container>
  )
}
