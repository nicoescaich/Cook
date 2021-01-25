import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  Logo: {
    width: 100,
    height: 100,
  },
});
const DisplayAnImage = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.Logo}
          source={require('../assets/logoShareCook.png')}
        />
      </View>
    );
  }
  
  export default DisplayAnImage;