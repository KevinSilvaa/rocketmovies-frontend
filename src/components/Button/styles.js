import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 1rem 0;
    border: none;
    border-radius: 0.75rem;
    margin-top: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
