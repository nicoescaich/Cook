import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet  } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
        title="Prénom"
      />
      {errors.firstName && <Text>Le prénom est obligatoire.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
        defaultValue=""
        title="Nom de famille"
      />
      {errors.lastName && <Text>Le nom est obligatoire.</Text>}

      <Button 
        style={styles.button}
        title="Créer son compte" 
        onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
    
    input: {
      flex: 2,
        backgroundColor: "lightgrey",
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 8,

    },
    button: {
      marginTop: 50,
    },
  });