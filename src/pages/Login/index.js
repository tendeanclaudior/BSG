import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icons} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.icon}>
        <Icons />
      </View>
      <Gap height={80} />
      <View style={styles.loginWrapper}>
        <Text style={styles.text}>Welcome!!!</Text>
        <Gap height={40} />
        <TextInput title={'Email'} placeholder={'Type your Email'} />
        <Gap height={15} />
        <TextInput title={'Password'} placeholder={'Type your Password'} />
        <Gap height={50} />
        <View style={styles.button}>
          <Button title={'Login'} onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#020202',
  },
  loginWrapper: {
    marginLeft: 24,
    marginRight: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
