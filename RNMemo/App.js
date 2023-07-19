import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [temp, setTemp] = useState('');
  const [person, setPerson] = useState({ name: 'Mike', age: 30 });

  const clickHandler = () => {
    setPerson({ name: "Jackson", age: temp });
    setTemp('');
  }

  return (
    <View style={styles.container}>
      {/* Using State & Button Part*/}
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, {name}!</Text>
        <Text style={styles.boldText}>My name is {person.name} & age is {person.age} </Text>
      </View>

      {/* Using Text inputs part*/}
      <View style={styles.textContainer}>
        <Text>Enter name:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. David Backham'
          onChangeText={(val) => setName(val)}
        />

        <Text>Enter age:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. 99'
          value={temp}
          onChangeText={(val) => setTemp(val)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'skyblue',
    borderRadius: 50
  },
  buttonContainer: {
    marginTop: 20
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
