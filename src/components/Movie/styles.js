import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    border-radius: 0.75rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    margin: 0.5rem 0 1rem;
    
    > h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 0.5rem
    }

    > div {
        display: flex;
        gap: 0.25rem;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            fill: ${({ theme }) => theme.COLORS.PINK};
            
            &:last-child {
                fill: none;
            }
        }
    }

    > p {
        margin-top: 1rem;
        overflow: hidden;
        max-height: 2.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200}
    }

    > footer {
        display: flex;
        width: 100%;
        margin-top: 1rem;
    }
`;
