import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export default function Welcome() {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Text>Welcome to the newsletter!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
