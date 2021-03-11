import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const MealButton = (props: any) => {
    return (
        <View style={styles.screen}>
            <Button
                style={styles.buttonAdd}
                onPress={() => { props.nav.navigation.navigate("MealAdd") }}>
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
    title: {
        marginVertical: 8,
        fontWeight: 'bold',
        color: 'white',
    }
});
export default MealButton;