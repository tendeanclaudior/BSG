import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Gap, Headers, TextInput} from '../../components';

const CreateAccount2 = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Headers
          title={'CreateAccount'}
          onBack={() => navigation.navigate('CreateAccount')}
        />
        <Gap height={40} />
        <View style={styles.textinput}>
          <TextInput title={'NO KTP'} placeholder={'Type 16 your No KTP'} />
          <Gap height={7} />
          <TextInput
            title={'No Rekening'}
            placeholder={'Type 16 your No Rekening'}
          />
          <Gap height={7} />
          <TextInput
            title={'No. Tlpn'}
            placeholder={'Type your No Telephone'}
          />
          <Gap height={15} />
          <View>
            <TouchableOpacity>
              <View style={styles.addKTP}>
                <Text style={styles.textktp}>Upload your KTP</Text>
              </View>
            </TouchableOpacity>
            <Gap height={15} />
            <TouchableOpacity>
              <View style={styles.addKTP}>
                <Text style={styles.textktp}>
                  Upload Selfie your Face & KTP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={17} />
        <View style={styles.button}>
          <Button title={'Continue'} />
        </View>
        <Gap height={17} />
      </View>
    </ScrollView>
  );
};

export default CreateAccount2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  textinput: {
    marginHorizontal: 24,
  },
  button: {
    alignItems: 'center',
  },
  addKTP: {
    height: 150,
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textktp: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
});
