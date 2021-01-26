import React, { Component } from 'react';
import { Container, Content, Header, Footer, FooterTab, Button, Text } from 'native-base';
import DisplayAnImage from '../components/Pictures';
import HomeForm from '../components/HomeForm';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <Header>
            <DisplayAnImage />
          </Header>
          <Content />
          <HomeForm />
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Copyright ShareCook 2021</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}