/**
 * @author Dmitriy Bizyaev
 */

'use strict';

import React from 'react';
import {
  Content,
  Header,
  HeaderRegion,
  HeaderTitle,
  Container,
  Row,
  Column,
  Card,
  CardContent,
} from 'reactackle';

export const RootIndexRoute = () => (
  <Content>
    <Header>
      <HeaderRegion alignY="center">
        <HeaderTitle>
          Home
        </HeaderTitle>
      </HeaderRegion>
    </Header>
    <Container>
      <Row>
        <Column>
          <Card>
            <CardContent>
                TODO: Write welcome page
            </CardContent>
          </Card>
        </Column>
      </Row>
    </Container>
  </Content>
);

RootIndexRoute.displayName = 'RootIndexRoute';
