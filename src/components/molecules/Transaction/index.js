import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Transaction = ({title, title2, title3}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text2}>{title2}</Text>
      </View>
      <Text style={styles.text3}>{title3}</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  text3: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FF0000',
  },
});
