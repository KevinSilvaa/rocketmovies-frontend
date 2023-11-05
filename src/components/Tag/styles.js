import styled from "styled-components";

export const Container = styled.span`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.COLORS.WHITE_ROSE};
    border-radius: 0.75rem;
    margin: 1rem 0.5rem 1rem 0;
    padding: 0.5rem 1rem;
`;
