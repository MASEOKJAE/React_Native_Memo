import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [person, setPerson] = useState({ name: 'Mike', age: 30});

  const clickHandler = () => {
    setName('Jack');
    setPerson({ name: 'Jackson', age: 35})
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.boldText}>Hello, {name}!</Text>
          <Text style={styles.boldText}>My name is {person.name} & age is {person.age} </Text>
      </View>
      <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler}/>
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
  }
});