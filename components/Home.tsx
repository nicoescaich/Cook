import React, { Component } from 'react';
import { Container, Content, Header, Footer, FooterTab, Button, Text } from 'native-base';
import DisplayAnImage from '../components/Pictures';
import HomeForm from '../components/HomeForm';
import firestore from '@react-native-firebase/firestore';

export default class Home extends Component {
  ref = firestore().collection('liste');
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
            <Button full onPress={(e:any) => {
                   this.ref.add({

                   nom:'tarace'
            
                  })
                 }} >
                <Text>Copyright ShareCook 2021</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}