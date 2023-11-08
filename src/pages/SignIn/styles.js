import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10rem;

    > h1 {
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 2rem 0;
    }

    > a {
        text-decoration: none;
        text-align: center;
        margin-top: 2.5rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.7;
`;
