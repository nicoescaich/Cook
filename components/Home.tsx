import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import DisplayAnImage from '../components/Pictures';
export default class Home extends Component {
  render() {
    return (
      <Container>
          <DisplayAnImage />
        <Content />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}