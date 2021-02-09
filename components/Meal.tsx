import React, { Component } from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { Container, Header, Content, Footer, FooterTab, Text } from 'native-base';
import MealImage from './MealImage';
import MealButton from './MealButton';
import MealAdd from './MealAdd';
const meal = (props:any) => {

    return (

        <Container>
          <Header>
        <MealImage />
          </Header>
          <Content />
          <MealButton />
          <Footer>
            <FooterTab>
            </FooterTab>
          </Footer>
        </Container>
    
      );
}
export default meal;