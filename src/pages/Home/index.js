import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Gap, Headers, Transaction} from '../../components';
import {
  IconEyes,
  InfoRekening,
  Informasi,
  MutasiRekening,
  Pembayaran,
  Pembelian,
  Pengaturan,
  TopUp,
  Transfer,
} from '../../assets';

const Home = ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(true);
  return (
    <ScrollView>
      <View style={styles.page}>
        <Headers
          iconBSG={() => navigation.navigate('Home')}
          iconOUT={() => navigation.replace('Login')}
        />
        <View style={styles.saldo}>
          <View style={styles.text}>
            <Text style={styles.textSaldo}>Saldo Rekening anda</Text>
          </View>
          <SafeAreaView>
            <View style={styles.rp}>
              {shouldShow ? (
                <Text style={styles.textSaldo}>Rp. 200.000.000</Text>
              ) : null}
              <Gap width={7} />
              <TouchableOpacity onPress={() => setshouldShow(!shouldShow)}>
                <IconEyes />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <View style={styles.name}>
            <Text style={styles.textSaldo}>Claudio R Tendean</Text>
          </View>
        </View>
        <Gap height={21} />
        <View style={styles.beranda}>
          <View style={styles.bold}>
            <Text style={styles.textBold}>Beranda</Text>
          </View>
          <View>
            <View style={styles.icon}>
              <TouchableOpacity>
                <InfoRekening />
              </TouchableOpacity>
              <Gap width={71} />
              <TouchableOpacity>
                <MutasiRekening />
              </TouchableOpacity>
              <Gap width={71} />
              <TouchableOpacity>
                <Transfer />
              </TouchableOpacity>
            </View>
            <Gap height={11} />
            <View style={styles.icon}>
              <TouchableOpacity>
                <Pembelian />
              </TouchableOpacity>
              <Gap width={78} />
              <TouchableOpacity>
                <Pembayaran />
              </TouchableOpacity>
              <Gap width={78} />
              <TouchableOpacity>
                <TopUp />
              </TouchableOpacity>
            </View>
            <Gap height={11} />
            <View style={styles.icon}>
              <TouchableOpacity>
                <Informasi />
              </TouchableOpacity>
              <Gap width={78} />
              <TouchableOpacity>
                <Pengaturan />
              </TouchableOpacity>
            </View>
            <Gap height={9} />
          </View>
        </View>
        <Gap height={13} />
        <View style={styles.transaction}>
          <View style={styles.bold}>
            <Text style={styles.textBold}>Last Transaction</Text>
          </View>
          <View style={styles.lastTransaction}>
            <Transaction
              title={'26 Maret 2022'}
              title2={'Top Up'}
              title3={'+Rp 300.000'}
            />
            <Transaction
              title={'26 Maret 2022'}
              title2={'Transfer'}
              title3={'-Rp 300.000'}
            />
            <Transaction
              title={'26 Maret 2022'}
              title2={'Transfer'}
              title3={'-Rp 250.000'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  saldo: {
    height: 150,
    backgroundColor: '#D60000',
    borderRadius: 8,
    marginHorizontal: 25,
  },
  text: {
    marginLeft: 4,
    marginTop: 10,
  },
  textSaldo: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  rp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 9,
  },
  name: {
    marginLeft: 20,
    marginTop: 35,
  },
  beranda: {
    backgroundColor: '#FFFFFF',
  },
  bold: {
    marginLeft: 25,
    marginTop: 5,
  },
  textBold: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#020202',
  },
  icon: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 35,
  },
  transaction: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  lastTransaction: {
    marginHorizontal: 25,
  },
});
