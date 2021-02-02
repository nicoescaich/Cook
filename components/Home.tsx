import React, { Component } from 'react';
import DisplayAnImage from '../components/Pictures';
import HomeForm from '../components/HomeForm';
import {Button} from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import {Container,Header,Content,Footer,FooterTab} from 'native-base';


const home = (props : any)=> {
  const config : any ={};

  const ref = firestore().collection('liste');
        
       async function testDB(){ await ref.add({

    nom:'tarace'

   })
   .then(function (docRef) {

    console.log("Document written with ID: ", docRef.id);

  })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });}
    return (
      
        <Container>
          <Header>
            <DisplayAnImage />
          </Header>
          <Content/>
          <HomeForm/>
          <Footer>
            <FooterTab>
              <Button title='Copyright ShareCook 2021' onPress={(e:any) => (testDB())}/>
                
             
            </FooterTab>
          </Footer>
        </Container>
      
    );
  }
  export default home;