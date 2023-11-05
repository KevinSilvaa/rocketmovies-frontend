import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 0.75rem;
    margin-bottom: 0.5rem;
    
    > input {
        height: 3.5rem;
        width: 100%;
        padding: 0.75rem 1rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    
    svg {
        margin-left: 1rem;
    }
`;
