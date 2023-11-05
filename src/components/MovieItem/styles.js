import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 0.75rem;
    padding: 1rem;
    max-width: 260px;

    > button {
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
