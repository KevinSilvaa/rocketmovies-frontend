import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;

    > main {
        padding: 2.5rem 7rem 0;
        overflow-y: auto;
        
        .tags {
            width: 100%;
            background: ${({ theme }) => theme.COLORS.BLACK};
            padding: 1rem;
            display: flex;
            gap: 1.5rem;
            border-radius: 0.5rem;
        }

        .buttons {
            display: flex;
            gap: 2.5rem;
            margin-top: 1.5rem;

            button:first-child {
                background: ${({ theme }) => theme.COLORS.BLACK};
                color: ${({ theme }) => theme.COLORS.PINK};
                svg {
                    color: ${({ theme }) => theme.COLORS.WHITE};
                }
            }

            svg {
                color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            }
        }
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-areas: 
    "input input"
    "textarea textarea";
    gap: 2.5rem;
    flex-wrap: wrap;
`;
