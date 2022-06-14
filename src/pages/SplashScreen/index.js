import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Icons} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Advertising');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Icons />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#AD1616',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
