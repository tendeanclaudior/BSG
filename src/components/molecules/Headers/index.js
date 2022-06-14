import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, IconHeaders, IconOut} from '../../../assets';
import {Gap} from '../../atoms';

const Headers = ({title, onBack, iconBSG, iconOUT}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <View style={styles.icon}>
          {iconBSG && (
            <TouchableOpacity onPress={iconBSG}>
              <View>
                <IconHeaders />
              </View>
            </TouchableOpacity>
          )}
          {iconOUT && (
            <TouchableOpacity onPress={iconOUT}>
              <View style={styles.bsg}>
                <IconOut />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Gap width={20} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D60000',
    paddingLeft: 20,
    paddingVertical: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  back: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bsg: {
    marginLeft: 261,
  },
});
