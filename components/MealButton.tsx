import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';


const MealButton = (props : any) => {
    return (
        <View style={styles.screen}>
            <Button
                onPress={() =>{props.navigation.navigate("MealAdd")}}
                style={styles.buttonAdd}>
                <Text style={styles.title}>AJOUTER</Text>
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 550,
    },
    buttonAdd: {
        width: 86,
        height: 86,
        marginLeft: 270,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#2196F3',
    },
    title:{
        marginVertical: 8,
        fontWeight: 'bold',
        color: 'white',
    }
});
export default MealButton;