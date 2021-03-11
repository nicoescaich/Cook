import React, { Component } from 'react';
import HomeImage from './HomeImage';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { Container, Header, Content, Footer, FooterTab } from 'native-base';

const home = (props: any) => {

  return (

    <Container>
        <HomeImage />
      <Content />
    </Container>

  );
}
export default home;