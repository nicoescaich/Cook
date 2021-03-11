import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Title } from "native-base";
import firestore from '@react-native-firebase/firestore';

interface List {

  titre: string,
  ingredients: string
}

export default function FormListMeal(props: any) {
  const [newList, setNewList] = useState<List>({

    titre: '',
    ingredients: ''

  });
  /*useEffect(() => {


    editFormMeal();


  }, [])*/
  const [meal, setMeal] = useState('');
  const ref = firestore().collection('liste');
  const { control, errors } = useForm();


  /*async function editFormMeal() {
    const id = props.route.params.id
    console.log(id, "id")
    if (id != "") {
      await ref.doc(props.route.params.id).get()
        .then(function (doc) {
          if (doc.exists) {
            var list = doc.data();

            if (list) {
              console.log("list", list.demandeur)
              setNewList({

                titre: list.titre,
                ingredients: list.ingredients,
              })
              console.log(newList)
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
    else { return null }
  }*/
  async function addMeal() {
    await ref.add({

      titre: newList.titre,
      ingredients: newList.ingredients,

    }).then(function (docRef) {

      console.log("Document written with ID: ", docRef.id);

    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    props.navigation.goBack()
  }

  return (
    <>
      <View>
        <Title style={styles.title}>Ajouter une nouvelle recette :</Title>
        <Text>Titre de la recette</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value: string) => setNewList({ ...newList, titre: value })}
          name="Titre"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.titre && <Text>This is required.</Text>}

        <Text>Ingrédients de la recette</Text>

        <TextInput
          style={styles.input}
          onChangeText={(value: string) => setNewList({ ...newList, ingredients: value })}
          name="Ingrédients"
          rules={{ required: true }}
          defaultValue=""
        />

        <Button style={styles.buttonCreate} title="Créer" onPress={() => { addMeal(); }} />
        <Button style={styles.buttonBack} title="Annuler" onPress={() => { props.navigation.goBack() }} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#cde1f9",
    borderWidth: 2,
    borderColor: "#20232a",
    margin: 5,
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  buttonCreate: {
    margin: 10,
  },
  buttonBack: {
    margin: 10,
  }
});