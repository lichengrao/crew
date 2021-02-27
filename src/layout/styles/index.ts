import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: fit-content;
    max-width: fit-content;
    align-self: center;
    padding: 35px;
  `};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  max-width: 800px;
  align-self: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 0;
    user-select: none;
  `};
`;
