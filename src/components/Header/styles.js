import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    padding: 1.5rem 8rem;
    height: 7.25rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    align-items: center;
    gap: 4rem;
    grid-area: header;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export const Profile = styled(Link)`
    display: flex;
    gap: 1rem;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        width: 5.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        line-height: 1.5rem;

        strong {
            font-size: 0.875rem;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }

        span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            align-self: right;
        }
    }
`;
