import React, { useEffect, useState } from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Right, Left, Card } from 'native-base';
import MealImage from './MealImage';
import MealAddButton from './MealAddButton';
import { DataTable } from 'react-native-paper';
import FormListMeal from './MealAdd';
import { ScrollView } from 'react-native-gesture-handler';

const meal = (props: any) => {

  const ref = firestore().collection('liste');
  const [variab, setVar] = useState<any[]>([]);
  const getListMeal = () => {
    ref
      .get()
      .then((data) => {
        setVar(data.docs)

      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  useEffect(() => {
    getListMeal()
  }, [variab])

  return (
    <>
    <Container>
      <ScrollView>
        <MealImage />
        <DataTable style={{ borderTopColor: "grey", backgroundColor: "white" }}>
          <DataTable.Header style={{ borderTopColor: "grey", backgroundColor: '#0FA8FE' }}>
            <DataTable.Title style={{ flex: 1.5 }}><Text style={{ color: 'white', fontWeight: "bold", fontSize: 18, }}>Titre</Text></DataTable.Title>


          </DataTable.Header>

          {variab.map((row, index: any) => (
            <Card key={index} style={{ backgroundColor: '#E3EAE8', marginEnd: 10 }}>
              <DataTable.Row key={index}
              onPress={() => { props.navigation.navigate('DescriptionMeal'); }}
              >

                <DataTable.Cell style={{ flex: 1.5 }}><Text style={{ color: 'grey', fontSize: 17, }}>{row._data.titre}</Text></DataTable.Cell>

              </DataTable.Row>
            </Card>
          ))}
        </DataTable>
      </ScrollView>
      <MealAddButton nav={props} />
    </Container>
</>
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#cde1f9",
    borderWidth: 2,
    borderColor: "#20232a",
  },
});
export default meal;