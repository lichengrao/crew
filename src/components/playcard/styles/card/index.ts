import styled, { css } from 'styled-components';

export const Card = styled.div<{ cardColor: string }>`
  ${({ cardColor, theme }) => css`
    background: ${'light' + cardColor};
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.black};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 2px;
    padding: 5px;
    cursor: pointer;
    user-select: none;
    height: 40px;
    width: 10px;

    &:hover {
      background: ${theme.colors.lightBlue};
    }
  `}
`;
