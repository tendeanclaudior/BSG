import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {LogoRP, VectorX} from '../../assets';
import {Gap} from '../../components';

const Advertising = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginCreate');
    }, 20000);
  }, []);
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigation.replace('LoginCreate')}>
        <View style={styles.vector}>
          <VectorX />
        </View>
      </TouchableOpacity>
      <Gap height={151} />
      <View style={styles.logo}>
        <LogoRP />
      </View>
      <Gap height={86} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Mempermudah Melakukan</Text>
        <Text style={styles.text}>Transaksi</Text>
        <Text style={styles.text2}>Kapan saja, di mana saja</Text>
      </View>
    </View>
  );
};

export default Advertising;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#AD1616',
  },
  vector: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 15,
    marginTop: 15,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  text2: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
