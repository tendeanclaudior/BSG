import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress, color = '#D60000', textcolor = 'black'}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textcolor)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    height: 61,
    width: 298,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }),
  text: textcolor => ({
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: textcolor,
  }),
});
