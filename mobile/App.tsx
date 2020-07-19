import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import api from './src/services/api';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [message, setMessage] = useState('');
  const [interval, setInterval] = useState(10);

  const handleTurnOnButton = async () => {
    await api.get('turn-on/2');
  };

  const handleTurnOffButton = async () => {
    await api.get('turn-off/2');
  };

  const handleMessageSubmit = async () => {
    await api.post('lcd', {
      message,
    });
  };

  const handleIntervalSubmit = async () => {
    await api.get('blink', {
      params: {
        interval,
      },
    });
  };

  return (
    <>
      <StatusBar backgroundColor="#262626" />
      <View style={styles.background}>
        <Text style={styles.title}>Simple IoT</Text>

        <Text style={styles.secondTitle}>Led Control</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={{...styles.button, width: '49%'}}
            onPress={() => handleTurnOnButton()}>
            <Text style={styles.textButton}>Turn On</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, width: '49%'}}
            onPress={() => handleTurnOffButton()}>
            <Text style={styles.textButton}>Turn Off</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.secondTitle}>Write in LCD display</Text>
        <TextInput
          maxLength={16}
          placeholder="Max 16 characters"
          placeholderTextColor="#858585"
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
          onSubmitEditing={() => handleMessageSubmit()}
        />
        <TouchableOpacity
          style={{...styles.button, width: '100%', marginTop: 8}}>
          <Text style={styles.textButton}>Send</Text>
        </TouchableOpacity>

        <Text style={styles.secondTitle}>Blink Led</Text>

        <View style={styles.row}>
          <TextInput
            maxLength={16}
            placeholder="Interval in Seconds"
            placeholderTextColor="#858585"
            style={{...styles.input, width: '70%'}}
            keyboardType="decimal-pad"
            onChangeText={(text) => setInterval(Number(text))}
            onSubmitEditing={() => handleIntervalSubmit()}
          />
          <TouchableOpacity
            style={{...styles.button, width: '28%', marginTop: 0}}
            onPress={() => {
              handleIntervalSubmit();
            }}>
            <Text style={styles.textButton}>Blink</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#EEE',
    textAlign: 'center',
    paddingTop: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondTitle: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 16,
    color: '#D8D8D8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#3C3C3C',
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    color: '#D8D8D8',
  },
  button: {
    backgroundColor: '#25A1E8',
    height: 50,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
