import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icons} from '../../assets';
import {Button, Gap} from '../../components';

const LoginCreate = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <Icons />
      </View>
      <Gap height={20} />
      <View style={styles.button}>
        <Button title={'Login'} onPress={() => navigation.replace('Login')} />
        <Gap height={40} />
        <Button
          title={'Create Account'}
          color={'#000000'}
          textcolor={'#FFFFFF'}
          onPress={() => navigation.replace('CreateAccount')}
        />
      </View>
    </View>
  );
};

export default LoginCreate;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  button: {
    alignItems: 'center',
  },
});
