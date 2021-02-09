import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AuthImage = () => {
    return (
        <View style={styles.container}>
        <Image
          style={styles.Logo}
          source={require('../assets/logoShareCook2.png')}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    Logo: {
      marginLeft: 125,
      maxHeight: 155,
      maxWidth: 140,
    },
  });
export default AuthImage;