import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 7.25rem auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.section`
    padding: 1.5rem 8rem;
    grid-area: content;
    overflow-y: auto;
    height: 88vh;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const AddMovie = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 48px;
    padding: 1.5rem;
    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.5rem;
    margin-bottom: 1.75rem;

    svg {
        font-size: 1.5rem;
    }
`;
