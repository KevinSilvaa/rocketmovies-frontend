import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;
    grid-area: textarea;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    resize: none;
    border: none;
    border-radius: 0.75rem;
    padding: 1rem;
`;
