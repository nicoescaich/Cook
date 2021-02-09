import React from 'react';
import { TextInput } from 'react-native';

const MealAdd = () => {
  const [value, onChangeText] = React.useState('Ajouter une recette');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default MealAdd;
