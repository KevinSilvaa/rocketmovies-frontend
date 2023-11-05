import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    
    > main {
        padding: 2.5rem 7rem;
        height: 80vh;
        overflow-y: auto;

        div:nth-child(2) {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            h2 {
                font-size: 2.25rem;
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            svg {
                font-size: 1.25rem;
                color: ${({ theme }) => theme.COLORS.PINK};
                fill: ${({ theme }) => theme.COLORS.PINK};

                &:last-child {
                    fill: none;
                }
            }
        }

    }
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 368px;
    gap: 1.5rem;

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
