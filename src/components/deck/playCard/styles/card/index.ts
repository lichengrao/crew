import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.black};
    justify-content: center;
    align-items: center;
  `}
`;
