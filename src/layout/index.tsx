import React, { FC } from 'react';

import { Card, Content, Title } from './styles';

const Layout: FC = ({ children }) => {
  return (
    <Content>
      <Title>Crew</Title>
      <Card>{children}</Card>
    </Content>
  );
};

export default Layout;
