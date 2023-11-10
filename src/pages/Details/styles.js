import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    
    > main {
        padding: 2.5rem 7rem;
        height: 80vh;
        overflow-y: auto;

        > div h2 {
            font-size: 2.25rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;


export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    .title-rating {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

    svg:last-child {
        display: none;
    }

    > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const PostInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2.5rem;

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER_800};
    }

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Resume = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin-top: 2.5rem;
    text-align: justify;
    max-height: 10vh;
`;
