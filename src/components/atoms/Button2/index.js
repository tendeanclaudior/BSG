import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconNext} from '../../../assets';

const Button2 = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <IconNext />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button2;

const styles = StyleSheet.create({
  container: {
    height: 61,
    width: 82,
    backgroundColor: '#D60000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
