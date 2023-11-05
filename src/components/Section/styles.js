import styled from "styled-components";

export const Container = styled.section`
    margin: 1.5rem 0;

    h2 {
        font-size: 2.25rem;
        font-weight: 500;
        padding-bottom: 2.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE}
    }
`;
