import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;
