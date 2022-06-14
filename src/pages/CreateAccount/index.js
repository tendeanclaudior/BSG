import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Button2, Gap, Headers, TextInput} from '../../components';

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Headers
        title={'Create Account'}
        onBack={() => navigation.navigate('LoginCreate')}
      />
      <Gap height={31} />
      <View style={styles.text}>
        <TextInput title={'Full Name'} placeholder={'Type Full your Name'} />
        <Gap height={7} />
        <TextInput title={'Email'} placeholder={'Type your Email'} />
        <Gap height={7} />
        <TextInput title={'Address'} placeholder={'Type Full your Address'} />
        <Gap height={7} />
        <TextInput title={'Password'} placeholder={'Type your Password'} />
        <Gap height={30} />
        <View style={styles.button}>
          <Button title={'Continue'} />
          <Gap width={13} />
          <Button2 onPress={() => navigation.navigate('CreateAccount2')} />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    flexDirection: 'row',
  },
});
