import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ bigSize }) => (bigSize ? "center" : "start")};
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;

  .filled {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }

  svg {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
