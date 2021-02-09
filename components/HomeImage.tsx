import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HomeImage = () => {
    return (
      <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../assets/logoShareCook.png')}
      />
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      justifyContent:"center",
      backgroundColor: "#61dafb",
      flex: 1,
      minHeight: 300,
      
    },
    Logo: {
      marginLeft: 65,
      width: 290,
    },
  });
  
  export default HomeImage;